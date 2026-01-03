import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/auth/HomePage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'
import SignupPage from '@/components/auth/SignupPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'
import DepositPage from '@/pages/DepositPage.vue'
import WithdrawPage from '@/pages/WithdrawPage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { path: '/dashboard', component: DashboardPage },
  {
    path: '/wallet', children: [
      { path: 'deposit', component: DepositPage },
      { path: 'withdraw', component: WithdrawPage },
    ]
  },
  { path: '/:err', component: ErrorPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
