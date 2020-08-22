<template>
	<div class="content_box">
		<!-- <h1>{{categoryID}}</h1> 这里可以看我们的传递过来的分类id -->
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->

			<div class="exhibition" v-for="(item,index) in list" :key="index" :title="item">
				<div class="img_box">
					<img :src="item.img" class="img" />
				</div>
				<div class="box">
					<div class="exhibition_title">
						<h4>{{item.title}}</h4>
					</div>
					<div class="exhibition_content">
						<p class="fs_13">{{item.content}}</p>
					</div>
					<div>
						<!-- <p class="color_red fz_15">{{item.more}}</p> -->
						<router-link :to="{name:'detail',path:'/detail',query:{id:1}}"  tag="p" class="color_red fz_15">{{item.more}}</router-link>
					</div>
				</div>
			</div>

		</van-list>

	</div>
</template>

<script>
	export default {
		props:['categoryID'],
		watch: {
			categoryID: function(val) {
				this.categoryID = val;
				// console.log(val); // 接收父组件的值
				// 然后重新list这个数组的数据渲染数据
			}
		},
		data() {
			return {
				list: [{
						id:1,
						title: 'RECENT TITLE ONE', //标题
						content: 'LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum!', //内容
						img: require('../../static/lion.png'), //图片
						more: 'Read More'
					},
					{
						id:1,
						title: 'RECENT TITLE TWO',
						content: 'LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!',
						img: require('../../static/lion.png'),
						more: 'Read More'
					},
					{
						id:1,
						title: 'RECENT TITLE ONE',
						content: 'LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!',
						img: require('../../static/lion.png'),
						more: 'Read More'
					}, {
						id:1,
						title: 'RECENT TITLE ONE', //标题
						content: 'LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum!', //内容
						img: require('../../static/lion.png'), //图片
						more: 'Read More'
					},
					{
						id:1,
						title: 'RECENT TITLE TWO',
						content: 'LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!',
						img: require('../../static/lion.png'),
						more: 'Read More'
					},
					{
						id:1,
						title: 'RECENT TITLE ONE',
						content: 'LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!',
						img: require('../../static/lion.png'),
						more: 'Read More'
					}
				],
				// 分页加载 (废弃)
				// Page: {
				// 	scroll: true, //开关,
				// 	pagenum: 1, //当前页数
				// 	totalnum: 1 //总页数
				// }
				loading: false,
				finished: false,
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

		}

	}
</script>

<style>
	@import url("../../static/css/comm.css");
</style>
