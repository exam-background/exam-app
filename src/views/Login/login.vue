<template>
	<div class="login_box">
		<div>
			<van-nav-bar left-arrow @click-left="onClickLeft" />
		</div>
		<div class="content_box">
			<div class="header">
				<h2>验证码登录</h2>
				<p class="ft-15px">新用户登录后将自动创建账号</p>
			</div>
			<div class="login_content">
				<van-form @submit="onSubmit">
					<van-field v-model="username" name="用户名" label="用户名" placeholder="手机号" :rules="[{ required: true}]" />
					<van-field v-model="verification" center clearable label="请输入验证码" placeholder="获取验证码" maxlength="6" :rules="[{ required: true}]">
						<template #button>
							<van-button type="primary" size="small" @click="code">发送验证码</van-button>
						</template>
					</van-field>
					<div style="margin: 16px;">
						<van-button round block type="danger" native-type="submit">
							提交
						</van-button>
					</div>

				</van-form>
			</div>
			<div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Dialog
	} from 'vant';
	export default {
		data() {
			return {
				show: false,
				format: '+86',
				value: '',
				username: '',
				verification: '',
				ausername: false
			}
		},
		methods: {
			onClickLeft() {
				alert('返回')
			},
			onSubmit() {
				alert('登录成功')
			},
			code() {
				Dialog.alert({
					message: '发送短信',
				}).then(() => {

				});
			}
		},

	};
</script>

<style scoped="scoped">
	.bu-hui {
		background-color: #CECECE !important;
	}

	.van-nav-bar .van-icon {
		color: black !important;
	}

	.login_box {
		width: 100%;
		box-sizing: border-box;
	}

	.content_box {
		padding-right: 10%;
		padding-left: 10%;
		width: 80%;
		margin-top: 10%;
	}

	.ft-15px {
		font-size: 13px;
	}

	.header {
		line-height: 30px;
		margin-top: 10px;
	}

	.login_content {
		background-color: #e3e3e3;
		border-radius: 50px;
		height: 30px;
		line-height: 30px;
	}

	.login_content>div {
		display: inline-block;
	}
</style>
