<template>
  <v-main class="fill-height d-flex align-center justify-center">
    <ForgetPasswordConfirm />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ForgetPasswordConfirm from '@/components/ForgetPasswordConfirm.vue';

export default defineComponent({
  name: 'ForgetPageConfirm',
  components: { ForgetPasswordConfirm }
})
</script>

<style scoped></style>