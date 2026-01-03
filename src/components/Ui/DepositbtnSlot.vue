<template>
  <router-link :to="link">{{ propName }}</router-link>
</template>

<script setup>
defineProps({ propName: String, link: String })
</script>

<style scoped>
a {
  background: linear-gradient(to left, #005240, #28623a);
  color: rgba(204, 204, 204, 0.7);
  border: 1px solid #848484;
  padding: 16px 32px;
  border-radius: 40px;
  cursor: pointer;
  font-size: 2.4rem;
  letter-spacing: 2px;
  margin-top: 24px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 40px;
  text-decoration: none;
  width: fit-content;
  transition: all 0.3s;
}
a:hover {
  box-shadow: #28623a 0 0 12px 4px;
  color: rgb(204, 204, 204);
}
</style>
