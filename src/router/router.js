import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/auth/HomePage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'
import SignupPage from '@/components/auth/SignupPage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
