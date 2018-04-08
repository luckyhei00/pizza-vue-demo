<!-- 这里是关于我们组件页面 -->

<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">    <!-- 这里是二级路由导航 -->
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>
           <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">    <!-- 这里是二级路由导航 -->
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
           <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">    <!-- 这里是二级路由导航 -->
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">    <!-- 这里是二级路由导航 -->
            <a class="list-group-item list-group-item-action">历史信息</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
