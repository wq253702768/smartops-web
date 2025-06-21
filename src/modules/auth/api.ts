import { useMutation } from '@tanstack/vue-query'
import { loginLocal, loginLdap, LoginPayload } from '@/api/authApi'
import { useAuthStore } from './store'

const useLogin = (fn: (data: LoginPayload) => Promise<any>) => {
  const store = useAuthStore()
  return useMutation(async (data: LoginPayload) => {
    const res = await fn(data)
    store.setToken(res.data.token)
    return res
  })
}

export const useLoginLocal = () => useLogin(loginLocal)
export const useLoginLdap = () => useLogin(loginLdap)
