import { defineStore } from "pinia";
import { ref, computed } from "vue";


export const useUserStore = defineStore('user', () => {
    // STATE
    let token = ref(null)
    let username = ref(null)
    let isLoggedIn = ref(false)
    let accNo = ref(0)
    let money = ref(0)

    // GETTER
    const getToken = computed(() => token.value)


    // ACTIONS
    function setUser(data) {
        token.value = data.token
        username.value = data.username
        accNo.value = data.accNo
        money.value = data.money
        isLoggedIn.value = true
    }

    function logout() {
        isLoggedIn.value = false
        token.value = null
        username.value = null
        accNo.value = null
        money.value = null
    }

    return { token, username, isLoggedIn, accNo, getToken, setUser, money, logout }
}, {
    persist: true
})