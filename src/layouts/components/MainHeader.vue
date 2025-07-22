<template>
  <v-app-bar app fixed color="white" elevate-on-scroll flat class="border-bottom">
    <v-container class="pa-0 d-flex justify-center" style="flex: 1 1 auto; max-width: 500px">
      <v-text-field
        v-model="search"
        placeholder="Search anything..."
        density="comfortable"
        hide-details
        rounded="lg"
        clearable
        variant="solo"
        append-inner-icon="mdi-magnify"
        class="header-search"
      />
    </v-container>

    <v-btn icon class="mr-7">
      <v-icon size="24">mdi-bell-outline</v-icon>
      <v-badge
        content="2"
        color="deep-purple accent-4"
        overlap
        style="transform: translate(8px, -8px)"
      />
    </v-btn>

    <v-menu offset-y bottom>
      <template #activator="{ props }">
        <v-btn icon v-bind="props" class="mr-10">
          <v-avatar size="32">
            <img src="" alt="User" />
          </v-avatar>
          <v-icon class="ml-3">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/profile" router>
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const search = ref('')
const router = useRouter()

function logout() {
  router.push('/login')
}
</script>

<style scoped>
.header-search:global(
    .v-field.v-field--appended.v-field--center-affix.v-field--no-label.v-field--variant-solo.v-theme--light.rounded-lg.v-locale--is-ltr
  ) {
  background-color: #f3f7fa;
  box-shadow: none;
  color: #23235f;
}

.v-application .v-app-bar {
  left: 72px !important;
  width: calc(100% - 72px) !important;
}
</style>
