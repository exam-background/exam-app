<template>
	<div class="detail">
		<div>
			<van-nav-bar left-arrow title="详情页"/>
		</div>
		<div class="detail-title">
			我是一个前端开发者，我到底要不要学习NodeJS？
		</div>
		<div class="detail-header">
			<div class="detail-header_logo">
				<img :src="image" class="img" />
			</div>
			<div class="detail-header_content">
				<div class="detail-header_content-title">
					meHaotian
				</div>
				<div class="listcard-content_info">
					<p>2020-08-18 20:54:81</p>
					<p>1234 浏览</p>
					<p>2345 赞</p>
				</div>
			</div>
		</div>
		<div class="detail-content">
			详情数据
		</div>
	</div>
</template>

<script>
	export default {
		props: {
		},
		data() {
			return {
				detailId: 0,
				image: require('../../../static/1.png'), //测试的数据
				exercise: []
			}
		},
		methods: {
			fetchData() {
				var _this = this;
				if(this.selTypes == 0){
					this.$axios
					.get(this.$location.getJobDayExerciseById, {params: {id: this.detailId}})
					.then(response => {
						this.exercise = this.list.concat(response.data.data);
						console.log("就业训练查询结果---->" + JSON.stringify(this.list));
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("技术训练请求处理失败");
						console.log(error);
					});
				}else{
					this.$axios
					.get(this.$location.getTechnologyDayExerciseById, {params: {id: this.detailId}})
					.then(response => {
						this.exercise = this.list.concat(response.data.data);
						console.log("就业训练查询结果---->" + JSON.stringify(this.list));
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("技术训练请求处理失败");
						console.log(error);
					});
				}
				
			}
		},
		mounted() {
			// console.log(this.$route.query.id);
			// 给内容页赋值然后获取数据
			this.detailId = this.$route.query.id;
			this.selTypes = 0;
			// this.selTypes = this.$route.query.types;
			this.fetchData();
		}
	};
</script>

<style>
	
</style>