import axios from 'axios'
import { Message } from 'element-ui'
import { baseURL, timeout } from './config'
import { getDataFromStorage } from '@/utils'

let requestArr = [] // 存储ajax请求，用于取消
const request = axios.create({
  baseURL,
  timeout
})

request.interceptors.request.use((config) => {
  // 创建source
  let source = axios.CancelToken.source()
  config.cancelToken = source.token
  requestArr.push(source)

  // 获取token并携带请求
  const token = getDataFromStorage('token')
  token && (config.headers.authorization = 'Bearer ' + token)
  return config
}, (err) => {
  return err
})

request.interceptors.response.use((res) => {
  switch (res.data.status) {
    // 处理服务器的错误
    case -1:
      Message.error(res.data.msg)
      break;
  }

  return res.data
}, (err) => {
  return err
})

export default request