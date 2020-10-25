import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
axios.defaults.baseURL=''
Vue.prototype.$http = axios
import './assets/css/global.css'

import router from './router/router.js'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'

Vue.use(ElementUI);
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App3)
})
