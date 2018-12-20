<template>
  <div class="task">
    <calendar-packing   v-on:updateDate="updateDate" ref="calendar"   v-bind:begin_date="begin_date"  v-bind:end_date="end_date" v-if="showCalendar"></calendar-packing>
    <div class="task-table"  v-for="data in allDatas">
      <van-cell-group class="tab-list-item01">
        <van-cell :title="data.title" is-link :to="{path:'/teacher/taskDetial'}" :@click="taskDetial(data)"/>
      </van-cell-group>
      <div @click="goTo(urls.studentCompletion,data.id)">
      <van-cell-group class="tab-list-item02">
        <van-cell :title="data.courseName" :value="data.classPleanDate"/>
      </van-cell-group>
      <div class="tabl-list-item03">
        <span>已读{{data.readCount}}人</span>
        <span>已交{{data.submitCount}}人</span>
        <span>已评{{data.comentCount}}人</span>
      </div>
      </div>
    </div>
    <div class="list-bottom" @click="goTo(urls.resleaseAssignments)">发布作业</div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import CommentedPop from "../popup/commentedPop";
import CalendarPacking from "../general/calendarPacking";
import TaskDetial from "./taskDetial";
export default {
  components: {
    CalendarPacking,
    TaskDetial
  },
  data() {
    return {
      allDatas: [],
      date1: "",
      date: "",
      urls: {
        studentCompletion: "/teacher/studentCompletion",
        resleaseAssignments: "/teacher/resleaseAssignments"
      },
      begin_date:null,
      end_date:null,
      showCalendar:false,
    };
  },
  mounted() {
    this.initDateWeek();
    this.findReleaseHomework();
  },
  methods: {
    taskDetial : function(data){
      this.$store.state.teacherTask.taskDetial = data;
    },
    findReleaseHomework: function() {
      let _self = this;
      let param = new URLSearchParams();

      param.append("begin_date", this.begin_date);
      param.append("end_date", this.end_date);
      param.append("pag ", 1);
      param.append("rows", 100);

      api.findReleaseHomework(param).then(res => {
        if (res.data.code == 1) {
          _self.allDatas = res.data.data.rows;
          console.log(_self.allDatas);
        }
      });
    },
    showCommentedDia() {
      this.$store.state.commentPopup.isShow = true;
    },
    goTo(url, param) {
      this.$router.push({ path: url, query: { id: param } });
    },
     updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.findReleaseHomework();
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
  computed: {
    item() {
      return this.$store.state.commentPopup.item;
    }
  },
  watch: {
    item: {
      handler(val) {
        //日期快速切换值
        this.$toast(val);
        this.getDate(val);
        this.begin_date=this.date1;
        this.end_date=this.date2;
        this.findReleaseHomework();
        this.$refs.calendar.setCheckedDateValue(this.begin_date,this.end_date);
      }
    }
  }
};
</script>
<style lang="less">
.task {
  .task-table {
    padding: 0 15px;
    background: #fff;
    .tab-list-item01 {
      .van-cell {
        font-size: 26px;
        line-height: 50px;
      }
      .van-cell__right-icon {
        line-height: 50px;
      }
    }
    .tab-list-item02 {
      .van-cell {
        color: #bbb;
        font-size: 24px;
        line-height: 50px;
      }
    }
    .tab-list-item02.van-hairline--top-bottom::after {
      border-width: 0;
    }
    .tabl-list-item03 {
      width: 100%;
      padding-bottom: 20px;

      display: -webkit-inline-flex; /* Safari */
      display: inline-flex;
      span {
        display: inline-block;
        width: 33%;
        text-align: left;
        color: #838383;
        line-height: 40px;
        text-indent: 30px;
      }
    }
  }
  .list-bottom {
    height: 95px;
    line-height: 95px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #4286ed;
    color: #fff;
    text-align: center;
    font-size: 32px;
  }
}
</style>
