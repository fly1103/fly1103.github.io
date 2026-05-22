(function () {
  function getMeta(name) {
    const el =
      document.querySelector(`meta[name="${name}"]`) ||
      document.querySelector(`meta[property="${name}"]`)
    return el ? el.getAttribute('content') : ''
  }

  function getBackgroundImage(el) {
    if (!el) return ''
    const bg = window.getComputedStyle(el).backgroundImage
    const match = bg && bg.match(/url\(["']?(.*?)["']?\)/)
    return match ? match[1] : ''
  }

  function getPostInfo() {
    const title =
      document.querySelector('.post-title')?.innerText ||
      document.querySelector('#post-info .post-title')?.innerText ||
      document.title.split('|')[0].trim() ||
      'Flyingcat'

    const desc =
      getMeta('description') ||
      document.querySelector('#article-container p')?.innerText?.slice(0, 90) ||
      '所谓活着，就是将日复一日的岁月告白吧。'

    const cover =
      getMeta('og:image') ||
      getBackgroundImage(document.querySelector('#page-header')) ||
      document.querySelector('#article-container img')?.src ||
      'https://img.flying-cat.cn/img/avatar.png'

    return {
      title,
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
            <img src="${info.cover}" crossorigin="anonymous" alt="cover">
          </div>

          <div class="fc-poster-content">
            <div class="fc-poster-site">Flyingcat</div>
            <h2>${info.title}</h2>
            <p>${info.desc}</p>

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

    mask.querySelector('.fc-save-poster').addEventListener('click', async () => {
      const card = document.querySelector('#fc-poster-card')

      toast('正在生成海报...')

      try {
        const canvas = await html2canvas(card, {
          scale: 2,
          useCORS: true,
          backgroundColor: null
        })

        const dataUrl = canvas.toDataURL('image/png')

        const a = document.createElement('a')
        a.href = dataUrl
        a.download = `${info.title.replace(/[\\/:*?"<>|]/g, '') || 'Flyingcat'}-share.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)

        toast('海报已生成')
      } catch (err) {
        console.error(err)
        toast('生成失败，可能是封面图片跨域')
      }
    })
  }

  function addShareButtons() {
    const isPost =
      document.querySelector('#article-container') &&
      document.querySelector('.post-title, #post-info .post-title')

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