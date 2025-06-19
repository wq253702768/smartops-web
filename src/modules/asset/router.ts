import { RouteRecordRaw } from 'vue-router'

export const assetRoutes: RouteRecordRaw[] = [
  {
    path: '/asset/customer',
    component: () => import('./customer/CustomerList.vue'),
  },
  {
    path: '/asset/site',
    component: () => import('./site/SiteList.vue'),
  },
  {
    path: '/asset/remote-access',
    component: () => import('./remote-access/RemoteAccessList.vue'),
  },
  {
    path: '/asset/host-asset',
    component: () => import('./host-asset/HostAssetList.vue'),
  },
]
