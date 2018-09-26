import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import UserIndex from '@/components/user/userIndex'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/user/userIndex',
      name: 'userIndex',
      component: UserIndex
    }
  ]
})
