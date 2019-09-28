<template>
  <div class="input-group">
    <input type="text" class="form-control" ref="keyword" v-model="keyword" @keyup.13="add" />
    <div class="input-group-append">
      <div class="input-group">
        <input type="date" v-model="date" class="form-control" />
        <Button class="btn-success" @click.native="add">添加</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./TodoButton";
export default {
  data() {
    return {
      keyword: "",
      date: ""
    };
  },
  methods: {
    add() {
      let data = {
        id: Date.now(),
        content: this.keyword,
        done: false,
        date: this.date,
        selected: false
      };
      //    this.addItem(data);

      // 触发自定义事件
      this.$emit("additem", data);

      // <todo-form v-on:additem="事件处理函数"/>
      // this.$on('additem',事件处理函数)

      //    清空并获得焦点
      this.keyword = "";
      this.$refs.keyword.focus();
    }
  },
  components: {
    Button
  }
};
</script>
<style scoped>
/* 局部css */
.input-group-append .btn-success{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>