import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ForgetPage.vue'),
    },
    {
      path: '/reset-password-confirm',
      name: 'reset-password-confirm',
      component: () => import('../views/ForgetPageConfirm.vue'),
    },
    {
      path: '/settings',
      name: 'profile-settings',
      component: () => import('../views/ProfilePage.vue'),
    },
  ],
})

export default router
