import Home from './views/home/index.vue'
import Web3 from './views/web3/index.vue'
import NotFound from './views/404/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/web3', component: Web3, meta: { title: 'Web3' } },
  { path: '/:path(.*)', component: NotFound },
]
