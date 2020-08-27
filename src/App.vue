<template>
	<div id="app">
		<router-view />
		<van-tabbar v-model="active" @change="onChange" v-show="$store.state.isShowBar">
			<van-tabbar-item icon="home-o" to="/Home">首页</van-tabbar-item>
			<van-tabbar-item icon="search">发现</van-tabbar-item>
			<van-tabbar-item icon="friends-o">学习</van-tabbar-item>
			<van-tabbar-item icon="setting-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				active: 0
			};
		},
		computed: {
			//...mapState(['hasLogin'])
		},
		methods: {
			onChange(num) {
				//切换时更新
				this.active = num;
				// 判断是否登陆
				if (this.active == 3) {
					if (null == localStorage.getItem('stuToken')) {
						console.log("我没有登陆，进入登录界面");
						// that.$router.push('/Login')
						this.$router.push('/Login')
						//window.href="/Login"
						// 登陆以后改变我们vuex的状态
					} else {
						console.log("我登陆过，进入用户页面");
						this.$router.push('/user')
					}
				}
			},
			onClickLeft() {
				// Toast('返回');
			},
			onClickRight() {
				// Toast('按钮');
			},
		},
		mounted(){
			//alert(this.$store.state.hasLogin)
			//alert("fsdfsd")
			// if (this.$route.path == "/Login") {
			// 			console.log("我没有登陆");
			// 			// that.$router.push('/Login')
			// 				this.isShowBar =  false
			// 			//lthis.$router.push('/Login')
			// 			//window.href="/Login"
			// 			// 登陆以后改变我们vuex的状态
			// 		} else {
			// 			this.isShowBar =  true
			// 			console.log("我登陆过了");
			// 			this.$router.push('/Home')
			// 		}
		}
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
