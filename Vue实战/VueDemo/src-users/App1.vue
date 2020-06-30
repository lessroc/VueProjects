<template>
	<div>
		<div v-if="!repoUrl">Loading...</div>
		<div v-else>most star repo is <a :href="repoUrl">{{ repoName }}</a></div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data () {
			return {
				repoUrl: '',
				repoName: ''
			}
		},

		mounted () {
			// 发ajax请求获取数据
			const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
			/*this.$http.get(url).then(
					response => {
						// 成功了
						const result = response.data
						// 得到最受欢迎的repo
						const mostRepo = result.items[0]
						this.repoUrl = mostRepo.html_url
						this.repoName = mostRepo.name
					},
					response => {
						alert('$http请求失败，请检查接口是否可用')
					}
			)*/

			// 使用axios发送ajax请求
			axios.get(url).then(
					response => {
						// 成功了
						const result = response.data
						// 得到最受欢迎的repo
						const mostRepo = result.items[0]
						this.repoUrl = mostRepo.html_url
						this.repoName = mostRepo.name
					}).catch(error => {
				alert('axios请求失败，请检查接口是否可用')
			})
		}
	}

</script>

<style>

</style>
