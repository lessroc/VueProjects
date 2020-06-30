<template>
	<div>
		<p>ID: {{ $route.params.id }}</p>
		<ul>
			<li>id: {{ messageDetail.id }}</li>
			<li>title: {{messageDetail.title}}</li>
			<li>content: {{ messageDetail.content }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				messageDetail: {}
			}
		},

		mounted () {
			setTimeout(() => {
				const allMessageDetails = [
					{
						id: 1,
						title: 'message_1',
						content: 'message_1 content...'
					},
					{
						id: 2,
						title: 'message_2',
						content: 'message_2 content...'
					},
					{
						id: 3,
						title: 'message_3',
						content: 'message_3 content...'
					}
				]
				this.allMessageDetails = allMessageDetails
				const id = this.$route.params.id*1
				this.messageDetail = allMessageDetails.find(detail => detail.id === id)
			}, 1000)
		},

		watch: {
			$route: function (value) {	// 路由路径(param)发生了改变
				const id = value.params.id*1
				this.messageDetail = this.allMessageDetails.find(detail => detail.id === id)
			}
		}
	}
</script>

<style>

</style>
