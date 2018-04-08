<!-- 这里是头部组件 -->

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="py-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
            </a>
            <a href="/" class="navbar-brand"></a>
            <ul class="navbar-nav">
                <li>
                    <router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>    <!-- 这里是导航路由 -->
                </li>
                <li>
                    <router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link>    <!-- 这里是导航路由 -->
                </li>
                <li>
                    <router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link>    <!-- 这里是导航路由 -->
                </li>
                <li>
                    <router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link>    <!-- 这里是导航路由 -->
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li><router-link :to="{name:'loginLink'}" v-show="!isLogin" class="nav-link">登录</router-link></li>    <!-- 这里是导航路由，并绑定了显示状态 -->
                <li class="nav-link">    <!-- 这里是导航路由，并绑定了数据 -->
                    {{currentUser}}
                </li>
                <li><router-link :to="{name:'loginLink'}" v-show="isLogin" class="nav-link">[退出]</router-link></li>    <!-- 这里是导航路由，并绑定了显示状态 -->
                <li><router-link :to="{name:'registerLink'}" v-show="!isLogin" class="nav-link">注册</router-link></li>    <!-- 这里是导航路由，并绑定了显示状态 -->
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
  // 通过计算属性获取显示状态及数据
  computed:{
      currentUser(){
          return this.$store.getters.currentUser
      },
      isLogin(){
          return this.$store.getters.isLogin
      }
  }
}
</script>


