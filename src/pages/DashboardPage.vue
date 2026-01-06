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
                <div class="loader" v-if="isLoading"></div>
                <p class="data" v-else>{{ currUser.getBalance }}</p>
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
import { computed, onMounted, ref } from 'vue'

const currUser = useUserStore()
const isLoading = ref(true)

const currUserObj = computed(() => {
  return {
    username: currUser.getAllData.loginUser,
    accNo: currUser.getAllData.accNo,
    availableMoney: formatINR(currUser.getAllData.availableMoney),
  }
})

onMounted(async () => {
  try {
    await currUser.fetchBalance()
    console.log(currUser.getBalance, currUser.isLoggedIn)
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
})

// const currUserObj = {
//   username: currUser.getAllData.loginUser,
//   accNo: currUser.getAllData.accNo,
//   availableMoney: formatINR(currUser.getAllData.availableMoney),
// }

// onMounted(() => {
//   currUserObj
// })

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
.loader {
  width: 50px;
  aspect-ratio: 4.5;
  --_g: no-repeat radial-gradient(circle closest-side, #cccc 90%, #0000);
  background:
    var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
  background-size: calc(100% / 3) 90%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
  33% {
    background-size:
      calc(100% / 3) 0%,
      calc(100% / 3) 100%,
      calc(100% / 3) 100%;
  }
  50% {
    background-size:
      calc(100% / 3) 100%,
      calc(100% / 3) 0%,
      calc(100% / 3) 100%;
  }
  66% {
    background-size:
      calc(100% / 3) 100%,
      calc(100% / 3) 100%,
      calc(100% / 3) 0%;
  }
}
</style>
