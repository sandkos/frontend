<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          :aria-label="$t($route.meta.title)"
          icon="menu"
        ></q-btn>

        <q-toolbar-title>{{ $t($route.meta.title) }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered :width="300">
      <q-list style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-item clickable tag="a" exact to="diary">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Лента</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" exact to="finances">
          <q-item-section avatar>
            <q-icon name="card_travel" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Финансы</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" exact @click="openSettings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("page.settings") }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <transition
        :enter-active-class="transitionEnterActive"
        :leave-active-class="transitionLeaveActive"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { LeftDrawerOpenMixin } from '../mixins/settings'
import Settings from '../dialogs/Settings.vue'

export default {
  name: 'MainLayout',
  mixins: [LeftDrawerOpenMixin],
  methods: {
    openSettings () {
      this.$q.dialog({
        component: Settings,
        parent: this
      })
    }
  },
  data () {
    return {
      transitionEnterActive: '',
      transitionLeaveActive: ''
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth > fromDepth) {
        this.transitionEnterActive = 'animated fadeInRight'
        this.transitionLeaveActive = 'animated fadeOutLeft'
      } else if (toDepth < fromDepth) {
        this.transitionEnterActive = 'animated fadeInLeft'
        this.transitionLeaveActive = 'animated fadeOutRight'
      } else {
        this.transitionEnterActive = 'animated fadeIn'
        this.transitionLeaveActive = 'animated fadeOut'
      }
    }
  }
}
</script>
