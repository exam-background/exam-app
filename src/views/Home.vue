<template>
	<div class="home">
		<!-- 东西不大就不写成组件 -->
		<!-- 头部搜索 -->
		<van-nav-bar title="首页" />
		<!-- 菜单 -->
		<van-row type="flex" class="row_m">
			<van-col v-for="item in IcoList" :key="item"  class="row_c" span="5" @click="BtnType(item.typeid)">
				<div><img :src="item.pic" /></div>
				<div>
					<p>{{item.name}}</p>
				</div>
			</van-col>
		</van-row>
		<!-- 内容 -->
		<router-view :category-i-d="categoryID"/>
		<!-- 底部tabs -->
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				active: 0,
				categoryID:0,
				IcoList: [{
						name: '语文',
						pic: require('../../static/1.png'),
						typeid: 1
					},
					{
						name: '数学',
						pic: require('../../static/2.png'),
						typeid: 2
					},
					{
						name: '英语',
						pic: require('../../static/3.png'),
						typeid: 3
					},
					{
						name: '编程',
						pic: require('../../static/4.png'),
						typeid: 4
					},
					{
						name: '奥数',
						pic: require('../../static/5.png'),
						typeid: 5
					}
				]
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
			BtnType(type){
				//更改传递的id 然后子组件渲染数据
				this.categoryID = type;
			}
		},
	};
</script>
<style>
	@import url("../../static/css/comm.css");
</style>
