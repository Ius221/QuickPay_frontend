import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useUserStore = defineStore('user', () => {
    // STATE
    let token = ref(null)
    let username = ref(null)
    let isLoggedIn = ref(false)
    let accNo = ref(0)
    let money = ref(0)
    let csrf = ref('')

    // GETTER
    const getToken = computed(() => token.value)
    const getAllData = computed(() => {
        return {
            loginUser: username.value,
            isLoggedIn: isLoggedIn.value,
            jwtToken: token.value,
            accNo: accNo.value,
            availableMoney: money.value,
            csrfToken: csrf.value,
        }
    })


    // ACTIONS
    function setUser(data) {
        token.value = data.token
        username.value = data.username
        accNo.value = data.accNo
        money.value = data.money
        isLoggedIn.value = true
    }
    function setCsrf(token) {
        csrf.value = token
    }

    function logout() {
        isLoggedIn.value = false
        token.value = null
        username.value = null
        accNo.value = null
        money.value = null
    }

    return { token, username, isLoggedIn, accNo, getToken, setUser, money, logout, csrf, getAllData, setCsrf }
}, {
    persist: true
})

/*
Your money, your control — all in one place.
Track balances, transactions, and account activity with ease.

Welcome back to your secure banking dashboard.
Here’s a clear overview of your account and recent activity.

Your financial details, just the way you need them.
Clear, secure, and always up to date.

Good to see you again — we’ve got your account ready.
Take a quick look at your balance and recent activity.

A smarter way to manage your finances.
Everything you need, right at your fingertips.




*/
