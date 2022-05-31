const routes = {
  '/': '/pages/home.html',
  '/theUniverse': '/pages/theUniverse.html',
  '/exploration': '/pages/exploration.html',
  404: '/pages/404.htm'
}
function route(event) {
  event = event || window.event
  event.preventDefault()

  window.history.pushState({}, "", event.target.href)

  handle()
}

function handle() {
  const { pathname } = window.location
  const route = routes[pathname] || routes[404]

  fetch(route)
  .then(data => data.text())
  .then(html => {
    document.querySelector('#app').innerHTML = html
  })
}

handle()

window.onpopstate = () => handle()
window.route = () => route()