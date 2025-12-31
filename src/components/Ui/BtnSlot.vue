<template>
  <div class="button-container">
    <router-link to="/login" class="btn btn-login">
      <slot name="login"></slot>
    </router-link>
    <router-link to="/signup" class="btn btn-signup">
      <slot name="signup"></slot>
    </router-link>
  </div>
</template>

<style scoped>
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
a {
  text-decoration: none;
  text-align: center;
}
@media (max-width: 768px) {
  .button-container {
    flex-direction: column;
  }

  .btn {
    max-width: 100%;
  }
}
</style>
