// 这里是vuex数据管理主js

import Vue from 'vue'                     // 在这里加载vue
import Vuex from 'vuex'                   // 在这里加载vuex
import menu from './module/menu'          // 引入数据管理文件menu
import users from './module/users'        // 引入数据管理文件users

Vue.use(Vuex)                             //使用vuex

// 实例化vuex
export const store = new Vuex.Store({
    modules: {
        // 引入的数据管理文件需要在这里使用
        menu,
        users
    }
})