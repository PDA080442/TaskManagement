<template>
  <v-container fluid class="pa-0 profile-page">
    <div class="banner-wrapper">
      <v-img :src="form.banner" class="banner-img" />

      <div class="banner-overlay">
        <v-avatar class="profile-avatar" size="100">
          <v-img :src="form.avatar" />
        </v-avatar>
        <h2 class="profile-title">Настройки профиля</h2>
      </div>
    </div>

    <!-- Белая карточка с формой -->
    <v-card class="settings-card mx-auto">
      <v-form ref="settingsForm" lazy-validation>
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field v-model="form.first_name" label="First name" outlined dense />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="form.last_name" label="Last name" outlined dense />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.email"
              label="Email"
              prepend-inner-icon="mdi-email"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="form.role" label="Role" outlined dense />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.old_password"
              label="Старый пароль"
              type="password"
              outlined
              dense
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.new_password"
              label="Новый пароль"
              type="password"
              outlined
              dense
            />
          </v-col>
        </v-row>
      </v-form>

      <div class="actions">
        <v-btn text @click="onCancel">Cancel</v-btn>
        <v-btn class="ml-4" color="primary" @click="onSave">Save</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ProfileSettings } from '@/types/settings.type'
import { profileSettingsMock } from '@/mocks/SettingsMocks'

const form = ref<ProfileSettings>({ ...profileSettingsMock })
const settingsForm = ref()

function onCancel() {
  form.value = { ...profileSettingsMock }
}

function onSave() {
  console.log('Save', form.value)
}
</script>

<style scoped>
.profile-page {
  background: #f5f7fa;
}

.banner-wrapper {
  position: relative;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 30px;
  max-width: 1360px;
  width: 100%;
}
.banner-img {
  height: 100%;
  object-fit: cover;
}
.banner-overlay {
  position: absolute;
  bottom: -50px; /* половина размера аватара */
  right: 40px;
  display: flex;
  align-items: center;
}
.profile-avatar {
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.profile-title {
  margin-left: 16px;
  font-size: 24px;
  font-weight: 600;
}

/* Карточка с формой */
.settings-card {
  margin-top: 80px; /* пространство под аватаром */
  padding: 32px;
  max-width: 900px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Кнопки */
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>
