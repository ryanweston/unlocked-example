import { createApp } from 'vue'
import './tailwind.css'
import { createRouter, createWebHistory } from 'vue-router'
// @ts-expect-error fix types on
import { defaultTheme, unlockedGlobal } from '@unlocked/foundation'
import App from './App.vue'
import { routes } from './routes'
import './prism.js'

const app = createApp(App)

app.use(unlockedGlobal, {
  theme: defaultTheme,
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
