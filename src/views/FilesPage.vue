<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <FilesHead />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilesHead from '@/components/Files/FilesHead.vue'

export default defineComponent({
  name: 'FilesPage',
  components: { FilesHead },
})
</script>

<style scoped>
.v-main {
  padding: 0;
}
</style>
