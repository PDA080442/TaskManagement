<template>
  <v-main class="fill-height align-center justify-center">
    <FilesHead />
    <FilesFolder />
    <FilesItem />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilesHead from '@/components/Files/FilesHead.vue'
import FilesFolder from '@/components/Files/FilesFolder.vue'
import FilesItem from '@/components/Files/FilesItem.vue'

export default defineComponent({
  name: 'FilesPage',
  components: { FilesHead, FilesFolder, FilesItem },
})
</script>

<style scoped>
.v-main {
  padding: 0;
  background-color: #f7f7f9;
}

</style>
