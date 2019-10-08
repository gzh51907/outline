import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.$axios = axios;

import Vuex from 'vuex';
Vue.use(Vuex);

// 创建store
const store = new Vuex.Store({
  // 创建state
  state:{
      products:[
          {name: '鼠标', price: 20},
          {name: '键盘', price: 40},
          {name: '耳机', price: 60},
          {name: '显示屏', price: 80}
      ]
  }
});


new Vue({
  // 4.把router实例注入到vue实例中
  router,
  store,
  render: h => h(App),
}).$mount('#app')


