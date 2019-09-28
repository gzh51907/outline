<template>
  <tr>
    <td>
      <input type="checkbox" v-model="item.selected" />
    </td>
    <td>{{idx+1}}</td>
    <td>{{item.content}}</td>
    <td>{{item.date}}</td>
    <td>{{item.done ? '是':'否'}}</td>
    <td>
      <div class="btn-group btn-group-sm">
        <Button class="btn-outline-primary" username="laoxie" @click.stop.once.native="complete(idx)">完成</Button>
        <Button class="btn-outline-danger" @click.stop.native="remove(idx)">删除</Button>
      </div>
    </td>
  </tr>
</template>
<script>
import Button from "./TodoButton.vue";
import Bus from '../Bus';

export default {
    props:['idx','item'],
  methods: {
    remove(idx) {
      // this.$parent.$emit('removeitem',idx)
      // 发送方: 触发Bus的自定义事件
      Bus.$emit("remove", idx);
    },
    complete(idx) {
      // this.$parent.$emit('completeitem',idx)
      Bus.$emit("complete", idx);
    }
  },
  components: {
    Button
  }
};
</script>