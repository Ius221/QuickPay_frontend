<template>
  <GlassSlot id="glass">
    <NavBar />
    <DivideSlot>
      <template #heading> withdraw</template>
      <template #description
        >Withdraw funds safely from your Quick Pay account. <br />
        All withdrawals are protected and securely processed.
      </template>
      <template #others>
        <form @submit.prevent="handleForm()" method="post">
          <div class="align-me">
            <InputSlot
              labelName="Amount"
              :isLabelShown="true"
              place="10,000"
              unique="one"
              v-model="amount"
            />
            <InputSlot
              unique="two"
              place="* * * *"
              labelName="Password"
              :isLabelShown="true"
              inputType="password"
              v-model="pass"
            />
          </div>
          <div class="btn-divivder">
            <DepositbtnSlot
              propName="Deposit"
              link="/wallet/deposit"
              :isRout="true"
              subName="Withdraw"
            />
          </div>
        </form>
      </template>
      <template #second>
        <img :src="withdraw" alt="withdraw" />
      </template>
    </DivideSlot>
  </GlassSlot>
</template>

<script setup>
import withdraw from '@/components/assets/withdraw.png'
import { toast } from 'vue3-toastify'
import { ref } from 'vue'
import api from '@/plugins/axiosConfig'
import { useUserStore } from '@/components/store/UserStore'

const pass = ref('')
const amount = ref('')
const userStore = useUserStore()
const username = userStore.getAllData.loginUser

async function handleForm() {
  try {
    const response = await api.post(`api/v1/transfer/self/withdraw?username=${username}`, {
      accNo: userStore.getAllData.accNo,
      money: amount.value,
      password: pass.value,
    })
    if (response.status === 200) showToast('Successfully Withdraw!!!', 'success')

    userStore.setUser.money = response.data.money
  } catch (err) {
    showToast('Failed!!!', 'error')
    console.log(err)
  }
}

function showToast(msg, status) {
  amount.value = ''
  pass.value = ''
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
img {
  width: 150%;
  margin-bottom: -4px;
  filter: drop-shadow(14px 14px 14px rgba(0, 0, 0, 0.25));
  padding-right: 5rem;
}

.btn-divivder {
  display: flex;
  gap: 13px;
}
.align-me {
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 17% 80%;
  align-items: center;
  row-gap: 2rem;
}
</style>
