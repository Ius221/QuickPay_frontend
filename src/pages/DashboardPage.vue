<template>
  <GlassSlot id="glass">
    <NavBar></NavBar>
    <divide-slot>
      <template #heading>ayush gupta</template>
      <template #description>
        Your money, your control — all in one place. <br />
        Track balances, transactions, account activity with ease.
      </template>
      <template #others>
        <div class="own-custom">
          <router-link to="/wallet/deposit">
            Deposit
            <i class="material-icons">chevron_right</i>
          </router-link>
          <div class="acc-details">
            <div class="acc-no--details">
              <div class="left">
                <i class="material-icons custom-size--icon"> assignment_ind </i>
              </div>
              <div class="right">
                <p class="data">989898</p>
                <p class="support-data">Account</p>
              </div>
            </div>
            <div class="acc-no--details">
              <div class="left">
                <i class="material-icons custom-size--icon2"> currency_rupee </i>
              </div>
              <div class="right">
                <p class="data">{{ formatINR(898989) }}</p>
                <p class="support-data">Balance</p>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #second>
        <img :src="dashboard" alt="" />
      </template>
    </divide-slot>
  </GlassSlot>
</template>

<script setup>
import NavBar from '@/components/nav/NavBar.vue'
import GlassSlot from '@/components/Ui/GlassSlot.vue'
import dashboard from '@/components/assets/dashboard.png'
import DivideSlot from '@/components/Ui/DivideSlot.vue'

const formatINR = (amount) => {
  return new Intl.NumberFormat('en-IN').format(amount)
}
</script>

<style scoped>
#glass {
  margin: 5rem auto;
  padding-bottom: 0;
  overflow: hidden;
}
.own-custom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 45%;
}
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
}
.custom-size--icon,
.custom-size--icon2 {
  font-size: 5.2rem;
  color: #ccc;
  opacity: 0.7;
}
.custom-size--icon2 {
  font-size: 4.6rem !important;
}
.acc-details {
  display: flex;
  gap: 64px;
}
.acc-no--details {
  display: flex;
  gap: 6px;
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.data {
  font-size: 2rem;
  color: #eee;
}
.support-data {
  font-size: 1.6rem;
  color: #ccc;
  opacity: 0.7;
}
.left {
  display: flex;
  align-items: center;
}
img {
  width: 150%;
  margin-bottom: -4px;
  filter: drop-shadow(14px 14px 14px rgba(0, 0, 0, 0.25));
}
</style>
