import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Customer } from './types'

export const useAssetStore = defineStore('asset', () => {
  const customers = ref<Customer[]>([])
  const setCustomers = (list: Customer[]) => {
    customers.value = list
  }
  return { customers, setCustomers }
})
