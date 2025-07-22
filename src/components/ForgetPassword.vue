<template>
  <v-container fluid class="pa-0 d-flex align-center justify-center"
    style="min-height: 100vh; background-color: #fbfbfb;">
    <v-row gutter="0" class="ma-0 pa-0" fill-height>
      <v-col cols="12" md="5" class="d-flex align-center justify-start pa-0">
        <v-card elevation="1" class="px-16 card_login" max-width="450" width="450px" rounded="lg" style="height: 750px;">
          <v-img :src="Logo" max-width="60" class="mx-auto mb-4" />
          <div class="text-h5 font-weight-medium text-center mb-6">
            Введите свою почту
          </div>

          <v-form ref="formRef" v-model="valid" lazy-zvalidation>
            <v-text-field v-model="forgetdata.email" label="Ваш Email" type="email" dense class="mb-4"
              :rules="[rules.require, rules.email]" required full-width prepend-inner-icon="mdi-email-outline" />


            <v-btn :disabled="!valid" type="button" block large rounded="lg" class="mb-4 text-none text-white"
              style="background-color: #605BFF;" @click="submit">
              Отправить код
            </v-btn>

            <v-btn type="button" block large variant="text" class="text-none" @click="goLog">
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
import { isEmail } from 'validator'
import illustration from '@/assets/SignIn/Illustration.png'
import Logo from '@/assets/SignUp/Logo.png'
import { forgetreq } from '@/composables/auth.request'
import type { Forget } from '@/types/auth.type'

const router = useRouter()
const formRef = ref()
const valid = ref(false)

const forgetdata = reactive<Forget>({
  email: '',
})

const rules = {
  require: (v: string) => !!v || 'Поле обязательно для заполнения',
  email: (v: string) => isEmail(v) || 'Неверный формат email',
}

async function submit() {
  if (!formRef.value || !formRef.value.validate()) {
    return
  }
  try {
    await forgetreq(forgetdata)
    router.push('/reset-password-confirm')
  } catch (err) {
    console.error('Ошибка Входа:', err)
  }
}

function goLog() {
  router.push('/login')
}
</script>

<style scoped>
.card_login {
  padding-top: 200px;
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
