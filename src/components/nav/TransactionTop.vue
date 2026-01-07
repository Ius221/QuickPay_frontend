<template>
  <div class="header">
    <div class="child item-1">SL</div>
    <div class="child item-2">Name</div>
    <div class="child item-3">Account Number</div>
    <div class="child item-4">Amount</div>
    <div class="child item-5">Status</div>
    <div class="child item-6">Time</div>
  </div>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: rgba(39, 94, 57, 0.5);
  border-bottom: 1px solid #9999;
  /* text-align: center; */
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
  padding: 6px 0;
  padding-left: 2rem;

  letter-spacing: 1.2px;
  color: #ccc;
  font-size: 2.4rem;
  align-self: center;
  font-family: 'Alumni Sans', sans-serif;
}
</style>
