<template>
	<div>
		<ul>
			<li v-for="(message, index) in messages" :key="message.id">
				<!--<a href="???">{{ message.title }}</a>-->
				<router-link :to="`/home/message/detail/${message.id}`">{{ message.title }}</router-link>
				<button @click="pushShow(message.id)">push查看</button>
				<button @click="replaceShow(message.id)">replaceShow查看</button>
			</li>
		</ul>
		<button @click="$router.back()" class="btn btn-primary btn-sm">回退</button>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				messages: []
			}
		},

		mounted () {
			// 模拟ajax请求从后台获取数据
			setTimeout(() => {
				const messages = [
					{
						id: 1,
						title: 'message_1'
					},
					{
						id: 2,
						title: 'message_2'
					},
					{
						id: 3,
						title: 'message_3'
					}
				]
				this.messages = messages
			}, 1000)
		},

		methods: {
			pushShow (id) {
				this.$router.push(`/home/message/detail/${id}`)
			},
			replaceShow (id) {
				this.$router.replace(`/home/message/detail/${id}`)
			}
		}
	}
</script>

<style>

</style>
