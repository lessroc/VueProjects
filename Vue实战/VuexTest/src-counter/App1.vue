<template>
  <div class="container">
    <div class="row">
      <h3 class="col-lg-12">点击 {{ count }} 次, count 是 {{ evenOrOdd }}</h3>
    </div>
    <button class="btn btn-primary" @click="increment">+</button> {{ count }}
    <button class="btn btn-primary" @click="decrement">-</button>
    <button class="btn btn-primary" @click="incrementIfOdd">如果是奇数则增加</button>
    <button class="btn btn-primary" @click="incrementAsync">增量异步</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  computed: {
    evenOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },

  methods: {
    // 增加
    increment () {
      const count = this.count
      this.count = count + 1
    },
    // 减少
    decrement () {
      const count = this.count
      this.count = count - 1
    },
    // 如果是奇数才增加
    incrementIfOdd () {
      const count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    // 过1s才增加
    incrementAsync () {
      setTimeout(() => {
        const count = this.count
        this.count = count + 1
      }, 1000)
    }
  }
}
</script>

<style>

</style>
