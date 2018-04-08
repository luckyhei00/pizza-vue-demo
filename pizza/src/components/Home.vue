<!-- 这里是主页组件 -->

<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝pizza!</h1>
        <h2>这里有你非常喜欢的pizza</h2>
        <button @click="goToMenu" class="btn btn-success">Let's order!</button>    <!-- 这里绑定了跳转事件 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 这里是跳转事件
  methods:{
      goToMenu(){
          this.$router.push({name:'menuLink'})
      }
  }
}
</script>

<style>
  #home{
    background: url(../../src/assets/pizza.jpg);
    height: 85vh;
    padding: 10%;
    border-radius: 10px;
  }
  h1,h2{
    margin: 6%
  }
  .background{
    background: #00ffff;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
    border-radius: 10px;
  }
</style>
