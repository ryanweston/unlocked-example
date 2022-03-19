import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { unlockedGlobal, defaultTheme } from '@unlocked/foundation'

const app = createApp(App).use(unlockedGlobal, { 
  theme: defaultTheme
})


const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
