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
	.detail {
		/* padding: 15px 0; */
		padding-bottom: 54px;
	}

	.img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 20px;
	}

	.detail-title {
		padding: 0 15px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}

	.detail-header {
		display: flex;
		align-items: center;
		margin-top: 10px;
		padding: 0 15px;

		.detail-header_logo {
			flex-shrink: 0;
			width: 40px;
			height: 40px;
			border-radius: 50%;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.detail-header_content {
			width: 100%;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			font-size: 12px;

			.detail-header_content-title {
				font-size: 14px;
				margin-bottom: 5px;
				color: #333;
			}

			.detail-header_content-info {
				color: #999;

				test {
					margin-right: 10px;
				}
			}
		}
	}

	.detail-content {
		height: 1000px;
		border: 1px solid red;
	}

	.detail-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 44px;
		border-top: 1px solid #f5f5f5;
		background-color: #fff;
		box-sizing: border-box;

		.detail-bottom_input {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 10px;
			padding: 0 10px;
			width: 100%;
			height: 30px;
			border: 1px solid #ddd;
			border-radius: 5px;

			text {
				font-size: 14px;
				color: #999;
			}

		}

		.detail-bottom_icons {
			display: flex;
			flex-shrink: 0;
			padding: 0 10px;

			.detail-bottom_icons-box {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 44px;
			}
		}
	}
	.listcard-content_info p{
		font-size: 13px;
		float: left;
		margin-right: 10px;
	}
</style>
