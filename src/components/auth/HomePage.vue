<template>
  <GlassBox>
    <div class="content-row">
      <div class="left-content">
        <HeadingSlot> Money Moves <br /><span>at Lightning Speed</span> </HeadingSlot>
        <p>
          QuickPay is a virtual wallet that lets you transfer money, deposit, withdraw, and track
          transactions in seconds.
        </p>
      </div>
      <div class="right-content">
        <img :src="fastMoney" alt="fastMoney" />
      </div>
    </div>
    <div class="button-container">
      <LoginSlot />
      <SignupSlot />
    </div>
  </GlassBox>
</template>

<script setup>
import fastMoney from '@/components/assets/fastMoney.png'
import GlassBox from '../Ui/GlassSlot.vue'
import HeadingSlot from '../Ui/HeadingSlot.vue'
import LoginSlot from '../Ui/LoginSlot.vue'
import SignupSlot from '../Ui/SignupSlot.vue'
</script>

<style scoped>
.content-row {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
  align-items: center;
  margin-bottom: 40px;
}
.button-container {
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 6rem;
}
.left-content {
  padding-right: 20px;
}

h1 span {
  letter-spacing: -0.5px;
  text-transform: capitalize;
  font-size: 7.2rem;
  font-weight: 500;
  color: #fff;
}
.left-content p {
  font-weight: 300;
  font-size: 2.6rem;
  letter-spacing: 3px;
  margin-top: 50px;
  line-height: 1.4;
  color: #ccc;
  opacity: 0.8;
}

.right-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 80%;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .crystal-container {
    padding: 35px 25px;
  }

  .content-row {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .left-content {
    padding-right: 0;
  }

  .left-content h1 {
    font-size: 2.2rem;
  }

  .left-content p {
    text-align: center;
  }
}
</style>
