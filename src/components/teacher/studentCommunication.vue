<template>
  <div class="student-communication">
    <van-tabs type="card">
      <van-tab title="全部">
        <div class="list-search">
          <div class="list-search-l">
            <van-search placeholder="姓名／电话／学号" background="#fff" v-model="userMes"  show-action >
              <div slot="action" @click="onSearch">搜索</div>
            </van-search>
          </div>
          <div class="operation" @click="showFilterDia">筛选</div>
          <div class="operation" @click="showSortDia">排序</div>
        </div>
        <div v-for="data in commentDetail">
          <div @click="goTo(urls.communicationRecord,data.id)">
              <div class="card-list" >
                <div class="card-list-l">
                  <img class="img" :src="data.userPic"/>{{data.name}}
                  <span class="times">沟通次数：{{data.talkCount}}</span>
                </div>
                <div class="card-list-r"><van-icon name="arrow" /></div>
              </div>
              <van-cell-group class="card-list-item">
                <van-cell title="上次沟通" :value="data.lastDate" />
                <van-cell title="下次沟通" :value="data.nextDate" />
                <van-cell title="手机号码" :value="data.mobile" />
                <van-cell title="剩余学费" :value="data.AccountBalance" class="tuition" />
                <van-cell title="学管师" :value="data.salePersonId" />
              </van-cell-group>
          </div>
          <div class="card-list-btn">
              <span>拨号</span>
              <span @click="goTo(urls.purchaseDetails,data.id)">查看购买详情</span>
          </div>
        </div>
      </van-tab>

      <van-tab title="待沟通" >
        <div v-for="data in noComment">
          <div class="no-data" v-if="!data">
          暂无沟通记录
        </div>
          <div v-if="data" @click="goTo(urls.communicationRecord,data.id)">
              <div class="card-list" >
                <div class="card-list-l">
                  <img class="img" src="../../assets/images/user/test.jpg"/>{{data.name}}
                  <span class="times">沟通次数：{{data.talkCount}}</span>
                </div>
                <div class="card-list-r"><van-icon name="arrow" /></div>
              </div>
              <van-cell-group class="card-list-item">
                <van-cell title="上次沟通" :value="data.lastDate" />
                <van-cell title="下次沟通" :value="data.nextDate" />
                <van-cell title="手机号码" :value="data.mobile" />
                <van-cell title="剩余学费" :value="data.AccountBalance" class="tuition" />
                <van-cell title="学管师" :value="data.salePersonId" />
              </van-cell-group>
          </div>
          <div class="card-list-btn">
              <span>拨号</span>
              <span @click="goTo(urls.purchaseDetails,data.id)">查看购买详情</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <sort-pop v-on:sort="getMes"></sort-pop>
    <van-popup v-model="filterShow" position="right" class="filter">
      <!-- <dl class="filter-dl">
        <dt>剩余学费(元)</dt>
        <dd>
          <input type="text" placeholder="最低值" /> --- <input type="text" placeholder="最高值" />
        </dd>
      </dl> -->
      <dl class="filter-dl"><dt>跟进时间</dt><dd>
        <input type="text" placeholder="开始时间" @click="showCalendar(1)" v-model="calendar.item1.date"  /> --- <input type="text" placeholder="结束时间" @click="showCalendar(2)" v-model="calendar.item2.date" />
      </dd></dl>
      <!-- <dl class="filter-dl"><dt>沟通时间</dt><dd>
        <input type="text" placeholder="开始日期" @click="showCalendar(1)" v-model="calendar.item1.date"  /> --- <input type="text" placeholder="结束日期" @click="showCalendar(2)" v-model="calendar.item2.date" />
      </dd></dl> -->
      <dl class="filter-dl"><dt>沟通时间</dt>
        <dd>
          <input type="text" placeholder="开始时间" @click="showCalendar(5)" v-model="calendar.item5.date" /> --- <input type="text" placeholder="结束时间" @click="showCalendar(6)" v-model="calendar.item6.date" />
        </dd>
      </dl>
      <!-- <dl class="filter-dl"><dt>跟进时间</dt>
        <dd>
          <input type="text" placeholder="开始日期" @click="showCalendar(3)" v-model="calendar.item3.date" /> --- <input type="text" placeholder="结束日期" @click="showCalendar(4)" v-model="calendar.item4.date" />
        </dd></dl> -->
      <van-cell-group class="class-name">
        <van-cell :title="className" :classId="classId" is-link  @click="showClassPop" />
      </van-cell-group>
      <div class="filter-btn">
        <span class="btn-reset" @click="resetFn()">重置</span>
        <span class="btn-submit" @click="submitFn1()">确定</span>
      </div>
    </van-popup>
    <van-popup v-model="classFilterShow" position="right" class="filter">
      <div class="class-back" @click="goBack"><van-icon name="arrow-left" />选择班级</div>
      <div class="class-search"><input type="text" placeholder="请输入名称" @input="search"/></div>
      <van-radio-group v-model="radio">
        <van-cell-group class="filter-cell">
          <van-cell v-for="data in list"  :title="data.className" clickable>
            <van-radio :name="data.id" />
          </van-cell>
          <!-- <van-cell :title="data.className" clickable @click="radio = '2'">
            <van-radio name="2" />
          </van-cell> -->
        </van-cell-group>
      </van-radio-group>
      <div class="filter-btn">
        <span class="btn-reset" @click="resetFn()">重置</span>
        <span class="btn-submit" @click="submitFn()">确定</span>
      </div>
    </van-popup>
    <!--每个日历选择按钮都需要调用一个日历组件-->
    <calendar :date.sync="calendar.item1.date" :isVisible.sync="calendar.item1.isVisible"></calendar>
    <calendar :date.sync="calendar.item2.date" :isVisible.sync="calendar.item2.isVisible"></calendar>
    <calendar :date.sync="calendar.item5.date" :isVisible.sync="calendar.item5.isVisible"></calendar>
    <calendar :date.sync="calendar.item6.date" :isVisible.sync="calendar.item6.isVisible"></calendar>
  </div>
</template>
<script>
import SortPop from '../popup/sortPop'
import Calendar from '../general/calendar'
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  components: {
    SortPop,
    Calendar
  },
  data () {
    return {
      a:'111',
      calendar:{
        item1:{
          isVisible:false,
          date:''
        },
        item2:{
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
        },
      },
      radio:'',
      filterShow:false,
      classFilterShow:false,
      active: 1,
      urls: {
        communicationRecord: '/teacher/communicationRecord',
        purchaseDetails: '/teacher/purchaseDetails'
      },
      commentDetail:[],
      userMes:'',
      noComment:[],
      list:[],
      className:'班级名称',
      classId:''
    }
  },
  mounted() {
    // this.sort = this.$refs.calendar.$el.lastDate;
    // console.log(this.sort);
    this.filterShow = false;
    this.getMes('lastDate');
    this.noCommunication();

    // 获取子组件中获取的日期
    // this.date1 = this.$refs.calendar.$el.innerText.substr(0, 10); //2018-11-01
    // this.date2 = this.$refs.calendar.$el.innerText.substr(11); //2018-11-31
    // this.findReleaseHomework(this.date1, this.date2);

  },
  methods: {
    // 接受参数
    getMes: function(p){
      this.getCommunicationDetail('',p);
      console.log(p);
    },
    goTo (url,parame) {
      this.$router.push({ path: url, query: { id: parame } })
    },
    // 沟通列表
    getCommunicationDetail: function(data1, p) {
      let _self = this;
      let param = new URLSearchParams();
      param.append('all_or_other' ,false);
      if(p){
        param.append('sort' ,p);
      }
      if(data1){
        param.append('query_content' ,data1);
      }
      api.findStudentCommunicationDetailStu(param)
        .then(res => {
          if (res.code===1) {
              _self.commentDetail=res.data;
              console.log(res.data);
          } else {

          }
        })
        .catch(error => {

        });
    },
    findStudentCommunicationDetailStu: function() {
      let params ={};
      params.beginNextDateDate=this.calendar.item1.date;
      params.endNextDateDate=this.calendar.item2.date;
      params.beginLastDate=this.calendar.item5.date;
      params.endLastDate=this.calendar.item6.date;
      params.order="asc";
      params.page =1;
      params.rows=100;
      params.all_or_other=false;
      params.classID = this.classId;
      
      let _self = this;
      api.findStudentCommunicationDetailStu(params)
        .then(res => {
          console.log(res);
          if (res.code == 1) {
              _self.commentDetail=res.data;
          }
        })
        .catch(error => {
          
        });
    },
    // 未沟通
    noCommunication: function(data1, p) {
      let _self = this;
      let param = new URLSearchParams();
      param.append('all_or_other' ,true);
      if(p){
        param.append('sort' ,p);
      }
      if(data1){
        param.append('query_content' ,data1);
      }
      api.findStudentCommunicationDetailStu(param)
        .then(res => {
          if (res.code===1) {
              _self.noComment=res.data;
              console.log(res.data);
          } else {

          }
        })
        .catch(error => {

        });
    },
    onSearch () {
        this.getCommunicationDetail(this.userMes);
    },
    timeForMat(count) {
      // 拼接时间
      let time1 = new Date();
      time1.setTime(time1.getTime() - 24 * 60 * 60 * 1000);
      let Y1 = time1.getFullYear();
      let M1 =
        time1.getMonth() + 1 > 10
          ? time1.getMonth() + 1
          : "0" + (time1.getMonth() + 1);
      let D1 = time1.getDate() > 10 ? time1.getDate() : "0" + time1.getDate();
      let timer1 = Y1 + "-" + M1 + "-" + D1; // 当前时间
      let time2 = new Date();
      time2.setTime(time2.getTime() - 24 * 60 * 60 * 1000 * count);
      let Y2 = time2.getFullYear();
      let M2 =
        time2.getMonth() + 1 > 9
          ? time2.getMonth() + 1
          : "0" + (time2.getMonth() + 1);
      let D2 = time2.getDate() > 9 ? time2.getDate() : "0" + time2.getDate();
      // let timer2 = Y2 + '-' + M2 + '-' + D2 // 之前的7天或者30天 // return { // // t1: timer1, // // t2: timer2 // }
      this.date1 = Y2 + "-" + M2 + "-" + D2;
      return Y2 + "-" + M2 + "-" + D2;
    },
    format(fmt, date) {
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
    getDate(val) {
      let date = new Date();
      let seperator = "-";
      let year = date.getFullYear(); //获取年份
      let month = date.getMonth() + 1; //获取月份
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      let strDate = date.getDate(); //获取日期
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let week = date.getDay(); //获取星期
      if (val == "今天") {
        this.date1 = year + seperator + month + seperator + strDate;
        this.date2 = year + seperator + month + seperator + strDate;
      }
      if (val == "昨天") {
        this.date1 = this.timeForMat(0);
        this.date2 = this.timeForMat(0);
      }
      if (val == "本周") {
        let num = week - 1;
        date.setDate(date.getDate() - num); //本周第一天
        let str = this.format("yyyy-MM-dd", date);
        date.setDate(date.getDate() + 6); //本周最后一天
        let str1 = this.format("yyyy-MM-dd", date);
        this.date1 = str;
        this.date2 = str1;
      }
      if (val == "最近7天") {
        this.timeForMat(6);
        this.date2 = year + seperator + month + seperator + strDate;
      }
      if (val == "最近30天") {
        this.timeForMat(29);
        this.date2 = year + seperator + month + seperator + strDate;
      }
      if (val == "本月") {
        date.setDate(1); //本月第一天
        var str = this.format("yyyy-MM-dd", date);
        date.setMonth(date.getMonth() + 1); //下个月
        date.setDate(date.getDate() - 1); //下个月第一天减1得到本月最后一天
        var str1 = this.format("yyyy-MM-dd", date);
        this.date1 = str;
        this.date2 = str1;
      }
      if (val == "上月") {
        month = month - 1;
        if (month == 0) {
          month = 12;
          year = year - 1;
        }
        if (month < 10) {
          month = "0" + month;
        }
        this.date1 = year + "-" + month + "-" + "01"; //上个月的第一天
        var myDate = new Date(year, month, 0);
        this.date2 = year + "-" + month + "-" + myDate.getDate(); //上个月的最后一天
      }
      console.log(this.date1);
      console.log(this.date2);
    },
    showFilterDia () {
      this.filterShow = true
    },
    showSortDia () {
      //排序弹出层显示
      this.$store.state.sortPopup.isShow = true;
    },
    showClassPop () {
      this.classFilterShow = true;
      let _self = this;
      api.findAllGrade().then(res => {
          if (res.data.code == 1) {
            _self.list = res.data.data;
            console.log(_self.list);
          }
      });
    },
    // resetFn (param){
    //   if(this.classFilterShow){
    //     this.classFilterShow = false;

    //   }else {
    //     this.classFilterShow = false;
    //     this.filterShow = false
    //   }
    // },
    resetFn (param){
      this.calendar.item1.date="";
      this.calendar.item2.date="";
      this.calendar.item3.date="";
      this.calendar.item4.date="";
      this.calendar.item5.date="";
      this.calendar.item6.date="";
      this.customerData.selectedId=null;
      this.customerData.selectItem="";
      this.calendar.item07.selectedId=null;
      this.calendar.item07.selectItem="";
      this.value=null;
      this.filterShow = false;
   
    },
    search (value) {
        let _self = this;
        let param = new URLSearchParams();
        param.append('className' ,value.target.value);
        api.findAllGrade(param).then(res => {
          console.log(res.data);
          if (res.data.code == 1) {
            _self.list = res.data.data;
          }
        });
      // console.log(value.target.value)  //todo 关键词搜索用

    },
    submitFn (param) {
      //      if(param === 2){
      //        this.classFilterShow = false
      //      }else{
      //        this.filterShow = false
      //      }

      if(this.classFilterShow){
        this.classFilterShow = false;

      }else {
        this.classFilterShow = false;
        this.filterShow = false
      }
      for(var i=0;i<this.list.length;i++){
          if(this.list[i].id == this.radio){
              this.className = this.list[i].className;
              this.classId = this.list[i].id
          }

      }

    },
    submitFn1 (param) {

      if(this.classFilterShow){
        this.classFilterShow = false;

      }else {
        this.classFilterShow = false;
        this.filterShow = false
      }
      for(var i=0;i<this.list.length;i++){
          if(this.list[i].id == this.radio){
              this.className = this.list[i].className
              this.classId = this.list[i].id
          }
      }
      this.findStudentCommunicationDetailStu();

    },
    goBack () {
      this.classFilterShow = false;
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

  }
}
</script>
<style lang="less">
  .student-communication{
  .van-tab{
    font-size: 26px;
  }
  .van-tabs--card{
    padding-top: 75px;
  }
  .van-tabs__nav--card .van-tab.van-tab--active{
    background-color: #4286ed;
    color: #fff;
  }
  .van-tabs--card .van-tabs__wrap{
    height: 105px;
  }
  .van-tabs__content{
    padding-top: 20px;

  }
  .van-tabs__nav--card{
    border: 1px #4286ed solid;
    height: 56px;

  }
  .van-tabs__nav--card .van-tab{
    border-right:1px #4286ed solid ;
    line-height: 56px;
    color: #4286ed;
  }
  .van-tabs__nav--card .van-tab{

  }
  .van-tabs--card .van-tabs__wrap{
    padding: 20px;
    background: #fff;
  }
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
  .no-data{
    text-align: center;
    padding: 30px 0;
  }
  .card-list-item{
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  .card-list-btn{
    background: #fff;
    height: 95px;
    padding: 20px 0;
    border-top: 1px #eff1f6 solid;
    text-align:right;
  span{
    display: inline-block;
    border: 1px #4286ed solid;
    padding: 10px 28px;
    color: #4286ed;
    border-radius: 32px;
    margin-right: 20px;
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
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
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
