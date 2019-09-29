<template>
  <div>
    <TodoList/>
    <!-- webpack编译时会自动编译成<todo-list/> -->

    <!-- 动态组件component -->
    <!-- <component :is="currentComponent"></component>
    <button @click="next">下一张</button> -->

    <!-- <keep-alive> -->
      <Tab/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue';
import Tab from './components/Tab.vue';

// let myComponents = [{
//   template:'<div>组件1</div>'
// },{
//   template:'<div>组件2</div>'
// },{
//   template:'<div>组件3</div>'
// }]

export default {
  name: 'app',
  data(){
    return {
      currentComponent:null,
      currentIdx:0,
      username:'laoxie'
    }
  },
  methods:{
    next(){
      // this.currentComponent = 'HelloWorld'
      // if(this.currentIdx>=myComponents.length-1){
      //   this.currentIdx = 0
      // }else{
      //   this.currentIdx++;

      // }
      // console.log(this.currentIdx)
      
      // this.currentComponent = myComponents[this.currentIdx];
    }
  },
  created(){
    // this.currentComponent = myComponents[this.currentIdx];
  },
  components: {
    HelloWorld,
    TodoList,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>