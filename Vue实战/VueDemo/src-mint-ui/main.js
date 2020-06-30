import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

// 注册成全局标签
Vue.component(Button.name, Button)

new Vue({
	el: '#app',
	components: {App},	// 映射组件标签
	template: '<App/>'	// 指定需要渲染到页面的模板
})
