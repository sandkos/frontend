import { DISPATCH_VALUE } from 'src/store/settings/actions'
import { SET_DARK_MODE, SET_LEFT_DRAWER_OPEN, SET_LOCALE } from 'src/store/settings/mutations'

export const DarkModeMixin = {
  computed: {
    darkMode: {
      get () { return this.$store.state.settings.darkMode },
      set (value) { this.$store.dispatch(`settings/${DISPATCH_VALUE}`, [SET_DARK_MODE, value]) }
    }
  }
}

export const LeftDrawerOpenMixin = {
  computed: {
    leftDrawerOpen: {
      get () { return this.$store.state.settings.leftDrawerOpen },
      set (value) { this.$store.dispatch(`settings/${DISPATCH_VALUE}`, [SET_LEFT_DRAWER_OPEN, value]) }
    }
  }
}

export const LocaleMixin = {
  data () {
    return {
      locales: this.$i18n.availableLocales.map(locale => {
        return { label: this.$t(locale), value: locale }
      })
    }
  },
  computed: {
    locale: {
      get () { return this.$store.state.settings.locale },
      set (value) { this.$store.dispatch(`settings/${DISPATCH_VALUE}`, [SET_LOCALE, value]) }
    }
  }
}
