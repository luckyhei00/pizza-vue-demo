<!-- 这里是管理页面组件 -->

<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <new-pizza></new-pizza>    <!-- 新pizza组件在这里显示 -->
    </div>
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" :key="index">    <!-- 这里有循环 --> 
          <tr>
            <td>{{ item.name }}</td>    <!-- 这里绑定了数据 -->
            <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>    <!-- 这里绑定了删除事件 -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza'    // 在这里载入添加新pizza的组件
export default {
  data(){
    return {}
  },
  created(){
    // 页面加载后获取数据并显示
    this.http.get('menu.json')
         .then((res) => {
           let menuArray =[]
           let data =res.data
           for(let attr in data){
             data[attr].id = attr
             menuArray.push(data[attr])
           }
           // 将获取到的数据用vuex集中管理
           this.$store.commit('setMenuItems',menuArray)
         })
  },
  computed:{
    // 通过计算属性获取vuex管理的数据，这里注意get和set方法要同时存在，否则会报错
    getMenuItems:{
      get(){
        return this.$store.getters.getMenuItems
      },
      set(){

      }
    },
  },
  methods:{
    // 这里是点击删除事件
    deleteData(item){
        // 执行axios数据删除
        this.http.delete('/menu/'+ item.id +'/.json')
            // 在服务器删除后同步删除vuex管理的数据
            .then(res => this.$store.commit('removeMenuItems',item)) 
    }
  },
  components:{
    // 本组件引入了新pizza的组件，要在这里注册
    "new-pizza":NewPizza
  }
}
</script>
