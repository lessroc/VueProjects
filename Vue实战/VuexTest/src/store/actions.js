/* 包含多个接收组件通知触发mutation调用间接更新状态的方法对象 */

import {ADD_TODO, CLEAR_ALL_COMPLETED, DELETE_TODO, RECEIVE_TODOS, SELECT_ALL_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default {
  // 添加todo
  addTodo ({commit}, todo) {
    // 提交对mutation的请求
    commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
  },

  // 删除todo
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  // 全选或不全选
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },

  // 删除全部选中的
  clearAllCompleted ({commit}) {
    if (window.confirm('确定清除所有已完成的任务吗?')) {
      commit(CLEAR_ALL_COMPLETED)
    }
  },

  // 异步获取todos并更新状态
  reqTodos ({commit}) {
    setTimeout(() => {
      // 读取数据
      const todos = storageUtil.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  }
}
