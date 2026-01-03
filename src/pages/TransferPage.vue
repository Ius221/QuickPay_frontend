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
            <InputSlot labelName="Amount" isLabelShown="true" place="10,000" />
            <InputSlot labelName="Account" isLabelShown="true" place="0000" />
            <InputSlot
              place="* * * *"
              labelName="Password"
              isLabelShown="true"
              inputType="password"
            />
          </div>
          <div class="btn-divivder">
            <DepositbtnSlot subName="Withdraw" isRout="true" noRoute="value" />
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
