<template>
  <div>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script>
  export default { // 配置对象(与Vue一致)
    data () { // 在组件里必须写函数
      return {
        msg: 'Hello Vue Components'
      }
    }
  }
</script>

<style>
  .msg {
    color: red;
    font-size: 2rem;
  }
</style>
