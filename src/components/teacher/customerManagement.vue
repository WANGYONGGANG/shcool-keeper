<template>
  <div class="customer-management">
    <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="姓名／电话／公立学校" background="#fff"  show-action v-model="value">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="operation" @click="filterPopShow">筛选</div>
      <div class="operation" @click="sortPopShow">排序</div>
    </div>
    <div  v-for="customer in customerList">
    <div @click="goTo(urls.customerCommunicationRecord)" >
      <div class="card-list">
        <div class="card-list-l">
        {{customer.name}}
        </div>
        <div class="card-list-r">沟通记录<van-icon name="arrow" /></div>
      </div>
    </div>
    <div class="management-list" @click="goTo(urls.intentionalCustomersDetial,{'id':customer.id} )">
      <ul class="management-list-l fn-left">
        <li>主责任人：{{customer.adminName}}</li>
        <li>手机号码：{{customer.mobile}}</li>
        <li>客户状态：{{customer.customerStatusName}}</li>
        <li>意项级别：<van-rate :count="customer.willLevel" v-model="star"  readonly=true /></li>
      </ul>
      <div class="management-list-r fn-right">
        <span>
          <van-icon name="phone" />
        </span>
      </div>
    </div>
    </div>
    <div class="bottom-btn">
      <span class="border-right" @click="goTo(urls.addCustomers)">添加客户</span>
      <span @click="goTo(urls.intentionalCustomersList)">客户管理操作</span>
    </div>
    <van-popup v-model="filterShow" position="right" class="filter">
      <dl class="filter-dl"><dt>跟进时间</dt><dd>
        <input type="text" placeholder="开始时间" @click="showCalendar(1)" v-model="calendar.item1.date"  /> --- <input type="text" placeholder="结束时间" @click="showCalendar(2)" v-model="calendar.item2.date" />
      </dd></dl>
      <dl class="filter-dl"><dt>录入时间</dt>
        <dd>
          <input type="text" placeholder="开始时间" @click="showCalendar(3)" v-model="calendar.item3.date" /> --- <input type="text" placeholder="结束时间" @click="showCalendar(4)" v-model="calendar.item4.date" />
        </dd>
      </dl>
      <dl class="filter-dl"><dt>沟通时间</dt>
        <dd>
          <input type="text" placeholder="开始时间" @click="showCalendar(5)" v-model="calendar.item5.date" /> --- <input type="text" placeholder="结束时间" @click="showCalendar(6)" v-model="calendar.item6.date" />
        </dd>
      </dl>
      <van-cell-group class="class-name">
        <van-cell title="选择客户状态" is-link  @click="selectCustomerStatePop" />
        <van-cell title="选择责任人" is-link  @click="Responsible"/>
      </van-cell-group>
      <div class="filter-btn">
        <span class="btn-reset" @click="resetFn">重置</span>
        <span class="btn-submit" @click="submitFn">确定</span>
      </div>
    </van-popup>
    <!--每个日历选择按钮都需要调用一个日历组件-->
    <calendar :date.sync="calendar.item1.date" :isVisible.sync="calendar.item1.isVisible"></calendar>
    <calendar :date.sync="calendar.item2.date" :isVisible.sync="calendar.item2.isVisible"></calendar>
    <calendar :date.sync="calendar.item3.date" :isVisible.sync="calendar.item3.isVisible"></calendar>
    <calendar :date.sync="calendar.item4.date" :isVisible.sync="calendar.item4.isVisible"></calendar>
    <calendar :date.sync="calendar.item5.date" :isVisible.sync="calendar.item5.isVisible"></calendar>
    <calendar :date.sync="calendar.item6.date" :isVisible.sync="calendar.item6.isVisible"></calendar>
    <!--排序-->
    <select-pop :title="sortData.title" :lists="sortData.lists" :isShow.sync="sortData.isShow" :selectItem.sync="sortData.selectItem"></select-pop>
    <!--选择客户状态-->
    <select-pop :lists="customerData.lists" :isShow.sync="customerData.isShow" :selectItem.sync="customerData.selectItem"></select-pop>
        <!--选择客户状态-->
    <select-pop :lists="ResponsibleList.lists" :isShow.sync="ResponsibleList.isShow" :selectItem.sync="ResponsibleList.selectItem"></select-pop>
  </div>
</template>
<script>
import SelectPop from '../popup/bottomSelectPop'
import { api } from "../../../static/js/request-api/request-api.js";
import Calendar from '../general/calendar'
export default {
    components: {
      SelectPop,
      Calendar
    },
    data () {
    return {
      filterShow:false,
      defaultSort:name,
      calendar:{
        item1:{
          isVisible:false,
          date:''
        },
        item2:{
          isVisible:false,
          date:''
        },
        item3:{
          isVisible:false,
          date:''
        },
        item4:{
          isVisible:false,
          date:''
        },
        item5:{
          isVisible:false,
          date:''
        },
        item6:{
          isVisible:false,
          date:''
        }
      },
      value: '',
      star: 4,
      customerList:[],
      urls: {
        addCustomers: '/teacher/addCustomers',
        intentionalCustomersList: '/teacher/intentionalCustomersList',
        customerCommunicationRecord: '/teacher/customerCommunicationRecord',
        intentionalCustomersDetial: '/teacher/intentionalCustomersDetial'
      },
      sortData:{
        title:'排序方式',
        lists:['按姓名排序','按录入时间排序','按跟进时间排序','按沟通时间排序'],
        isShow:false,
        selectItem:'按录入时间排序'
      },
      customerData:{
        lists:['不限','未转化','未知','已上门','有效单','预约试听','未上门'],
        isShow:false,
        selectItem:'未知'
      },
       ResponsibleList:{
        lists:['测试'],
        isShow:false,
        selectItem:'未知'
      }
    }
  },
  mounted:function(){
     this.initPage();
     this.refreshAdmissionsClientState();
     this.refreshSalePerson();
  },
  methods: {
    initPage:function(){
      let type= this.$route.query.type;
      if(type==1){
        this.getNewCustomersToday();
      }else if(type==2){
        this.getCommunicatingCustomers();
      }else if(type==3){
         this.getTodayAlreadyCommunicatingCustomers();
      }else if(type==0){
          this.findIntentionClientForStartPage();
      }

    },
  //获取意向客户
    findIntentionClientForStartPage: function() {
      let params ={};
      // params.order=desc;
      params.page =1;
      params.query_conditions=this.value;
      params.rows=10;
      params.sort=this.defaultSort;
      
      let _self = this;
      api.findIntentionClientForStartPage(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.customerList=res.data.data.rows;
                }
          } else {
            let params = { msg: "获取意向客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日意向客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
       //获取今日新增客户
    getNewCustomersToday: function() {
      let params ={};
      let _self = this;
      api.getNewCustomersToday(null)
        .then(res => {
          console.log(res.data);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data.length);
                  _self.toDayNewAddCus=res.data.data.length;
                }
          } else {
            let params = { msg: "获取今日新增客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日新增客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取今日没有沟通客户
     getCommunicatingCustomers: function() {
      let params ={};
      let _self = this;
      api.getCommunicatingCustomers(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.noCommunicateCus=res.data.data.length;
                }
          } else {
            let params = { msg: "获取今日没有沟通客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日没有沟通客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取今日已沟通客户错误
      getTodayAlreadyCommunicatingCustomers: function() {
      let params ={};
      let _self = this;
      api.getTodayAlreadyCommunicatingCustomers(null)
        .then(res => {
          console.log(res.data);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.alreadyCommunicateCus=res.data.data.length;
                }
          } else {
            let params = { msg: "获取今日已经沟通客户错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日已经沟通客户错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
     //获取自定义客户状态
      refreshAdmissionsClientState: function() {
      let params ={};
      let _self = this;
      api.refreshAdmissionsClientState(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let customerStatusList=res.data.data;
                  let newCustomerStatusList=[];
                  for(let i=0;i<customerStatusList.length;i++){
                    newCustomerStatusList.push(customerStatusList[i].name);
                  }
                  this.customerData.lists=newCustomerStatusList;
                  console.log(newCustomerStatusList);
                }
          } else {
            let params = { msg: "获取自定义客户状态错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取自定义客户状态错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      //获取自定义客户状态
      refreshSalePerson: function() {
      let params ={};
      let _self = this;
      api.refreshSalePerson(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    newResponsibleList.push(responsibleList[i].name);
                  }
                  this.ResponsibleList.lists=newResponsibleList;
                }
          } else {
            let params = { msg: "获取主责任人" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取主责任人" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    showCalendar (n) {
      //根据参数显示对应日历弹层
      switch(n)
      {
        case 1:
          this.calendar.item1.isVisible = true
          break;
        case 2:
          this.calendar.item2.isVisible = true
          break;
        case 3:
          this.calendar.item3.isVisible = true
          break;
        case 4:
          this.calendar.item4.isVisible = true
          break;
        case 5:
          this.calendar.item5.isVisible = true
          break;
        case 6:
          this.calendar.item6.isVisible = true
          break;
        default:
          Toast('出错了');
      }
    },
    goTo (param,queryParam) {
      this.$router.push({path: param,query:queryParam});
    },
    sortPopShow () {
      this.sortData.isShow=true
    },
    resetFn (param){
      this.calendar.item1.date="";
      this.calendar.item2.date="";
      this.calendar.item3.date="";
      this.calendar.item4.date="";
      this.calendar.item5.date="";
      this.calendar.item6.date="";
      this.filterShow = false
    },
    submitFn (param) {
      this.filterShow = false
    },
    onSearch () {
      let value=this.value;
      this.initPage();

    },
    selectCustomerStatePop () {
      this.customerData.isShow=true;
    },
    //选择主要责任人
    Responsible(){
      this.ResponsibleList.isShow=true;
    },
    filterPopShow () {
      this.filterShow = true;
    }
  },
  watch:{
    'sortData.selectItem':function (n,o) {
      if(n.item=="按姓名排序"){
        this.defaultSort="name";
      }else if(n.item=="按跟进时间排序"){
        this.defaultSort="nextDate";
      }else if(n.item=="按沟通时间排序"){
        this.defaultSort="lastDate";
      }else if(n.item=="按录入时间排序"){
        this.defaultSort="createTime";
      }
      this.$toast(n.item)
      this.initPage();
    },
    'customerData.selectItem':function (n,o) {
        console.log(n);
      this.$toast(n.item)
    },
    'ResponsibleList.selectItem':function (n,o) {
        console.log(n);
      this.$toast(n.item)
    }
  }
}
</script>
<style lang="less">
.customer-management{
.card-list{
  background: #fff;
  height:90px;
  line-height:90px;
  padding: 0 30px;
  margin:10px auto 0;
.card-list-l{
  float: left;
  font-size: 28px;
.img{
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 100%;
  margin-right: 15px;
  vertical-align: middle;
}
.times{
  font-size: 24px;
  padding-left: 15px;
  color: #838383;

}
}
.card-list-r{
  float: right;
.van-icon{
  top:3px;
  color:#838383;
}
}
}
.list-search{
  background: #fff;
  height: 105px;
 padding:10px 20px;
.list-search-l{
  float: left;
}
  .van-cell{
    font-size: 26px;
  }
.van-cell__left-icon{
  font-size: 26px;
  top:15px;
  margin-right: 10px;
}
.van-search__action{
  font-size: 26px;
  background: #eff1f6;
  position: relative;
  left:-32px;
  border-radius: 35px;
  padding: 16px 23px;
}
.van-search{
  width: 500px;
}
.van-search .van-cell{
  border: 1px #eff1f6 solid;
  border-right:none;
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  padding: 0px 10px;
  line-height: 54px;
}
.operation{
  float: right;
  padding: 16px 23px;
  font-size: 26px;
  background: #eff1f6;
  border-radius: 35px;
  margin: 6px 5px 0 0;
}
}
.management-list{
  background: #fff;
  padding: 0px 30px;
  height: 200px;

.management-list-l{
line-height: 45px;
}
  .van-rate{
    display: inline-block;
  }
}
.management-list-r{
  padding: 50px 30px 0 0;
  span{
    display: inline-block;
    border-radius: 100%;
    width: 50px;
    line-height: 52px;
    height: 50px;
    border: 1px #4286ed solid;
    text-align: center;
    color: #4286ed;
  }
}
.bottom-btn{
  position: fixed;
  bottom: 0;
  height: 100px;
  color: #fff;
  background: #4286ed;
  line-height: 100px;
  width: 750px;
  span{
    display: inline-block;
    line-height: 100px;
    width: 365px;
    text-align: center;
    font-size: 32px;
  }
  .border-right{
    width: 374px;
    border-right:1px #838383 solid ;
  }

}
.filter{
  width: 78%;
  height: 100%;
.filter-dl{
  padding:30px 0 0 25px;
dt{
  line-height: 45px;
  font-size: 28px;
}
dd{
  padding:15px 0 0 0;
input{
  width: 245px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px #b9babb solid;
  border-radius: 2px;
  font-size: 20px;
}
}
}
.class-name{
  margin-top: 100px;
.van-cell__title{
  color: #7f8081;
}
}
.filter-btn{
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
  height: 81px;
.btn-reset{
  background: #feffff;
  display: inline-block;
  width: 49%;
  height: 80px;
  color: #333333;
  border-top:1px #f1f1f1 solid ;
}
.btn-submit{
  background: #0097ef;
  width: 49%;
  display: inline-block;
  height: 80px;
  color: #fff;
  border-top:1px #0097ef solid ;
}
}
.class-back{
  height: 70px;
  line-height: 70px;
  background: #eef1f6;
  padding-left: 10px;
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 10px;
  color: #999;
}
}
.class-search{
  padding:20px;
input{
  width: 90%;
  height: 60px;
  text-indent: 15px;
  font-size: 22px;
  line-height: 60px;
  border: 1px #e2e1e1 solid;
  border-radius: 10px;
  color: #999;

}
}
.filter-cell{
  overflow-y: scroll;
  min-height:800px;
.van-cell{
  font-size: 24px;
  height: 70px;
  padding: 18px 20px;
  line-height: 32px;
.van-cell__title{
  -webkit-box-flex: 6;
  flex:6;
}
.van-radio__input{
  height: 5em;
  top:2px;
  right: 2px;
  font-size: 30px;
}
.van-radio .van-icon-checked{
  color: #4286ed;
}
}
}
}
}
</style>
