import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入模块对象中的default属性
import mymodule from './module';
import {show as showName} from './module';

// 引入整个模块对象并改名all
import * as all from './module'
console.log(all);

console.log(showName)

new Vue({
  render: h => h(App),
}).$mount('#app')
