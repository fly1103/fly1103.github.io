(function () {
  function init() {
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
