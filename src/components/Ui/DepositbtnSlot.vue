<template>
  <button type="submit" v-if="isRout">{{ subName }}</button>
  <router-link :to="link" :id="isRout ? 'customize-me' : null">{{ propName }}</router-link>
</template>

<script setup>
defineProps({
  propName: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    require: true,
  },
  isRout: {
    type: Boolean,
    require: false,
    default: false,
  },
  subName: {
    type: String,
    require: false,
    default: false,
  },
})
</script>

<style scoped>
a,
button {
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
a:hover,
button:hover {
  box-shadow: #28623a 0 0 12px 4px;
  color: rgb(204, 204, 204);
}
#customize-me {
  /* background-color: transparent; */
  background: none;
}
#customize-me:hover {
  box-shadow: none;
}
</style>
<!-- 9771485080 sadhu baba -->
