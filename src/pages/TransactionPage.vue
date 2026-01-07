<template>
  <glass-slot id="glass">
    <nav-bar />
    <div class="outer-all">
      <TransactionTop />
      <IndvTransaction
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

const trans = [
  {
    id: 1,
    fullName: 'Ayush Gupta',
    accNo: 5732,
    amount: 1840.5,
    status: 'deposit',
    time: '2026-01-06T08:22:41.128904',
  },
  {
    id: 2,
    fullName: 'Neha Verma',
    accNo: 9146,
    amount: 620.75,
    status: 'deposit',
    time: '2026-01-06T15:47:09.774221',
  },
  {
    id: 3,
    fullName: 'Rohit Sharma',
    accNo: 2065,
    amount: 4300.0,
    status: 'send',
    time: '2026-01-06T11:03:58.559812',
  },
  {
    id: 4,
    fullName: 'Priya Singh',
    accNo: 7891,
    amount: 980.25,
    status: 'withdraw',
    time: '2026-01-06T18:36:14.330902',
  },
  {
    id: 5,
    fullName: 'Karan Mehta',
    accNo: 4429,
    amount: 7600.9,
    status: 'deposit',
    time: '2026-01-06T09:14:27.019883',
  },
  {
    id: 6,
    fullName: 'Ananya Iyer',
    accNo: 6583,
    amount: 150.0,
    status: 'deposit',
    time: '2026-01-06T16:52:03.654301',
  },
  {
    id: 7,
    fullName: 'Vikram Joshi',
    accNo: 8314,
    amount: 2750.4,
    status: 'withdraw',
    time: '2026-01-06T13:28:59.445612',
  },
  {
    id: 8,
    fullName: 'Sneha Patel',
    accNo: 3907,
    amount: 520.6,
    status: 'deposit',
    time: '2026-01-06T10:41:36.998421',
  },
  {
    id: 9,
    fullName: 'Rahul Malhotra',
    accNo: 9642,
    amount: 8400.0,
    status: 'withdraw',
    time: '2026-01-06T19:05:10.203557',
  },
  {
    id: 10,
    fullName: 'Pooja Nair',
    accNo: 1178,
    amount: 310.9,
    status: 'deposit',
    time: '2026-01-06T07:56:48.772199',
  },
]
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
</style>
