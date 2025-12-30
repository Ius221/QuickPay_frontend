import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/auth/HomePage.vue'

const routes = [
  { path: '/', component: HomePage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
