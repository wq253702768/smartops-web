import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import {
  fetchCustomers,
  fetchCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  fetchSites,
  fetchSite,
  createSite,
  updateSite,
  deleteSite,
  fetchRemoteAccesses,
  createRemoteAccess,
  updateRemoteAccess,
  deleteRemoteAccess,
  fetchHostAssets,
  createHostAsset,
  updateHostAsset,
  deleteHostAsset,
} from '../../api/assetApi'
import { Customer, Site, RemoteAccess, HostAsset } from './types'

export const useCustomerList = (params?: any) =>
  useQuery(['customers', params], () => fetchCustomers(params).then(r => r.data))

export const useCustomer = (id: number) =>
  useQuery(['customer', id], () => fetchCustomer(id).then(r => r.data))

export const useCreateCustomer = () => {
  const qc = useQueryClient()
  return useMutation((data: Partial<Customer>) => createCustomer(data), {
    onSuccess: () => qc.invalidateQueries(['customers']),
  })
}

export const useUpdateCustomer = () => {
  const qc = useQueryClient()
  return useMutation((payload: { id: number; data: Partial<Customer> }) => updateCustomer(payload.id, payload.data), {
    onSuccess: () => qc.invalidateQueries(['customers']),
  })
}

export const useDeleteCustomer = () => {
  const qc = useQueryClient()
  return useMutation((id: number) => deleteCustomer(id), {
    onSuccess: () => qc.invalidateQueries(['customers']),
  })
}

export const useSiteList = (params?: any) =>
  useQuery(['sites', params], () => fetchSites(params).then(r => r.data))

export const useSite = (id: number) =>
  useQuery(['site', id], () => fetchSite(id).then(r => r.data))

export const useCreateSite = () => {
  const qc = useQueryClient()
  return useMutation((data: Partial<Site>) => createSite(data), {
    onSuccess: () => qc.invalidateQueries(['sites']),
  })
}

export const useUpdateSite = () => {
  const qc = useQueryClient()
  return useMutation((payload: { id: number; data: Partial<Site> }) => updateSite(payload.id, payload.data), {
    onSuccess: () => qc.invalidateQueries(['sites']),
  })
}

export const useDeleteSite = () => {
  const qc = useQueryClient()
  return useMutation((id: number) => deleteSite(id), {
    onSuccess: () => qc.invalidateQueries(['sites']),
  })
}

export const useRemoteAccessList = (params?: any) =>
  useQuery(['remoteAccess', params], () => fetchRemoteAccesses(params).then(r => r.data))

export const useCreateRemoteAccess = () => {
  const qc = useQueryClient()
  return useMutation((data: Partial<RemoteAccess>) => createRemoteAccess(data), {
    onSuccess: () => qc.invalidateQueries(['remoteAccess']),
  })
}

export const useUpdateRemoteAccess = () => {
  const qc = useQueryClient()
  return useMutation((payload: { id: number; data: Partial<RemoteAccess> }) => updateRemoteAccess(payload.id, payload.data), {
    onSuccess: () => qc.invalidateQueries(['remoteAccess']),
  })
}

export const useDeleteRemoteAccess = () => {
  const qc = useQueryClient()
  return useMutation((id: number) => deleteRemoteAccess(id), {
    onSuccess: () => qc.invalidateQueries(['remoteAccess']),
  })
}

export const useHostAssetList = (params?: any) =>
  useQuery(['hostAssets', params], () => fetchHostAssets(params).then(r => r.data))

export const useCreateHostAsset = () => {
  const qc = useQueryClient()
  return useMutation((data: Partial<HostAsset>) => createHostAsset(data), {
    onSuccess: () => qc.invalidateQueries(['hostAssets']),
  })
}

export const useUpdateHostAsset = () => {
  const qc = useQueryClient()
  return useMutation((payload: { id: number; data: Partial<HostAsset> }) => updateHostAsset(payload.id, payload.data), {
    onSuccess: () => qc.invalidateQueries(['hostAssets']),
  })
}

export const useDeleteHostAsset = () => {
  const qc = useQueryClient()
  return useMutation((id: number) => deleteHostAsset(id), {
    onSuccess: () => qc.invalidateQueries(['hostAssets']),
  })
}

