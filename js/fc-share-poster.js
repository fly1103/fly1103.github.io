(function () {
  const POSTER_DESC_MAX_LEN = 50

  function isWeChat() {
    return /MicroMessenger/i.test(navigator.userAgent)
  }

  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
  }

  function escapeHTML(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
  }

  function escapeAttr(str) {
    return escapeHTML(str).replace(/`/g, '&#96;')
  }

  function cleanText(text) {
    return String(text || '')
      .replace(/\s+/g, ' ')
      .replace(/上一篇|下一篇|版权声明|文章作者|文章链接|转载|评论|分享|打赏/g, '')
      .trim()
  }

  function cutText(text, maxLen) {
    const value = cleanText(text)
    if (!value) return ''
    return value.length > maxLen ? value.slice(0, maxLen) + '...' : value
  }

  function getMeta(name) {
    const el =
      document.querySelector(`meta[name="${name}"]`) ||
      document.querySelector(`meta[property="${name}"]`)
    return el ? el.getAttribute('content') || '' : ''
  }

  function getBackgroundImage(el) {
    if (!el) return ''
    const bg = window.getComputedStyle(el).backgroundImage
    const match = bg && bg.match(/url\(["']?(.*?)["']?\)/)
    return match ? match[1] : ''
  }

  function getArticleDesc() {
    // 1. 优先取 description
    const metaDesc =
      getMeta('description') ||
      getMeta('og:description') ||
      getMeta('twitter:description')

    if (metaDesc && metaDesc.trim()) {
      return cutText(metaDesc, POSTER_DESC_MAX_LEN)
    }

    const article = document.querySelector('#article-container')
    if (!article) {
      return '所谓活着，就是将日复一日的岁月告白吧。'
    }

    // 2. 优先取正文里的段落，避免把版权声明、按钮等内容取进去
    const paragraphs = Array.from(article.querySelectorAll('p'))
      .map(p => cleanText(p.innerText))
      .filter(Boolean)
      .filter(text => text.length > 4)
      .filter(text => !/文章作者|文章链接|版权声明|CC BY|Flyingcat/.test(text))

    if (paragraphs.length > 0) {
      return cutText(paragraphs.slice(0, 3).join(' '), POSTER_DESC_MAX_LEN)
    }

    // 3. 如果没有 p 标签，就从正文纯文本里取前 3 行，再截取前 50 字
    const lines = article.innerText
      .split('\n')
      .map(line => cleanText(line))
      .filter(Boolean)
      .filter(text => text.length > 4)
      .filter(text => !/文章作者|文章链接|版权声明|CC BY|Flyingcat/.test(text))

    if (lines.length > 0) {
      return cutText(lines.slice(0, 3).join(' '), POSTER_DESC_MAX_LEN)
    }

    return '所谓活着，就是将日复一日的岁月告白吧。'
  }

  function getPostInfo() {
    const title =
      document.querySelector('.post-title')?.innerText ||
      document.querySelector('#post-info .post-title')?.innerText ||
      document.querySelector('h1')?.innerText ||
      document.title.split('|')[0].trim() ||
      'Flyingcat'

    const desc = getArticleDesc()

    const cover =
      getMeta('og:image') ||
      getMeta('twitter:image') ||
      getBackgroundImage(document.querySelector('#page-header')) ||
      document.querySelector('#article-container img')?.src ||
      'https://img.flying-cat.cn/img/avatar.png'

    return {
      title: cleanText(title),
      desc,
      cover,
      url: window.location.href.split('#')[0],
      site: 'Flyingcat'
    }
  }

  function toast(text) {
    let el = document.querySelector('.fc-toast')

    if (!el) {
      el = document.createElement('div')
      el.className = 'fc-toast'
      document.body.appendChild(el)
    }

    el.innerText = text
    el.classList.add('show')

    setTimeout(() => {
      el.classList.remove('show')
    }, 1800)
  }

  function copyLink(url) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(url).then(() => {
        toast('链接已复制')
      })
      return
    }

    const textarea = document.createElement('textarea')
    textarea.value = url
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)

    toast('链接已复制')
  }

  function downloadDataURL(dataUrl, fileName) {
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = fileName || 'flyingcat-poster.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  function showPosterPreview(dataUrl) {
    const old = document.querySelector('#fc-poster-preview-mask')
    if (old) old.remove()

    const mask = document.createElement('div')
    mask.id = 'fc-poster-preview-mask'

    mask.innerHTML = `
      <div style="
        position: fixed;
        inset: 0;
        z-index: 100000;
        background: rgba(0, 0, 0, 0.82);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 18px;
        box-sizing: border-box;
      ">
        <button class="fc-poster-preview-close" type="button" style="
          position: absolute;
          top: 18px;
          right: 18px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          color: #fff;
          font-size: 26px;
          line-height: 38px;
        ">×</button>

        <img src="${dataUrl}" alt="poster" style="
          max-width: 92vw;
          max-height: 78vh;
          border-radius: 18px;
          box-shadow: 0 18px 50px rgba(0,0,0,0.45);
        ">

        <div style="
          margin-top: 16px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.92);
          font-size: 14px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        ">
          长按海报保存到相册
        </div>
      </div>
    `

    document.body.appendChild(mask)

    mask.querySelector('.fc-poster-preview-close').addEventListener('click', function () {
      mask.remove()
    })

    mask.addEventListener('click', function (e) {
      if (e.target === mask || e.target.id === 'fc-poster-preview-mask') {
        mask.remove()
      }
    })
  }

  async function createPosterImage() {
    const card = document.querySelector('#fc-poster-card')
    if (!card) throw new Error('poster card not found')

    const canvas = await html2canvas(card, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: null,
      logging: false
    })

    return canvas.toDataURL('image/png')
  }

  async function savePoster(info) {
    toast('正在生成海报...')

    try {
      const dataUrl = await createPosterImage()

      // 微信内置浏览器 / iPhone 更适合长按保存
      if (isWeChat() || isIOS()) {
        showPosterPreview(dataUrl)
        toast('长按海报保存')
        return
      }

      const fileName =
        (info.title || 'Flyingcat')
          .replace(/[\\/:*?"<>|]/g, '')
          .slice(0, 30) + '-share.png'

      downloadDataURL(dataUrl, fileName)
      toast('海报已生成')
    } catch (err) {
      console.error(err)
      toast('生成失败，可能是封面图片跨域')
    }
  }

  function createModal(info) {
    let mask = document.querySelector('#fc-share-mask')
    if (mask) mask.remove()

    mask = document.createElement('div')
    mask.id = 'fc-share-mask'

    mask.innerHTML = `
      <div class="fc-share-dialog">
        <button class="fc-share-close" type="button">×</button>

        <div class="fc-poster-card" id="fc-poster-card">
          <div class="fc-poster-cover">
            <img
              src="${escapeAttr(info.cover)}"
              crossorigin="anonymous"
              alt="cover"
            >
          </div>

          <div class="fc-poster-content">
            <div class="fc-poster-site">Flyingcat</div>
            <h2>${escapeHTML(info.title)}</h2>
            <p>${escapeHTML(info.desc)}</p>

            <div class="fc-poster-footer">
              <div id="fc-qrcode"></div>
              <div class="fc-poster-tip">
                <strong>扫码阅读</strong>
                <span>flying-cat.cn</span>
              </div>
            </div>
          </div>
        </div>

        <div class="fc-share-actions">
          <button class="fc-save-poster" type="button">保存海报</button>
          <button class="fc-copy-link" type="button">复制链接</button>
        </div>
      </div>
    `

    document.body.appendChild(mask)

    const qr = document.querySelector('#fc-qrcode')
    qr.innerHTML = ''

    new QRCode(qr, {
      text: info.url,
      width: 86,
      height: 86,
      colorDark: '#1f3344',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    })

    mask.querySelector('.fc-share-close').addEventListener('click', () => {
      mask.remove()
    })

    mask.addEventListener('click', function (e) {
      if (e.target === mask) mask.remove()
    })

    mask.querySelector('.fc-copy-link').addEventListener('click', () => {
      copyLink(info.url)
    })

    mask.querySelector('.fc-save-poster').addEventListener('click', () => {
      savePoster(info)
    })
  }

  function addShareButtons() {
    const isPost =
      document.querySelector('#article-container') &&
      document.querySelector('.post-title, #post-info .post-title, h1')

    if (!isPost) return
    if (document.querySelector('.fc-share-tools')) return

    const info = getPostInfo()

    const tools = document.createElement('div')
    tools.className = 'fc-share-tools'

    tools.innerHTML = `
      <button class="fc-share-btn fc-copy-btn" type="button">
        <i class="fas fa-link"></i>
        <span>复制链接</span>
      </button>

      <button class="fc-share-btn fc-poster-btn" type="button">
        <i class="fas fa-image"></i>
        <span>生成海报</span>
      </button>
    `

    const target =
      document.querySelector('.post-copyright') ||
      document.querySelector('.tag_share') ||
      document.querySelector('#article-container')

    target.insertAdjacentElement('afterend', tools)

    tools.querySelector('.fc-copy-btn').addEventListener('click', () => {
      copyLink(info.url)
    })

    tools.querySelector('.fc-poster-btn').addEventListener('click', () => {
      createModal(info)
    })
  }

  document.addEventListener('DOMContentLoaded', addShareButtons)
})()