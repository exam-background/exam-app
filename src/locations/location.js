//考核

<<<<<<< HEAD
var examsystemPath = 'http://192.168.43.30:8081/examsystem'
=======
var examsystemPath = 'http://106.52.74.76:8081/examsystem'
>>>>>>> dfd0550938a01bf945fc675df49aeea6e77381e3

const location ={
	
  doLogin : examsystemPath + '/app/Student/doLogin',
  courseForPage : examsystemPath + '/courseForPage',
  // 查询所有专业分类
  getProfessionalNoPage: examsystemPath + '/getProfessionalNoPage',
  // 根据id查询就业训练所有题目
  getTechnologyDayExerciseByProfessionalId: examsystemPath + '/app/AppTechnologyDayExerciseController/getTechnologyDayExerciseSubmit',
  // 根据id查询技术训练所有题目
  getJobDayExerciseByProfessid: examsystemPath + '/app/AppJobDayExerciseController/getJobDayExerciseByProfessid',
  // 根据学生id查询所有试卷
  getPapersUserByUserId: examsystemPath + '/app/PapersController/getPapersUserByUserId',
  // 根据题目id查询就业每日一练
  getJobDayExerciseById: examsystemPath + '/getJobDayExerciseById',
  // 根据题目id查询师范每日一练
  getTechnologyDayExerciseById: examsystemPath + '/getTechnologyDayExerciseById'

}

export default location
