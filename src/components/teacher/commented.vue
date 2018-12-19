<template>
<!--上课点评模块1  获取当前登录人的排课计划列表 -->
  <div class="commented">
    <calendar-packing  v-on:updateDate="updateDate" ref="calendar"   v-bind:begin_date="begin_date"  v-bind:end_date="end_date" v-if="showCalendar"></calendar-packing>
    <div class="timetable-table" @click="goTo(data.id)"  v-for="data in Alldatas">
      <div class="table-l">
        <div class="class-tit">{{data.className}}</div>
        <div class="class-details"><span class="time"><van-icon name="idcard" />{{data.courseName}}</span></div>
        <div class="class-details"><span class="time"><van-icon name="clock" />{{data.classPleanDate}}</span></div>
      </div>
      <div class="table-r">
        点评<br/>
        <span class="completion">{{data.evaluationCount}}/{{data.recruitStudentsCount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
//上课点评页面
import {api} from  '../../../static/js/request-api/request-api.js';
//日历选择组件
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking
  },
  data () {
    return {
      Alldatas:[
        //假数据
        {
        id:1,
        className:'',
        courseName:'',
        classPleanDate:'',
        evaluationCount:0,
        recruitStudentsCount:2

      }],
      begin_date:null,
      end_date:null,
      showCalendar:false,

    }
  },
  mounted () {
    this.initDateWeek();
    this.classEvaluationFindMyClassRecord();
  },
  methods: {
    //classEvaluationFindMyClassRecord获取当前登录人的排课计划
    classEvaluationFindMyClassRecord () {
      let _self = this;
      let param = new URLSearchParams();

      param.append('begin_date' , this.begin_date);//'2018-10-01'
      param.append('end_date' , this.end_date);//'2018-10-31'
      param.append('pag ' , 1);
      param.append('rows' , 100);

      api.classEvaluationFindMyClassRecord(param).then( res => {
        if( res.data.code == 1 ){
          _self.Alldatas = res.data.data.rows;
          console.log(_self.Alldatas);
          }
      } );
    },
    updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.classEvaluationFindMyClassRecord();
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (param) {
      this.$router.push({path: '/teacher/commentedList',query:{id:param}})
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
          this.date1 = this.timeForMat(0,date);
          this.date2 = this.timeForMat(0,date);
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
          this.date1 = this.timeForMat(6,date);
          this.date2 = year + seperator + month + seperator + strDate;
        }
        if (val == "最近30天") {
          this.date1 = this.timeForMat(29,date);
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
    },
    //获取昨天，最近7天，最近30天
    timeForMat(count,date) {
      date.setTime(date.getTime() - 24 * 60 * 60 * 1000 * count);
      let Y2 = date.getFullYear();
      let M2 =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let D2 = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      return Y2 + "-" + M2 + "-" + D2;
    },
    
    //获取本周、本月
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

    initDateWeek:function(){
          this.begin_date = this.getAllDateFromNow(0);
          this.end_date = this.getWeekEndDate(0);
          this.showCalendar=true;
    },

  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
    item :{
      handler(val){
        //日期快速切换值
        this.$toast(val);
        this.getDate(val);
        this.begin_date=this.date1;
        this.end_date=this.date2;
        this.classEvaluationFindMyClassRecord();
        this.$refs.calendar.setCheckedDateValue(this.begin_date,this.end_date);
      }
    }
  }
}
</script>
<style lang="less">
.commented{
.timetable-table{
  background: #fff;
  height: 170px;
  margin-bottom: 10px;
.empty{
  line-height: 170px;
  text-align: center;
  font-size: 32px;
  color: #838383;
}
.table-l{
  float: left;
  padding-left:30px;
  overflow: hidden;
  width: 550px;
.class-tit{
  font-size: 32px;
  color: #141414;
  line-height: 65px;
  padding-top: 10px;
}

.class-details{
  font-size: 24px;
  color: #838383;
  line-height: 40px;
  white-space: nowrap;
.name{
  padding-right: 15px;
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 15px;
  color: #dc951a;

}
}
.time{
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 15px;
  color: #dc951a;
}
}
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
  margin: 15px auto 0;
}
}
}
}

</style>
