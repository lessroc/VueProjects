import Vue from 'vue'
import App from './App'
import store from './store'
import './base.css'

// 创建vm对象
new Vue({
  el: '#app',
  // render: function (createElement) {
  //   return createElement(App) // <App/>
  // },
  render: h => h(App),
  store
})
