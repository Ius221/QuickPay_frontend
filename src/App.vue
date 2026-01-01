<template>
  <nav-bar />
  <router-view />
</template>

<script setup>
import NavBar from '@/components/nav/NavBar.vue'
import 'vue3-toastify/dist/index.css'
</script>

<style>
.Toastify__toast-body {
  font-size: 1.8rem; /* Or 18px, 20px, etc. */
  font-family: 'Roboto Flex', sans-serif;
  letter-spacing: 2px;
  gap: 1rem;
}
/* - Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  /* font-size: 10px; */

  /* 10px / 16px = 0.625 = 62.5% */
  /* Percentage of user's browser font-size setting */
  font-size: 62.5%;
}
body {
  background-image: linear-gradient(to right bottom, #0f2027, #023037, #004140, #005240, #28623a);
  max-width: 1500px;
  padding: 0 30px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; /* optional: cool parallax vibe */
  color: #f1f7f6;
  font-family: 'Roboto Flex', sans-serif;
}
</style>
