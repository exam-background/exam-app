<template>
	<div class="D-div">
		<div>
			<div class="Ddiv2">
				<div class="box">
					  <img class="pic_t" src="../../static/lion.png"/>
					  <div>
						<h1>{{className}}-{{proName}}-{{stuName}}</h1>
					  </div>
				</div>
			</div> 
		</div>
	<!-- 	<div class="x-div1">
			<div v-for="(titem,index) in wot" class="x-div2">
				<div>
					<div><img :src="imgs[index]"></div>
					<div>{{titem.txt}}</div>
				</div>
				<div>
					<div class="pbsg1">{{titem.txt1}}</div>
					<div class="pbsg"> > </div>
				</div>
			</div>
		</div> -->
		<div class="pars">
			<van-row gutter="20" class="row_c">
				<van-col span="8">
					<div><img src="../../public/cuoti1.png"/></div>
					<div>
						<p>技术训练错题本</p>
					</div>
				</van-col>
				<van-col span="8">
					<div><img src="../../public/cuoti2.png"/></div>
					<div>
						<p>就业训练错题本</p>
					</div>
				</van-col>
				<van-col span="8">
					<div><img src="../../public/shijuan.png"/></div>
					<div>
						<p>试卷错题</p>
					</div>
				</van-col>
			</van-row>
		</div>
		<van-button id="exit" type="primary" block @click="exit">退出当前账号</van-button>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				indexList:[],
				className:'',
				proName : '',
				stuName:''
			}
		},
		components: {
			
		},
		mounted() {
			let stuId = localStorage.getItem("stuToken").split("-")[2]
				
			this.$axios.get(this.$location.getStuById,{params:{"id":stuId}}).then(res=>{
				this.proName = res.data.data.professionalName
				this.className = res.data.data.className
				this.stuName = res.data.data.studentName
			});
			// this.axios.get("https://www.fastmock.site/mock/092fc8390d9e8e4066597c3753d23ffa/mhqtapp/api")
			// 	.then((res) => {
			// 		this.wot = res.data.wot.dtxt

			// 	})
			// 	.catch((errer) => {
			// 		console.log(errer);
			// 	})
		},
		methods: {
			

			exit () {
				Dialog.confirm({
				  title: '标题',
				  message: '弹窗内容',
				})
				  .then(() => {
				    localStorage.removeItem("stuToken");
				    this.$router.push("/");
				  })
				  .catch(() => {
				    
				  });
				
				//alert("退出")
			}
		}
	}
</script>

<style scoped>
	.D-div {
		background: #F2F2F2;
	}
	.Ddiv2 .box .pic_t{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin-top: 20px;
		margin-left:20px;
		float:left;
	}
	.Ddiv2 .box h3{
		 margin-top: 30px;
	}
	.Ddiv2 {
		width: 100%;
		height: 221px;
		background: #F38232;
		text-align: center;
	}

	.IM {
		width: 100%;

	}

	.x-div1 {
		 
		background: #FFFFFF;
	}

	.x-div2 {
		width: 100%;
		display: flex;

	}


	.x-div2>div {
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #dedede;
		font-size: 18px;
		display: flex;
		position: relative;
		align-items: center;
	}

	.x-div2 img {
		width: 40px;
		height: 40px;
		margin-left: 10px;
		margin-right: 10px;
	}

	.pbsg {
		position: absolute;
		right: 20px;
	}

	.pbsg1 {
		position: absolute;
		right: 40px;
	}

	.pars {
		margin-top: 60%;
		padding-bottom: 60%;
		width: 100%; 
	}

	.Ddiv2>div:nth-child(1) {
		text-align: center;
		padding-top: 10px;
		color: #FFFFFF;
		padding-bottom: 10px;
		font-size: 20px;
	}

	.Ddiv2 input {
		border: none;
		border-radius: 5px;
		height: 35px;
		padding-left: 5px;
	}

	.Ddiv2>div:nth-child(2) {
		width: 100%;
		font-size: 20px;
		padding-bottom: 10px;
	}

	.Ddiv2>div:nth-child(3) {
		width: 100%;
		font-size: 20px;
	}

	.Ddiv2>div>span {
		color: #FFFFFF;
		margin-right: 10px;
	}

	.Ddiv2>button {
		border: none;
		background: #FFFFFF;
		color: #F38232;
		margin-top: 20px;
		border-radius: 5px;
		border: 1px solid #FFFFFF;
		font-size: 16px;
		width: 60px;
		height: 40px;

	}

	.Ddiv2>button:hover {
		background: red;
		color: #FFFFFF;
	}

	.box div{
		float:left;
		margin-left:20px;
	}

	.row_c {
		font-size: 14px;
		text-align: center;
		color: #2d2d2d;
	}

	.row_c img{
		width: 45px;
		height: 45px;
	}
	h1{
		position: relative;
		top: 83px;
	}
	#exit{
		height: 70px;
		bottom: 58px;
		position: absolute;
		font-size: 40px;
	}
</style>