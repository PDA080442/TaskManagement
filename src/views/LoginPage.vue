<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <LoginForm />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'

export default defineComponent({
  name: 'LoginPage',
  components: { LoginForm },
})
</script>

<style scoped>
.v-main {
  padding: 0;
}
</style>
