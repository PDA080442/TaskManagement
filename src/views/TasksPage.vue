<template>
  <v-main class="fill-height align-center justify-center">
    <TasksList />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TasksList from '@/components/Tasks/TasksList.vue'


export default defineComponent({
  name: 'TasksPage',
  components: { TasksList },
})
</script>

<style scoped>
.v-main {
  padding: 0;
  background-color: #f7f7f9;
}

.first_row {
  display: flex;
}
</style>
