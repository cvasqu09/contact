import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { createRouter, createWebHashHistory } from 'vue-router'

import './assets/theme/index.css'
import './assets/global.scss';
import 'bootstrap/scss/bootstrap-grid.scss';

import HomePage from './pages/HomePage.vue';

const routes = [
  { path: '/home', component: HomePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
