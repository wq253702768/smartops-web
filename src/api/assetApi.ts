import axios from 'axios'
import { Customer, Site, RemoteAccess, HostAsset } from '../modules/asset/types'

const apiClient = axios.create({
  baseURL: '/api/asset',
})

// Customer APIs
export const fetchCustomers = (params?: any) =>
  apiClient.get<Customer[]>('/customers', { params })
export const fetchCustomer = (id: number) =>
  apiClient.get<Customer>(`/customers/${id}`)
export const createCustomer = (data: Partial<Customer>) =>
  apiClient.post('/customers', data)
export const updateCustomer = (id: number, data: Partial<Customer>) =>
  apiClient.put(`/customers/${id}`, data)
export const deleteCustomer = (id: number) =>
  apiClient.delete(`/customers/${id}`)

// Site APIs
export const fetchSites = (params?: any) =>
  apiClient.get<Site[]>('/sites', { params })
export const fetchSite = (id: number) =>
  apiClient.get<Site>(`/sites/${id}`)
export const createSite = (data: Partial<Site>) =>
  apiClient.post('/sites', data)
export const updateSite = (id: number, data: Partial<Site>) =>
  apiClient.put(`/sites/${id}`, data)
export const deleteSite = (id: number) =>
  apiClient.delete(`/sites/${id}`)

// RemoteAccess APIs
export const fetchRemoteAccesses = (params?: any) =>
  apiClient.get<RemoteAccess[]>('/remote-access', { params })
export const createRemoteAccess = (data: Partial<RemoteAccess>) =>
  apiClient.post('/remote-access', data)
export const updateRemoteAccess = (id: number, data: Partial<RemoteAccess>) =>
  apiClient.put(`/remote-access/${id}`, data)
export const deleteRemoteAccess = (id: number) =>
  apiClient.delete(`/remote-access/${id}`)

// HostAsset APIs
export const fetchHostAssets = (params?: any) =>
  apiClient.get<HostAsset[]>('/host-assets', { params })
export const createHostAsset = (data: Partial<HostAsset>) =>
  apiClient.post('/host-assets', data)
export const updateHostAsset = (id: number, data: Partial<HostAsset>) =>
  apiClient.put(`/host-assets/${id}`, data)
export const deleteHostAsset = (id: number) =>
  apiClient.delete(`/host-assets/${id}`)

