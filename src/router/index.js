import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import ChargeReport from '@/components/charge/chargeReport'
import Blank from '@/components/user/blank'
import UserIndex from '@/components/user/userIndex'
import ChangePassword from '@/components/user/changePassword'

import TeacherIndex from '@/components/teacher/teacherIndex'
import Mine from '@/components/teacher/mine'
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
      path: '/user/blank',
      name: 'blank',
      component: Blank
    },
    {
      path: '/chargeReport',
      name: 'chargeReport',
      component: ChargeReport
    },
    {
      path: '/user/userIndex',
      name: 'userIndex',
      component: UserIndex
    },
    {
      path: '/user/changePassword',
      name: 'changePassword',
      component: ChangePassword
    },
    {
      path: '/teacher/teacherIndex',
      name: 'teacherIndex',
      component: TeacherIndex,
      children: [
        {path: 'studytube', component: TeacherIndex},
        {path: 'teacher', component: TeacherIndex},
        {path: 'headmaster', component: TeacherIndex}
      ]

    },
    {
      path: '/teacher/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
