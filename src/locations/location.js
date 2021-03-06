//考核
var examsystemPath = 'http://139.9.169.87:8081/examsystem'

const location ={
	getStuById : examsystemPath + "/getStuById",
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
  addJobDayExerciseSubmit: examsystemPath + '/app/JobDayExerciesSubmitController/addJobDayExerciseSubmit',
  // 根据用户id和类型查询试卷
  getPapersByUserIdAndType: examsystemPath + '/app/PapersController/getPapersByUserIdAndType',
  // 根据试卷id查询试卷
  getPapersById: examsystemPath + '/app/PapersController/getPapersById',
  // 根据试卷id查询试卷和学生作答
  getPapersByIdStudent: examsystemPath + '/app/PapersController/getPapersByIdStudent',
  // 添加学生作答
  insertPapersUserResult: examsystemPath + '/app/AppPapersUserResultController/insertPapersUserResult',
  // 根据学生id和类型查询已考试卷
  getPapersByUserIdAndTypeFinish: examsystemPath + '/app/PapersController/getPapersByUserIdAndTypeFinish'
}

export default location
