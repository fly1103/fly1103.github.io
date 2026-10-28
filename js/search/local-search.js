/* Local article search. Initialize at DOM readiness, independently of images/CDNs. */
(() => {
  'use strict'
  const words = value => [...new Set(value.trim().toLowerCase().split(/\s+/).filter(Boolean))]
  const ranges = (text, terms) => {
    const lower = text.toLowerCase(), hits = []
    for (const term of terms) {
      let start = 0, at
      if (!term) continue
      while ((at = lower.indexOf(term, start)) !== -1) {
        hits.push([at, at + term.length]); start = at + term.length
      }
    }
    const merged = []
    for (const hit of hits.sort((a, b) => a[0] - b[0] || b[1] - a[1])) {
      const last = merged[merged.length - 1]
      if (last && hit[0] <= last[1]) last[1] = Math.max(last[1], hit[1])
      else merged.push(hit)
    }
    return merged
  }
  const find = (entries, query) => {
    const terms = words(query)
    if (!terms.length) return []
    return entries.map((entry, index) => {
      const title = entry.title.toLowerCase(), content = entry.content.toLowerCase()
      const matched = terms.filter(term => title.includes(term) || content.includes(term)).length
      const score = terms.reduce((sum, term) => sum + (title.includes(term) ? 10 : 0), 0) + (title.includes(query.trim().toLowerCase()) ? 20 : 0)
      const first = ranges(entry.content, terms)[0]
      const start = Math.max(0, (first ? first[0] : 0) - 28)
      const end = Math.min(entry.content.length, start + 150)
      return { ...entry, matched, score, index, snippet: (start ? '…' : '') + entry.content.slice(start, end) + (end < entry.content.length ? '…' : '') }
    }).filter(entry => entry.matched === terms.length)
      .sort((a, b) => b.score - a.score || a.index - b.index)
  }
  // Expose only pure helpers in the test environment.
  if (typeof module !== 'undefined' && module.exports) module.exports = { words, ranges, find }
  if (typeof document === 'undefined') return

  const init = () => {
    const panel = document.getElementById('fc-search-panel')
    if (!panel || panel.dataset.ready) return
    panel.dataset.ready = 'true'
    const input = document.getElementById('fc-search-query')
    const results = document.getElementById('fc-search-results')
    const status = document.getElementById('fc-search-status')
    const shade = document.getElementById('fc-search-shade')
    const clear = document.getElementById('fc-search-clear')
    const retry = document.getElementById('fc-search-retry')
    const config = GLOBAL_CONFIG.localSearch
    let entries = null, pending = null, failed = false, trigger = null, overflow = '', composing = false

    const highlight = (target, text, terms) => {
      let start = 0
      for (const [from, to] of ranges(text, terms)) {
        target.append(document.createTextNode(text.slice(start, from)))
        const mark = document.createElement('mark')
        mark.textContent = text.slice(from, to)
        target.append(mark); start = to
      }
      target.append(document.createTextNode(text.slice(start)))
    }
    const render = () => {
      const query = input.value.trim()
      clear.hidden = !input.value
      results.replaceChildren()
      retry.hidden = !failed
      if (failed) { status.textContent = '文章索引暂时没有加载成功，请重试。'; return }
      if (!entries) { status.textContent = '正在加载文章索引，你可以先输入关键词…'; return }
      if (!query) { status.textContent = `已收录 ${entries.length} 篇文章。输入标题，或记得的一句话。`; return }
      const found = find(entries, query)
      if (!found.length) { status.textContent = `没有找到“${query}”，试试更短的关键词。`; return }
      status.textContent = `找到 ${found.length} 篇文章${found.length > 30 ? '，先展示最相关的 30 篇' : ''}`
      const list = document.createElement('ol'), terms = words(query)
      for (const entry of found.slice(0, 30)) {
        const item = document.createElement('li'), link = document.createElement('a')
        const title = document.createElement('h3'), excerpt = document.createElement('p')
        const url = new URL(entry.url)
        url.searchParams.set('highlight', query)
        link.href = url.href
        highlight(title, entry.title, terms); highlight(excerpt, entry.snippet, terms)
        link.append(title, excerpt); item.append(link); list.append(item)
      }
      results.append(list)
      if (window.pjax) window.pjax.refresh(results)
    }
    const plain = html => {
      const template = document.createElement('template')
      template.innerHTML = html || ''
      template.content.querySelectorAll('script,style').forEach(node => node.remove())
      return template.content.textContent.replace(/\s+/g, ' ').trim()
    }
    const load = () => {
      if (entries) return Promise.resolve(entries)
      if (pending) return pending
      failed = false; render()
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 12000)
      pending = (async () => {
        try {
          const response = await fetch(config.path, { signal: controller.signal })
          if (!response.ok) throw new Error('Search index HTTP ' + response.status)
          const text = await response.text()
          let data
          if (/\.json(?:[?#]|$)/i.test(config.path)) data = JSON.parse(text)
          else {
            const xml = new DOMParser().parseFromString(text, 'text/xml')
            if (xml.querySelector('parsererror') || !xml.querySelector('search')) throw new Error('Invalid search index')
            data = [...xml.querySelectorAll('entry')].map(node => ({
              title: node.querySelector('title')?.textContent,
              content: node.querySelector('content')?.textContent,
              url: node.querySelector('url')?.textContent
            }))
          }
          if (!Array.isArray(data)) throw new Error('Invalid search entries')
          entries = data.flatMap(entry => {
            if (!entry.title || !entry.url) return []
            try {
              const url = new URL(entry.url, location.origin)
              if (url.origin !== location.origin || !/^https?:$/.test(url.protocol)) return []
              return [{ title: plain(entry.title), content: plain(entry.content), url: url.href }]
            } catch { return [] }
          })
          return entries
        } catch (error) {
          failed = true
          console.warn('Local search index could not load:', error.message)
        } finally {
          clearTimeout(timeout); pending = null; render()
        }
      })()
      return pending
    }
    const height = () => panel.style.setProperty('--fc-search-height', (window.visualViewport?.height || window.innerHeight) + 'px')
    const close = (restoreFocus = true) => {
      if (panel.hidden) return
      panel.hidden = true; shade.hidden = true
      document.body.style.overflow = overflow
      trigger?.setAttribute('aria-expanded', 'false')
      if (restoreFocus && trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
    const open = button => {
      if (!panel.hidden) return
      trigger = button; overflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      panel.hidden = false; shade.hidden = false
      button.setAttribute('aria-expanded', 'true')
      height(); render(); input.focus({ preventScroll: true }); load()
    }
    const decorate = () => document.querySelectorAll('#search-button > .search').forEach(button => {
      button.setAttribute('aria-label', '搜索文章')
      button.setAttribute('aria-haspopup', 'dialog')
      button.setAttribute('aria-controls', panel.id)
      button.setAttribute('aria-expanded', 'false')
    })
    const highlightArticle = () => {
      const article = document.getElementById('article-container')
      const terms = words((new URL(location.href).searchParams.get('highlight') || '').slice(0, 100))
      if (!article || !terms.length) return
      const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT)
      const nodes = []
      while (walker.nextNode()) {
        const node = walker.currentNode
        if (!node.parentElement.closest('script,style,textarea,button,select,mark,.mermaid') && ranges(node.nodeValue, terms).length) nodes.push(node)
      }
      for (const node of nodes) {
        const fragment = document.createDocumentFragment()
        highlight(fragment, node.nodeValue, terms)
        fragment.querySelectorAll('mark').forEach(mark => { mark.className = 'search-keyword' })
        node.replaceWith(fragment)
      }
    }
    // Delegation also handles a navbar replaced during PJAX navigation.
    document.addEventListener('click', event => {
      const button = event.target.closest('#search-button > .search')
      if (button) { event.preventDefault(); open(button) }
    })
    document.getElementById('fc-search-close').addEventListener('click', () => close())
    shade.addEventListener('click', () => close())
    results.addEventListener('click', event => { if (event.target.closest('a')) close(false) })
    retry.addEventListener('click', () => { load(); input.focus() })
    clear.addEventListener('click', () => { input.value = ''; render(); input.focus() })
    input.addEventListener('compositionstart', () => { composing = true })
    input.addEventListener('compositionend', () => { composing = false; render() })
    input.addEventListener('input', () => { if (!composing) render() })
    document.getElementById('fc-search-form').addEventListener('submit', event => { event.preventDefault(); render() })
    document.addEventListener('keydown', event => {
      if (panel.hidden) return
      if (event.key === 'Escape') { event.preventDefault(); close() }
      if (event.key === 'Tab') {
        const focusable = [...panel.querySelectorAll('button,input,a[href]')].filter(node => !node.hidden && node.getClientRects().length)
        const first = focusable[0], last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    })
    window.addEventListener('resize', height)
    window.visualViewport?.addEventListener('resize', height)
    window.addEventListener('pagehide', () => close(false))
    window.addEventListener('pageshow', event => {
      if (event.persisted) close(false)
      else if (!panel.hidden) document.body.style.overflow = 'hidden'
    })
    document.addEventListener('pjax:send', () => close(false))
    document.addEventListener('pjax:complete', () => { decorate(); highlightArticle() })
    decorate(); highlightArticle()
    if (config.preload) load()
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true })
  else init()
})()
