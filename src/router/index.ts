import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/views/auth/Login.vue') },
  { path: '/', component: () => import('@/views/dashboard/Dashboard.vue') },
  { path: '/users', component: () => import('@/views/user/UserList.vue') },
  { path: '/customers', component: () => import('@/views/asset/customer/CustomerList.vue') },
  { path: '/sites', component: () => import('@/views/asset/site/SiteList.vue') },
  { path: '/remote-access', component: () => import('@/views/asset/remote-access/RemoteAccessList.vue') },
  { path: '/host-assets', component: () => import('@/views/asset/host-asset/HostAssetList.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
