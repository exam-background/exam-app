<template>
    <div>
        <van-nav-bar title="所有试卷"></van-nav-bar>
        <van-tabs v-model="active" @click="onClick">
			<van-tab title="待考试卷" typea="88"></van-tab>
			<van-tab title="已考试卷" typea="88"></van-tab>
		</van-tabs>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="标题1" name="1">测试测试测试测试</van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
	export default {
        data() {
            return {
                activeNames: []
            }
        },
        methods: {

        },
        mounted() {

        }
    };
</script>