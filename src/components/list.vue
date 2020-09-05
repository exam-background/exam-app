<template>
	<div class="content_box">

		<van-tabs v-model="active" @click="onClick">
			<van-tab title="就业训练" typea="88"></van-tab>
			<van-tab title="技术训练" typea="88"></van-tab>
		</van-tabs>

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
					<!-- 标签 -->
					<div class="con_tag">
						<van-tag class="tag" type="primary" v-if="types == 0">就业训练</van-tag>
						<van-tag class="tag" type="primary" v-else>技术训练</van-tag>
						<van-tag class="tag" type="primary">{{item.professional.professionalName}}</van-tag>
						<van-tag class="tag" type="primary">{{item.course.courseName}}</van-tag>
					</div>
					<div style="float: right;">
						<router-link :to="{name:'detail',path:'/detail',query:{id:item.id,types: types}}" tag="p" class="color_red fz_15">训 练 </router-link>
					</div>
				</div>
			</div>

		</van-list>

	</div>
</template>

<script>
	export default {
		props: ['categoryID'],
		watch: {
			categoryID: function(val) {
				this.categoryID = val;
				this.list = [];
				this.Page = {count: 100, page: 1}
				this.onLoad();
				// alert(2) 
				//console.log(val); // 接收父组件的值
				// 然后重新list这个数组的数据渲染数据
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
				types: 0,
				Page: {
					count: 100,
					page: 1
				}
			}
		},
		methods: {
			onClick(index, title) {
				// 寫判斷 判斷 0 代表哪個分類 1代表哪個分類
				this.types = index
				this.list = [];
				this.Page = {count: 100, page: 1}
				this.onLoad();
			},
			onLoad() {
				console.log("每次触底触发我的index加载：例如" + this.Page.page);
				let that = this; 
				let arr = that.list;
				if(this.types == 0){
					this.$axios
					.get(this.$location.getTechnologyDayExerciseByProfessionalId, {
						params: {
							id: this.categoryID,
							pageSize: 5,
							currentPage: this.Page.page
						}
					})
					.then(res => {
						const data = res.data.data;
						const arrlist=  res.data.data.data;
						// 渲染总数据条数
						console.log(data);
						this.Page.page = data.total;
						arrlist.map(item => {
								this.list.push(item)
						}) 
						this.Page.page = data.curPage + 1; 
						// _this.list = res.data 
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("查询请求处理失败");
						console.log(error);
					})
				}else{
					this.$axios
					.get(this.$location.getJobDayExerciseByProfessid, {
						params: {
							id: this.categoryID,
							pageSize: 5,
							currentPage: this.Page.page
						}
					})
					.then(res => {
						const data = res.data.data;
						const arrlist=  res.data.data.data;
						// 渲染总数据条数
						console.log(data);
						this.Page.page = data.total;
						arrlist.map(item => {
								this.list.push(item)
						}) 
						this.Page.page = data.curPage + 1; 
						// _this.list = res.data 
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("查询请求处理失败");
						console.log(error);
					})
				}
				

				// 加载状态结束
				that.loading = false;

				// 数据全部加载完成 最大100条限制 然后就停止加载
				if (that.list.length >= this.Page.count) {
					that.finished = true;
				}
				// }, 1000);
				this.Page.page = this.Page.page + 1; //让我们的页码加一
			},
			// aa() {
			// 	// alert(12);
			// }
		},
		mounted() {
			// alert(this.types)
		}

	}
</script>

<style>
	@import url("../../static/css/comm.css");
</style>
