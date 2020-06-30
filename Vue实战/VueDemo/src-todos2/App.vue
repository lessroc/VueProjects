<template>
	<div class="todo-container">
		<div class="todo-wrap">
			<!--<TodoHeader @addTodo="addTodo"/>  &lt;!&ndash; 给TodoHeader标签对象绑定addTodo事件监听 &ndash;&gt;-->
			<TodoHeader ref="header"/>
			<TodoList :todos="todos"/>
			<!-- 可使用小写带横杠(-) -->
			<todo-footer>
				<input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
				<span slot="count">已完成{{ completeSize }} / 全部{{ todos.length }}</span>
				<button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
			</todo-footer>
		</div>
	</div>
</template>
<!--
	绑定事件监听	---	订阅消息
	触发事件			--- 发布消息
-->
<script>
	import PubSub from 'pubsub-js'
	import TodoHeader from './components/TodoHeader.vue'
	import TodoList from './components/TodoList.vue'
	import TodoFooter from './components/TodoFooter.vue'
	import storageUtil from './util/storageUtil.js'

	export default {
		data () {
			return {
				/*todos: [
					{title: '敲代码', complete: false},
					{title: '改代码', complete: false},
					{title: '测代码', complete: true}
				]*/

				// 从localStorage读取todos
				// todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
				todos: storageUtil.readTodos()
			}
		},

		computed: {
			completeSize () {
				return this.todos.reduce((perTotal, todo) => perTotal + (todo.complete ? 1 : 0), 0)
			},

			isAllCheck: {
				get () {
					return this.completeSize === this.todos.length && this.completeSize > 0
				},
				set (value) {	// value是当前checkbox最新的值
					this.selectAllTodos(value)
				}
			}
		},

		mounted () {	// 执行异步代码
			// 给<TodoHeader/>绑定addTodo事件监听
			// this.$on('addTodo', this.addTodo)	// 给App绑定的监听，不对，要给TodoHeader绑定监听
			this.$refs.header.$on('addTodo', this.addTodo)

			// 订阅消息
			PubSub.subscribe('deleteTodo', (msg, index) => {
				this.deleteTodo(index)
			})
		},

		methods: {
			addTodo (todo) {
				this.todos.unshift(todo)
			},

			deleteTodo (index) {
				this.todos.splice(index, 1)
			},

			// 删除所有选中todo
			deleteCompleteTodos () {
				this.todos = this.todos.filter(todo => !todo.complete)
			},

			selectAllTodos (check) {
				this.todos.forEach(todo => todo.complete = check)
			}
		},

		watch: {	// 监视
			todos: {
				deep: true,	// 深度监视
				// 将todos最新的值的json数据，保存到localStorage

				// 方法一
				/*handler:function (value) {
					// window.localStorage.setItem('todos_key', JSON.stringify(value))
					storageUtil.saveTodos(value)
				}*/

				// 方法二
				/*handler: function (todos) {
					window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
				},*/

				// 方法三：推荐
				handler: storageUtil.saveTodos
			}
		},

		components: {
			TodoHeader,
			TodoList,
			TodoFooter
		}
	}
</script>

<style>
	.todo-container {
		width: 600px;
		margin: 0 auto;
	}

	.todo-container .todo-wrap {
		padding: 10px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>
