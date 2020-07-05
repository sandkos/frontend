<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 80vw;">
      <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ $t("page.settings") }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <Settings></Settings>
        </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import Settings from '../pages/Settings.vue'
export default {
  name: 'SettingsDialog',
  props: {
    // ...your custom props
  },

  methods: {
    show () {
      this.$refs.dialog.show()
    },

    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      this.$emit('hide')
    }
  },
  components: {
    Settings
  }
}
</script>
