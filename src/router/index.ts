import { createRouter, createWebHistory } from 'vue-router'
import { assetRoutes } from '../modules/asset/router'
import { authRoutes } from '../modules/auth/router'
import AppLayout from '../components/AppLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  ...authRoutes,
  {
    path: '/',
    component: AppLayout,
    redirect: '/asset/customer',
    children: assetRoutes,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
