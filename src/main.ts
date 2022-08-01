import { createApp } from 'vue'
import './tailwind.css'
import { createRouter, createWebHistory } from 'vue-router'
import { defaultTheme, unlocked } from '@unlocked/base'
import App from './App.vue'
import { routes } from './routes'
import navigation from '@/components/navigation/classes'
import dropdown from '@/components/dropdown/classes'

const app = createApp(App)

const theme = { ...defaultTheme, ...dropdown, ...navigation }

app.use(unlocked, { theme })

const router = createRouter({
  history: createWebHistory(),
  // @ts-expect-error typescript is weird
  routes,
})

app.use(router)
app.mount('#app')
