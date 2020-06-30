<template>
	<div>
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header"><h2>Router Basic 1</h2></div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-offset-2 col-xs-2">
				<div class="list-group">
					<!--<a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
					<a href="#/home" class="list-group-item">Home</a>-->
					<router-link to="/about" class="list-group-item">About</router-link>
					<router-link to="/home" class="list-group-item">Home</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel-body">
					<!--<div>
						<h2>About组件</h2>
						<p>接收外部数据：atguigu</p> <input type="text">
					</div>-->
					<keep-alive>
						<router-view msg="message"></router-view>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style>
	.router-link-active {
		color: red !important;
	}
</style>
