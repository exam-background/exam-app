<template>
    <div>
        <van-nav-bar title="所有试卷"></van-nav-bar>
        <van-tabs @click="onClick">
			<van-tab title="待考试卷" typea="88"></van-tab>
			<van-tab title="已考试卷" typea="88"></van-tab>
		</van-tabs>
        <van-collapse v-model="selType" @change="clickType" accordion :class="{'displayNoNe':cut}">
            <van-collapse-item title="技术考核" name="1">
                <h1 v-if="selTechnologyDayExercise == ''">暂无考试</h1>
                <div class="exhibition" v-for="(technologyDayExercise,index) in selTechnologyDayExercise" :key="index" :title="technologyDayExercise">
                    <div class="box">
                        <div class="exhibition_title">
                            <h4>{{technologyDayExercise.name}}</h4>
                        </div>
                        <!-- 标签 -->
                        <div class="con_tag">
                            <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                            <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                            <van-tag class="tag" type="primary">{{technologyDayExercise.professional.professionalName}}</van-tag>
                            <van-tag class="tag" type="primary" v-for="(courses, courseIndex) in technologyDayExercise.courseList" :key="courseIndex">{{courses.courseName}}</van-tag>
                        </div>
                        <div style="float: right;">
                            <router-link :to="{name:'Paper',path:'/Paper',query:{id:technologyDayExercise.id}}" tag="p" class="color_red fz_15">开始考试</router-link>
                        </div>
                    </div>
                </div>
            </van-collapse-item>
            <van-collapse-item title="就业训练" name="0">
                <h1 v-if="selJobDayExercise == ''">暂无考试</h1>
                <div class="exhibition" v-for="(jobDayExercise,index) in selJobDayExercise" :key="index" :title="jobDayExercise">
                    <div class="box">
                        <div class="exhibition_title">
                            <h4>{{jobDayExercise.name}}</h4>
                        </div>
                        <!-- 标签 -->
                        <div class="con_tag">
                            <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                            <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                            <van-tag class="tag" type="primary">{{jobDayExercise.professional.professionalName}}</van-tag>
                            <van-tag class="tag" type="primary" v-for="(courses, courseIndex) in jobDayExercise.courseList" :key="courseIndex">{{courses.courseName}}</van-tag>
                        </div>
                        <div style="float: right;">
                            <router-link :to="{name:'Paper',path:'/Paper',query:{id:jobDayExercise.id}}" tag="p" class="color_red fz_15">开始考试</router-link>
                        </div>
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>

        <van-collapse v-model="selType" @change="clickPapers" accordion :class="{'displayNoNe':!cut}">
            <van-collapse-item title="技术考核" name="1">
                <h1 v-if="papersTechnologyDayExercise == ''">暂无考试记录</h1>
                <div class="exhibition" v-for="(papersTechnologyDay,index) in papersTechnologyDayExercise" :key="index" :title="papersTechnologyDay">
                    <div class="box">
                        <div class="exhibition_title">
                            <h4>{{papersTechnologyDay.name}}<span style="margin-left:20px;">得分：{{score[index].count}}/{{score[index].student}}</span></h4>
                        </div>
                        <!-- 标签 -->
                        <div class="con_tag">
                            <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                            <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                            <van-tag class="tag" type="primary">{{papersTechnologyDay.professional.professionalName}}</van-tag>
                            <van-tag class="tag" type="primary" v-for="(coursess, courseIndexs) in papersTechnologyDay.courseList" :key="courseIndexs">{{coursess.courseName}}</van-tag>
                        </div>
                        <div style="float: right;">
                            <router-link :to="{name:'ErrorPaper',path:'/ErrorPaper',query:{id:papersTechnologyDay.id}}" tag="p" class="color_red fz_15">查看试卷</router-link>
                        </div>
                    </div>
                </div>
            </van-collapse-item>
            <van-collapse-item title="就业训练" name="0">
                <h1 v-if="papersJobDayExercise == ''">暂无考试记录</h1>
                <div class="exhibition" v-for="(papersJobDay,index) in papersJobDayExercise" :key="index" :title="papersJobDay">
                    <div class="box">
                        <div class="exhibition_title">
                            <h4>{{papersJobDay.name}}<span style="margin-left:20px;">得分：{{score[index].count}}/{{score[index].student}}</span></h4>
                        </div>
                        <!-- 标签 -->
                        <div class="con_tag">
                            <van-tag class="tag" type="primary" v-if="type == 0">就业训练</van-tag>
                            <van-tag class="tag" type="primary" v-else>技术训练</van-tag>
                            <van-tag class="tag" type="primary">{{papersJobDay.professional.professionalName}}</van-tag>
                            <van-tag class="tag" type="primary" v-for="(coursess, courseIndexs) in papersJobDay.courseList" :key="courseIndexs">{{coursess.courseName}}</van-tag>
                        </div>
                        <div style="float: right;">
                            <router-link :to="{name:'ErrorPaper',path:'/ErrorPaper',query:{id:papersJobDay.id}}" tag="p" class="color_red fz_15">查看试卷</router-link>
                        </div>
                    </div>
                </div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
	import { Dialog } from 'vant';
	export default {
        data() {
            return {
                selType: [],
                selTechnologyDayExercise: [],
                selJobDayExercise: [],
                papersTechnologyDayExercise: [],
                papersJobDayExercise: [],
                type: 0,
                cut: false,
                score: [],
            }
        },
        methods: {
            onClick (index, titl) {
                console.log("切换功能"+index)
                this.cut = !this.cut
            },
            clickType (activeNames) {
                let token = localStorage.getItem("stuToken");
				let id = token.split('-')[2]
                this.type = activeNames;
                console.log("点击下拉框"+activeNames)
                this.$axios
                .get(this.$location.getPapersByUserIdAndType, {
                    params: {
                        userId: id,
                        type: activeNames
                    }
                })
                .then(res => {
                    console.log(res.data.data)
                    if(activeNames == 1){
                        this.selTechnologyDayExercise = res.data.data
                    }else{
                        this.selJobDayExercise = res.data.data
                    }
                })
                .catch(function(error) {
                    Dialog.alert({
                        title: '提示',
                        message: error,
                    }).then(() => {
                        // on close
                    });
                })
            },
            clickPapers (activeNames) {
                let token = localStorage.getItem("stuToken");
                let id = token.split('-')[2]
                this.score = []
                this.type = activeNames;
                console.log("点击下拉框"+activeNames)
                this.$axios
                .get(this.$location.getPapersByUserIdAndTypeFinish, {
                    params: {
                        userId: id,
                        type: activeNames
                    }
                })
                .then(res => {
                    console.log(res.data.data)
                    for(var c=0;c<res.data.data.length;c++){
                        this.score.push({
                            count: 0,
                            student: 0
                        });
                        for(let i=0;i<res.data.data[c].papersUserResultList.length;i++){
                            // 遍历分数
                            this.score[c].count=this.score[c].count+res.data.data[c].papersUserResultList[i].setScore
                            this.score[c].student=this.score[c].student+res.data.data[c].papersUserResultList[i].mark
                        }
                    }
                    console.log(this.score)
                    if(activeNames == 1){
                        this.papersTechnologyDayExercise = res.data.data
                    }else{
                        this.papersJobDayExercise = res.data.data
                    }
                })
                .catch(function(error) {
                    Dialog.alert({
                        title: '提示',
                        message: error,
                    }).then(() => {
                        // on close
                    });
                })
            }
        },
        mounted() {

        }
    };
</script>
<style scoped>
    .displayNoNe{
        display: none
    }
</style>