<template>
	<div class="login_box">
		<van-loading v-show="logoShow" color="#550000" style="position: absolute;top: 43%;z-index:10;width: 80%;margin-left: 10%;margin-right: 10%;"  size="100px" vertical/>
		<div id="logo" align="center">
			<img  src="../../assets/logo.png" width="100px" height="100px" />
			
		</div>
		<div class="content_box">
			<div class="header"></div>
			<div class="login_content">
				<van-form  class="loginForm">
					<van-field input-align="center" class="loginInput" v-model="username" name="用户名" placeholder="用户名" />
					<van-field @keyup.13="onLogin" input-align="center" type="password" class="loginInput" v-model="password" name="密码" placeholder="密码" />

					<div style="margin: 16px;">
						<van-button class="denglu" @click="onLogin" round block type="danger" native-type="submit">
							登录
						</van-button>
					</div>
				</van-form>
			</div>
			<div></div>
		</div>
		
	</div>
</template>

<script>
	import { Loading } from 'vant';
	import {
		Dialog
	} from "vant";
	export default {
		data() {
			return {
				show: false,
				value: "",
				username: "",
				password: "",
				verification: "",
				ausername: false,
				logoShow : false
			};
		},
		methods: {
			onLogin() {
				if (this.username != "") {
					if(this.username.length >= 6){
						var reg = /[\u4E00-\u9FA5]/;
						if(reg.test(this.username)){
							Dialog.alert({
								theme:'round',
								title:'提示',
								width:'70%',
								height:'30%',
								message: '用户名格式有误~'
							}).then(() => {
								
							});
							return;
						}
					}else{
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '用户名长度为6~12位~'
						}).then(() => {
							
						});
						return;
					}
				} else {
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '请输入用户名~'
					}).then(() => {
						
					});
					return;
				}
				
				if (this.password != "") {
					if(this.password.length >= 6){
						var reg = /[\u4E00-\u9FA5]/;
						if(reg.test(this.password)){
							Dialog.alert({
								theme:'round',
								title:'提示',
								width:'70%',
								height:'30%',
								message: '密码格式有误~'
							}).then(() => {
								
							});
							return;
						}
					}else{
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '密码长度为6~12位~'
						}).then(() => {
							
						});
						return;
					}
				} else {
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '请输入密码~'
					}).then(() => {
						
					});
					return;
				}
				//输入验证成功
				this.logoShow = true;
				var data = this.$qs.stringify({
					loginName:this.username,
					loginPassword:this.password
				})
				this.$axios.post(this.$location.doLogin,data)
				.then(res=>{
					if(res.data.status == 200){
						this.$store.commit("set_token", res.data.data);
						this.$router.push("/Home")
					}else if(res.data.status == 400){
						
						Dialog.alert({
							theme:'round',
							title:'提示',
							width:'70%',
							height:'30%',
							message: '账号或密码错误~'
						}).then(() => {
							
						});
						this.logoShow = false;
					}
				}).catch(msg=>{
					Dialog.alert({
						theme:'round',
						title:'提示',
						width:'70%',
						height:'30%',
						message: '网络错误，请稍后重试~'
					}).then(() => {
						
					});
					this.logoShow = false;
				})
				
			}
		}
	}
</script>

<style scoped="scoped">
	#logo img {
		width: 200px;
		height: 200px;
		background: white;
		border: black 3px solid;
		border-radius: 200px;
	}

	#logo {
		opacity: 0.8;
		top: 25%;
		position: absolute;
		width: 80%;
		margin-left: 10%;
		margin-right: 10%;
	}

	.loginInput {
		font-size: 22px;
		text-align: center;
		opacity: 0.8;
		height: 100px;
		line-height: 90px;
		border-radius: 50px;
		margin-top: 20px;
	}

	.denglu {
		border: 2px solid black;
		line-height: 100px;
		font-size: 20px;
		color: black;
		height: 100px;
		background: #f6f6f6;
		opacity: 0.8;
	}

	.bu-hui {
		background-color: #cecece !important;
	}

	.van-nav-bar .van-icon {
		color: black !important;
	}

	.login_box {
		background-image: url("../../assets/images/backImage.jpeg");
		height: 1366px;
		width: 100%;
		position: relative;
	}

	.content_box {
		top: 40%;
		position: absolute;
		padding-right: 10%;
		padding-left: 10%;
		width: 80%;
	}

	.ft-15px {
		font-size: 13px;
	}

	.header {
		/* margin-top: 10px; */
	}

	.login_content {
		height: 400px;

		border-radius: 50px;
	}

	.login_content>div {
		display: inline-block;
	}
</style>
