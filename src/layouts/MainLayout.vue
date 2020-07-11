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
        <q-item clickable tag="a" exact to="highlights">
          <q-item-section avatar>
            <q-icon name="tab" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ $t("page.highlights") }}</q-item-label>
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
              <img :src="user.avatar">
            </q-avatar>
            <div class="text-weight-bold">{{user.firstName}} {{user.lastName}}</div>
            <div>@{{user.nickname}}</div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { LeftDrawerOpenMixin } from '../mixins/settings'
import Settings from '../dialogs/Settings.vue'
import Component, { mixins } from 'vue-class-component'
import { State } from 'vuex-class'
import { UserState } from '../store/user/state'

@Component
export default class MainLayout extends mixins(LeftDrawerOpenMixin) {
  @State('user') user!: UserState

  openSettings () {
    this.$q.dialog({
      component: Settings,
      parent: this
    })
  }
}
</script>
