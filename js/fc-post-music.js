(function () {
  function initPostMusic() {
    document.querySelectorAll('.fc-post-music-player:not([data-inited])').forEach(function (el) {
      el.dataset.inited = 'true'

      const name = el.dataset.name || '未知歌曲'
      const artist = el.dataset.artist || '未知歌手'
      const url = el.dataset.url || ''
      const cover = el.dataset.cover || ''
      const lrc = el.dataset.lrc || ''

      if (!url) return

      new APlayer({
        container: el,
        mini: false,
        autoplay: false,
        theme: '#4aa8df',
        loop: 'none',
        order: 'list',
        preload: 'metadata',
        volume: 0.7,
        mutex: true,
        lrcType: lrc ? 3 : 0,
        audio: [
          {
            name: name,
            artist: artist,
            url: url,
            cover: cover,
            lrc: lrc
          }
        ]
      })
    })
  }

  document.addEventListener('DOMContentLoaded', initPostMusic)

  if (window.pjax) {
    document.addEventListener('pjax:complete', initPostMusic)
  }

  window.fcInitPostMusic = initPostMusic
})()