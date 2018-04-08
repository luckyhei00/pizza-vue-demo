<!-- 这里是注册页面组件 -->

<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">   <!-- 这里绑定了表单提交事件，并阻止了默认事件 -->
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class="form-control" v-model="email">   <!-- 这里绑定了模板 -->
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class="form-control" v-model="password">   <!-- 这里绑定了模板 -->
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input type="password" class="form-control" v-model="confirmPassword">   <!-- 这里绑定了模板 -->
            </div>
            <button type="submit" class="btn btn-success btn-block">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    // 这里初始化了注册页面的绑定数据
    return {
      email:'',
      password:'',
      confirmPassword:''  
    }
  },
  methods:{
    // 这里是页面提交数据方法
    onSubmit(){
      // 匹配两次输入密码，一致后用常量接收，并发送到后台
      if(this.password === this.confirmPassword){
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        this.http.post('/users.json',formData)
             .then((res) => this.$router.push({name:'loginLink'}))  // 数据发送成功后，跳转至登录页面
      }else{
        // 两次输入不匹配，给提示框
        alert("密码不一致")
      }
    }
  }
}
</script>

