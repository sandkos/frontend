import { DISPATCH_VALUE } from './actions'
import { SET_DARK_MODE, SET_LEFT_DRAWER_OPEN, SET_LOCALE } from './mutations'
import { i18n } from 'src/boot/i18n'
import { Dark } from 'quasar'

export default {
  namespaced: true,
  mutations: {
    [SET_DARK_MODE] (state, value) {
      state.darkMode = value
      Dark.set(value)
    },
    [SET_LEFT_DRAWER_OPEN] (state, value) {
      state.leftDrawerOpen = value
    },
    [SET_LOCALE] (state, value) {
      state.locale = value
      i18n.locale = value
    }
  },
  actions: {
    [DISPATCH_VALUE] ({ commit }, payload) {
      commit(...payload)
    }
  },
  state: function () {
    return {
      darkMode: false,
      leftDrawerOpen: true,
      locale: i18n.locale
    }
  }
}
