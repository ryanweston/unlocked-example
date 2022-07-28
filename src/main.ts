import { createApp } from 'vue'
import './tailwind.css'
import { createRouter, createWebHistory } from 'vue-router'
import { Unlocked, componentThemes, createTheme, tokenMap } from '@unlocked/foundation'
import App from './App.vue'
import { routes } from './routes'
import './prism.js'

import { theme } from '../theme.js'

const app = createApp(App)

app.use(Unlocked, { theme })

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
