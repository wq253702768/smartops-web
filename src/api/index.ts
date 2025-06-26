import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
})

export const authApi = {
  loginLocal: (data: { username: string; password: string }) => apiClient.post('/auth/login/local', data),
  loginLdap: (data: { username: string; password: string }) => apiClient.post('/auth/login/ldap', data),
}

export const userApi = {
  list: (params?: Record<string, any>) => apiClient.get('/users', { params }),
  detail: (id: string) => apiClient.get(`/users/${id}`),
  create: (data: any) => apiClient.post('/users', data),
  update: (id: string, data: any) => apiClient.put(`/users/${id}`, data),
  delete: (id: string) => apiClient.delete(`/users/${id}`),
}

export const customerApi = {
  list: (params?: Record<string, any>) => apiClient.get('/customers', { params }),
  detail: (id: string) => apiClient.get(`/customers/${id}`),
  create: (data: any) => apiClient.post('/customers', data),
  update: (id: string, data: any) => apiClient.put(`/customers/${id}`, data),
  delete: (id: string) => apiClient.delete(`/customers/${id}`),
}

export const siteApi = {
  list: (params?: Record<string, any>) => apiClient.get('/sites', { params }),
  detail: (id: string) => apiClient.get(`/sites/${id}`),
  create: (data: any) => apiClient.post('/sites', data),
  update: (id: string, data: any) => apiClient.put(`/sites/${id}`, data),
  delete: (id: string) => apiClient.delete(`/sites/${id}`),
}

export const remoteAccessApi = {
  list: (params?: Record<string, any>) => apiClient.get('/remote-access', { params }),
  create: (data: any) => apiClient.post('/remote-access', data),
  update: (id: string, data: any) => apiClient.put(`/remote-access/${id}`, data),
  delete: (id: string) => apiClient.delete(`/remote-access/${id}`),
}

export const hostAssetApi = {
  list: (params?: Record<string, any>) => apiClient.get('/host-assets', { params }),
  create: (data: any) => apiClient.post('/host-assets', data),
  update: (id: string, data: any) => apiClient.put(`/host-assets/${id}`, data),
  delete: (id: string) => apiClient.delete(`/host-assets/${id}`),
}

