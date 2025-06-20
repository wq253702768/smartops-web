import { createRouter, createWebHistory } from 'vue-router'
import { assetRoutes } from '../modules/asset/router'
import { authRoutes } from '../modules/auth/router'

const routes = [...authRoutes, ...assetRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
