<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
  </ul>
</template>

<script>
import {mapState} from 'vuex'
import TodoItem from './TodoItem.vue'
import storageUtil from '../util/storageUtil.js'

export default {
  computed: {
    ...mapState(['todos'])
  },

  watch: { // 监视todos的所有变化
    todos: {
      deep: true, // 深度监视
      handler: storageUtil.saveTodos // 保存todos到localStorage
    }
  },

  components: {
    TodoItem
  }
}
</script>

<style>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
