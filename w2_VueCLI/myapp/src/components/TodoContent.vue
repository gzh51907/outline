<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>
          <input type="checkbox" v-model="checkAll" />全选
        </th>
        <th>#</th>
        <th>待办事项</th>
        <th>预计完成事件</th>
        <th>是否完成</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <TodoItem
        :key="item.id"
        v-for="(item,idx) in datalist"
        @click="selectItem(idx)"
        :item="item"
        :idx="idx"
      />
    </tbody>
  </table>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
    props:['datalist'],
  computed: {
    checkAll: {
      get() {
        return this.datalist.every(item => item.selected);
      },
      set(val) {
        // 主动修改：checkAll的值影响所有数据的值
        this.datalist.forEach(item => (item.selected = val));
      }
    }
  },
  methods: {
    selectItem(idx) {
    //   Bus.$emit("select", idx);
    }
  },
  components: {
    TodoItem
  }
};
</script>