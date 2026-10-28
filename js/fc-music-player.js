(function (root, factory) {
  const api = factory()
  if (typeof module === 'object' && module.exports) module.exports = api
  if (root) root.fcInitMusic = api.init
})(typeof window === 'undefined' ? null : window, function () {
  'use strict'
  const STORAGE_KEY = 'fc.music.v1'
  const MODES = ['order', 'loop', 'random']

  function formatTime(seconds) {
    const value = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0
    return String(Math.floor(value / 60)).padStart(2, '0') + ':' + String(value % 60).padStart(2, '0')
  }

  function lyricRequestUrl(url) {
    // Use a stable new cache key for public Qiniu lyrics with stale CORS headers.
    // Preserve signed/query URLs and same-origin preview copies verbatim.
    return /^https:\/\/img\.flying-cat\.cn\/[^?#]+$/i.test(url) ? url + '?fc_lyrics=1' : url
  }

  function parseLrc(text) {
    const lines = []
    String(text).replace(/^\uFEFF/, '').split(/\r?\n/).forEach(line => {
      const tags = Array.from(line.matchAll(/\[(\d{1,3}):(\d{1,2}(?:[.,]\d{1,3})?)\]/g))
      if (!tags.length) return
      const last = tags[tags.length - 1]
      const content = line.slice(last.index + last[0].length).trim()
      if (!content) return
      tags.forEach(tag => {
        const seconds = Number(tag[2].replace(',', '.'))
        if (seconds < 60) lines.push({ time: Number(tag[1]) * 60 + seconds, text: content })
      })
    })
    return lines.sort((a, b) => a.time - b.time)
  }

  function readSaved(storage) {
    try {
      const value = JSON.parse(storage.getItem(STORAGE_KEY))
      if (!value || value.version !== 1 || typeof value.name !== 'string' || typeof value.artist !== 'string') return null
      return { name: value.name, artist: value.artist,
        time: Number.isFinite(value.time) && value.time >= 0 && value.time <= 86400 ? value.time : 0,
        mode: MODES.includes(value.mode) ? value.mode : 'order' }
    } catch (_) { return null }
  }

  function initialSelection(list, requestedSong, saved) {
    const explicit = list.findIndex(item => item.name === requestedSong)
    const remembered = saved ? list.findIndex(item => item.name === saved.name && item.artist === saved.artist) : -1
    const index = explicit >= 0 ? explicit : remembered >= 0 ? remembered : 0
    return { index, time: index === remembered ? saved.time : 0, mode: saved ? saved.mode : 'order' }
  }

  function init(musicList, env = window) {
    if (!musicList.length) return
    const doc = env.document
    const byId = id => doc.getElementById(id)
    let saved = null
    try { saved = readSaved(env.localStorage) } catch (_) {}
    const initial = initialSelection(musicList, new URLSearchParams(env.location.search).get('song'), saved)
    let currentIndex = initial.index
    let playMode = initial.mode
    let state = 'idle'
    let message = ''
    let resumePosition = initial.time
    let pendingSeek = null
    let scrubbing = false
    let lyricLines = []
    let lyricState = 'loading'
    let lyricVersion = 0
    let lyricAbort = null
    let loadVersion = 0
    let lastSavedAt = 0
    const audio = new env.Audio()
    audio.preload = 'metadata'
    const title = byId('fcMusicTitle'), artist = byId('fcMusicArtist'), cover = byId('fcMusicCover')
    const lyric = byId('fcLyricCurrent'), nextLyric = byId('fcLyricNext'), status = byId('fcMusicStatus')
    const progress = byId('fcProgress'), seekPreview = byId('fcSeekPreview')
    const currentTime = byId('fcCurrentTime'), duration = byId('fcDuration')
    const playButton = byId('fcPlay'), modeButton = byId('fcMode'), modeText = byId('fcModeText')
    const drawer = byId('fcPlaylistDrawer'), list = byId('fcPlaylistList'), listButton = byId('fcListBtn')
    const modeNames = { order: '顺序播放', loop: '单曲循环', random: '随机播放' }

    function persist(force = false) {
      const now = Date.now()
      if (!force && now - lastSavedAt < 5000) return
      lastSavedAt = now
      const item = musicList[currentIndex]
      const position = pendingSeek !== null ? pendingSeek : audio.currentTime
      try { env.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, name: item.name, artist: item.artist,
        time: Number.isFinite(position) ? Math.max(0, position) : 0, mode: playMode })) } catch (_) {}
    }

    function renderState() {
      const text = message || ({ idle: resumePosition > 0 ? '上次听到 ' + formatTime(resumePosition) + ' · 点击继续' : '点播放，留一首歌的时间',
        loading: '正在加载歌曲…', buffering: '正在缓冲，稍等片刻', playing: '正在播放', paused: '已暂停 · 点击继续',
        error: '歌曲加载失败，点播放重试', blocked: '点一下播放按钮，继续听' })[state]
      if (status.textContent !== text) status.textContent = text
      status.dataset.state = state
      const label = audio.paused ? (resumePosition > 0 ? '继续播放' : state === 'error' ? '重试播放' : '播放') : '暂停'
      playButton.title = label
      playButton.setAttribute('aria-label', label + '《' + musicList[currentIndex].name + '》')
      playButton.innerHTML = audio.paused ? '<i class="fas fa-play" aria-hidden="true"></i>' : '<i class="fas fa-pause" aria-hidden="true"></i>'
      playButton.setAttribute('aria-busy', String(state === 'loading' || state === 'buffering'))
      modeText.textContent = modeNames[playMode]
      modeButton.title = modeNames[playMode] + '，点击切换'
      modeButton.setAttribute('aria-label', modeButton.title)
      const icon = { order: 'repeat', loop: 'rotate-right', random: 'shuffle' }[playMode]
      modeButton.innerHTML = '<i class="fas fa-' + icon + '" aria-hidden="true"></i>'
    }

    function setState(value, detail = '') { state = value; message = detail; renderState() }

    function updateLyric() {
      if (lyricState !== 'ready') {
        const text = { loading: '歌词加载中…', empty: '暂无同步歌词', missing: '暂无歌词', failed: '歌词暂时无法加载' }[lyricState]
        if (lyric.textContent !== text) lyric.textContent = text
        nextLyric.textContent = ''
        return
      }
      let index = -1
      const position = pendingSeek !== null ? pendingSeek : audio.currentTime
      for (let i = 0; i < lyricLines.length && lyricLines[i].time <= position; i++) index = i
      lyric.textContent = index < 0 ? '前奏' : lyricLines[index].text
      nextLyric.textContent = lyricLines[index + 1]?.text || ''
    }

    async function loadLyric(url) {
      const version = ++lyricVersion
      if (lyricAbort) lyricAbort.abort()
      lyricLines = []
      lyricState = url ? 'loading' : 'missing'
      updateLyric()
      if (!url) return
      const controller = new env.AbortController()
      lyricAbort = controller
      const timer = env.setTimeout(() => controller.abort(), 12000)
      try {
        const response = await env.fetch(lyricRequestUrl(url), { signal: controller.signal })
        if (version !== lyricVersion) return
        if (response.status === 404) { lyricState = 'missing'; updateLyric(); return }
        if (!response.ok) throw new Error('Lyric request failed')
        const text = await response.text()
        if (version !== lyricVersion) return
        lyricLines = parseLrc(text)
        lyricState = lyricLines.length ? 'ready' : 'empty'
      } catch (_) {
        if (version !== lyricVersion) return
        lyricState = 'failed'
      } finally {
        env.clearTimeout(timer)
        if (version === lyricVersion) { lyricAbort = null; updateLyric() }
      }
    }

    function validDuration() { return Number.isFinite(audio.duration) && audio.duration > 0 }

    function updateProgress() {
      if (scrubbing) return
      const position = pendingSeek !== null ? pendingSeek : audio.currentTime
      const ratio = validDuration() ? Math.max(0, Math.min(1, position / audio.duration)) : 0
      progress.value = Math.round(ratio * 1000)
      progress.style.setProperty('--fc-progress', (ratio * 100) + '%')
      progress.disabled = !validDuration()
      currentTime.textContent = formatTime(position)
      duration.textContent = validDuration() ? formatTime(audio.duration) : '--:--'
      progress.setAttribute('aria-valuetext', formatTime(position) + '，总时长 ' + (validDuration() ? formatTime(audio.duration) : '加载中'))
    }

    function applyPendingSeek() {
      if (pendingSeek === null || !validDuration()) return
      const position = pendingSeek >= Math.max(0, audio.duration - 1) ? 0 : pendingSeek
      try { audio.currentTime = position; pendingSeek = null; resumePosition = position } catch (_) {}
      updateProgress()
      updateLyric()
      renderState()
    }

    async function requestPlay() {
      if (audio.error) loadTrack(currentIndex, false, audio.currentTime || resumePosition)
      const version = loadVersion
      setState(audio.readyState >= 3 ? 'playing' : 'loading')
      try {
        await audio.play()
        if (version !== loadVersion) return
        resumePosition = 0
        setState(audio.paused ? 'paused' : 'playing')
      } catch (error) {
        if (version !== loadVersion || error.name === 'AbortError') return
        setState(error.name === 'NotAllowedError' ? 'blocked' : 'error', error.name === 'NotAllowedError' ? '' : '歌曲暂时无法播放，点播放重试或切换歌曲')
      }
    }

    function renderPlaylist() {
      list.replaceChildren()
      musicList.forEach((item, index) => {
        const button = doc.createElement('button')
        button.type = 'button'
        button.className = 'fc-play-item' + (index === currentIndex ? ' active' : '')
        button.setAttribute('aria-label', '播放《' + item.name + '》，' + item.artist)
        const number = doc.createElement('span'); number.className = 'fc-play-num'; number.textContent = String(index + 1).padStart(2, '0')
        const meta = doc.createElement('span'); meta.className = 'fc-play-meta'
        const name = doc.createElement('span'); name.className = 'fc-play-name'; name.textContent = item.name
        const performer = doc.createElement('span'); performer.className = 'fc-play-artist'; performer.textContent = item.artist
        meta.append(name, performer)
        const art = doc.createElement('img'); art.className = 'fc-play-thumb no-lightbox'; art.src = item.cover; art.alt = ''; art.loading = 'lazy'
        button.append(number, meta, art)
        button.addEventListener('click', () => { loadTrack(index, true); closeDrawer() })
        list.append(button)
      })
    }

    function loadTrack(index, autoplay = false, position = 0) {
      if (loadVersion) persist(true)
      ++loadVersion
      currentIndex = index
      pendingSeek = Math.max(0, position)
      resumePosition = pendingSeek
      scrubbing = false
      seekPreview.hidden = true
      const item = musicList[currentIndex]
      title.textContent = item.name; artist.textContent = item.artist; cover.src = item.cover; cover.alt = item.name + '封面'
      byId('fcMusicBg').style.backgroundImage = 'url("' + item.cover + '")'
      renderPlaylist()
      audio.src = item.url
      audio.load()
      setState('idle')
      updateProgress()
      loadLyric(item.lrc)
      if (autoplay) requestPlay()
    }

    function nextIndex(direction) {
      if (playMode !== 'random' || musicList.length < 2) return (currentIndex + direction + musicList.length) % musicList.length
      return (currentIndex + 1 + Math.floor(Math.random() * (musicList.length - 1))) % musicList.length
    }
    function playNext() { loadTrack(nextIndex(1), true) }
    function closeDrawer() {
      drawer.classList.remove('show'); drawer.inert = true; drawer.setAttribute('aria-hidden', 'true'); listButton.setAttribute('aria-expanded', 'false')
    }
    function openDrawer() {
      drawer.inert = false; drawer.setAttribute('aria-hidden', 'false'); drawer.classList.add('show'); listButton.setAttribute('aria-expanded', 'true')
      byId('fcPlaylistClose').focus({ preventScroll: true })
    }

    function showSeek() {
      if (!validDuration()) return
      scrubbing = true
      const ratio = Math.max(0, Math.min(1, Number(progress.value) / 1000))
      const time = ratio * audio.duration
      progress.style.setProperty('--fc-progress', (ratio * 100) + '%')
      seekPreview.hidden = false
      seekPreview.textContent = formatTime(time)
      seekPreview.style.left = Math.max(8, Math.min(92, ratio * 100)) + '%'
      currentTime.textContent = formatTime(time)
      progress.setAttribute('aria-valuetext', '定位到 ' + formatTime(time) + '，总时长 ' + formatTime(audio.duration))
    }
    function finishSeek(commit = true) {
      if (!scrubbing) return
      const target = Number(progress.value) / 1000 * audio.duration
      scrubbing = false; seekPreview.hidden = true
      if (commit && validDuration()) {
        try { audio.currentTime = Math.max(0, Math.min(audio.duration, target)); pendingSeek = null; resumePosition = 0; persist(true) } catch (_) {}
      }
      updateProgress(); updateLyric()
    }

    playButton.addEventListener('click', () => { if (audio.paused) requestPlay(); else { audio.pause(); setState('paused') } })
    byId('fcPrev').addEventListener('click', () => loadTrack(nextIndex(-1), true))
    byId('fcNext').addEventListener('click', playNext)
    modeButton.addEventListener('click', () => { playMode = MODES[(MODES.indexOf(playMode) + 1) % MODES.length]; renderState(); persist(true) })
    listButton.addEventListener('click', () => drawer.classList.contains('show') ? closeDrawer() : openDrawer())
    byId('fcPlaylistClose').addEventListener('click', () => { closeDrawer(); listButton.focus() })
    byId('fcMusicExit').addEventListener('click', () => { persist(true); audio.pause(); env.location.href = '/' })
    drawer.addEventListener('keydown', event => { if (event.key === 'Escape') { closeDrawer(); listButton.focus() } })
    progress.addEventListener('pointerdown', showSeek)
    progress.addEventListener('input', showSeek)
    progress.addEventListener('change', () => finishSeek())
    progress.addEventListener('pointercancel', () => finishSeek(false))
    progress.addEventListener('blur', () => finishSeek())
    progress.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); finishSeek(false) } })
    doc.addEventListener('pointerup', () => finishSeek())
    audio.addEventListener('loadedmetadata', () => { applyPendingSeek(); updateProgress() })
    audio.addEventListener('durationchange', () => { applyPendingSeek(); updateProgress() })
    audio.addEventListener('timeupdate', () => { updateProgress(); updateLyric(); if (!audio.paused) persist() })
    audio.addEventListener('play', () => setState(audio.readyState >= 3 ? 'playing' : 'loading'))
    audio.addEventListener('playing', () => { resumePosition = 0; setState('playing') })
    audio.addEventListener('pause', () => { if (!audio.paused) return; if (state !== 'error' && state !== 'blocked' && state !== 'idle') setState('paused'); persist(true) })
    audio.addEventListener('waiting', () => { if (!audio.paused) setState('buffering') })
    audio.addEventListener('stalled', () => { if (!audio.paused) setState('buffering', '网络有些慢，正在等待…') })
    audio.addEventListener('canplay', () => { applyPendingSeek(); if (!audio.paused) setState('playing') })
    audio.addEventListener('error', () => setState('error'))
    audio.addEventListener('ended', () => { if (playMode === 'loop') { audio.currentTime = 0; requestPlay() } else playNext() })
    doc.addEventListener('visibilitychange', () => { if (doc.visibilityState === 'hidden') persist(true) })
    env.addEventListener('pagehide', () => persist(true))
    closeDrawer()
    loadTrack(currentIndex, false, initial.time)
    env.fcInitReadAlong({ audio, getTrack: () => musicList[currentIndex], next: playNext, closeDrawer,
      selectSong: name => { const index = musicList.findIndex(item => item.name === name); if (index >= 0 && index !== currentIndex) loadTrack(index, !audio.paused) } })
    return { audio }
  }
  return { init, parseLrc, formatTime, lyricRequestUrl, readSaved, initialSelection, STORAGE_KEY }
})
