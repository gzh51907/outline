<template>
  <div>
    <TodoList/>
    <!-- webpack编译时会自动编译成<todo-list/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue';

export default {
  name: 'app',
  data(){
    return {
      username:'laoxie'
    }
  },
  components: {
    HelloWorld,
    TodoList
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