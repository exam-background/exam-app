<template>
	<div class="content_box">
		<!-- <h1>{{categoryID}}</h1> 这里可以看我们的传递过来的分类id -->
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

			<div class="exhibition" v-for="(item,index) in list" :key="index" :title="item">
			<!-- 	<div class="img_box">
					<img :src="item.img" class="img" />
				</div> -->
				<div class="box">
					<div class="exhibition_title">
						<h4>{{item.title}}</h4>
					</div>
					<div class="exhibition_content">
						<p class="fs_13">{{item.content}}</p>
					</div>
					<div class="con_tag">
						<van-tag class="tag" type="primary">{{item.professional.professionalName}}</van-tag>
					</div>

					<div>
						<p class="color_red fz_15">{{item.more}}</p>
						<router-link :to="{name:'detail',path:'/detail',query:{id:item.id}}"  tag="p" class="color_red fz_15">Read More</router-link>
					</div>
				</div>
			</div>

		</van-list>

	</div>
</template>

<script>
	export default {
		props:['categoryID', 'types'],
		watch: {
			categoryID: function(val) {
				this.categoryID = val;
				
				this.getExercise()
				//console.log(val); // 接收父组件的值
				// 然后重新list这个数组的数据渲染数据
			},
			types: function(val) {
				this.types = val;
				this.getExercise()
			}
		},
		data() {
			return {
				list: [],
				// 分页加载 (废弃)
				// Page: {
				// 	scroll: true, //开关,
				// 	pagenum: 1, //当前页数
				// 	totalnum: 1 //总页数
				// }
				loading: false,
				finished: false,
				curPage: 1,
				pageSize: 4
			}
		},

		methods: {
			onLoad() {
				let that = this;
				// 异步更新数据
				// setTimeout 仅做示例，真实场景中一般为 ajax 请求
				let arr = that.list;
				setTimeout(() => {
					arr.map(item => {
						that.list.push(item)
					});
					// this.list.push(this.list.length + 1);
					// 加载状态结束
					that.loading = false;

					// 数据全部加载完成 最大40条限制
					if (that.list.length >= 40) {
						that.finished = true;
					}
				}, 1000);
			},
			getExercise(){
				this.list = [];
				if(this.types == 0){
					this.$axios
						.get(this.$location.getJobDayExerciseByProfessid, {params: {id: this.categoryID, pageSize: this.pageSize, currentPage: this.currentPage}})
						.then(response => {
							this.list = this.list.concat(response.data.data.data);
							console.log("就业训练查询结果---->" + JSON.stringify(this.list));
						})
						.catch(function(error) {
							// 请求失败处理
							console.log("技术训练请求处理失败");
							console.log(error);
						});
				}else{
					// 根据id查询就业训练所有题目
					this.$axios
						.get(
						this.$location.getTechnologyDayExerciseByProfessionalId, {params: {id: this.categoryID, pageSize: this.pageSize, currentPage: this.currentPage}})
						.then(response => {
						this.list = this.list.concat(response.data.data);
						console.log(
							"技术训练查询结果---->" +
							JSON.stringify(this.TechnologyDayExerciseList)
						);
						})
						.catch(function(error) {
						// 请求失败处理
						console.log("就业训练请求处理失败");
						console.log(error);
						});
				}
			}
		},
		mounted() {
			this.getExercise();
		}

	}
</script>

<style>
	@import url("../../static/css/comm.css");
</style>
