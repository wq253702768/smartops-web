import axios from 'axios'
import { Customer, Site, RemoteAccess, HostAsset } from '../modules/asset/types'

const baseUrl = '/api/asset'

// Customer APIs
export const fetchCustomers = (params?: any) => axios.get<Customer[]>(`${baseUrl}/customers`, { params })
export const createCustomer = (data: Partial<Customer>) => axios.post(`${baseUrl}/customers`, data)
export const updateCustomer = (id: number, data: Partial<Customer>) => axios.put(`${baseUrl}/customers/${id}`, data)
export const deleteCustomer = (id: number) => axios.delete(`${baseUrl}/customers/${id}`)

// Site APIs
export const fetchSites = (params?: any) => axios.get<Site[]>(`${baseUrl}/sites`, { params })
export const createSite = (data: Partial<Site>) => axios.post(`${baseUrl}/sites`, data)
export const updateSite = (id: number, data: Partial<Site>) => axios.put(`${baseUrl}/sites/${id}`, data)
export const deleteSite = (id: number) => axios.delete(`${baseUrl}/sites/${id}`)

// RemoteAccess APIs
export const fetchRemoteAccesses = (params?: any) => axios.get<RemoteAccess[]>(`${baseUrl}/remote-access`, { params })
export const createRemoteAccess = (data: Partial<RemoteAccess>) => axios.post(`${baseUrl}/remote-access`, data)
export const updateRemoteAccess = (id: number, data: Partial<RemoteAccess>) => axios.put(`${baseUrl}/remote-access/${id}`, data)
export const deleteRemoteAccess = (id: number) => axios.delete(`${baseUrl}/remote-access/${id}`)

// HostAsset APIs
export const fetchHostAssets = (params?: any) => axios.get<HostAsset[]>(`${baseUrl}/host-assets`, { params })
export const createHostAsset = (data: Partial<HostAsset>) => axios.post(`${baseUrl}/host-assets`, data)
export const updateHostAsset = (id: number, data: Partial<HostAsset>) => axios.put(`${baseUrl}/host-assets/${id}`, data)
export const deleteHostAsset = (id: number) => axios.delete(`${baseUrl}/host-assets/${id}`)

