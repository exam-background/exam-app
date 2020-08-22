<template>
	<div id="app">
		<router-view />
		<van-tabbar v-model="active" @change="onChange">
			<van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
			<van-tabbar-item icon="search">发现</van-tabbar-item>
			<van-tabbar-item icon="friends-o">学习</van-tabbar-item>
			<van-tabbar-item icon="setting-o" to="/user">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
			};
		},
		methods: {
			onChange(num) {
				//切换时更新
				this.active = num;
				console.log(num);
			},
			onClickLeft() {
				// Toast('返回');
			},
			onClickRight() {
				// Toast('按钮');
			},
		},
	};
</script>
<style>
	* {
		padding: 0;
		margin: 0;
	}

	.van-tabbar--fixed {
		background-color: rgba(255, 255, 255, 0.9) !important;
	}
</style>
