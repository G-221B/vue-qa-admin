import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin'),
    children: [
      {
        path: 'user',
        component: () => import(/* webpackChunkName: "userManage" */ '../views/admin/main/user_manage')
      },
      {
        path: 'question',
        component: () => import(/* webpackChunkName: "questionManage" */ '../views/admin/main/question_manage')
      },
      {
        path: 'type',
        component: () => import(/* webpackChunkName: "typeManage" */ '../views/admin/main/type_manage')
      },
      {
        path: 'operate',
        component: () => import(/* webpackChunkName: "operateManage" */ '../views/admin/main/operate_manage')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
