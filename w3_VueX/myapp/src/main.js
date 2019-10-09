import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.$axios = axios;


new Vue({
  // 4.把router实例注入到vue实例中
  router,

  // 4. 把store注入到Vue实例中
  store,
  render: h => h(App),
}).$mount('#app')


