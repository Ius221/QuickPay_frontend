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
    <div class="pagination" v-if="!isLoading">
      <button @click="changePage(currPage - 1)" :disabled="pagination.isFirst" class="page-btn">
        &laquo; prev
      </button>
      <button
        v-for="page in pagination.totalPage"
        :key="page"
        @click="changePage(page)"
        :class="['page-number', { active: page === currPage }]"
      >
        {{ page }}
      </button>
      <button @click="changePage(currPage + 1)" :disabled="pagination.isLast" class="page-btn">
        Next &raquo;
      </button>
    </div>
  </glass-slot>
</template>

<script setup>
import TransactionTop from '@/components/nav/TransactionTop.vue'
import IndvTransaction from '@/components/Ui/IndvTransaction.vue'
import api from '@/plugins/axiosConfig'
import { computed, ref, watch } from 'vue'
import { useUserStore } from '@/components/store/UserStore'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const userStore = useUserStore()
const trans = []
const isLoading = ref(true)
const route = useRoute()
const router = useRouter()
const pagination = ref({})
const currPage = computed(() => pagination.value.pageNumber + 1)

const fetchTransaction = async (pageIndex = 0) => {
  try {
    const response = await api.get(
      `show/transaction?accNo=${userStore.getAllData.accNo}&sortOrder=descending&pageNumber=${pageIndex}`,
    )

    if (response.status === 302) {
      trans.length = 0
      response.data.content.forEach((e, num) => {
        const tempObj = {
          id: num + 1,
          fullName: e.status.toLowerCase() === 'send' ? e.receiverName : e.senderName,
          accNo:
            e.status.toLowerCase() === 'send' ? Number(e.receiverAccNo) : Number(e.senderAccNo),
          amount: e.money,
          status: e.status,
          time: e.time,
        }
        trans.push(tempObj)
      })

      pagination.value = {
        isFirst: response.data.isFirst,
        isLast: response.data.isLast,
        pageNumber: response.data.pageNumber,
        pageSize: response.data.pageSize,
        totalElement: response.data.totalElement,
        totalPage: response.data.totalPage,
      }
    } else {
      toast('Please logout and Login again', {
        theme: 'auto',
        type: 'error',
        autoClose: 3000,
        dangerouslyHTMLString: true,
      })
    }
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

const changePage = (newPage) => {
  isLoading.value = true
  if (newPage < 1 || newPage > pagination.value.totalPage) return

  router.push({
    query: {
      ...route.query,
      page: newPage,
    },
  })
}

watch(
  () => route.query.page,
  (newPageFromUrl) => {
    const page = parseInt(newPageFromUrl) || 1

    const apiPageIndex = page - 1
    fetchTransaction(apiPageIndex)
  },
  { immediate: true },
)
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
.pagination {
  display: flex;
  gap: 8px;
  margin-top: 20px;
  justify-content: center;
}

.page-btn {
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  font-family: inherit;
  /* font-size: 1.2rem; */
  background-color: #aaaa;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #cccc;
  color: #666;
  border: none;
  border-radius: 4px;
  transition: all 0.3s;
}
.page-number:hover {
  color: #333;
  background-color: rgba(204, 204, 204, 0.9);
}
.page-number.active {
  background-color: #ccc;
  color: #333;
  font-weight: bold;

  box-shadow: 2px 2px 4px #333;
}

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
