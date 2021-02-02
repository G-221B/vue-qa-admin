import axios from 'axios'
import { Message } from 'element-ui'
import { baseURL, timeout } from './config'
import { getDataFromStorage } from '@/utils'

let requestArr = []
const request = axios.create({
  baseURL,
  timeout
})

request.interceptors.request.use((config) => {
  let source = axios.CancelToken.source()
  config.cancelToken = source.token
  requestArr.push(source)
  const token = getDataFromStorage('token')
  token && (config.headers.authorization = 'Bearer ' + token)
  return config
}, (err) => {
  return err
})

request.interceptors.response.use((res) => {
  switch (res.data.status) {
    case -1:
      Message.error(res.data.msg)
      break;
    // case 401:
    //   Message.error('登陆已过期')
    //   requestArr.forEach(item => {
    //     item.cancel()
    //   })
    //   requestArr.length = 0
    //   break;
  }

  return res.data
}, (err) => {
  return err
})

export default request