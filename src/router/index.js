import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/user/login'

import OperationOverview from '@/components/chart/operationOverview'
import ChargeReport from '@/components/chart/chargeReport'
import EarningReport from '@/components/chart/earningReport'
import CurriculuConsumption from '@/components/chart/curriculuConsumption'
import ClassReport from '@/components/chart/classReport'
import FullclassRate from '@/components/chart/class/fullclassRate'
import Charge from '@/components/chargeReport/charge'
import CourseCharge from '@/components/chargeReport/courseCharge'
import NetIncome from '@/components/chargeReport/netIncome'
import Refund from '@/components/chargeReport/Refund'

import ChargeAnal from '@/components/chart/analysis/chargeAnal'
import CurriculumConsumptionCharge from '@/components/chart/analysis/curriculumConsumptionCharge'
import ClassIndex from '@/components/chart/analysis/classIndex'

import Mine from '@/components/user/mine'
import Blank from '@/components/user/blank'
import UserIndex from '@/components/user/userIndex'
import ChangePassword from '@/components/user/changePassword'
import WorkStatistics from '@/components/user/workStatistics'
import ParentRatingRanking from '@/components/user/parentRatingRanking'

import TeacherIndex from '@/components/teacher/teacherIndex'
import MyTimetable from '@/components/teacher/myTimetable'
import MyTimetableByMonth from '@/components/teacher/myTimetableByMonth'
import Naming from '@/components/teacher/Naming'
import ChooseClass from '@/components/teacher/chooseClass'
import Commented from '@/components/teacher/commented'
import CommentedList from '@/components/teacher/commentedList'
import ClassContent from '@/components/teacher/classContent'
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
import StudentList from '@/components/teacher/studentList'
import CommunicationRecord from '@/components/teacher/communicationRecord'
import AddCommunicationRecord from '@/components/teacher/addCommunicationRecord'
import AddCommunicationRecordTwo from '@/components/teacher/addCommunicationRecordTwo'
import CommunicationTemplate from '@/components/teacher/communicationTemplate'
import PurchaseDetails from '@/components/teacher/purchaseDetails'
import ResleaseNotice from '@/components/teacher/resleaseNotice'
import ResultInquiry from '@/components/teacher/resultInquiry'
import ResultInput from '@/components/teacher/ResultInput'
import ExaminationResult from '@/components/teacher/examinationResult'
import ExaminationClass from '@/components/teacher/examinationClass'
import ResultInputList from '@/components/teacher/resultInputList'
import ResultInputListDetial from '@/components/teacher/resultInputListDetial'
import SelectStudents from '@/components/teacher/selectStudents'
import MakeUpClass from '@/components/teacher/makeUpClass'
import CustomerManagement from '@/components/teacher/customerManagement'
import AddCustomers from '@/components/teacher/addCustomers'
import IntentionalCustomersList from '@/components/teacher/intentionalCustomersList'
import CustomerCommunicationRecord from '@/components/teacher/customerCommunicationRecord'
import IntentionalCustomersDetial from '@/components/teacher/intentionalCustomersDetial'
import CustomerFollowUpStatistics from '@/components/teacher/customerFollowUpStatistics'
import CustomerAnalysis from '@/components/teacher/customerAnalysis'
import OperationDetails from '@/components/teacher/operationDetails'
import PublishClass from '@/components/general/publishClass'
import PublishPeople from '@/components/general/publishPeople'

import EnrollmentStatistics from '@/components/teacher/enrollmentStatistics'
import EnrollmentStatistics2 from '@/components/teacher/enrollmentStatistics2'
import EnrollmentStatistics3 from '@/components/teacher/enrollmentStatistics3'
import CustomerContrast from '@/components/teacher/customerContrast'
import addStu from '@/components/teacher/addStu'

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
      path: '/user/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user/blank',
      name: 'blank',
      component: Blank
    },
    {
      path: '/user/mine',
      name: 'mine',
      component: Mine
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
      path: '/user/workStatistics',
      name: 'workStatistics',
      component: WorkStatistics
    },
    {
      path: '/user/parentRatingRanking',
      name: 'parentRatingRanking',
      component: ParentRatingRanking
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
      path: '/analysis/curriculumConsumptionCharge',
      name: 'curriculumConsumptionCharge',
      component: CurriculumConsumptionCharge
    },
    {
      path: '/analysis/classIndex',
      name: 'classIndex',
      component: ClassIndex
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
      path: '/teacher/myTimetable',
      name: 'myTimetable',
      component: MyTimetable
    },
    {
      path: '/teacher/myTimetableByMonth',
      name: 'myTimetableByMonth',
      component: MyTimetableByMonth
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
    },
    {
      path: '/teacher/studentList',
      name: 'studentList',
      component: StudentList
    },
    {
      path: '/teacher/studentList',
      name: 'studentList',
      component: StudentList
    },
    {
      path: '/teacher/communicationRecord',
      name: 'communicationRecord',
      component: CommunicationRecord
    },
    {
      path: '/teacher/addCommunicationRecord',
      name: 'addCommunicationRecord',
      component: AddCommunicationRecord
    },
    {
      path: '/teacher/communicationTemplate',
      name: 'communicationTemplate',
      component: CommunicationTemplate
    },
    {
      path: '/teacher/purchaseDetails',
      name: 'purchaseDetails',
      component: PurchaseDetails
    },
    {
      path: '/teacher/resleaseNotice',
      name: 'resleaseNotice',
      component: ResleaseNotice
    },
    {
      path: '/teacher/resultInquiry',
      name: 'resultInquiry',
      component: ResultInquiry
    },
    {
      path: '/teacher/ResultInput',
      name: 'ResultInput',
      component: ResultInput
    },
    {
      path: '/teacher/examinationResult',
      name: 'examinationResult',
      component: ExaminationResult
    },
    {
      path: '/teacher/examinationClass',
      name: 'examinationClass',
      component: ExaminationClass
    },
    {
      path: '/teacher/resultInputList',
      name: 'resultInputList',
      component: ResultInputList
    },
    {
      path: '/teacher/resultInputListDetial',
      name: 'resultInputListDetial',
      component: ResultInputListDetial
    },
    {
      path: '/teacher/selectStudents',
      name: 'selectStudents',
      component: SelectStudents
    },
    {
      path: '/teacher/makeUpClass',
      name: 'makeUpClass',
      component: MakeUpClass
    },
    {
      path: '/teacher/customerManagement',
      name: 'customerManagement',
      component: CustomerManagement
    },
    {
      path: '/teacher/addCustomers',
      name: 'addCustomers',
      component: AddCustomers
    },
    {
      path: '/teacher/intentionalCustomersList',
      name: 'intentionalCustomersList',
      component: IntentionalCustomersList
    },
    {
      path: '/teacher/customerCommunicationRecord',
      name: 'customerCommunicationRecord',
      component: CustomerCommunicationRecord
    },
    {
      path: '/teacher/addCommunicationRecordTwo',
      name: 'addCommunicationRecordTwo',
      component: AddCommunicationRecordTwo
    },
    {
      path: '/teacher/intentionalCustomersDetial',
      name: 'intentionalCustomersDetial',
      component: IntentionalCustomersDetial
    },
    {
      path: '/teacher/customerFollowUpStatistics',
      name: 'customerFollowUpStatistics',
      component: CustomerFollowUpStatistics
    },
    {
      path: '/teacher/customerAnalysis',
      name: 'customerAnalysis',
      component: CustomerAnalysis
    },
    {
      path: '/teacher/enrollmentStatistics',
      name: 'enrollmentStatistics',
      component: EnrollmentStatistics
    },
    {
      path: '/teacher/enrollmentStatistics2',
      name: 'enrollmentStatistics2',
      component: EnrollmentStatistics2
    },
    {
      path: '/teacher/enrollmentStatistics3',
      name: 'enrollmentStatistics3',
      component: EnrollmentStatistics3
    },
    {
      path: '/teacher/customerContrast',
      name: 'customerContrast',
      component: CustomerContrast
    },
    {
      path: '/teacher/operationDetails',
      name: 'operationDetails',
      component: OperationDetails
    },
    {
      path: '/general/publishClass',
      name: 'publishClass',
      component: PublishClass
    },
    {
      path: '/teacher/addStu',
      name: 'addStu',
      component: addStu
    },
    {
      path: '/general/publishPeople',
      name: 'publishPeople',
      component: PublishPeople
    }
  ]
})
