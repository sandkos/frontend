import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import settings from './settings'
import user from './user'
import { Dark } from 'quasar'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState(
      {
        paths: 'settings',
        rehydrated: store => {
          Dark.set(store.state.settings.darkMode)
        }
      }
    )],

    modules: {
      // example
      settings,
      user
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
