// i18n
import en from './en.json' // 存放英文翻譯
import zh from './zh-Hant.json' // 存放繁體中文翻譯
import { vsprintf } from 'sprintf-js'

// http://www.lingoes.net/en/translator/langcode.htm
// 瀏覽器語系匹配
const locales = {
  'zh': zh,
  'en': en
}

// 中文語系檔  key <=> value互換
var chart = {}
Object.keys(zh).forEach((key) => {
  chart[zh[key]] = key
})

export default {
  data() {
    return {
      locales: locales,
      chart: chart
    }
  },
  methods: {
    $lnChange: function(params) {
      console.info(`當前語系：${params}`)
      sessionStorage.setItem('i18n', params)
      this.$store.dispatch('app/setLanguage', params)
    },
    $ln: function(params, ...args) {
      let str = ''
      const show = process.env.VUE_APP_LANGUAGE_SHOW
      if (typeof (params) === 'undefined' || params === '') return '' // 空值

      /**
       * 檢查語系
       * 1.檢查瀏覽器語系代碼是否存在
       * 2.檢查sessionStorage  key=i18n是否存在
       * 3.檢查store是否存在
       */
      const store = this.$store.state.app.language // 必要為了觸發rander
      let i18n = process.env.VUE_APP_LANGUAGE
      i18n = (this.locales[store]) ? store : i18n

      // get key
      const key = this.chart[params] ? this.chart[params] : params

      if (show === 'false') { // 關閉語系時候預設英文
        str = this.locales['en'][key]
      } else {
        str = this.locales[i18n][key] ? this.locales[i18n][key] : '@語系:' + key + '@'
      }
      str = (args.length > 0) ? vsprintf(str, args) : str
      return str
    }
  }
}
