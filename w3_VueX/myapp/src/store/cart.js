import axios from 'axios';
import { Message } from 'element-ui';

let cart = {
    state:{
        cartlist:[
          {
            id: "1",
            name: "huawei mate30 pro",
            imgurl:
              "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            price: 5998,
            qty: 10
          },
          {
            id: "2",
            name: "xiaomi9",
            imgurl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
            price: 2999,
            qty: 2
          },
          {
            id: "3",
            name: "onePlus9 pro",
            imgurl:
              "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
            price: 3999,
            qty: 1
          }
        ]
    },
    getters:{
       cartlength(state){
          return state.cartlist.length;
       },
       totalPrice(state){
          return state.cartlist.reduce((prev,item)=>prev+item.price*item.qty,0)
       },
       saleGoods(state){
          return state.cartlist.map(item=>{
              item.price *= 0.5;
              return item;
          })
       }
    },
  
    mutations:{
      // state: store中的state
      // payload：调用mutaion时传入的参数
        add2cart(state,goods){
          state.cartlist.unshift(goods);
        },
        removeFromCart(state,id){
          state.cartlist = state.cartlist.filter(item=>item.id!=id);
        },
        clearCart(state){
          state.cartlist = [];
        },
        changeQty(state,{id,qty}){
            console.log('changeQty:',id,qty)
          state.cartlist.forEach(item=>{
              if(item.id === id){
                  item.qty = qty;
              }
          })
        }
    },
    actions:{
      async changeQtyAsync(context,{id,qty}){
        // context: 类似与store的对象
        // payload: 调用action时传入的参数
        // 获取库存数量kucun，然后与传入的qty进行对比
        // 如qty<=kucun， 放行（操作mutation）
        // 如果qty>kucun，提示库存不足
  
        let {data} = await axios.get('http://localhost:1907/goods/kucun')
        console.log('kucun:',data);
        let kucun = data.data;
        if(qty<=kucun){
          context.commit('changeQty',{id,qty})
        }else{
          // 库存不足
          Message.error('当前商品库存不足');
          context.commit('changeQty',{id,qty:kucun})
        }
      }
    }
}

export default cart;