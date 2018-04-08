<!-- 这里是菜单页面组件 -->

<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" :key="index">   <!-- 这里有循环 -->
          <tr>
            <td><strong>{{ item.name }}</strong></td>    <!-- 这里有数据展示 -->
          </tr>
          <tr v-for="(option,index) in item.option" :key="index">    <!-- 这里有循环 -->
            <td>{{ option.size }}</td>    <!-- 这里有数据展示 -->
            <td>{{ option.price }}</td>    <!-- 这里有数据展示 -->
            <td><button @click="addToBasket(item,option)" class="btn btn-sm btn-outline-success">+</button></td>    <!-- 这里绑定了事件 -->
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-4">
      <div v-if="baskets.length > 0">    <!-- 这里有条件判断 -->
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in baskets" :key="index">    <!-- 这里有循环 -->
            <tr>
              <td>
                <button @click="decreaseQuantity(item)" class="btn btn-sm btn-outline-info">-</button>    <!-- 这里绑定了事件 -->
                <span>{{ item.quantity }}</span>    <!-- 这里有数据展示 -->
                <button @click="increaseQuantity(item)" class="btn btn-sm btn-outline-info">+</button>    <!-- 这里绑定了事件 -->
              </td>
              <td>
                {{ item.name }} {{ item.size + "寸" }}    <!-- 这里有数据展示 -->
              </td> 
              <td>
                {{ item.price*item.quantity }}    <!-- 这里有数据展示 -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>    <!-- 这里有条件判断 -->
        {{ basketText }}    <!-- 这里有数据展示 -->
      </div>
      <p>总价: {{ total + "RMB" }}</p>
      <button class="btn btn-block btn-success">提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    // 菜单页面数初始化
    return{
      baskets:[],
      basketText:"购物车中没有商品"
    }
  },
  computed:{
    getMenuItems(){
      // 直接通过vuex提取页面展示数据
      return this.$store.getters.getMenuItems
    },
    total(){
      // 购物车计算方法
      let totalCost = 0
      // 遍历购物车内数据
      for(let attr in this.baskets){
        // 每次遍历提取数据
        let individualItem = this.baskets[attr]
        // 让总价累加等于数量*单价
        totalCost += individualItem.quantity*individualItem.price
      }
      return totalCost
    }
  },
  created(){
    // 在钩子里调用方法
    this.getData()
  },
  methods:{
    // 获取数据方法
    getData(){
      this.http.get('/menu.json')
          .then((res) => {
            //将请求到的数据同步到vuex里，同过vuex来管理数据
            this.$store.commit('setMenuItems',res.data)
          })
    },
    // 购物车数据添加事件
    addToBasket(item,option){
      let basket = {
        name:item.name,
        size:option.size,
        price:option.price,
        quantity:1
      }
      // 判断购物车数据的长度
      if(this.baskets.length >0){
        // 有数据的时候，同过购物车已有数据和获取到的数据来完成过滤，条件为名称价格同时相等
        let result = this.baskets.filter((basket) => {
          return (basket.name === item.name && basket.price === option.price)
        })
        // 在这里判断过滤结果，是否有数据
        if(result != null && result.length > 0){
          // 有数据时让该条目的数量累加
          result[0].quantity++
        }else{
          //否则给购物车添加数据
          this.baskets.push(basket)
        }
      }else{
        // 同理购物车本身没有数据时，添加数据
        this.baskets.push(basket)
      }
      
    },
    // 这里是减少事件
    decreaseQuantity(item){
      item.quantity--
      // 如果数量小于1，调用删除事件
      if(item.quantity <= 0){
        this.removeFromBasket(item)
      }
    },
    // 这里是增加事件
    increaseQuantity(item){
      item.quantity++
    },
    // 这里是删除事件
    removeFromBasket(item){
      // 通过比对删除该条目
      this.baskets.splice(this.baskets.indexOf(item),1)
    }
  }
}
</script>

<style>

</style>
