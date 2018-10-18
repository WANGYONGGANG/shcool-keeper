import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'

import OperationOverview from '@/components/chart/operationOverview'
import ChargeReport from '@/components/chart/chargeReport'
import EarningReport from '@/components/chart/earningReport'
import CurriculuConsumption from '@/components/chart/curriculuConsumption'
import ClassReport from '@/components/chart/classReport'
import FullclassRate from '@/components/chart/class/fullclassRate'
import Charge from '@/components/remittance_table/charge'
import CourseCharge from '@/components/remittance_table/courseCharge'
import NetIncome from '@/components/remittance_table/netIncome'
import Refund from '@/components/remittance_table/Refund'

import ChargeAnal from '@/components/chart/analysis/chargeAnal'

import Blank from '@/components/user/blank'
import UserIndex from '@/components/user/userIndex'
import ChangePassword from '@/components/user/changePassword'

import TeacherIndex from '@/components/teacher/teacherIndex'
import MyTimetable from '@/components/teacher/myTimetable'
import Naming from '@/components/teacher/Naming'
import ChooseClass from '@/components/teacher/chooseClass'
import Commented from '@/components/teacher/commented'
import CommentedList from '@/components/teacher/commentedList'
import ClassContent from '@/components/teacher/classContent'
import CommentedDetial from '@/components/teacher/commentedDetial'
import ReplyList from '@/components/teacher/replyList'
import ReplyDetial from '@/components/teacher/replyDetial'
import ImmediatelyCommented from '@/components/teacher/immediatelyCommented'
import ResleaseTask from '@/components/teacher/resleaseTask'
import TaskDetial from '@/components/teacher/taskDetial'
import StudentCompletion from '@/components/teacher/studentCompletion'
import StudentCommunication from '@/components/teacher/studentCommunication'
import SchoolBulletin from '@/components/teacher/schoolBulletin'
import Notice from '@/components/teacher/notice'
import BulletinDetial from '@/components/teacher/bulletinDetial'
import IntentionalCustomers from '@/components/teacher/intentionalCustomers'
import Roster from '@/components/teacher/Roster'
import RosterDetial from '@/components/teacher/rosterDetial'
import SetClassInformation from '@/components/teacher/setClassInformation'
import ResleaseAssignments from '@/components/teacher/resleaseAssignments'

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
      path: '/chart/operationOverview',
      name: 'operationOverview',
      component: OperationOverview
    },
    {
      path: '/chart/chargeReport',
      name: 'chargeReport',
      component: ChargeReport
    },
    {
      path: '/chart/curriculuConsumption',
      name: 'curriculuConsumption',
      component: CurriculuConsumption
    },
    {
      path: '/chart/earningReport',
      name: 'earningReport',
      component: EarningReport
    },
    {
      path: '/chart/classReport',
      name: 'classReport',
      component: ClassReport
    },
    {
      path: '/chart/fullclassRate',
      name: 'fullclassRate',
      component: FullclassRate
    },
    {
      path: '/chargeReport/charge',
      name: 'charge',
      component: Charge
    },
    {
      path: '/chargeReport/courseCharge',
      name: 'courseCharge',
      component: CourseCharge
    },
    {
      path: '/chargeReport/netIncome',
      name: 'NetIncome',
      component: NetIncome
    },
    {
      path: '/chargeReport/Refund',
      name: 'Refund',
      component: Refund
    },
    {
      path: '/analysis/chargeAnal',
      name: 'chargeAnal',
      component: ChargeAnal
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
    },
    {
      path: '/teacher/myTimetable',
      name: 'myTimetable',
      component: MyTimetable
    },
    {
      path: '/teacher/Naming',
      name: 'Naming',
      component: Naming
    },
    {
      path: '/teacher/chooseClass',
      name: 'chooseClass',
      component: ChooseClass
    },
    {
      path: '/teacher/commented',
      name: 'commented',
      component: Commented
    },
    {
      path: '/teacher/commentedList',
      name: 'commentedList',
      component: CommentedList
    },
    {
      path: '/teacher/commentedDetial',
      name: 'commentedDetial',
      component: CommentedDetial
    },
    {
      path: '/teacher/classContent',
      name: 'classContent',
      component: ClassContent
    },
    {
      path: '/teacher/replyList',
      name: 'replyList',
      component: ReplyList
    },
    {
      path: '/teacher/replyDetial',
      name: 'replyDetial',
      component: ReplyDetial
    },
    {
      path: '/teacher/immediatelyCommented',
      name: 'immediatelyCommented',
      component: ImmediatelyCommented
    },
    {
      path: '/teacher/resleaseTask',
      name: 'resleaseTask',
      component: ResleaseTask
    },
    {
      path: '/teacher/taskDetial',
      name: 'taskDetial',
      component: TaskDetial
    },
    {
      path: '/teacher/studentCompletion',
      name: 'studentCompletion',
      component: StudentCompletion
    },
    {
      path: '/teacher/studentCommunication',
      name: 'studentCommunication',
      component: StudentCommunication
    },
    {
      path: '/teacher/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/teacher/schoolBulletin',
      name: 'schoolBulletin',
      component: SchoolBulletin
    },
    {
      path: '/teacher/bulletinDetial',
      name: 'bulletinDetial',
      component: BulletinDetial
    },
    {
      path: '/teacher/intentionalCustomers',
      name: 'intentionalCustomers',
      component: IntentionalCustomers
    },
    {
      path: '/teacher/Roster',
      name: 'Roster',
      component: Roster
    },
    {
      path: '/teacher/rosterDetial',
      name: 'rosterDetial',
      component: RosterDetial
    },
    {
      path: '/teacher/setClassInformation',
      name: 'setClassInformation',
      component: SetClassInformation
    },
    {
      path: '/teacher/resleaseAssignments',
      name: 'resleaseAssignments',
      component: ResleaseAssignments
    }
  ]
})
