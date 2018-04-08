<!-- 这里是联系我们二级组件页面 -->

<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">
      联系我们
    </div>
    <div class="card-body">
        <h4 class="card-title">联系我们</h4>
        <p class="card-text">68740597@qq.com</p>
        <router-link :to="{name:'phoneNumber'}">电话</router-link>    <!-- 这里是三级路由导航 -->
        <router-link :to="{name:'personName'}">姓名</router-link>    <!-- 这里是三级路由导航 -->
        <router-view></router-view>
    </div>
  </div>
</template>
