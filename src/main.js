import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'



import 'primevue/resources/themes/aura-light-green/theme.css'
import '../node_modules/flowbite-vue/dist/index.css'
const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
