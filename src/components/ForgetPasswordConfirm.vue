<template>
  <v-container
    fluid
    class="pa-0 d-flex align-center justify-center"
    style="min-height: 100vh; background-color: #fbfbfb;"
  >
    <v-row gutter="0" class="ma-0 pa-0" fill-height>
      <v-col
        cols="12"
        md="5"
        class="d-flex align-center justify-start pa-0"
      >
        <v-card
          elevation="1"
          class="px-16 card_login"
          max-width="450"
          width="450px"
          rounded="lg"
          style="height: 650px;"
        >
          <v-img :src="Logo" max-width="60" class="mx-auto mb-4" />
          <div class="text-h5 font-weight-medium text-center mb-6">
            Введите новый пароль
          </div>

          <v-form ref="formRef" v-model="valid" lazy-validation>
            <!-- Новое поле пароля -->
            <v-text-field
              v-model="form.new_password"
              label="Новый пароль"
              type="password"
              dense
              :rules="[rules.required, rules.min]"
              required
              class="mb-4"
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
              Сменить пароль
            </v-btn>

            <v-btn
              type="button"
              block
              large
              variant="text"
              class="text-none"
              @click="goLog"
            >
              Войти
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="7"
        class="d-none d-md-flex align-center justify-center"
      >
        <v-img :src="illustration" contain max-width="700" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import illustration from '@/assets/SignIn/Illustration.png'
import Logo from '@/assets/SignUp/Logo.png'
import { confirmreq } from '@/composables/auth.request'
import type { Confirm } from '@/types/auth.type'

const router = useRouter()
const route = useRoute()

const formRef = ref()
const valid = ref(false)

// расширяем Confirm, добавив поле для повтора пароля
const form = reactive<Confirm & { confirm_password: string }>({
  uid: '',
  token: '',
  new_password: '',
  confirm_password: '',
})

const rules = {
  required: (v: string) => !!v || 'Поле обязательно для заполнения',
  min: (v: string) => v.length >= 6 || 'Минимум 6 символов',
  match: (v: string) =>
    v === form.new_password || 'Пароли должны совпадать',
}

onMounted(() => {
  // Забираем uid и token из query-параметров
  const { uid, token } = route.query
  form.uid = typeof uid === 'string' ? uid : ''
  form.token = typeof token === 'string' ? token : ''
})

async function submit() {
  if (!formRef.value || !formRef.value.validate()) return

  try {
    // собираем payload без confirm_password
    const payload: Confirm = {
      uid: form.uid,
      token: form.token,
      new_password: form.new_password,
    }
    await confirmreq(payload)
    // после успешной смены редирект на страницу логина
    router.push('/login')
  } catch (err) {
    console.error('Ошибка смены пароля:', err)
  }
}

function goLog() {
  router.push('/login')
}
</script>

<style scoped>
.card_login {
  padding-top: 100px;
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

