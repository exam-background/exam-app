//考核
var examsystemPath = 'http://localhost:8081/examsystem'

const location ={
	
  doLogin : examsystemPath + '/app/Student/doLogin',
  courseForPage : examsystemPath + '/courseForPage',
  // 查询所有专业分类
  getProfessionalNoPage: examsystemPath + '/getProfessionalNoPage',
  // 分页加载技术每日一练数据
  getTechnologyDayExerciseByProfessionalId: examsystemPath + '/app/AppTechnologyDayExerciseController/getTechnologyDayExerciseSubmit',
  // 分页加载技术每日一练数据
  getJobDayExerciseByProfessid: examsystemPath + '/app/AppJobDayExerciseController/getJobDayExerciseByProfessid',
  // 根据学生id查询所有试卷
  getPapersUserByUserId: examsystemPath + '/app/PapersController/getPapersUserByUserId',
  // 根据题目id查询就业每日一练
  getJobDayExerciseById: examsystemPath + '/getJobDayExerciseById',
  // 根据题目id查询师范每日一练
  getTechnologyDayExerciseById: examsystemPath + '/getTechnologyDayExerciseById',
  // 添加技术每日一练作答
  addTechnologyDayExerciseSubmit: examsystemPath + '/app/TechnologyDayExerciseSubmitController/addTechnologyDayExerciseSubmit',
  // 添加专业每日一练作答
  addJobDayExerciseSubmit: examsystemPath + '/app/JobDayExerciesSubmitController/addJobDayExerciseSubmit'
}

export default location
