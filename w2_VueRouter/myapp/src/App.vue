<template>
  <div>
    <h1>VueRouter演示666</h1>
    <ul>
      <li v-for="item in menus" :key="item.name">
        <router-link :to="item.path" active-class="current">
          <el-button>{{item.text}}</el-button>
        </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return {
      menus:[{
        name:"home",
        path:'/home',
        text:'首页'
      },{
        name:"cart",
        path:'/cart',
        text:'购物车'
      },{
        name:"reg",
        path:'/reg',
        text:'注册'
      },{
        name:"login",
        path:'/login',
        text:'登录'
      }]
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
  .current{color:#f00;font-weight:bold;}
</style>