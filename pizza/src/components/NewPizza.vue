<!-- 这里是新加pizza组件 -->
<template>
  <form>
      <h3 class="text-muted my-5">添加品种</h3>
      <div class="form-group row">
          <label class="col-sm-1">品种</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.name">    <!-- 这里绑定了数据 -->
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">描述</label>
          <div class="col-sm-11">
              <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>    <!-- 这里绑定了数据 -->
          </div>
      </div>
      <p><strong>选项一</strong></p>
      <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size1">    <!-- 这里绑定了数据 -->
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price1">    <!-- 这里绑定了数据 -->
          </div>
      </div>
      <p><strong>选项二</strong></p>
      <div class="form-group row">
          <label class="col-sm-1">尺寸</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.size2">    <!-- 这里绑定了数据 -->
          </div>
      </div>
      <div class="form-group row">
          <label class="col-sm-1">价格</label>
          <div class="col-sm-11">
              <input type="text" class="form-control" v-model="newPizza.price2">    <!-- 这里绑定了数据 -->
          </div>
      </div>
      <div class="form-group">
          <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>    <!-- 这里绑定了数据提交方法 -->
      </div>
  </form>
</template>

<script>
export default {
  data(){
      return {
          // 初始化数据
          newPizza:{}
      }
  },
  methods:{
      // 这里是数据提交方法
      addMenuItem(){
        let data = {
            name: this.newPizza.name,
            description: this.newPizza.description,
            option:[
                {
                    size: this.newPizza.size1,
                    price: this.newPizza.price1
                },
                {
                    size: this.newPizza.size2,
                    price: this.newPizza.price2
                }
            ]
        }

        this.http.post('/menu.json',data)
            .then((res) => {
                // 在用户点击提交时，将获取到的数据传递出去，在vuex中集中管理
                this.$store.commit('pushToMenuItems',data)
            })
      }
  }
}
</script>
