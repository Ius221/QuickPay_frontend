<template>
  <GlassSlot id="glass">
    <NavBar />
    <h2>Wallet</h2>
  </GlassSlot>
</template>

<script setup>
import NavBar from '@/components/nav/NavBar.vue'
import GlassSlot from '@/components/Ui/GlassSlot.vue'
</script>

<style scoped>
#glass {
  margin: 5rem auto;
}
</style>
