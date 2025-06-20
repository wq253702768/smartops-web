import axios from 'axios'

const authClient = axios.create({
  baseURL: '/api/auth',
})

export interface LoginPayload {
  username: string
  password: string
}

export const loginLocal = (data: LoginPayload) => authClient.post('/login', data)
export const loginLdap = (data: LoginPayload) => authClient.post('/ldap', data)
