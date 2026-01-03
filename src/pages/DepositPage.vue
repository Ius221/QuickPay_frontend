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
        <div class="other-things">
          <form @submit.prevent="handleForm" method="post">
            <input
              type="text"
              inputmode="numeric"
              pattern="[0-9]*"
              @input="(e) => (e.target.value = e.target.value.replace(/\D/g, ''))"
              placeholder="Amount"
              required
            />
            <div class="btn-divivder">
              <DepositbtnSlot
                propName="Withdraw"
                link="/wallet/withdraw"
                isRout="true"
                subName="Deposit"
              />
            </div>
          </form>
        </div>
      </template>
      <template #second>
        <img :src="deposit" alt="" />
      </template>
    </DivideSlot>
  </GlassSlot>
</template>

<script setup>
import NavBar from '@/components/nav/NavBar.vue'
import DivideSlot from '@/components/Ui/DivideSlot.vue'
import GlassSlot from '@/components/Ui/GlassSlot.vue'
import deposit from '@/components/assets/deposit.png'
import DepositbtnSlot from '@/components/Ui/DepositbtnSlot.vue'
</script>

<style scoped>
#glass {
  margin: 5rem auto;
  padding-bottom: 0;
  overflow: hidden;
}
input {
  /* margin: ; */
  width: 55%;
  margin-top: 2rem;
  border: none;
  background-color: rgba(204, 204, 204, 0.4);
  border-radius: 12px;
  font-size: 2.4rem;
  font-family: inherit;
  color: #ccc;
  padding: 1.2rem 2.4rem;
}
input:focus {
  border: none;
  outline: none;
  border-color: #005240;
  box-shadow: 0 0 0 2px rgba(0, 82, 64, 0.2);
}
input::placeholder {
  color: #9ca3af;
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
