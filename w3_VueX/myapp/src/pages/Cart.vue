<template>
  <div class="page-cart">
    <el-steps :active="1" finish-status="success">
      <el-step title="购物车"></el-step>
      <el-step title="结算"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-row :gutter="30" v-for="item in cartlist" :key="item.id" style="margin-top:30px">
      <el-col :span="4">
        <img :src="item.imgurl" />
      </el-col>
      <el-col :span="16">
        <h4>{{item.name}}</h4>
        <p class="price">
          <span>{{item.price}}</span> &times;
          <el-input-number size="mini" v-model="item.qty" @change="changeQty(item.id,$event)"></el-input-number>
        </p>
      </el-col>
      <el-col :span="4" style="text-align:right">
        <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="remove(item.id)"></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12">
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="clearCart">清空购物车</el-button>
      </el-col>
      <el-col :span="12" class="price" style="text-align:right">
        总计：
        <span>{{totalPrice.toFixed(2)}}</span>
      </el-col>
    </el-row>
    <div style="text-align:right">
      <el-button type="success" icon="el-icon-s-finance">去结算</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  computed: {
    cartlist(){
      return this.$store.state.cart.cartlist
    },
    totalPrice() {
      // let total = 0;
      // this.datalist.forEach(item=>{
      //     total += item.price*item.qty;
      // })
      // return total;

      // return this.cartlist.reduce((pre, item) => {
      //   // pre ： 前一次的返回值（第一次为初始值）
      //   return pre + item.price * item.qty;
      // }, 0);

      return this.$store.getters.totalPrice;
    }
  },
  methods: {
    changeQty(id, qty) {
      // this.$store.commit('changeQty',{id,qty})
      this.$store.dispatch('changeQtyAsync',{id,qty})
    },
    remove(id){
      this.$store.commit('removeFromCart',id)
    },
    clearCart(){
      this.$store.commit('clearCart')
    }
  }
};
</script>
<style lang="scss">
.page-cart img {
  width: 100%;
}
</style>