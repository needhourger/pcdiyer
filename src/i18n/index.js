import { createI18n } from 'vue-i18n'
import en_us from './en-us'
import zh_cn from './zh-cn'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'zh-CN',
  fallbackLocale: 'en-US',
  messages: {
    'en-US':en_us,
    'zh-CN':zh_cn,
  }
})

export default i18n