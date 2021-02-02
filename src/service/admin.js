import request from './request'

export function adminLogin (account, password) {
  return request.post('/user/login', {
    account,
    password,
    userType: 1
  })
}

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

export function deleteUserByIds (ids) {
  return request.post('/user/delete', {
    ids
  })
}

export function getQuestionType () {
  return request.get('/question/type')
}

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

export function deleteQuestionsByIds (ids) {
  return request.post('/questions/delete', {
    ids
  })
}


export function updateTypeName (question_tid, type_name) {
  return request.post('/question/type', {
    question_tid,
    type_name
  })
}

export function createNewType (type_name) {
  return request.post('/question/new_type', {
    type_name
  })
}

export function getWeekData () {
  return request.get('/user/data')
}

export function isLogin () {
  return request.get('/isLogin')
}

//根据账号获取用户信息
export function getUserInfo (account) {
  return request.post('/user/account', {
    account
  })
}