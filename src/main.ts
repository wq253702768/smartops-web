import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { pinia } from './stores'
import { useAuthStore } from './modules/auth/store'
import './styles/tailwind.css'

const app = createApp(App)
app.use(pinia)
const auth = useAuthStore()
router.beforeEach((to) => {
  if (!auth.token && to.path !== '/login') {
    return '/login'
  }
  if (auth.token && to.path === '/login') {
    return '/'
  }
})
app.use(router)
app.mount('#app')
