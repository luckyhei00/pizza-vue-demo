// 这里是入口js文件，在这里完成一些关键性的模块载入

import Vue from 'vue'                       // 载入vue
import App from './App'                     // 载入根组件
import VueRouter from 'vue-router'          // 载入路由模块
import { routes } from './routes'           // 载入路由配置
import axios from 'axios'                   // 载入axios交互模块
import { store } from './store/store.js'    // 载入数据管理根文件

Vue.use(VueRouter)                          // 使用路由模块
axios.defaults.baseURL='https://wd4860613314pzehcc.wilddogio.com/'    //设置数据存取默认地址
Vue.prototype.http = axios                  // 将axios挂载到vue原型上（这样做的目的是不需要再去每个页面引入交互模块，直接调用原型方法）

// 实例化路由
const router = new VueRouter({
  routes,            // 在路由实例中使用路有数据
  mode:'history'     // 不要在跳转是出现#
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
