import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './HomePage.vue';

import './assets/global.scss'
import 'bootstrap/scss/bootstrap-grid.scss'

const routes = [
  { path: '/home', component: HomePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
  .mount('#app')
