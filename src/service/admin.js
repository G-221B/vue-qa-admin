import request from './request'

// 管理员登陆
export function adminLogin (account, password) {
  return request.post('/user/login', {
    account,
    password,
    userType: 1
  })
}

// 获取所有普通用户
export function getUser (account, username, userType, pageNum) {
  return request.get('/user', {
    params: {
      account,
      username,
      userType,
      pageNum
    }
  })
}

// 创建用户或者管理员
export function createUser (account, password, userType) {
  return request.post('/user/register', {
    account,
    password,
    name: 'admin',
    detail: '该用户什么也没留下',
    sex: '1',
    email: '1982414933@qq.com',
    userType
  })
}

// 通过id删除用户
export function deleteUserByIds (ids) {
  return request.post('/user/delete', {
    ids
  })
}

// 获取问题分区
export function getQuestionType () {
  return request.get('/question/type')
}

// 通过条件查询问题
export function queryQuestion (id, username, t_id, title, pageNum) {
  return request.get('/question/query', {
    params: {
      id,
      username,
      t_id,
      title,
      pageNum
    }
  })
}

// 删除问题
export function deleteQuestionsByIds (ids) {
  return request.post('/questions/delete', {
    ids
  })
}

// 更新分区名
export function updateTypeName (question_tid, type_name) {
  return request.post('/question/type', {
    question_tid,
    type_name
  })
}

// 创建新分区
export function createNewType (type_name) {
  return request.post('/question/new_type', {
    type_name
  })
}

// 获取一周内用户注册量和提问量
export function getWeekData () {
  return request.get('/user/data')
}

// 判断用户是否登陆
export function isLogin () {
  return request.get('/isLogin')
}

//根据账号获取用户信息
export function getUserInfo (account) {
  return request.post('/user/account', {
    account
  })
}