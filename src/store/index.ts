import { store } from 'quasar/wrappers'
import Vuex, { Store } from 'vuex'
import VuexPersistence from 'vuex-persist'

import settings from './settings'
import { SettingsState } from './settings/state'

import user from './user'
import { UserState } from './user/state'

import { i18n } from 'src/boot/i18n'
import { Dark } from 'quasar'

export interface StoreInterface {
  settings: SettingsState,
  user: UserState,
}

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const vuexLocal = new VuexPersistence<StoreInterface>({
    storage: window.localStorage,
    modules: ['settings']
  })

  const store = new Store<StoreInterface>({
    plugins: [vuexLocal.plugin],

    modules: {
      settings,
      user
    },

    strict: !!process.env.DEV
  })

  i18n.locale = store.state.settings.locale
  if (store.state.settings.darkMode !== 'auto') {
    Dark.set(store.state.settings.darkMode)
  }

  return store
})
