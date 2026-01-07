<template>
  <glass-slot id="glass">
    <nav-bar />
    <div class="outer-all">
      <TransactionTop />
      <div v-if="isLoading" class="waiting">
        <div class="loader"></div>
        <p>Loading...</p>
      </div>
      <IndvTransaction
        v-else
        v-for="(item, abc) in trans"
        :key="abc"
        :id="item.id"
        :name="item.fullName"
        :accno="item.accNo"
        :amount="item.amount"
        :status="item.status"
        :time="item.time"
      />
    </div>
    <!-- <div class="page-no">
      <router-link to="#" class="material-icons" id="btn">chevron_left</router-link>
      <div class="num active">1</div>
      <div class="num">2</div>
      <div class="num">3</div>
      <div class="other">...</div>
      <div class="num">20</div>
      <router-link to="#" class="material-icons" id="btn">chevron_right</router-link>
    </div> -->
  </glass-slot>
</template>

<script setup>
import TransactionTop from '@/components/nav/TransactionTop.vue'
import IndvTransaction from '@/components/Ui/IndvTransaction.vue'
import api from '@/plugins/axiosConfig'
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/components/store/UserStore'

const userStore = useUserStore()
const trans = []
const isLoading = ref(true)

onMounted(async () => {
  try {
    const response = await api.get(
      `show/transaction?accNo=${userStore.getAllData.accNo}&sortOrder=descending`,
    )

    // const tempObj = {
    //   status: 'DEPOSIT',
    //   money: 100.0,
    //   senderName: 'Self',
    //   senderAccNo: '1005',
    //   time: '2026-01-08T00:04:20.780157',
    // }
    response.data.content.forEach((e, num) => {
      const tempObj = {
        id: num + 1,
        fullName: e.senderName,
        accNo: e.senderAccNo,
        amount: e.money,
        status: e.status,
        time: e.time,
      }
      trans.push(tempObj)
      console.log(tempObj)
    })
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
#glass {
  margin: 5rem auto;
  overflow: hidden;
}
.outer-all {
  margin-top: 5rem;
  overflow: hidden;
  border-radius: 12px;
}
/*
.page-no {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  gap: 2rem;
  margin-top: 3rem;
}
.other,
.num {
  border: 1px solid #3333;
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9997;
  border-radius: 8px;
  transition: all 0.3s;
  color: #999;
}
.other {
  background-color: transparent;
  border: none;
}
.active {
  border-color: #fff5;
  background-color: #9999;
  color: #fff;
}
#btn {
  font-size: 4.2rem;
  color: #cccc;
  cursor: pointer;
  transition: all 0.3s;
  background-color: transparent;
  text-decoration: none;
}
#btn:hover {
  color: #fff;
}
  */

/* Loading  */
.waiting {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 7rem;
}

.waiting p {
  font-size: 2.4rem;
  color: #ccc;
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #cccc #0000;
  animation: l1 1s infinite;
}
@keyframes l1 {
  to {
    transform: rotate(0.5turn);
  }
}
</style>
