import Home from './views/home/index.vue'
import Compositions from './views/compositions/index.vue'
import Mission from './views/mission/index.vue'
import NotFound from './views/404/NotFound.vue'

import { compositionRoutes } from './views/compositions/routes'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/mission', component: Mission, meta: { title: 'Our mission' } },
  { path: '/compositions', component: Compositions, meta: { title: 'Compositions' } },
  { path: '/:path(.*)', component: NotFound },
  ...compositionRoutes(),
]
