import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { pinia } from './stores'
import '@tanstack/vue-query/dist/vue-query.css'
import './styles/tailwind.css'

createApp(App).use(router).use(pinia).mount('#app')
