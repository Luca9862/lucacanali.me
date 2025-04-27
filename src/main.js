import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  vuetify,
  router: router
}).$mount('#app')
