import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/components/store/UserStore'

import HomePage from '@/components/auth/HomePage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'
import SignupPage from '@/components/auth/SignupPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import ErrorPage from '@/pages/ErrorPage.vue'
import DepositPage from '@/pages/DepositPage.vue'
import WithdrawPage from '@/pages/WithdrawPage.vue'
import TransferPage from '@/pages/TransferPage.vue'
import TransactionPage from '@/pages/TransactionPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { guestOnly: true, requiresAuth: false }
  },
  {
    path: '/home',
    component: HomePage,
    meta: { guestOnly: true }
  },
  {
    path: '/login',
    component: LoginPage,
    meta: { guestOnly: true }
  },
  {
    path: '/signup',
    component: SignupPage,
    meta: { guestOnly: true }
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/wallet', children: [
      {
        path: 'deposit',
        component: DepositPage,
        meta: { requiresAuth: true }
      },
      {
        path: 'withdraw',
        component: WithdrawPage,
        meta: { requiresAuth: true }
      },
    ]
  },
  {
    path: '/transfer',
    component: TransferPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/transactions',
    component: TransactionPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/:err',
    component: ErrorPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (!userStore.isLoggedIn) {
    if (to.meta.requiresAuth) next('/login');
    else next()
  } else {
    if (to.meta.guestOnly) next('/dashboard')
    else next
  }
  next();
})

export default router
