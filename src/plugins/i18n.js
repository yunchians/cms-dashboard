import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZh_twLocale from 'element-ui/lib/locale/lang/zh-TW'// element-ui lang

Vue.use(VueI18n)

const messages = {
  en: {
    ...elementEnLocale
  },
  zh: {
    ...elementZh_twLocale
  }
}
const i18n = new VueI18n({
  // set locale
  locale: process.env.VUE_APP_LANGUAGE,
  // set locale messages
  messages
})

export default i18n
