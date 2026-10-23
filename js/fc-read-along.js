(function () {
  window.fcInitReadAlong = function ({ audio, getTrack, next, closeDrawer }) {
    const trigger = document.getElementById('fcReadAlongTrigger')
    const reader = document.getElementById('fcReading')
    const frame = document.getElementById('fcReadFrame')
    const play = document.getElementById('fcMiniPlay')
    const title = document.getElementById('fcMiniTitle')
    const artist = document.getElementById('fcMiniArtist')
    const cover = document.getElementById('fcMiniCover')
    const fill = document.getElementById('fcMiniFill')
    const progress = document.getElementById('fcMiniProgress')
    const status = document.getElementById('fcMiniStatus')
    const loading = document.getElementById('fcReadLoading')
    let initialized = false
    let lastUrl = '/'
    let readerPosition = 0
    document.body.append(trigger, reader)

    function sync() {
      const song = getTrack()
      title.textContent = song.name
      artist.textContent = song.artist
      if (cover.getAttribute('src') !== song.cover) cover.src = song.cover
      cover.alt = song.name + '封面'
      const paused = audio.paused
      play.innerHTML = paused ? '<i class="fas fa-play" aria-hidden="true"></i>' : '<i class="fas fa-pause" aria-hidden="true"></i>'
      play.setAttribute('aria-label', paused ? '播放' : '暂停')
      play.title = paused ? '播放' : '暂停'
      status.textContent = paused ? '已暂停' : '边听边读'
      const fraction = Number.isFinite(audio.duration) && audio.duration > 0 ? Math.min(1, audio.currentTime / audio.duration) : 0
      fill.style.transform = 'scaleX(' + fraction + ')'
      progress.setAttribute('aria-valuenow', Math.round(fraction * 100))
    }
    function start() {
      const result = audio.play()
      if (result) result.catch(() => { sync(); status.textContent = '点播放继续' })
    }
    function music() {
      try {
        const doc = frame.contentDocument
        readerPosition = frame.contentWindow.scrollY
        if (doc?.querySelector('#sidebar-menus.open')) doc.getElementById('menu-mask').click()
      } catch (_) {}
      reader.hidden = true
      document.body.classList.remove('fc-reading')
      trigger.setAttribute('aria-expanded', 'false')
      trigger.focus({ preventScroll: true })
    }
    trigger.addEventListener('click', () => {
      closeDrawer()
      reader.hidden = false
      document.body.classList.add('fc-reading')
      trigger.setAttribute('aria-expanded', 'true')
      if (!initialized) {
        loading.hidden = false
        frame.src = '/'
        initialized = true
      } else {
        requestAnimationFrame(() => {
          try { frame.contentWindow.scrollTo(0, readerPosition) } catch (_) {}
        })
      }
      if (audio.paused) start()
      sync()
      play.focus({ preventScroll: true })
    })
    play.addEventListener('click', () => { audio.paused ? start() : audio.pause() })
    document.getElementById('fcMiniNext').addEventListener('click', () => { next(); sync() })
    for (const id of ['fcMiniArt', 'fcMiniMeta', 'fcMiniExpand']) document.getElementById(id).addEventListener('click', music)
    document.getElementById('fcMiniClose').addEventListener('click', () => {
      audio.pause()
      try {
        const current = new URL(frame.contentWindow.location.href)
        if (current.origin === location.origin && !/^\/music\/?$/.test(current.pathname)) lastUrl = current.pathname + current.search + current.hash
      } catch (_) {}
      window.location.assign(lastUrl)
    })
    reader.addEventListener('keydown', event => { if (event.key === 'Escape') music() })
    frame.addEventListener('load', () => {
      loading.hidden = true
      try {
        const doc = frame.contentDocument
        const url = new URL(frame.contentWindow.location.href)
        if (url.origin !== window.location.origin) return
        if (/^\/music\/?$/.test(url.pathname)) { music(); return }
        lastUrl = url.pathname + url.search + url.hash
        readerPosition = 0
        const smallScreenStyle = doc.createElement('style')
        smallScreenStyle.textContent = '@media(max-width:768px){ #live2d-widget { display:none!important; } }'
        doc.head.append(smallScreenStyle)
        // Keep a second music room from starting another player inside the reader.
        doc.addEventListener('click', event => {
          const link = event.target.closest('a[href]')
          if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target !== '_self')) return
          const target = new URL(link.href, doc.baseURI)
          if (target.origin === window.location.origin && /^\/music\/?$/.test(target.pathname)) {
            event.preventDefault()
            music()
          }
        }, true)
        // An article's own media takes priority when the reader starts it.
        doc.addEventListener('play', () => { audio.pause() }, true)
      } catch (_) {
        status.textContent = '点击封面回音乐馆'
      }
    })
    for (const event of ['play', 'pause', 'loadstart', 'loadedmetadata', 'timeupdate', 'ended', 'error']) audio.addEventListener(event, sync)
    sync()
  }
})()
