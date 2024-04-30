import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/main.css'
import './styles/custom.css'
import App from './App.vue'
import routes from './router/index'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
