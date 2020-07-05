import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import { Quasar } from 'quasar'

Vue.use(VueI18n)

/**
 *
 * @returns {string}
 */
function getLocale () {
  /** @type {string} */
  let locale = JSON.parse(window.localStorage.getItem('vuex'))?.settings?.locale ?? Quasar.lang.getLocale()

  if (!messages[locale]) {
    locale = Object.keys(messages).some((item) => {
      if (item.includes(locale)) {
        locale = item
        return true
      }
      return false
    }) ? locale : Object.keys(messages)[0]
  }

  return locale
}

const i18n = new VueI18n({
  locale: getLocale(),
  fallbackLocale: 'en-us',
  messages
})

export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = i18n
}

export { i18n }
