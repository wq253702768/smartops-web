import { ref } from 'vue'
import { authApi } from '@/api'

export function useAuth() {
  const loading = ref(false)

  async function loginLocal(username: string, password: string) {
    loading.value = true
    try {
      const res = await authApi.loginLocal({ username, password })
      return res.data
    } finally {
      loading.value = false
    }
  }

  async function loginLdap(username: string, password: string) {
    loading.value = true
    try {
      const res = await authApi.loginLdap({ username, password })
      return res.data
    } finally {
      loading.value = false
    }
  }

  return { loading, loginLocal, loginLdap }
}
