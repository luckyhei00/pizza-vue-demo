<!-- 这里是登录页面组件 -->

<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">    <!-- 这里绑定了数据提交事件 -->
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">    <!-- 这里绑定了数据 -->
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">    <!-- 这里绑定了数据 -->
            </div>
            <button type="submit" class="btn btn-success btn-block">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 这里初始化登录页面数据
  data(){
    return {
      email:'',
      password:''
    }
  },
  beforeRouteEnter:(to,from,next) => {
    // 这里是组件内路由守卫
    next(vm => vm.$store.dispatch("setUser",null))
  },
  methods:{
    // 这里是登录页面提交数据方法
    onSubmit(){
      this.http.get('/users.json')
          // 提取数据后进行遍历比对
          .then((res) => {
              const data = res.data
              const users = []
              for(let attr in data){
                const user = data[attr]
                users.push(user)
              }
              // 对遍历后的数据进行过滤，邮箱和密码同时匹配
              let result = users.filter((user) => {
                return user.email === this.email && user.password === this.password
              })
              // 如果匹配成功，调用vuex内的方法，传递参数，并跳转至管理页面
              if(result != null && result.length > 0){
                this.$store.dispatch("setUser",result[0].email)
                this.$router.push({name:"homeLink"})
              }else{
                // 匹配不成功，调用vuex内的方法，将参数设为空，并弹框提示
                alert("账号或密码错误")
                this.$store.dispatch('setUser',null)
              }
          })
    }
  }
}
</script>
