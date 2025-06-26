import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/tailwind.css'

createApp(App)
  .use(store)
  .use(router)
  .use(VueQueryPlugin)
  .use(ElementPlus)
  .mount('#app')
