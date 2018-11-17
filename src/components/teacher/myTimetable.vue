<template>
<div class="my-timetable">
  <div class="time-tab">
    <span class="select-label" v-on:click="findMyClassRecordWithWeek(-1)">上周</span>
    <span class="select-label" v-on:click="findMyClassRecordWithWeek(0)">本周</span>
    <span class="select-label" v-on:click="findMyClassRecordWithWeek(1)">下周</span>
    <span class="select-label fn-right" @click="toClassByMonth">按月</span>
  </div>
  <div v-for="(data,index) in allDatas" :key="index">
  <div class="timetable-tit">
    <span class="tit-l">星期{{getWeek(data[0].beginTime)}}</span>
    <span class="tit-r">{{data[0].beginTime}}</span>
  </div>
  <div class="timetable-table" v-for="(items,index1) in data" :key="index1">
     <div class="table-l">
      <div class="class-tit">{{items.className}}</div>
      <div class="class-address"><van-icon name="location" />{{items.classRoomName}}</div>
      <div class="class-details"><span class="name"><van-icon name="idcard" />{{subStrClassName(items.courseName)}}</span> <span class="time"><van-icon name="clock" />{{subStr(items.createTime)}}-{{subStr(items.endTime)}}</span></div>
    </div>
    <div class="table-r already">
        <span v-if="items.stateId==1">未上课</span>
      <span v-if="items.stateId==2">已上课</span>
      <br/>
      <span class="completion">{{items.realPeopleCount}}/{{items.willPeopleCount}}</span>
     </div>
  </div>
  </div>

  <!-- <div class="timetable-tit">
    <span class="tit-l">星期二</span>
    <span class="tit-r">09-18</span>
  </div> -->
  <div class="timetable-table"  v-if="totalCount==0">
    <div class="empty">暂无上课班级</div>
  </div>
   <calendar></calendar>
</div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import Calendar from "../general/calendar";
import Router from "vue-router";
export default {
  components: {
    Calendar
  },
  data() {
    return {
      allDatas: [],
      totalCount:0,
      date: ""
    };
  },
  mounted() {
    this.findMyClassRecordWithWeek(0);
  },
  methods: {
    //findMyClassRecord
    showCalendar() {
      console.log(1111);
      this.date = this.upDate;
      console.log(this.date, 22222);
      this.$store.state.calendar.isShow = true;
    },
    //按月查询
    toClassByMonth() {
      this.$router.push({
        path: "/teacher/myTimetableByMonth",
        query: {}
      });
    },
    subStr(time) {
      return time.substring(10, 20);
    },
    subStrClassName(name) {
      return name.substring(0, 8) + "...";
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
    //获取星期几
    getWeek(nowTime) {
      let weekArray = new Array("日", "一", "二", "三", "四", "五", "六");
      let nowWeek = weekArray[new Date(nowTime).getDay()];
      return nowWeek;
    },
    findMyClassRecordWithWeek(nowWeek) {
      let beginDate;
      let endDate;
      if (nowWeek==-1) {
        beginDate = this.getAllDateFromNow(-7);
        endDate = this.getWeekEndDate(-7);
      } else if (nowWeek == 0) {
        beginDate = this.getAllDateFromNow(0);
        endDate = this.getWeekEndDate(0);
      } else {
          beginDate = this.getAllDateFromNow(7);
          endDate = this.getWeekEndDate(7);
      }
      let _self = this;
      let params = new URLSearchParams();
      params.append("begin_date", "2018-09-01");
      params.append("end_date", "2018-10-31");
      // params.append("begin_date", beginDate);
      // params.append("end_date",endDate);
      params.append("page", 1);
      params.append("rows", 10);
      api.findMyClassRecordWithWeek(params).then(res => {
        let result
        if(res.data.constructor==String){
          result= eval("(" + res.data + ")");
        }else{
          result=res.data;
        }
        if (result.code == 1) {
          // console.log(result.data.rows);
          _self.allDatas = result.data.rows;
          _self.totalCount=result.data.total;

        }
      });
    }
  },
  computed: {
    upDate: {
      get() {
        return this.$store.state.calendar.date;
      },
      set() {}
    }
  }
};
</script>
<style lang="less">
.my-timetable {
  .time-tab {
    height: 86px;
    background: #fff;
    padding-left: 20px;
    .select-label {
      height: 53px;
      display: inline-block;
      padding: 0px 30px;
      font-size: 24px;
      line-height: 53px;
      border-radius: 50px;
      border: 1px #b9babb solid;
      margin: 17px 10px 0;
    }
    .fn-right {
      float: right;
      background: #eff1f6;
    }
  }
  .timetable-tit {
    height: 80px;
    color: #494847;
    font-size: 28px;
    line-height: 80px;
    padding: 0 30px;
    .tit-r {
      float: right;
    }
  }
  .timetable-table {
    background: #fff;
    height: 170px;
    .empty {
      line-height: 170px;
      text-align: center;
      font-size: 32px;
      color: #838383;
    }

    .table-l {
      float: left;
      padding-left: 30px;

      /*width: 550px;*/
      .class-tit {
        font-size: 32px;
        color: #141414;
        line-height: 65px;
        padding-top: 10px;
      }
      .class-address {
        font-size: 24px;
        color: #838383;
        line-height: 40px;
        .van-icon {
          position: relative;
          top: 4px;
          margin-right: 5px;
        }
      }
      .class-details {
        font-size: 26px;
        color: #838383;
        line-height: 50px;
        .name {
          padding-right: 15px;
          .van-icon {
            position: relative;
            top: 4px;
            margin-right: 5px;
            color: #dc951a;
          }
        }
        .time {
          .van-icon {
            position: relative;
            top: 4px;
            margin-right: 5px;
            color: #dc951a;
          }
        }
      }
    }
    .table-r {
      float: right;
      text-align: center;
      font-size: 26px;
      padding-top: 35px;
      width: 180px;
      color: #838383;
      .completion {
        display: inline-block;
        border: 1px #838383 solid;
        border-radius: 50px;
        line-height: 40px;
        padding: 0 20px;
        margin: 15px auto 0;

        background: #f8f8f8;
      }
    }
    .already {
      color: #0a64d9;
      .completion {
        background: #ebf5ff;
        color: #0a64d9;
        border: 1px #0a64d9 solid;
      }
    }
  }
}
</style>
