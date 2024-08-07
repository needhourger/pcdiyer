import { createApp } from 'vue'
import './styles/main.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import 'element-plus/theme-chalk/src/message.scss'
import './styles/custom.scss'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import en from './i18n/en'
import zh_cn from './i18n/zh-cn'

const i18n = createI18n({
  legacy: false,
  locale: 'zh_cn',
  fallbackLocale: 'en',
  messages: {
    en,
    zh_cn,
  }
})
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
