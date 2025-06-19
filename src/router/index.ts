import { createRouter, createWebHistory } from 'vue-router'
import { assetRoutes } from '../modules/asset/router'

const routes = [...assetRoutes]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
