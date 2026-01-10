<template>
  <GlassSlot id="glass">
    <NavBar />
    <DivideSlot>
      <template #heading>transfer</template>
      <template #description>
        Send money to another account in just a few steps. <br />
        Quick Pay makes transfers easy and stress-free.
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
              :isDisabled="isSubmit"
            />
            <InputSlot
              labelName="Account"
              :isLabelShown="true"
              place="0000"
              unique="two"
              v-model="accno"
              :isDisabled="isSubmit"
            />
            <InputSlot
              unique="three"
              place="* * * *"
              labelName="Password"
              :isLabelShown="true"
              inputType="password"
              v-model="pass"
              :isDisabled="isSubmit"
            />
          </div>
          <loading-slot v-if="isSubmit" />
          <div class="btn-divivder" v-else>
            <DepositbtnSlot subName="Send" :isRout="true" noRoute="value" />
          </div>
        </form>
      </template>
      <template #second>
        <img :src="transfer" alt="withdraw" />
      </template>
    </DivideSlot>
  </GlassSlot>
</template>

<script setup>
import transfer from '@/components/assets/transfer.png'
import { useUserStore } from '@/components/store/UserStore'
import api from '@/plugins/axiosConfig'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

let isSubmit = ref(false)
const amount = ref('')
const accno = ref('')
const pass = ref('')
const userStore = useUserStore()

const handleForm = async () => {
  try {
    isSubmit.value = true
    const response = await api.post(`/transfer/other`, {
      accNo: accno.value,
      money: amount.value,
      password: pass.value,
      email: userStore.getAllData.email,
    })

    if (response.status === 200) callToast('Successfully Transfered!!!', 'success')
  } catch (err) {
    callToast('Failed!!!', 'error')
    console.log(err)
  } finally {
    isSubmit.value = false
  }
}

function callToast(msg, status) {
  amount.value = ''
  accno.value = ''
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
  /* padding-right: 5rem; */
}
.align-me {
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 17% 80%;
  align-items: center;
  row-gap: 2rem;
}
form {
  margin-bottom: 8rem;
}
</style>
