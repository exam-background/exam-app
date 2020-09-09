<template>
	<div class="detail">
        <van-nav-bar left-text="返回" title="试卷考核" @click-left="onClickLeft"></van-nav-bar>
        <van-row>
            <center>
                <h1>{{papers.name}}</h1>
            </center>
        </van-row>
        <van-row>
            <center>
                <h4>考试时间：{{papers.papersStartDate - papers.papersOverDate}}</h4>
                <h4>开始时间：{{papers.papersStartDate}}</h4>
                <h4>结束时间：{{papers.papersOverDate}}</h4>
                <div class="con_tag">
                    <van-tag size="large" class="tag" type="primary" v-if="papers.type == 0">就业训练</van-tag>
                    <van-tag size="large" class="tag" type="primary" v-else>技术训练</van-tag>
                    <van-tag size="large" class="tag" type="primary">{{papers.professional.professionalName}}</van-tag>
                </div>
            </center>
        </van-row>
        <van-row style="margin:10px;" v-for="(papersTitle, index) in papers.papersTitleList" :key="index">
            <h3>{{index+1}}.{{papersTitle.title}}({{papersTitle.setScore}}/{{papers.papersUserResultList[index].mark}}分)<span style="margin-left:5px;"></span></h3>
            <div style="padding:10px;">
                <div v-if="papersTitle.type == 1" style="height:52px;">
                    <textarea style="width:100%;height:100%;resize: none" v-model="insertPapers[index].userExercise" disabled></textarea>
                </div>
                <div v-else>
                    <van-radio-group style="margin:5px 0px;padding:5px;" v-model="insertPapers[index].userExercise" direction="horizontal" v-for="(papersExercises, papersExercisesIndex) in papersTitle.papersExercises" :key="papersExercisesIndex">
                        <van-radio disabled :name="papersExercises.content" style="height:40px;"><font size=2>{{papersExercises.orderNum}}：{{papersExercises.content}}</font></van-radio>
                    </van-radio-group>
                </div>
                <div style="margin-top:20px;"><h4>正确答案：</h4></div>
                <div style="width:100%;height:100px;overflow:auto;border:1px solid #f0f0f0;">
                    <div v-html="insertPapers[index].standardAnswer">

                    </div>
                </div>
            </div>
        </van-row>
        <div style="margin-button:30px;">
            <van-button type="primary" block @click="submitPapers">返回</van-button>
        </div>
        <div style="margin-top:30px;">

        </div>
    </div>
</template>
<script>
	import ue from '@/components/ue.vue'
	import { Dialog } from 'vant';
	export default {
        data() {
			return {
                id: 0,
                papers: [],
                time: '',
                insertPapers: []
			}
		},
		methods: {
            getPaper() {
                let token = localStorage.getItem("stuToken");
				let userId = token.split('-')[2]

                this.$axios
                .get(this.$location.getPapersByIdStudent, {
                    params: {
                        id: this.id
                    }
                })
                .then(res => {
                    console.log(res.data.data)
                    this.papers = res.data.data

                    this.time = this.papers.papersOverDate-this.papers.papersStartDate
                    console.log(this.papers.papersOverDate)
                    this.time = (this.time%(3600*24))%3600/60;
                    console.log("相差分钟："+this.time)

                    for(let a = 0;a<this.papers.papersTitleList.length;a++){
                        this.insertPapers.push({
                            papersId: this.id,
                            exerciseId: this.papers.papersTitleList[a].id,
                            userId: userId,
                            userExercise: this.papers.papersUserResultList[a].userExercise,
                            standardAnswer: this.papers.papersTitleList[a].standardAnswer
                        })
                    }
                    console.log(this.insertPapers)
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
			onClickLeft () {
				history.back()
            },
            submitPapers () {
                history.back()
            }
        },
        mounted() {
           
            this.id = this.$route.query.id;
            this.getPaper(this.insertPapers.userExercise);
            
        },
		components: {
			ue
		}
    }
</script>