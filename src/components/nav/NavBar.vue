<template>
  <div class="main-container">
    <h2>quick pay</h2>
    <div class="nav-links">
      <router-link to="/dashboard">Home</router-link>
      <router-link to="/wallet/deposit" :class="{ active: $route.path.startsWith('/wallet') }"
        >Wallet</router-link
      >
      <router-link to="/transfer">Transfer</router-link>
      <router-link to="/transactions">Transactions</router-link>
    </div>
    <button class="logout" @click="logoutMe">Logout</button>
  </div>
</template>

<script setup>
import router from '@/router/router'
import { useUserStore } from '../store/UserStore'

const userStore = useUserStore()

const logoutMe = () => {
  userStore.logout()
  router.replace('/login')
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h2 {
  text-transform: uppercase;
  font-family: 'Alumni Sans', sans-serif;
  font-size: 4.8rem;
  font-weight: 400;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 4.2rem;
}
a {
  font-size: 2.4rem;
  color: #ccc;
  opacity: 0.5;
  text-decoration: none;
  transition: all 0.3s;
}
a:hover {
  opacity: 0.8;
}

.active {
  color: #ccc;
  opacity: 1 !important;
  text-decoration: underline;
  text-underline-offset: 6px;
}
.logout {
  background-color: #f7a1a1;
  padding: 12px 24px;
  border: none;
  border-radius: 1.5rem;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: rgb(51, 51, 51) 4px 4px 6px;
}
.logout:hover {
  background-color: #df9292;
}
</style>
