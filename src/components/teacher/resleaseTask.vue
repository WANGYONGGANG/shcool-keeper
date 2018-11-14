<template>
  <div class="task">
    <calendar-packing ref="calendar"></calendar-packing>
    <div class="task-table"  v-for="data in allDatas">
      <van-cell-group class="tab-list-item01">
        <van-cell :title="data.title" is-link :to="{path:'/teacher/taskDetial',query:{id:data.id}}"/>
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
      }
    };
  },
  mounted() {
    console.log(this.$refs.calendar);
    this.date1 = this.$refs.calendar.$el.innerText.substr(0, 10); //2018-11-01
    this.date2 = this.$refs.calendar.$el.innerText.substr(11); //2018-11-31
    this.findReleaseHomework(this.date1, this.date2);
  },
  methods: {
    findReleaseHomework: function(date1, date2) {
      let _self = this;
      let param = new URLSearchParams();

      param.append("begin_date", date1);
      param.append("end_date", date2);
      param.append("pag ", 1);
      param.append("rows", 10);

      api.findReleaseHomework(param).then(res => {
        if (res.data.code == 1) {
          _self.allDatas = res.data.data.rows;
        }
      });
    },
    showCommentedDia() {
      this.$store.state.commentPopup.isShow = true;
    },
    goTo(url, param) {
      this.$router.push({ path: url, query: { id: param } });
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
    }
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
        console.log(val);
        this.getDate(val);
        this.findReleaseHomework(this.date1, this.date2);
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
