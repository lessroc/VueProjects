<template>
  <div class="container">
    <div class="row">
      <h3 class="col-lg-12">点击 {{ count }} 次, {{ count }} 是 {{ evenOrOdd }}</h3>
      <!--<h3 class="col-lg-12">点击 {{ $store.state.count }} 次, count 是 {{ evenOrOdd }}</h3>-->
    </div>
    <span class="btn-group" role="group" aria-label="Basic example">
      <button class="btn btn-primary" @click="increment">+</button>
      <button class="btn btn-light" disabled>{{ count }}</button>
      <button class="btn btn-primary" @click="decrement">-</button>
    </span>
    <button class="btn btn-primary" @click="incrementIfOdd">如果是奇数则增加</button>
    <button class="btn btn-primary" @click="incrementAsync">增量异步</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState(['count']), // mapState()返回值: {count () { return this.$store.state.['count'] }}
    ...mapGetters({evenOrOdd: 'isEvenOrOdd'}) // mapGetters()返回值: {evenOrOdd () { return this.$store.getters.['evenOrOdd'] }}
    // count () {
    //   return this.$store.state.count
    // }
  },

  /*
  computed: {
    evenOrOdd () {
      return this.$store.getters.evenOrOdd
    }
  },
  */

  methods: {
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }

  /*
  methods: {
    // 增加
    increment () {
      // 通知vuex去增加
      this.$store.dispatch('increment') // 触发store中对应的action调用
    },
    // 减少
    decrement () {
      // 通知vuex去减少
      this.$store.dispatch('decrement')
    },
    // 如果是奇数才增加
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    // 过1s才增加
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }
  */
}
</script>

<style>

</style>
