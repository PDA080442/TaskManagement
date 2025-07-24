<!-- src/components/FilesGrid.vue -->
<template>
  <v-container class="files-grid" fluid>
    <!-- Header -->
    <v-row class="header" align="center" justify="space-between">
      <div class="title">
        <v-btn class="icons_heade">
          <v-icon left color="#5051F9">mdi-folder</v-icon>
          <v-icon small >mdi-menu-down</v-icon>
        </v-btn>
        All Files
      </div>
      <v-btn text rounded class="show-all-btn">
        Show All
        <v-icon small>mdi-menu-down</v-icon>
      </v-btn>
    </v-row>

    <div class="list">
      <div v-for="folder in folders" :key="folder.id" class="card-wrapper">
        <v-card class="folder-card" elevation="0" border>
          <div class="card-header">
            <v-icon :color="folder.color" size="35">
              {{ folder.icon }}
            </v-icon>
          </div>
          <v-card-text class="card-body">
            <div class="folder-name">{{ folder.name }}</div>
            <div class="file-count">{{ folder.fileCount }} files</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { fileFolders } from '@/mocks/Files/FilesFolderMocks'
import type { FileFolderType } from '@/types/Files/files.type'

const folders: FileFolderType[] = fileFolders
</script>

<style scoped>
.files-grid {
  border-radius: 10px;
  max-width: 900px;
  padding: 30px;
  margin: 0 30px 30px 30px;
  background: #fff;
}

.header {
  margin: 0;
  margin-bottom: 24px;
}

.title {
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #2c2e3e;
}

.show-all-btn {
  font-weight: bold;
  font-size: 12px;
  color: #2c2e3e;
}

/* Flex‑сетка: 3 колонки, 2 ряда */
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.icons_heade {
  margin-right: 16px;
}

/* Три колонки по ширине контейнера с учётом gap */
.card-wrapper {
  flex: 0 0 calc((100% - 2 * 20px) / 3);
}

.folder-card {
  max-width: 271px;
  border-radius: 12px;
  transition: transform 0.2s;
  padding: 16px;
}


.card-header {
  margin-left: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
}

.card-body {
  padding: 0 8px;
}

.folder-name {
  font-size: 16px;
  font-weight: 600;
  color: #2c2e3e;
  margin-bottom: 4px;
}

.file-count {
  font-size: 13px;
  color: #6e728e;
}
</style>
