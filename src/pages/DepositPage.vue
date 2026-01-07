<template>
  <GlassSlot id="glass">
    <NavBar />
    <DivideSlot>
      <template #heading>deposit</template>
      <template #description
        >Deposit money into your Quick Pay account <br />
        quickly and securely.
      </template>
      <template #others>
        <form @submit.prevent="handleForm" method="post">
          <div class="use-me">
            <input-slot unique="one" v-model="amount" />
          </div>
          <div class="btn-divivder">
            <DepositbtnSlot
              propName="Withdraw"
              link="/wallet/withdraw"
              :isRout="true"
              subName="Deposit"
            />
          </div>
        </form>
      </template>
      <template #second>
        <img :src="deposit" alt="" />
      </template>
    </DivideSlot>
  </GlassSlot>
</template>

<script setup>
import deposit from '@/components/assets/deposit.png'
import { useUserStore } from '@/components/store/UserStore'
import api from '@/plugins/axiosConfig'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const userStore = useUserStore()
const userName = userStore.getAllData.loginUser
const amount = ref('')

async function handleForm() {
  try {
    const response = await api.post(`/transfer/self/deposit`, {
      accNo: userStore.getAllData.accNo,
      money: amount.value,
      email: userStore.getAllData.email,
    })

    if (response.status === 200) callToast('Successfully Deposited!!!', 'success')

    userStore.setUser.money = response.data.money
  } catch (err) {
    callToast('Failed!!!', 'error')
    console.log(err)
  }
}

function callToast(msg, status) {
  amount.value = ''
  toast(msg, {
    theme: 'auto',
    type: status,
    autoClose: 3000,
    dangerouslyHTMLString: true,
  })
}
</script>

<style scoped>
#glass {
  margin: 5rem auto;
  padding-bottom: 0;
  overflow: hidden;
}
.use-me {
  margin-top: 3rem;
  margin-bottom: 1rem;
}
img {
  width: 150%;
  margin-bottom: -4px;
  filter: drop-shadow(14px 14px 14px rgba(0, 0, 0, 0.25));
}
.btn-divivder {
  display: flex;
  gap: 13px;
}
</style>
