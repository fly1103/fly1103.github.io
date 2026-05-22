document.addEventListener('DOMContentLoaded', function () {
  if (!window.matchMedia('(max-width: 768px)').matches) return

  const sidebar = document.querySelector('#sidebar #sidebar-menus')
  if (!sidebar) return

  const items = sidebar.querySelectorAll('.menus_item')

  items.forEach(function (item) {
    const child = item.querySelector(':scope > .menus_item_child')
    const link = item.querySelector(':scope > a')

    if (!child || !link) return

    item.classList.remove('fc-open')
    child.style.display = 'none'

    link.addEventListener(
      'click',
      function (e) {
        e.preventDefault()
        e.stopPropagation()

        const opened = item.classList.contains('fc-open')

        sidebar.querySelectorAll('.menus_item.fc-open').forEach(function (openItem) {
          openItem.classList.remove('fc-open')
          const openChild = openItem.querySelector(':scope > .menus_item_child')
          if (openChild) openChild.style.display = 'none'
        })

        if (!opened) {
          item.classList.add('fc-open')
          child.style.display = 'block'
        }
      },
      true
    )
  })
})