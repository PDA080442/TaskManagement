<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <ForgetPassword />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ForgetPassword from '@/components/ForgetPassword.vue';

export default defineComponent({
  name: 'ForgetPage',
  components: { ForgetPassword }
})
</script>

<style scoped></style>