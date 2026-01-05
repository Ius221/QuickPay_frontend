<template>
  <GlassSlot id="glass">
    <NavBar></NavBar>
    <divide-slot>
      <template #heading>{{ currUserObj.username }}</template>
      <template #description>
        Your money, your control — all in one place. <br />
        Track balances, transactions, account activity with ease.
      </template>
      <template #others>
        <div class="own-custom">
          <DepositbtnSlot propName="Deposit" link="/wallet/deposit" />
          <div class="acc-details">
            <div class="acc-no--details">
              <div class="left">
                <i class="material-icons custom-size--icon"> assignment_ind </i>
              </div>
              <div class="right">
                <p class="data">{{ currUserObj.accNo }}</p>
                <p class="support-data">Account</p>
              </div>
            </div>
            <div class="acc-no--details">
              <div class="left">
                <i class="material-icons custom-size--icon2"> currency_rupee </i>
              </div>
              <div class="right">
                <p class="data">{{ currUserObj.availableMoney }}</p>
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
import dashboard from '@/components/assets/dashboard.png'
import { useUserStore } from '@/components/store/UserStore'

const currUser = useUserStore()

const currUserObj = {
  username: currUser.getAllData.loginUser,
  accNo: currUser.getAllData.accNo,
  availableMoney: formatINR(currUser.getAllData.availableMoney),
}

function formatINR(amount) {
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
