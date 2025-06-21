import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  const setToken = (t: string) => {
    token.value = t
  }
  return { token, setToken }
})
