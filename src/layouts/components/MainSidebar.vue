<template>
  <v-navigation-drawer
    app
    fixed
    permanent
    width="72"
    class="pa-0 d-flex flex-column align-center"
    color="#FBFAFF"
  >
    <v-list nav dense class="flex-grow-1">
      <v-img :src="logoIcon" alt="Logo" width="50" height="50" class="logo" />

      <v-list-item
        v-for="(item, i) in items"
        :key="item.title"
        :to="item.route"
        router
        link
        class="justify-center my-2 sidebar-item"
        :class="{ 'sidebar-item--active': selectedIndex === i }"
        @click="selectedIndex = i"
      >
        <v-list-item-icon>
          <img
            :src="item.icon"
            :alt="item.title"
            width="24"
            height="24"
            class="d-flex justify-center align-center ml-2"
          />
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import dashboardIcon from '@/assets/sidebar/dashboard.svg?url'
import timelineIcon from '@/assets/sidebar/timeline.svg?url'
import taskIcon from '@/assets/sidebar/task.svg?url'
import filesIcon from '@/assets/sidebar/files.svg?url'
import settingsIcon from '@/assets/sidebar/settings.svg?url'
import msgIcon from '@/assets/sidebar/message.svg?url'
import logoIcon from '@/assets/sidebar/logo.svg?url'

const items = [
  { title: 'Главная', route: '/', icon: dashboardIcon },
  { title: 'Timeline', route: '/timeline', icon: timelineIcon },
  { title: 'Tasks', route: '/tasks', icon: taskIcon },
  { title: 'Files', route: '/files', icon: filesIcon },
  { title: 'Settings', route: '/settings', icon: settingsIcon },
  { title: 'Messages', route: '/messages', icon: msgIcon },
]

const selectedIndex = ref(0)
</script>

<style scoped>
.sidebar-item {
  cursor: pointer;
}
.sidebar-item--active {
  background-color: #f5f5f5;
  border-radius: 12px;
}

.logo {
  margin-bottom: 150px;
}
</style>
