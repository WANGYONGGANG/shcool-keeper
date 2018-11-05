<template>
<div class="my-timetable">
  <div class="month-tit fn-clear">
    <div class="month-tit-l fn-left">
      <span>上月</span>
      <span>2018.11</span>
      <span>下月</span>
    </div>
    <div class="month-tit-r fn-right">
      <span @click="toClassByWeek">按周</span>
    </div>
  </div>
  <calendar-table :date.sync="calendar.date" :haveDetial="calendar.detialDate" :list="calendar.list"></calendar-table>
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

  <div class="empty">暂无上课班级</div>
</div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import Router from "vue-router";
import CalendarTable from '../general/calendarTable'
export default {
  components: {
    CalendarTable
  },
  data() {
    return {
      allDatas: [],
      calendar:{
        //显示小黄点的日期，需传入一个格式为2018-11-10数组
        detialDate:['2018-11-10','2018-11-17'],
        date:'',
        list:[{
          time:'13:50-15:20',
          class:'10秋科技馆六年级英语',
          schoolArea:'临邑新概念',
          state:'科技馆000',
          content:'已上课',
          num:'1/1'
        },{
          time:'13:50-15:20',
          class:'10秋科技馆六年级英语',
          schoolArea:'临邑新概念',
          state:'科技馆000',
          content:'已上课',
          num:'1/1'
        }]
      }
    };
  },
  mounted() {
    this.getMyClassRecord();
  },
  methods: {
    //findMyClassRecord
    subStr(time) {
      return time.substring(10, 20);
    },
    subStrClassName(name) {
      return name.substring(0, 8) + "...";
    },
    //按周查询
    toClassByWeek() {
      this.$router.push({
        path: "/teacher/myTimetable",
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
.month-tit{
  height: 86px;
  background: #fff;
span {
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
  span{
    background: #eff1f6;
  }
}
}

  .timetable-table {
    background: #fff;
    height: 170px;
    border-bottom: 1px solid #494847;


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
.empty {
  line-height: 170px;
  text-align: center;
  font-size: 32px;
  color: #838383;
}
}
</style>
