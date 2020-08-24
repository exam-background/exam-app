//考核

var examsystemPath = 'http://localhost:8081/examsystem'

const location ={
  // 查询所有专业分类
  getProfessionalNoPage: examsystemPath + '/getProfessionalNoPage',
  // 根据id查询就业训练所有题目
  getTechnologyDayExerciseByProfessionalId: examsystemPath + '/app/AppTechnologyDayExerciseController/getTechnologyDayExerciseSubmit',
  // 根据id查询技术训练所有题目
  getJobDayExerciseByProfessid: examsystemPath + '/app/AppJobDayExerciseController/getJobDayExerciseByProfessid',
  // 根据学生id查询所有试卷
  getPapersUserByUserId: examsystemPath + '/app/PapersController/getPapersUserByUserId'
}

export default location
