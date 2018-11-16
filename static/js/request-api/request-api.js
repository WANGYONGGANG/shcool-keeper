//直播api请求
import { fetchPost,fetchGet,fetchDelete} from '../request-util.js'
import {baseLiveAjaxUrl} from '../config/global-config.js'
let baseUrl = '/api';
// let baseUrl = 'http://teacher.rexuejiewu.com.cn';
export   const  api={
    //登录
    submitLogin(params){
        return fetchPost(baseUrl+'/user/login',params)
    },
    // 退出登录
    loginOut(params){
        return fetchGet(baseUrl+'/user/loginOut',params)
    },
    // 修改密码
    resetPassword(params){
        return fetchPost(baseUrl+'/user/resetPassword',params)
    },

    
    // 获取登录用户信息
    getUserInfo(params){
        return fetchGet(baseUrl+'/user/getUserInfo',params)
    },
    //获取和用户相关的优惠券信息
    refreshCouponList(params){
         return fetchGet(baseUrl+'/product/refreshCouponList',params);
    },
    //增加优惠券
    addCouponForStudent(params){
        return fetchGet(baseUrl+'/cart/addCouponForStudent',params)
    },

    //获取订单列表加and
    refreshSaleOrderAndDetailList(params){
        return fetchGet(baseUrl+"/product/refreshSaleOrderAndDetailList",params)
    },
    //获取订单明细refreshSaleOrderDetailList
    refreshSaleOrderDetailList(params){
        return fetchGet(baseUrl+"/product/refreshSaleOrderDetailList",params)
    },

    //获取订单列表
    refreshSaleOrderList(params){
        return fetchGet(baseUrl+'/product/refreshSaleOrderList',params);
    },
    //取消订单
    cancelSaleOrder(params){
        return fetchGet(baseUrl+'/product/cancelSaleOrder',params);
    },
    //清空购物车
    clearProductToCart(params){
        return fetchGet(baseUrl+'/cart/clearProductToCart',params)
    },
    //获取商品分类
    refreshProductCategory(params){
        return fetchGet(baseUrl+"/product/refreshProductCategory",params)
    },
    //获取商品列表
    refreshProduct(params){
        return fetchGet(baseUrl+"/product/refreshProduct",params)
    },
    //获取商品明细
    getProductDetail(params){
        return fetchGet(baseUrl+"/product/getProductDetail",params)
    },
    //加入购物车
    addProductToCart(params){
    return fetchPost(baseUrl+"/cart/addProductToCart",params)
    },
    
     //获取购物车列表
    refreshShoppingCartList(params){
        return fetchGet(baseUrl+"/cart/refreshShoppingCartList",params)
    },
    //增加购物车数量
    editProductToCart(params){
        return fetchPost(baseUrl+"/cart/editProductToCart",params)
    },
    //获取用户登录信息
    getUserInfo(params){
        return fetchGet(baseUrl+"/user/getUserInfo",params)
    },
    //插入订单
    insertSaleOrder(params){
        return fetchGet(baseUrl+"/product/insertSaleOrder",params)
    },
      //获取商品评论
      getProductComment(params){
        return fetchGet(baseUrl+"/product/getProductComment",params)
    },
     //获取商品提问
     getProductAsk(params){
        return fetchGet(baseUrl+"/product/getProductAsk",params)
    },
    //获取商品提问
    addProductAsk(params){
        return fetchPost(baseUrl+"/product/addProductAsk",params)
    },
    //获取商品评论
    addProductComment(params){
        return fetchPost(baseUrl+"/product/addProductComment",params)
    },
     //增加商品喜欢
     addProductLove(params){
        return fetchPost(baseUrl+"/product/addProductLove",params)
    },
     //删除商品喜欢
     deleteProductLove(params){
        return fetchPost(baseUrl+"/product/deleteProductLove",params)
    },
    //删除购物车
    deleteProductToCart(params){
        return fetchDelete(baseUrl+"/cart/deleteProductToCart",{'data':params})
    },
    
    
    //获取班级花名册/myClassRecord/ getMyClassRoster
    getMyClassRoster(params){
        return fetchGet(baseUrl+"/myClassRecord/ getMyClassRoster",params)
    },
    //获取当前登录人的排课计划/myClassRecord/findMyClassRecord
    findMyClassRecord(params){
        return fetchGet(baseUrl+"/myClassRecord/findMyClassRecord",params)
    },

    //上课点评 模块
    //获取当前登录人的排课计划/classEvaluation/findMyClassRecord
    classEvaluationFindMyClassRecord(params){
        return fetchGet(baseUrl+"/classEvaluation/findMyClassRecord",params)
    },
    //获取上课的学员信息，包含评论信息/classEvaluation/findAllClassAndCommentsInTheClass
    findAllClassAndCommentsInTheClass(params){
        return fetchGet(baseUrl+"/classEvaluation/findAllClassAndCommentsInTheClass",params)
    },

    //作业 模块
    //findReleaseHomework 获取作业列表
    findReleaseHomework(params){
        return fetchGet(baseUrl+"/releaseHomework/findReleaseHomework",params)
    },
    //获取接到作业的全部学员/releaseHomework/ getAllReleaseHomeworkStudent
    getAllReleaseHomeworkStudent(params){
        return fetchGet(baseUrl+"/releaseHomework/getAllReleaseHomeworkStudent",params)
    },
    //获取接到作业的学员并且是没有提交的/releaseHomework/getAllReleaseHomeworkStudentAndSubmit
    getAllReleaseHomeworkStudentAndSubmit(params){
        return fetchGet(baseUrl+"/releaseHomework/getAllReleaseHomeworkStudentAndSubmit",params)
    },
    //获取接到作业的学员并且是已提交的/releaseHomework/getAllReleaseHomeworkStudentNoSubmit
    getAllReleaseHomeworkStudentNoSubmit(params){
        return fetchGet(baseUrl+"/releaseHomework/getAllReleaseHomeworkStudentNoSubmit",params)
    },
    // 发布通知
    addNotice(params){
        return fetchGet(baseUrl+'/notice/addNotice',params);
    },
    //获取当前登录人员排课计划
    findMyClassRecordWithWeek(params){
        return fetchGet(baseUrl+'/myClassRecord/findMyClassRecordWithWeek',params);
    },
    //获取当前校区所有班级
    findAllClassInfo(params){
        return fetchGet(baseUrl+'/notice/findAllClassInfo',params);
    },
     //获取当前登录人员排课计划
     getMyClassRecord(params){
        return fetchGet(baseUrl+'/myClassRecord/getMyClassRecord',params);
    },
      //获取所有公告
      findAllAnnouncement(params){
        return fetchGet(baseUrl+'/announcement/findAllAnnouncement',params);
    },
      //获取公告明细
     getAnnouncement(params){
        return fetchGet(baseUrl+'/announcement/getAnnouncement',params);
    },
    //获取今日没有沟通客户
    getCommunicatingCustomers(params){
        return fetchGet(baseUrl+'/intentionClientAPI/getCommunicatingCustomers',params);
    },
    //获取今日已经沟通客户
    getTodayAlreadyCommunicatingCustomers(params){
        return fetchGet(baseUrl+'/intentionClientAPI/getTodayAlreadyCommunicatingCustomers',params);
    },
     //获取今日新增客户
     getNewCustomersToday(params){
        return fetchGet(baseUrl+'/intentionClientAPI/getNewCustomersToday',params);
    },
    //获取沟通列表
    findStudentCommunication(params){
        return fetchPost(baseUrl+'/studentCommunication/findStudentCommunication',params);
    },
       //获取意向客户
       findIntentionClientForStartPage(params){
        return fetchGet(baseUrl+'/intentionClientAPI/findIntentionClientForStartPage',params);
    },
     //获取沟通明细
     getCommunicationDetail(params){
        return fetchGet(baseUrl+'/studentCommunication/findStudentCommunicationDetail',params);
    },
     //获取班级列表
     findAllClass(params){
        return fetchGet(baseUrl+'/classRoster/findAllClass',params);
    },
    //获取班级花名册
    findAllClassRoster(params){
        return fetchGet(baseUrl+'/classRoster/findAllClassRoster',params);
    },
     //获取意向客户明细
     getIntentionClientDetail(params){
        return fetchGet(baseUrl+'intentionClientAPI/getIntentionClientDetail',params);
    },
    //获取学院沟通记录
    findStudentCommunicationDetail(params){
            return fetchGet(baseUrl+'/intentionClientAPI/findStudentCommunicationDetail',params);
        },
    //获取所有校区
    refreshDepartment(params){
        return fetchGet(baseUrl+'/intentionClientAPI/refreshDepartment',params);
    },
     //获取招生来源
     refreshSource(params){
        return fetchGet(baseUrl+'/intentionClientAPI/refreshSource',params);
    },
     //查询沟通统计
     reportTransformationStatistics(params){
        return fetchGet(baseUrl+'/intentionClientAPI/ReportTransformationStatistics',params);
    },
    //转化统计查询
    reportTalkStatistics(params){
        return fetchGet(baseUrl+'/intentionClientAPI/ReportTalkStatistics',params);
    },
    //获取上课的学员信息
       getMyClassRoster(params){
        return fetchGet(baseUrl+'/namingAPI/getMyClassRoster',params);
    }
  
  



   
}