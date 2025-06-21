import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '' as string,
  }),
  actions: {
    setToken(token: string) {
      this.token = token
    },
  },
})
