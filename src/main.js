import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/main.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import 'element-plus/theme-chalk/src/message.scss'
import './styles/custom.scss'
import App from './App.vue'
import routes from './router/index'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
