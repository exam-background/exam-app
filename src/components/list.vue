<template>
  <div class="content_box">
    <div
      class="exhibition"
      v-for="(jobDay, index) in JobDayExerciseList"
      :key="index"
    >
      <div class="img_box">
        <img :src="jobDay.img" class="img" />
      </div>
      <div class="box">
        <div class="exhibition_title">
          <h4>{{ jobDay.title }}</h4>
        </div>
        <div class="exhibition_content">
          <p class="fs_13">{{ jobDay.answer }}</p>
        </div>
        <div>
          <p class="color_red fz_15" @click="selProfessional(jobDay.id)">
            开始做答
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conList: [
        {
          title: "RECENT TITLE ONE", //标题
          content:
            "LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum!", //内容
          img: require("../../static/lion.png"), //图片
          more: "Read More"
        },
        {
          title: "RECENT TITLE TWO",
          content:
            "LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!",
          img: require("../../static/lion.png"),
          more: "Read More"
        },
        {
          title: "RECENT TITLE ONE",
          content:
            "LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!",
          img: require("../../static/lion.png"),
          more: "Read More"
        },
        {
          title: "RECENT TITLE ONE", //标题
          content:
            "LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum!", //内容
          img: require("../../static/lion.png"), //图片
          more: "Read More"
        },
        {
          title: "RECENT TITLE TWO",
          content:
            "LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!",
          img: require("../../static/lion.png"),
          more: "Read More"
        },
        {
          title: "RECENT TITLE ONE",
          content:
            "LOREM lpsum is simply dummy text lorem lpsum is text.Lipsmu smipum doloripsum mipsum2!",
          img: require("../../static/lion.png"),
          more: "Read More"
        }
      ]
    };
  },
  methods: {
	selProfessional (id) {
		
	}
  }
};
</script>

<style>
@import url("../../static/css/comm.css");
</style>
