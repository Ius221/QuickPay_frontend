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
import { ref } from 'vue'

const amount = ref('')

function handleForm() {
  console.log(amount.value)
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
