<template>
	<div class="detail">
		<div>
			<van-nav-bar left-text="返回" left-arrow title="详情页" @click-left="onClickLeft"/>
		</div>
		<div class="detail-title" style="margin-left:10px;">
			<h2>问：</h2>
			<h1 style="margin-left:10px;margin-top:10px;">{{exercise.title}}</h1>
		</div>
		<br/>
		<br/>
		<div class="detail-header" style="margin-left:10px;">
			<h2>答：</h2>
			<div v-if="exercise.types == 2" style="margin-left:10px;height:220px;margin-top:20px;">
				<van-radio-group style="margin:5px 0px;padding:5px;" v-model="addExercise.submitAnswer" direction="horizontal" v-for="(exercise, index) in exercise.exerciseItems" :key="index">
					<van-radio :name="exercise.orderNum" style="height:40px;"><font size=2>{{exercise.orderNum}}：{{exercise.content}}</font></van-radio>
				</van-radio-group>
			</div>
			<duv v-else>
				<textarea v-model="addExercise.submitAnswer" style="width:90%;height:100%;resize: none;padding:10px;"></textarea>
			</duv>
		</div>
		<div class="detail-content" style="height:80px;margin-top:10px;">
			<center style="padding-top:20px;">
				<van-button round type="info" style="width:120px;" @click="insertExercise">完成</van-button>
			</center>
		</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default {
		props: {
		},
		data() {
			return {
				detailId: 0,
				image: require('../../../static/1.png'), //测试的数据
				exercise: [],
				clickRedio: 0,
				addExercise: [{
					studentId: '',
					exerciseId: '',
					submitAnswer: ''
				}]
			}
		},
		methods: {
			fetchData() {
				var _this = this;
				// alert(this.selTypes)
				// alert(this.detailId)
				if(this.selTypes == 1){
					this.$axios
					.get(this.$location.getJobDayExerciseById, {params: {id: this.detailId}})
					.then(response => {
						this.exercise = response.data.data;
						console.log("就业训练查询结果---->" + JSON.stringify(this.exercise));
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("就业训练请求处理失败");
						console.log(error);
					});
				}else{
					this.$axios
					.get(this.$location.getTechnologyDayExerciseById, {params: {id: this.detailId}})
					.then(response => {
						this.exercise = response.data.data;
						console.log("技术训练查询结果---->" + JSON.stringify(this.exercise));
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("技术训练请求处理失败");
						console.log(error);
					});
				}
				
			},
			insertExercise () {
				let token = localStorage.getItem("stuToken");
				let id = token.split('-')[2]
				if(this.selTypes == 1){
					this.$axios
					.post(this.$location.addJobDayExerciseSubmit, this.$qs.stringify({
						studentId: id,
						exerciseId: this.detailId,
						submitAnswer: this.addExercise.submitAnswer
					}))
					.then(response => {
						Dialog.alert({
						  title: '提示',
						  message: "答题成功",
						}).then(() => {
						  // on close
						});
						
						location.href="/Home";
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("技术训练请求处理失败");
						console.log(error);
					});
				}else{
					this.$axios
					.post(this.$location.addTechnologyDayExerciseSubmit, this.$qs.stringify({
						studentId: id,
						exerciseId: this.detailId,
						submitAnswer: this.addExercise.submitAnswer
					}))
					.then(response => {
						Dialog.alert({
						  title: '提示',
						  message: "答题成功",
						}).then(() => {
						  // on close
						});
						location.href="/Home"
					})
					.catch(function(error) {
						// 请求失败处理
						console.log("技术训练请求处理失败");
						console.log(error);
					});
				}
			},
			onClickLeft () {
				history.back()
			}
		},
		mounted() {
			// console.log(this.$route.query.id);
			// 给内容页赋值然后获取数据
			this.detailId = this.$route.query.id;
			this.selTypes = this.$route.query.types;
			// this.selTypes = this.$route.query.types;
			this.fetchData();
		}
	};
</script>

<style>
	
</style>