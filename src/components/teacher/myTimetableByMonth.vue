<template>
<div class="my-timetable">
  <!-- <div class="timetable-tit">
    <span class="tit-l">星期一</span>
    <span class="tit-r">09-17</span>
  </div> -->
  <div class="timetable-table" v-for="(data,index) in allDatas" :key="index">
    <div class="table-l">
      <div class="class-tit">{{data.className}}</div>
      <div class="class-address"><van-icon name="location" />{{data.classRoomName}}</div>
      <div class="class-details"><span class="name"><van-icon name="idcard" />{{subStrClassName(data.courseName)}}</span> <span class="time"><van-icon name="clock" />{{subStr(data.createTime)}}-{{subStr(data.endTime)}}</span></div>
    </div>
    <div class="table-r already">
      <span v-if="data.stateId==1">未上课</span>
      <span v-if="data.stateId==2">已上课</span>
      <br/>
      <span class="completion">{{data.realPeopleCount}}/{{data.willPeopleCount}}</span>
    </div>
  </div>
  <!-- <div class="timetable-tit">
    <span class="tit-l">星期二</span>
    <span class="tit-r">09-18</span>
  </div> -->
  <div class="timetable-table">
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
      date: ""
    };
  },
  mounted() {
    this.getMyClassRecord();
  },
  methods: {
    //findMyClassRecord
    showCalendar() {
      console.log(1111);
      this.date = this.upDate;
      console.log(this.date, 22222);
      this.$store.state.calendar.isShow = true;
    },
    subStr(time) {
      return time.substring(10, 20);
    },
    subStrClassName(name) {
      return name.substring(0, 8) + "...";
    },
    //按月查询
    toClassByMonth() {
      this.$router.push({
        path: "/resleaseNoticeByMonth",
        query: {}
      });
    },
    getMyClassRecord() {
      let _self = this;
      let params = new URLSearchParams();
      params.append("begin_date", "2018-10-01");
      params.append("end_date", "2018-10-31");
      params.append("page", 1);
      params.append("rows", 10);
      api.findMyClassRecord(params).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
          var allDatas = res.data.data.rows;
          _self.allDatas = allDatas;
          console.log(allDatas);
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
      line-height: 55px;
      border-radius: 50px;
      border: 1px #eff1f6 solid;
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
    border-bottom: 1px solid #494847;
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
