<template>
	<div class="home">
		<!-- 东西不大就不写成组件 -->
		<!-- 头部搜索 -->
		<van-nav-bar title="首页" />
		<!-- 菜单 -->
		<van-row type="flex" class="row_m">
			<van-col v-for="item in IcoList" :key="item"  class="row_c" span="6" @click="clickProfessional(item.id)">
				<div><img :src="item.professionalDesc"/></div>
				<div>
					<p>{{item.professionalName}}</p>
				</div>
			</van-col>
		</van-row>
		<!-- 内容 -->
		<router-view :category-i-d="categoryID" :types="types"/>
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
				IcoList: [],
				JobDayExerciseList: [],
				TechnologyDayExerciseList: [],
				id: 0

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
				alert("fdsfd")
			},
			onClickRight() {
				// Toast('按钮');
			},
			getProfessional() {
				var that = this;
				this.$axios
					.get(this.$location.getProfessionalNoPage)
					.then(response => {
						console.log("专业查询结果---->" + JSON.stringify(response.data.data));
						that.IcoList = response.data.data;
						console.log("专业查询结果---->" + JSON.stringify(this.IcoList));
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("查询请求处理失败");
						console.log(error);
					});
			},
			clickProfessional(id) {
				this.id = id;
				this.categoryID = id;
			}
		},
		mounted() {
			this.getProfessional();
		}
	};
</script>
<style>
	.row_m{
		text-align: center;
	}
	@import url("../../static/css/comm.css");
</style>
