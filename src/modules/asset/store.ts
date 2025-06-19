import { defineStore } from 'pinia'
import { Customer } from './types'

export const useAssetStore = defineStore('asset', {
  state: () => ({
    customers: [] as Customer[],
  }),
  actions: {
    setCustomers(list: Customer[]) {
      this.customers = list
    },
  },
})
