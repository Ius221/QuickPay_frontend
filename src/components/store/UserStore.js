import api from "@/plugins/axiosConfig";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserStore = defineStore('user', () => {
    // STATE
    let token = ref(null)
    let username = ref(null)
    let login = ref(false)
    let accNo = ref(0)
    let money = ref(0)
    let email = ref(null)

    // GETTER
    const getToken = computed(() => token.value)
    const isLoggedIn = computed(() => login.value)
    const getBalance = computed(() => money.value)
    const getAllData = computed(() => {
        return {
            loginUser: username.value,
            isLoggedIn: login.value,
            jwtToken: token.value,
            accNo: accNo.value,
            availableMoney: money.value,
            email: email.value
        }
    })

    // ACTIONS
    function setUser(data) {
        token.value = data.token
        username.value = data.username
        accNo.value = data.accNo
        money.value = data.money
        login.value = true
        email.value = data.email
    }
    function logout() {
        login.value = false
        token.value = null
        username.value = null
        accNo.value = null
        money.value = null
        email.value = null
    }
    async function fetchBalance() {
        if (!username.value) return
        try {
            const response = await api.get(`/show/balance?accNo=${accNo.value}`);
            money.value = response.data
            return response.data
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    return { token, username, isLoggedIn, accNo, getToken, setUser, money, logout, getAllData, login, fetchBalance, getBalance, email }
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
