<template>
  <div class="q-pa-md">
    {{$t.locale}}
    <q-list>
      <q-item tag="label">
        <q-item-section>
          <q-select
            v-model="locale"
            emit-value
            map-options
            :options="locales"
            :label="$t('settings.language')"
          />
        </q-item-section>
      </q-item>
      <q-item-label header>{{$t('settings.view')}}</q-item-label>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>{{$t('settings.dark-mode')}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="darkMode" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { DarkModeMixin, LocaleMixin } from '../mixins/settings'
export default {
  name: 'Settings',
  mixins: [DarkModeMixin, LocaleMixin]
}
</script>
