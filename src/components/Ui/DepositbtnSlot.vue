<template>
  <button type="submit" v-if="isRout" :disabled="isDisabled" :class="{ 'diable-btn': isDisabled }">
    {{ subName }}
  </button>
  <router-link
    :to="link"
    :id="isRout ? 'customize-me' : null"
    v-if="noRoute === null"
    :class="{ 'diable-nav': isDisabled }"
    >{{ propName }}</router-link
  >
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
  noRoute: {
    type: String,
    default: null,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  subName: {
    type: String,
    require: false,
    default: null,
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
.diable-nav,
.diable-btn {
  cursor: not-allowed !important;
}
.diable-nav,
.diable-btn:hover {
  box-shadow: none !important;
  color: rgba(204, 204, 204, 0.7);
}
</style>
