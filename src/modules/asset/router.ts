import { RouteRecordRaw } from 'vue-router'

export const assetRoutes: RouteRecordRaw[] = [
  {
    path: '/asset/customer',
    component: () => import('./customer/CustomerList.vue'),
  },
  {
    path: '/asset/customer/:id',
    component: () => import('./customer/CustomerDetail.vue'),
    props: route => ({ id: Number(route.params.id) })
  },
  {
    path: '/asset/site',
    component: () => import('./site/SiteList.vue'),
  },
  {
    path: '/asset/site/:id',
    component: () => import('./site/SiteDetail.vue'),
    props: route => ({ id: Number(route.params.id) })
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
