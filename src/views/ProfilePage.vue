<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <ProfileSettings />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProfileSettings from '@/components/ProfileSettings.vue';

export default defineComponent({
  name: 'ProfilePage',
  components: { ProfileSettings }
})
</script>

<style scoped>
.v-main {
  padding: 0;
}
</style>
