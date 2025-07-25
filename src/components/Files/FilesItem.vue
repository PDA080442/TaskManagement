<template>
  <v-container>
    <div class="d-flex justify-center mb-10"></div>
    <v-card class="recent-files-card" elevation="0">
      <v-data-table
        :headers="headers"
        :items="files"
        hide-default-footer
        item-key="id"
        class="elevation-0"
      >
        <template v-slot:top>
          <div class="d-flex justify-space-between align-center mb-7 px-7">
            <span class="table_title">Последние файлы</span>
            <RouterLink to="/files" class="view-all">Все Файлы</RouterLink>
          </div>
        </template>

        <template v-slot:[`item.name`]="{ item }">
          <div class="d-flex align-center justify-start">
            <v-avatar size="36" class="mr-4" color="transparent">
              <v-icon :color="item.iconColor || '#666'" size="28">
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            <span class="file-name">{{ item.name }}</span>
          </div>
        </template>

        <template v-slot:[`item.size`]="{ item }">
          <div class="size-table">{{ item.size }}</div>
        </template>

        <template v-slot:[`item.createdAt`]="{ item }">
          <div class="createdAt-table">{{ item.createdAt }}</div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            color="red"
            icon="mdi-delete"
            size="large"
            @click="delFile(item.id)"
          ></v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { files } from '@/mocks/Files/FilesItemMocks'
import { ref } from 'vue'

const headers = ref([
  { title: 'Имя', value: 'name' },
  { title: 'Размер', value: 'size' },
  { title: 'Дата создания', value: 'createdAt' },
  { value: 'actions' },
])
</script>

<style scoped>
.v-container {
  max-width: 1300px;
  width: 1300px;
  margin: 0 30px 30px 30px;
  padding: 0;
}

.recent-files-card {
  padding: 30px;
  margin: 0 auto;
  border-radius: 10px;
  border: none !important;
}

.table_title {
  font-size: 30px;
  font-weight: 500;
  color: #1e1e50;
}

.view-all {
  font-size: 17px;
  font-weight: medium;
  color: #1ea7ff;
  text-decoration: none;
}
.view-all:hover {
  text-decoration: underline;
}

.v-data-table-header th {
  font-weight: 500;
  color: #5f5f72;
  font-size: 0.95rem;
  padding: 12px 16px;
}

.v-data-table .v-data-table__wrapper tr:hover {
  background-color: #f7f8fa;
}

.file-name {
  font-size: 16px;
  color: #1e1e50;
}

.size-table {
  font-size: 16px;
}

.createdAt-table {
  font-size: 16px;
}

</style>
