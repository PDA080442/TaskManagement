<template>
  <v-container fluid class="pa-0 d-flex align-center justify-center"
    style="min-height: 100vh; background-color: #fbfbfb;">
    <v-row gutter="0" class="ma-0 pa-0" fill-height>
      <v-col cols="12" md="5" class="d-flex align-center justify-start pa-0">
        <v-card elevation="1" class="px-16 card_login" max-width="450" width="450px" rounded="lg" style="height: 750px;">
          <v-img :src="Logo" max-width="60" class="mx-auto mb-4" />
          <div class="text-h5 font-weight-medium text-center mb-6">
            Вход
          </div>

          <v-row dense class="mb-6 pa-0">
            <v-col cols="6" class="px-1">
              <v-btn variant="outlined" block class="text-none">
                <v-icon left size="18">mdi-google</v-icon>
                Google
              </v-btn>
            </v-col>
            <v-col cols="6" class="px-1">
              <v-btn variant="outlined" block class="text-none">
                <v-icon left size="18">mdi-facebook</v-icon>
                Facebook
              </v-btn>
            </v-col>
          </v-row>

          <v-form ref="formRef" v-model="valid" lazy-validation>
            <v-text-field v-model="logindata.email" label="Ваш Email" type="email" dense class="mb-4"
              :rules="[rules.require, rules.email]" required full-width prepend-inner-icon="mdi-email-outline" />

            <v-text-field v-model="logindata.password" :type="showPassword ? 'text' : 'password'" label="Пароль" dense
              class="mb-4" :rules="[rules.require, rules.passwordMin]"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword" required full-width
              prepend-inner-icon="mdi-lock-outline" />

            <v-btn :disabled="!valid" type="button" block large rounded="lg" class="mb-4 text-none text-white"
              style="background-color: #605BFF;" @click="submit">
              Войти
            </v-btn>

            <v-btn type="button" block large variant="text" class="text-none" @click="goReg">
              Нет аккаунта? Зарегистрируйтесь
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
import { isEmail } from 'validator'
import illustration from '@/assets/SignIn/Illustration.png'
import Logo from '@/assets/SignUp/Logo.png'
import { logdata } from '@/composables/auth.request'
import type { LogData } from '@/types/auth.type'

const router = useRouter()
const formRef = ref()
const valid = ref(false)
const showPassword = ref(false)

const logindata = reactive<LogData>({
  email: '',
  password: '',
})

const rules = {
  require: (v: string) => !!v || 'Поле обязательно для заполнения',
  email: (v: string) => isEmail(v) || 'Неверный формат email',
  passwordMin: (v: string) => v.length >= 6 || 'Минимум 6 символов',
}

async function submit() {
  if (!formRef.value || !formRef.value.validate()) {
    return
  }
  try {
    await logdata(logindata)
    router.push('/')
  } catch (err) {
    console.error('Ошибка Входа:', err)
  }
}

function goReg() {
  router.push('/register')
}
</script>

<style scoped>
.card_login {
  padding-top: 125px;
}

.text-none {
  text-transform: none;
}

:deep(html),
:deep(body) {
  margin: 0;
  padding: 0;
}
</style>
