<template>
  <GlassBox style="width: 60%;">
    <HeadingSlot class="heading"> Login Here </HeadingSlot>
    <form class="login-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
        />
      </div>
    </form>
  </GlassBox>
</template>

<script setup>
import GlassBox from '../Ui/GlassSlot.vue'
import HeadingSlot from '../Ui/HeadingSlot.vue'
</script>

<style scoped>
.heading {
  font-size: 5.6rem;
  text-decoration: rgba(170, 170, 170, 0.5) underline 1px;
  text-underline-offset: 6px;
}
.login-form {
  margin-top: 5rem;
  width: 100%;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 2.4rem;
  font-weight: 300;
  color: #f1f7f6;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
  letter-spacing: 2px;
  padding-left: 8px;
}

.form-group input {
  width: 100%;
  padding: 14px 18px;
  font-size: 2rem;
  font-family: 'Roboto Flex', sans-serif;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #f1f7f6;
  outline: none;
  transition: all 0.3s ease;
}

.form-group input::placeholder {
  color: rgba(241, 247, 246, 0.5);
}

.form-group input:focus {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(40, 98, 58, 0.6);
  box-shadow: 0 0 0 3px rgba(40, 98, 58, 0.2);
}
</style>
