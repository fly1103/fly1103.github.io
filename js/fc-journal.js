(function () {
  function init() {
    // Attach before images finish loading, so a quick theme switch reaches the player.
    if (window.parent !== window) {
      try { window.parent.fcReadAlongThemeReady?.(document) } catch (_) {}
    }
    const themeButton = document.getElementById('fcMobileTheme')
    if (themeButton && !themeButton.dataset.bound) {
      themeButton.dataset.bound = 'true'
      themeButton.addEventListener('click', () => document.getElementById('darkmode')?.click())
    }
    document.querySelectorAll('.fc-desk-item,.fc-reading-trail a').forEach(link => {
      if (link.dataset.readerBound) return
      link.dataset.readerBound = 'true'
      link.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || window.parent === window) return
        const target = new URL(link.href)
        const song = target.searchParams.get('song')
        if (target.origin !== location.origin || !/^\/music\/?$/.test(target.pathname) || !song) return
        try {
          if (window.parent.fcReadAlongSelectSong?.(song)) event.preventDefault()
        } catch (_) {}
      })
    })
    const currentSection = document.body.classList.contains('fc-journal-post') ? '/archives/' : location.pathname
    document.querySelectorAll('.fc-mobile-links>a').forEach(link => {
      if (new URL(link.href).pathname === currentSection) link.setAttribute('aria-current', 'true')
      else link.removeAttribute('aria-current')
    })
    const article = document.querySelector('.fc-carnet #article-container')
    if (!article || article.querySelector('.fc-carnet-nav')) return
    const headings = Array.from(article.querySelectorAll('h2'))
    if (!headings.length) return
    const nav = document.createElement('nav')
    nav.className = 'fc-carnet-nav'
    nav.setAttribute('aria-label', '按月份翻阅手记')
    headings.forEach((heading, i) => {
      if (!heading.id) heading.id = 'carnet-month-' + i
      const link = document.createElement('a')
      link.href = '#' + encodeURIComponent(heading.id)
      link.textContent = heading.textContent
      nav.appendChild(link)
    })
    article.prepend(nav)
    article.querySelectorAll('h3').forEach((heading, i) => {
      if (!heading.id) heading.id = 'carnet-day-' + i
      const link = document.createElement('a')
      link.className = 'fc-note-permalink'
      link.href = '#' + encodeURIComponent(heading.id)
      link.textContent = '↗'
      link.setAttribute('aria-label', '分享 ' + heading.textContent + ' 的手记链接')
      heading.appendChild(link)
    })
  }
  document.addEventListener('DOMContentLoaded', init)
  document.addEventListener('pjax:complete', init)
})()
