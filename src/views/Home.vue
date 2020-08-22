<template>
  <div class="home">
    <!-- 东西不大就不写成组件 -->
    <!-- 头部搜索 -->
    <van-nav-bar title="首页" />
    <!-- 菜单 -->
    <van-row type="flex" class="row_m">
      <van-col v-for="item in IcoList" :key="item" class="row_c" span="5">
        <div><img :src="item.pic" /></div>
        <div>
          <p @click="clickProfessional(item.id)">{{ item.professionalName }}</p>
        </div>
      </van-col>
    </van-row>
    <!-- 内容 -->
    <router-view />
    <!-- 底部tabs -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      IcoList: [
        {
          name: "语文",
          pic: require("../../static/1.png")
        },
        {
          name: "数学",
          pic: require("../../static/2.png")
        },
        {
          name: "英语",
          pic: require("../../static/3.png")
        },
        {
          name: "编程",
          pic: require("../../static/4.png")
        },
        {
          name: "奥数",
          pic: require("../../static/5.png")
        }
      ],
      JobDayExerciseList: [],
      TechnologyDayExerciseList: [],
      id: 0
    };
  },
  methods: {
    onChange(num) {
      //切换时更新
      this.active = num;
      console.log(num);
    },
    onClickLeft() {
      // Toast('返回');
    },
    onClickRight() {
      // Toast('按钮');
    },
    // 获取科目
    getProfessional() {
      var that = this;
      this.$axios
        .get(this.$location.getProfessionalNoPage)
        .then(response => {
          console.log("专业查询结果---->" + JSON.stringify(response.data.data));
          that.IcoList = response.data.data;
          console.log("专业查询结果---->" + JSON.stringify(this.IcoList));
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("查询请求处理失败");
          console.log(error);
        });
    },
    clickProfessional(id) {
		  this.id = id;
      // 根据id查询技术训练所有题目
      this.$axios
        .get(
          this.$location.getJobDayExerciseByProfessionalId,
          this.$qs.stringify({
            id: this.id
          })
        )
        .then(response => {
          this.JobDayExerciseList = response.data.data;
          console.log(
            "就业训练查询结果---->" + JSON.stringify(this.JobDayExerciseList)
          );
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("技术训练请求处理失败");
          console.log(error);
        });

      // 根据id查询就业训练所有题目
      this.$axios
        .get(
          this.$location.getTechnologyDayExerciseByProfessionalId,
          this.$qs.stringify({
            id: id
          })
        )
        .then(response => {
          this.TechnologyDayExerciseList = response.data.data;
          console.log(
            "就业训练查询结果---->" +
              JSON.stringify(this.TechnologyDayExerciseList)
          );
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("就业训练请求处理失败");
          console.log(error);
        });
    }
  },
  mounted() {
    this.getProfessional();
    this.clickProfessional(0);
  }
};
</script>
<style>
@import url("../../static/css/comm.css");
</style>
