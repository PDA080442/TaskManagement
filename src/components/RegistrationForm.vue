<template>
  <v-container fluid class="pa-0 d-flex align-center justify-center"
               style="min-height: 100vh; background-color: #fbfbfb;">
    <v-row gutter="0" class="ma-0 pa-0">
      <v-col cols="12" md="5" class="d-flex align-center justify-start pa-0">
        <v-card elevation="1" class="pa-16" max-width="450" width="450px" rounded="lg">
          <v-img :src="Logo" max-width="60" class="mx-auto mb-4 mt-2" />
          <div class="text-h5 font-weight-medium text-center mb-6">
            Регистрация
          </div>

          <v-form ref="formRef" v-model="valid" lazy-validation>
            <v-text-field
              v-model="form.first_name"
              label="Ваше Имя"
              dense
              class="mb-4"
              :rules="[rules.require, rules.onlyLetters]"
              required
              full-width
              prepend-inner-icon="mdi-account"
            />

            <v-text-field
              v-model="form.last_name"
              label="Ваша Фамилия"
              dense
              class="mb-4"
              :rules="[rules.require, rules.onlyLetters]"
              required
              full-width
              prepend-inner-icon="mdi-account"
            />

            <v-text-field
              v-model="form.email"
              label="Ваш Email"
              type="email"
              dense
              class="mb-4"
              :rules="[rules.require, rules.email]"
              required
              full-width
              prepend-inner-icon="mdi-email-outline"
            />

            <v-text-field
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Пароль"
              dense
              class="mb-4"
              :rules="[rules.require, rules.passwordMin]"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
              required
              full-width
              prepend-inner-icon="mdi-lock-outline"
            />

            <v-btn
              :disabled="!valid"
              type="button"
              block
              large
              rounded="lg"
              class="mb-4 text-none text-white"
              style="background-color: #605BFF;"
              @click="submit"
            >
              Создать аккаунт
            </v-btn>

            <v-btn
              type="button"
              block
              large
              variant="text"
              class="text-none"
              @click="goLogin"
            >
              Есть аккаунт? Войдите
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="7" class="d-none d-md-flex align-center justify-center">
        <v-img :src="illustration" contain max-width="700" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { isEmail, isAlpha } from 'validator'
import illustration from '@/assets/SignUp/Illustration.png'
import Logo from '@/assets/SignUp/Logo.png'
import { regdata } from '@/composables/auth.request'
import type { RegData } from '@/types/auth.type'

const router = useRouter()
const formRef = ref()
const valid = ref(false)
const showPassword = ref(false)

const form = reactive<RegData>({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
})

const rules = {
  require: (v: string) => !!v || 'Поле обязательно для заполнения',
  onlyLetters:  (v: string) => isAlpha(v, 'ru-RU') || 'Неверный формат',
  email:   (v: string) => isEmail(v) || 'Неверный формат email',
  passwordMin: (v: string) => v.length >= 6 || 'Минимум 6 символов',
}

async function submit() {
  if (!formRef.value || !formRef.value.validate()) {
    return
  }
  try {
    await regdata(form)
    router.push('/login')
  } catch (err) {
    console.error('Ошибка регистрации:', err)
  }
}

function goLogin() {
  router.push('/login')
}
</script>

<style scoped>
.text-none {
  text-transform: none;
  margin-bottom: 20px;
}

:deep(html),
:deep(body) {
  margin: 0;
  padding: 0;
}
</style>
