import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { isLogin } from '@/service/admin'
import * as echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.prototype.$echarts = echarts

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/') {
    const res = await isLogin()

    if (res.status === 0) {
      next()
    } else {
      ElementUI.Message.error('请先登陆!')
      next({ path: '/' })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
