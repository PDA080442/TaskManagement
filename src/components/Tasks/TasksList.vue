<template>
  <v-container class="pa-6 task-board" style="max-width: 1050px; margin-left: 0">
    <h2 class="text-h5 font-weight-bold mb-6">🔥 Задачи</h2>
    <v-row dense>
      <v-col v-for="(column, index) in columns" :key="index" cols="3">
        <v-card class="pa-3" elevation="0" style="background: #f9fafb; border-radius: 12px">
          <div class="d-flex justify-space-between align-center mb-3">
            <span class="text-subtitle-1 font-weight-medium">{{ column }}</span>
            <v-btn icon size="x-small" variant="text">
              <v-icon size="18">mdi-dots-horizontal</v-icon>
            </v-btn>
          </div>
          <v-divider class="mb-2" />
          <div class="d-flex flex-column gap-4">
            <v-card
              v-for="task in tasksByColumn(column)"
              :key="task.id"
              class="pa-3"
              elevation="1"
              style="border-radius: 10px"
            >
              <div class="d-flex mb-2">
                <v-chip
                  size="x-small"
                  color="primary"
                  text-color="white"
                  class="font-weight-medium"
                  style="text-transform: capitalize"
                >
                  {{ task.category }}
                </v-chip>
              </div>
              <v-img
                v-if="task.image"
                :src="task.image"
                class="rounded-lg mb-2"
                height="120px"
                cover
              />
              <div class="font-weight-medium text-body-1 mb-1">{{ task.title }}</div>
              <div class="text-caption text-grey-darken-1 mb-2">{{ task.description }}</div>
              <div class="d-flex align-center justify-space-between text-caption">
                <span>{{ task.date }}</span>
              </div>
              <div v-if="task.users?.length" class="d-flex mt-2">
                <div v-for="user in task.users" :key="user" class="mr-1 text-body-2">
                  {{ user }}
                </div>
              </div>
            </v-card>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { TaskTypes } from '@/types/Tasks/tasks.type'
import { tasks } from '@/mocks/Tasks/TasksItemMocks'

const columns: TaskTypes['column'][] = ['Обзор', 'Сделать', 'В процессе выполнения', 'Проверка']

function tasksByColumn(column: TaskTypes['column']): TaskTypes[] {
  return tasks.filter((task) => task.column === column)
}
</script>

<style scoped>
.task-board {
  width: 1050px;
}
.gap-4 > * + * {
  margin-top: 16px;
}
</style>
