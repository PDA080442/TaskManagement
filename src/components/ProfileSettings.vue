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
      <div class="actions">
        <v-btn text rounded="lg" elevation="0" border @click="onCancel">Cancel</v-btn>
        <v-btn
          class="ml-4"
          style="background-color: #5051f9; color: white"
          rounded="lg"
          elevation="0"
          @click="onSave"
          >Save</v-btn
        >
      </div>
    </div>

    <v-card class="settings-card" color="#f5f7fa">
      <v-form ref="settingsForm" lazy-validation>
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.first_name"
              label="First name"
              variant="solo"
              rounded="lg"
              dense
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.last_name"
              label="Last name"
              variant="solo"
              rounded="lg"
              dense
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="form.email" label="Email" variant="solo" rounded="lg" dense />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="form.role" label="Role" variant="solo" rounded="lg" dense />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.old_password"
              label="Старый пароль"
              type="password"
              variant="solo"
              rounded="lg"
              dense
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.new_password"
              label="Новый пароль"
              type="password"
              variant="solo"
              rounded="lg"
              dense
            />
          </v-col>
        </v-row>
      </v-form>
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
* {
  color: #232360;
}

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
  bottom: -10px;
  left: 80px;
  display: flex;
  align-items: center;
}
.profile-avatar {
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.profile-title {
  margin-top: 30px;
  margin-left: 16px;
  font-size: 24px;
  font-weight: 600;
}

.settings-card {
  margin-left: 90px;
  margin-top: 20px;
  padding: 32px;
  max-width: 700px;
  box-shadow: none;
}

.v-text-field {
  margin-right: 20px;
}

/* Кнопки */
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
</style>
