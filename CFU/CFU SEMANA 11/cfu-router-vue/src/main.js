import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './routes'

createApp(App).use(routes).mount("#app");
