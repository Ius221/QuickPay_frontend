<template>
  <div
    class="header"
    :class="status.toLowerCase() == 'withdraw' || status.toLowerCase() == 'send' ? 'withdraw' : ''"
  >
    <div class="child item-1">{{ id }}</div>
    <div class="child item-2">{{ name }}</div>
    <div class="child item-3">{{ accno }}</div>
    <div class="child item-4">{{ formatINR(amount) }}</div>
    <div class="child item-5">{{ status }}</div>
    <div class="child item-6 time">{{ formatDateTime(time) }}</div>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  name: String,
  accno: Number,
  amount: Number,
  status: String,
  time: String,
})

function formatDateTime(input) {
  if (!input) return ''

  const date = new Date(input)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}`
}

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN').format(amount)
}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-bottom: 1px solid #3334;
  /* background-color: #f004; */
  background-color: rgba(125, 232, 125, 0.2);
}
.withdraw {
  background-color: rgba(232, 125, 125, 0.4);
}
.item-2 {
  grid-column: 2/5;
}
.item-3,
.item-4,
.item-5,
.item-6 {
  grid-column: span 2;
}
.child {
  padding: 8px 0;
  padding-left: 2rem;
  letter-spacing: 1.2px;
  color: #cccc;
  font-size: 2.4rem;
  text-transform: capitalize;
  font-family: 'Roboto Flex', sans-serif;
  border-right: 1px solid #3334;
}
.time {
  font-size: 1.6rem !important;
  border-right: none !important;
  display: flex;
  align-items: center;
}
</style>
