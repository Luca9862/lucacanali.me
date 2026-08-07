import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
