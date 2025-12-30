<template>
  <div class="crystal-container">
    <div class="content-row">
      <div class="left-content">
        <h1>Money Moves <br /><span>at Lightning Speed</span></h1>
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
      <button class="btn btn-login">Login</button>
      <button class="btn btn-signup">Sign Up</button>
    </div>
  </div>
</template>

<script setup>
import fastMoney from '@/components/assets/fastMoney.png'
</script>

<style scoped>
.crystal-container {
  width: 100%;
  max-width: 1000px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  padding: 50px;

  margin: 10rem auto;
}

.content-row {
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 30px;
  align-items: center;
  margin-bottom: 40px;
}

.left-content {
  padding-right: 20px;
}

.left-content h1 {
  text-transform: uppercase;
  font-family: Alumni Sans Pinstripe;
  font-size: 3.2rem;
  font-weight: 100;
  color: #f1f7f6;
  margin-bottom: 20px;
  line-height: 0.9;
  letter-spacing: 2px;
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

.button-container {
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 6rem;
}

.btn {
  flex: 1;
  max-width: 220px;
  padding: 15px 40px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Roboto Flex', sans-serif;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-login {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  font-size: 2.4rem;
  font-weight: 200;
  color: #ccc;
}

.btn-login:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  color: #fff;
}

.btn-signup {
  background: linear-gradient(135deg, #28623a, #005240);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  font-size: 2.4rem;
  font-weight: 200;
  color: #ccc;
}

.btn-signup:hover {
  background: linear-gradient(135deg, #2f7043, #00614d);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(40, 98, 58, 0.5);
  color: #fff;
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

  .button-container {
    flex-direction: column;
  }

  .btn {
    max-width: 100%;
  }
}
</style>
