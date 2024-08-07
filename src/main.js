import { createApp } from 'vue'
import './styles/main.css'
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import 'element-plus/theme-chalk/src/message.scss'
import './styles/custom.scss'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
