//考核

var examsystemPath = 'http://localhost:8081/examsystem'

const location ={
  // 查询所有专业分类
  getProfessionalNoPage: examsystemPath + '/getProfessionalNoPage',
  // 根据id查询就业训练所有题目
  getTechnologyDayExerciseByProfessionalId: examsystemPath + '/app/TechnologyDayExerciseSubmitController/getTechnologyDayExerciseByProfessionalId',
  // 根据id查询技术训练所有题目
  getJobDayExerciseByProfessionalId: examsystemPath + '/app/JobDayExerciesSubmitController/getJobDayExerciseByProfessionalId',
  // 根据学生id查询所有试卷
  getPapersUserByUserId: examsystemPath + '/app/PapersController/getPapersUserByUserId'
}

export default location
