<template>
  <GlassBox style="width: 60%">
    <HeadingSlot class="heading"> create account </HeadingSlot>
    <form class="login-form" method="POST" @submit.prevent="formSubmit">
      <div class="form-group">
        <label for="username">Username<span>*</span></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          v-model="username"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email<span>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password<span>*</span></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          v-model="pass"
          required
        />
      </div>
      <div class="loader" v-if="isLoading"></div>
      <div class="button-container" v-else>
        <router-link to="/login" class="btn btn-login">&larr; Login </router-link>
        <button type="submit" class="btn btn-signup">Submit</button>
      </div>
    </form>
  </GlassBox>
</template>

<script setup>
import { toast } from 'vue3-toastify'
import { onMounted, ref } from 'vue'
import GlassBox from '../Ui/GlassSlot.vue'
import HeadingSlot from '../Ui/HeadingSlot.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/UserStore'

let username = ref(null)
let email = ref(null)
let pass = ref(null)
let isLoading = ref(false)
const router = useRouter()
const userStore = useUserStore()

const formSubmit = async () => {
  isLoading.value = true
  if (!username.value || !pass.value) alert('Add Values!!!')
  await fetch('http://localhost:8080/api/v2/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      username: username.value,
      password: pass.value,
      email: email.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (res) => {
      console.log(res)
      if (!res.ok) {
        const err = await res.json()
        throw err
      }
      return res.json()
    })
    .then((res) => {
      console.log(res)
      toast('Account created Successfully', {
        theme: 'auto',
        type: 'success',
        autoClose: 3000,
        dangerouslyHTMLString: true,
      })
      setTimeout(() => router.replace('/login'), 4000)
    })
    .catch((err) => {
      let msg = ref(null)
      console.log(err)
      if (err.error) {
        console.log(err.error.split(' ').slice(4).join(' '))
        msg.value = err.error.split(' ').slice(4).join(' ')
      }
      toast(err.message || msg, {
        theme: 'auto',
        type: 'error',
        autoClose: 4000,
        dangerouslyHTMLString: true,
      })
    })
    .finally(() => clearRecord())
}

const clearRecord = () => {
  username.value = ''
  pass.value = ''
  email.value = ''
  isLoading.value = false
}
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
span {
  color: rgb(255, 50, 0);
  font-size: 22px;
  margin-left: 4px;
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
  letter-spacing: 2px;
  font-family: inherit;
}

.form-group input::placeholder {
  color: rgba(241, 247, 246, 0.5);
}

.form-group input:focus {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(40, 98, 58, 0.6);
  box-shadow: 0 0 0 3px rgba(40, 98, 58, 0.2);
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
  text-align: center;
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

/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
  margin: 10px auto;
  margin-top: 50px;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
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
