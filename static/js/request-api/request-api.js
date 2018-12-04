//直播api请求
import { fetchPost, fetchGet, fetchDelete } from '../request-util.js'
import { baseLiveAjaxUrl } from '../config/global-config.js'
let baseUrl = '/api';
// let baseUrl = 'http://teacher.rexuejiewu.com.cn';
export const api = {
    //登录
    submitLogin(params) {
        return fetchPost(baseUrl + '/user/login', params)
    },
    // 退出登录
    loginOut(params) {
        return fetchGet(baseUrl + '/user/loginOut', params)
    },
    // 修改密码
    resetPassword(params) {
        return fetchPost(baseUrl + '/user/resetPassword', params)
    },
    // 获取当前登录人的排课计划
    findMyClassRecord(params) {
        return fetchGet(baseUrl + '/myClassRecord/findMyClassRecord', params)
    },


    // 获取登录用户信息
    getUserInfo(params) {
        return fetchGet(baseUrl + '/user/getUserInfo', params)
    },
    //获取和用户相关的优惠券信息
    refreshCouponList(params) {
        return fetchGet(baseUrl + '/product/refreshCouponList', params);
    },
    //增加优惠券
    addCouponForStudent(params) {
        return fetchGet(baseUrl + '/cart/addCouponForStudent', params)
    },

    //获取订单列表加and
    refreshSaleOrderAndDetailList(params) {
        return fetchGet(baseUrl + "/product/refreshSaleOrderAndDetailList", params)
    },
    //获取订单明细refreshSaleOrderDetailList
    refreshSaleOrderDetailList(params) {
        return fetchGet(baseUrl + "/product/refreshSaleOrderDetailList", params)
    },

    //获取订单列表
    refreshSaleOrderList(params) {
        return fetchGet(baseUrl + '/product/refreshSaleOrderList', params);
    },
    //取消订单
    cancelSaleOrder(params) {
        return fetchGet(baseUrl + '/product/cancelSaleOrder', params);
    },
    //清空购物车
    clearProductToCart(params) {
        return fetchGet(baseUrl + '/cart/clearProductToCart', params)
    },
    //获取商品分类
    refreshProductCategory(params) {
        return fetchGet(baseUrl + "/product/refreshProductCategory", params)
    },
    //获取商品列表
    refreshProduct(params) {
        return fetchGet(baseUrl + "/product/refreshProduct", params)
    },
    //获取商品明细
    getProductDetail(params) {
        return fetchGet(baseUrl + "/product/getProductDetail", params)
    },
    //加入购物车
    addProductToCart(params) {
        return fetchPost(baseUrl + "/cart/addProductToCart", params)
    },

    //获取购物车列表
    refreshShoppingCartList(params) {
        return fetchGet(baseUrl + "/cart/refreshShoppingCartList", params)
    },
    //增加购物车数量
    editProductToCart(params) {
        return fetchPost(baseUrl + "/cart/editProductToCart", params)
    },
    //获取用户登录信息
    getUserInfo(params) {
        return fetchGet(baseUrl + "/user/getUserInfo", params)
    },
    //插入订单
    insertSaleOrder(params) {
        return fetchGet(baseUrl + "/product/insertSaleOrder", params)
    },
    //获取商品评论
    getProductComment(params) {
        return fetchGet(baseUrl + "/product/getProductComment", params)
    },
    //获取商品提问
    getProductAsk(params) {
        return fetchGet(baseUrl + "/product/getProductAsk", params)
    },
    //获取商品提问
    addProductAsk(params) {
        return fetchPost(baseUrl + "/product/addProductAsk", params)
    },
    //获取商品评论
    addProductComment(params) {
        return fetchPost(baseUrl + "/product/addProductComment", params)
    },
    //增加商品喜欢
    addProductLove(params) {
        return fetchPost(baseUrl + "/product/addProductLove", params)
    },
    //删除商品喜欢
    deleteProductLove(params) {
        return fetchPost(baseUrl + "/product/deleteProductLove", params)
    },
    //删除购物车
    deleteProductToCart(params) {
        return fetchDelete(baseUrl + "/cart/deleteProductToCart", { 'data': params })
    },


    //获取班级花名册/myClassRecord/ getMyClassRoster
    getMyClassRoster(params) {
        return fetchGet(baseUrl + "/myClassRecord/ getMyClassRoster", params)
    },
    //获取当前登录人的排课计划/myClassRecord/findMyClassRecord
    findMyClassRecord(params) {
        return fetchGet(baseUrl + "/myClassRecord/findMyClassRecord", params)
    },

    //上课点评 模块
    //获取当前登录人的排课计划/classEvaluation/findMyClassRecord
    classEvaluationFindMyClassRecord(params) {
        return fetchGet(baseUrl + "/classEvaluation/findMyClassRecord", params)
    },
    //获取上课的学员信息，包含评论信息/classEvaluation/findAllClassAndCommentsInTheClass
    findAllClassAndCommentsInTheClass(params) {
        return fetchGet(baseUrl + "/classEvaluation/findAllClassAndCommentsInTheClass", params)
    },

    //作业 模块
    //findReleaseHomework 获取作业列表
    findReleaseHomework(params) {
        return fetchGet(baseUrl + "/releaseHomework/findReleaseHomework", params)
    },
    //获取接到作业的全部学员/releaseHomework/ getAllReleaseHomeworkStudent
    getAllReleaseHomeworkStudent(params) {
        return fetchGet(baseUrl + "/releaseHomework/ getAllReleaseHomeworkStudent", params)
    },
    //获取接到作业的学员并且是没有提交的/releaseHomework/getAllReleaseHomeworkStudentAndSubmit
    getAllReleaseHomeworkStudentAndSubmit(params) {
        return fetchGet(baseUrl + "/releaseHomework/getAllReleaseHomeworkStudentAndSubmit", params)
    },
    //获取接到作业的学员并且是已提交的/releaseHomework/getAllReleaseHomeworkStudentNoSubmit
    getAllReleaseHomeworkStudentNoSubmit(params) {
        return fetchGet(baseUrl + "/releaseHomework/getAllReleaseHomeworkStudentNoSubmit", params)
    },
    // 发布通知
    addNotice(params) {
        return fetchGet(baseUrl + '/notice/addNotice', params);
    },
    //获取当前登录人员排课计划
    findMyClassRecordWithWeek(params) {
        return fetchGet(baseUrl + '/myClassRecord/findMyClassRecordWithWeek', params);
    },
    //获取当前校区所有班级
    findAllClassInfo(params) {
        return fetchGet(baseUrl + '/notice/findAllClassInfo', params);
    },
    //获取当前登录人员排课计划
    getMyClassRecord(params) {
        return fetchGet(baseUrl + '/myClassRecord/getMyClassRecord', params);
    },
    //获取所有公告
    findAllAnnouncement(params) {
        return fetchGet(baseUrl + '/announcement/findAllAnnouncement', params);
    },
    //获取公告明细
    getAnnouncement(params) {
        return fetchGet(baseUrl + '/announcement/getAnnouncement', params);
    },
    //获取今日没有沟通客户
    getCommunicatingCustomers(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/getCommunicatingCustomers', params);
    },
    //获取今日已经沟通客户
    getTodayAlreadyCommunicatingCustomers(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/getTodayAlreadyCommunicatingCustomers', params);
    },
    //获取今日新增客户
    getNewCustomersToday(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/getNewCustomersToday', params);
    },
    //获取沟通明细
    findStudentCommunicationDetailStu(params) {
        return fetchPost(baseUrl + '/studentCommunication/findStudentCommunication', params);
    },
    //获取沟通明细
    getCommunicationDetail(params) {
        return fetchGet(baseUrl + '/studentCommunication/findStudentCommunicationDetail', params);
    },
    //获取班级列表
    findAllClass(params) {
        return fetchGet(baseUrl + '/classRoster/findAllClass', params);
    },
    //获取班级花名册
    findAllClassRoster(params) {
        return fetchGet(baseUrl + '/classRoster/findAllClassRoster', params);
    },
    //
    getMyReport(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/getMyReport', params);
    },
    //获取学院沟通记录
    findStudentCommunicationDetail(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/findStudentCommunicationDetail', params);
    },
    //获取所有校区
    refreshDepartment(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshDepartment', params);
    },
    //获取招生来源
    refreshSource(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshSource', params);
    },
    //查询沟通统计
    reportTransformationStatistics(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportTransformationStatistics', params);
    },
    //沟通统计查询
    reportTalkStatistics(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportTalkStatistics', params);
    },
    //转化统计查询
    ReportTransformationStatistics(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportTransformationStatistics', params);
    },
    //获取上课的学员信息
    getMyClassRoster(params) {
        return fetchGet(baseUrl + '/namingAPI/getMyClassRoster', params);
    },
    // 获取沟通内容模板
    findTalkContentTemplate(params) {
        return fetchGet(baseUrl + '/studentCommunication/findTalkContentTemplate', params);
    },
    // 获取沟通内容模板
    findTalkContentTemplate(params) {
        return fetchGet(baseUrl + '/studentCommunication/findTalkContentTemplate', params);
    },
    // 获取意向客户
    findIntentionClientForStartPage(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/findIntentionClientForStartPage', params);
    },
    // 获取意向明细
    getIntentionClientDetail(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/getIntentionClientDetail', params);
    },
    // 获取客户状态
    refreshAdmissionsClientState(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshAdmissionsClientState', params);
    },
    // 获取主要责任人
    refreshSalePerson(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshSalePerson', params);
    },
    // 获取主要责任人
    refreshSalePerson(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshSalePerson', params);
    },
     // 获取缺勤原因
     findAllValidReasonsForLeave(params) {
        return fetchGet(baseUrl + '/namingAPI/findAllValidReasonsForLeave', params);
    },
    //获取招生来源
    refreshSource(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshSource', params);
    },
    //获取所属校区
    refreshDepartment(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshDepartment', params);
    },
    //获取公立学校
    refreshStudentsPublicSchool(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshStudentsPublicSchool', params);
    },
    //获取所有年级
    refreshGrade(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshGrade', params);
    },
    //获取所有介绍人
    findAllIntroducer(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/findAllIntroducer', params);
    },

    //学员加入到课表
    addStudentForClassPlean(params) {
        return fetchPost(baseUrl + '/namingAPI/addStudentForClassPlean', params);
    },
    //获取意向课程
    findAllCourse(params) {
        return fetchPost(baseUrl + '/intentionClientAPI/findAllCourse', params);
    },
    //删除意向客户
    deleteIntentionClient(params) {
        return fetchPost(baseUrl + '/intentionClientAPI/deleteIntentionClient', params);
    },
    //转正式
    transformToRegular(params) {
        return fetchPost(baseUrl + '/intentionClientAPI/transformToRegular', params);
    },
    //获取本次或者下次沟通方式
    refreshAdmissionsTalkType(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshAdmissionsTalkType', params);
    },
    // 获取沟通类型
    findTalkType(params) {
        return fetchGet(baseUrl + '/studentCommunication/findTalkType', params);
    },
    //增加沟通内容
    addStudentCommunication(params) {
        return fetchGet(baseUrl + '/studentCommunication/addStudentCommunication', params);
    },
    // 取获班级
    findAllGrade(params) {
        return fetchGet(baseUrl + '/studentCommunication/findAllGrade', params);
    },

    //获取我的课表
    findMyClassRecordWithDay(params) {
        return fetchGet(baseUrl + '/myClassRecord/findMyClassRecordWithDay', params);
    },
    //按月显示我的课表
    findMyClassRecordWithMonth(params) {
        return fetchGet(baseUrl + '/myClassRecord/findMyClassRecordWithMonth', params);
    },
    //学员列表
    getMyClassRoster(params) {
        return fetchGet(baseUrl + '/namingAPI/getMyClassRoster', params);
    },
    //学员列表
    findAllStudent(params) {
        return fetchGet(baseUrl + '/namingAPI/findAllStudent', params);
    },
     //上课点名
     classBeginAndNaming(params) {
        return fetchPost(baseUrl + '/namingAPI/classBeginAndNaming', params);
    },
    //招生来源
    ReportCustomerAnalysisForSourceway(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportCustomerAnalysisForSourceway', params);
    },
    //漏斗
    ReportCustomerAnalysisForState(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportCustomerAnalysisForState', params);
    },
    //漏斗对比
    ReportCustomerAnalysisForStateCompare(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportCustomerAnalysisForStateCompare', params);
    },
    //意向级别
    ReportCustomerAnalysisForWillLevel(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/ReportCustomerAnalysisForWillLevel', params);
    },
    //增加客户沟通记录
    addCommunicatingCustomers(params) {
        return fetchPost(baseUrl + '/intentionClientAPI/addCommunicatingCustomers', params);
    },
    //选择承诺到访类型
    refreshAdmissionsVisitType(params) {
            return fetchGet(baseUrl + '/intentionClientAPI/refreshAdmissionsVisitType', params);
    },
    //教师端工作统计
    getWorkStatistics(params) {
            return fetchPost(baseUrl + '/user/getWorkStatistics', params);
    },
    //意向课程所属科目
    refreshCurriculumAccounting(params) {
            return fetchGet(baseUrl + '/intentionClientAPI/refreshCurriculumAccounting', params);
    },
    //课程所属班型
    refreshCurriculumClassType(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshCurriculumClassType', params);
  },
    //课程所属期段
      refreshCurriculumPeriod(params) {
        return fetchGet(baseUrl + '/intentionClientAPI/refreshCurriculumPeriod', params);
  },
     //增加意向客户所以班级
     intentionClientAPIFindAllClass(params) {
        return fetchPost(baseUrl + '/intentionClientAPI/findAllClass', params);
  },
     //工作统计明细
     getWorkStatisticsDetail(params) {
        return fetchPost(baseUrl + '/user/getWorkStatisticsDetail', params);
    },
    //增加意向客户
    addIntentionClient(params) {
        return fetchPost(baseUrl + '/intentionClientAPI/addIntentionClient', params);
  },
    //校长端满班率报表
    QueryFullClassRand(params) {
        return fetchGet(baseUrl + '/principalAPI/QueryFullClassRand', params);
  },
    //明细
    QueryFullClassRandOfDetail(params) {
        return fetchGet(baseUrl + '/principalAPI/QueryFullClassRandOfDetail', params);
  },
    //增加分组
    addReportFullClassRandGroup(params) {
        return fetchPost(baseUrl + '/principalAPI/addReportFullClassRandGroup', params);
  },
    //删除分组
    deleteReportFullClassRandGroup(params) {
        return fetchGet(baseUrl + '/principalAPI/deleteReportFullClassRandGroup', params);
  },
   //获取分组
   findAllClassRandGroup(params) {
    return fetchGet(baseUrl + '/principalAPI/findAllClassRandGroup', params);
},
  //图片和文件上传
  uploadFile(params) {
    return fetchPost(baseUrl + '/classEvaluation/uploadFile', params);
},










}