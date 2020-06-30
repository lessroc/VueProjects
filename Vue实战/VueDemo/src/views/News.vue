<template>
	<div>
		<ul>
			<li v-for="(news, index) in newsArr" :key="index">{{ news }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				newsArr: ['教育部要求严格国际学生申请资格', '钟南山李兰娟张文宏禁毒宣传片', '中国人均收入35年增加22倍', '618断货王空气霜', '情人舞挑战']
			}
		}
	}
</script>

<style>

</style>
