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
            <InputSlot labelName="Amount" isLabelShown="true" place="10,000" />
            <InputSlot
              place="* * * *"
              labelName="Password"
              isLabelShown="true"
              inputType="password"
            />
          </div>
          <div class="btn-divivder">
            <DepositbtnSlot
              propName="Deposit"
              link="/wallet/deposit"
              isRout="true"
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
