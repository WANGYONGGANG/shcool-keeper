<template>
<div class="communication-record">
  <div class="charge-top">
   <calendar-packing v-on:updateDate="updateDate"  v-bind:begin_date="begin_date"  v-bind:end_date="end_date" v-if="showCalendar" ></calendar-packing>
  </div>
  <div class="timetable-table" v-for="(data, index) in classRosterList" v-bind:key="index">
    <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
    <div class="table-l">
      <div class="class-tit">{{data.talkManName}}</div>
      <div class="class-details"><span class="time">{{data.talkName}}</span></div>
      <div class="class-text">{{data.talkContent}}</div>
      <div class="class-details"> <span class="time">下次跟进： {{data.nextTalkName}}</span></div>
    </div>
    <div class="table-r">
      <span class="completion" @click="goTo(urls.addCommunicationRecord)"><van-icon name="edit-data" color="#4286ed" size="30px"/></span>
    </div>
  </div>

  <!-- <div class="timetable-table">
    <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
    <div class="table-l">
      <div class="class-tit">潮人部落</div>
      <div class="class-details"><span class="time">7-414:原有一对一53</span></div>
      <div class="class-text">是是是</div>
      <div class="class-details"> <span class="time">下次跟进： 电话联系</span></div>
    </div>
    <div class="table-r">
      <span class="completion" @click="goTo(urls.addCommunicationRecord)"><van-icon name="edit-data" color="#4286ed" size="30px"/></span>
    </div>
  </div> -->

  <bottom-btn :buttonData="buttonData" @click="goTo()"></bottom-btn>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
import CalendarPacking from "../general/calendarPacking";
import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    CalendarPacking,
    BottomBtn
  },
  data () {
    return {
      urls: {
        addCommunicationRecord: '/teacher/addCommunicationRecord'
      },
      begin_date:null,
      end_date:null,
      showCalendar:false,
      date1: "",
      date: "",
      buttonData: {
        text: '添加沟通记录',
        url: '/teacher/addCommunicationRecord'
      },
      classRosterList:[]
    }
  },
   mounted () {

    //  console.log(this.$refs.calendar);
      // this.date1 = this.$refs.calendar.$el.innerText.substr(0, 10); //2018-11-01
      // this.date2 = this.$refs.calendar.$el.innerText.substr(11); //2018-11-31
      // console.log(this.data2);
      this.initDateWeek();
      this.getCommunicationDetail();
  },
  methods: {
    goTo (url,parame) {
      this.$router.push({ path: '/teacher/addCommunicationRecord', query: { id: this.$route.query.id } })
    },
    updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.getCommunicationDetail();
    },
     //获取本周开始日期
    getAllDateFromNow(index) {
      var now = new Date(); //当前日期
      var nowDayOfWeek = now.getDay(); //今天本周的第几天
      var nowDay = now.getDate(); //当前日
      var nowMonth = now.getMonth(); //当前月
      var nowYear = now.getFullYear(); //当前年
      if (nowDayOfWeek == 0) {
        nowDayOfWeek = 7;
      }
      var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek+index+1);

      return this.formatDate(weekStartDate);
    },
    getWeekEndDate(index) {
      var now = new Date(); //当前日期
      var nowDayOfWeek = now.getDay(); //今天本周的第几天
      var nowDay = now.getDate(); //当前日
      var nowMonth = now.getMonth(); //当前月
      var nowYear = now.getFullYear(); //当前年
      if (nowDayOfWeek == 0) {
        nowDayOfWeek = 7;
      }
      var weekEndDate = new Date(
        nowYear,
        nowMonth,
        nowDay + (7 - nowDayOfWeek+index)
      );
      return this.formatDate(weekEndDate);
    },
     initDate(){
      let schoolPartList=this.schoolPartList;
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
       this.sortData.selectItem.item=schoolPartList[0].name;
    },
     initDateWeek:function(){
          this.begin_date = this.getAllDateFromNow(0);
          this.end_date = this.getWeekEndDate(0);
          this.showCalendar=true;
    },
    getCommunicationDetail: function(begin_date,end_date) {
      let _self = this;
      let param = new URLSearchParams();
      param.append('student_id' ,this.$route.query.id);
      param.append('begin_date' ,this.begin_date);
      param.append('end_date' ,this.end_date);
      api.getCommunicationDetail(param)
        .then(res => {
          if (res.status == 200) {
              let code=res.data.code;
              if(code===1){
                _self.classRosterList=res.data.data;
                console.log(_self.classRosterList);
              }
          } else {
            
          }
        })
        .catch(error => {
          
        });
    },
     formatDate(date) {
      var myyear = date.getFullYear();
      var mymonth = date.getMonth() + 1;
      var myweekday = date.getDate();

      if (mymonth < 10) {
        mymonth = "0" + mymonth;
      }
      if (myweekday < 10) {
        myweekday = "0" + myweekday;
      }
      return myyear + "-" + mymonth + "-" + myweekday;
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
        this.begin_date = year + seperator + month + seperator + strDate;
        this.end_date = year + seperator + month + seperator + strDate;
      }
      if (val == "昨天") {
        this.begin_date = this.timeForMat(0);
        this.end_date = this.timeForMat(0);
      }
      if (val == "本周") {
        let num = week - 1;
        date.setDate(date.getDate() - num); //本周第一天
        let str = this.format("yyyy-MM-dd", date);
        date.setDate(date.getDate() + 6); //本周最后一天
        let str1 = this.format("yyyy-MM-dd", date);
        this.begin_date = str;
        this.end_date = str1;
      }
      if (val == "最近7天") {
        this.timeForMat(6);
        this.end_date = year + seperator + month + seperator + strDate;
      }
      if (val == "最近30天") {
        this.timeForMat(29);
        this.end_date = year + seperator + month + seperator + strDate;
      }
      if (val == "本月") {
        date.setDate(1); //本月第一天
        var str = this.format("yyyy-MM-dd", date);
        date.setMonth(date.getMonth() + 1); //下个月
        date.setDate(date.getDate() - 1); //下个月第一天减1得到本月最后一天
        var str1 = this.format("yyyy-MM-dd", date);
        this.begin_date = str;
        this.end_date = str1;
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
        this.begin_date = year + "-" + month + "-" + "01"; //上个月的第一天
        var myDate = new Date(year, month, 0);
        this.end_date = year + "-" + month + "-" + myDate.getDate(); //上个月的最后一天
      }
      console.log(this.begin_date);
      console.log(this.end_date);
    }

  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
    item :{
      //日期快速切换值
      handler(val){
        this.$toast(val)
        this.getDate(val);
        this.getCommunicationDetail();
      }
    }
  }
}
</script>
<style lang="less">
.communication-record{
  .timetable-table{
    background: #fff;
    border-bottom: 1px #eff1f6 solid;
    height: 270px;
  .img{
    width: 80px;
    height: 80px;
    float: left;
    padding: 80px 30px 0 30px;
    border-radius: 100%;
    img{
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
  }
  .empty{
    line-height: 270px;
    text-align: center;
    font-size: 32px;
    color: #838383;
  }
  .table-l{
    float: left;
    padding-left:60px;

  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 50px;
  .name{
    padding-right: 15px;

  }
  .people-num{
    padding-left: 10px;
  }

  }
.class-text{
  font-size: 30px;
  line-height: 56px;
  padding-bottom: 20px;
}
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    padding-top: 35px;
    width: 180px;
    color: #838383;
  .completion{
    display: inline-block;
    border-radius: 50px;
    line-height: 40px;
    padding: 0 20px;
    margin: 0px auto 0;
  }
  }
  }
.quick-schedule{
  height: 99px;
  line-height: 99px;
  font-size: 32px;
  color: #fff;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background: #4286ed;
  z-index: 100;

}
}

</style>
