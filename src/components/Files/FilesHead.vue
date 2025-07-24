<template>
  <v-container fluid class="py-4 px-6 files-head">
    <v-row align="center" justify="space-between" no-gutters class="pa-2">
      <v-col cols="auto">
        <h1 class="files-head__title">Файлы</h1>
      </v-col>
      <v-col cols="auto" class="d-flex">
        <v-btn color="#5051F9" class="mr-4 btn-create" rounded="xl" elevation="0" height="46">
          <v-icon left>mdi-folder-plus</v-icon>
          Создать новую папку
        </v-btn>
        <v-btn
          outlined
          rounded="xl"
          elevation="0"
          height="46"
          border
          style="background-color: #ffffff00"
        >
          <v-icon left>mdi-upload</v-icon>
          Загрузить
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped>

.btn-create {
  font-size: 11px;
  font-weight: bold;
}

.files-head__title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: #232360;
}
</style>
