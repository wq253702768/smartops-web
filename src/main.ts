import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/tailwind.css'
<<<<<<< k86f3k-codex/一键生成前端业务模块
=======
<<<<<<< pyagwk-codex/一键生成前端业务模块
>>>>>>> main
import { initMocks } from './mocks/kpis'

if (import.meta.env.DEV) {
  initMocks()
}
<<<<<<< k86f3k-codex/一键生成前端业务模块
=======
=======
>>>>>>> main
>>>>>>> main

createApp(App)
  .use(store)
  .use(router)
  .use(VueQueryPlugin)
  .use(ElementPlus)
  .mount('#app')
