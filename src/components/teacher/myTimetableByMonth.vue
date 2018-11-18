<template>
<div class="my-timetable">
  <calendar-table :date.sync="calendar.date" :haveDetial="calendar.detialDate" :isShowDetial.sync="calendar.detialCurrentDate"   v-on:updateDate="updateDate"></calendar-table>
  <!-- <div class="timetable-tit">
    <span class="tit-l">星期一</span>
    <span class="tit-r">09-17</span>
  </div> -->
  <!-- <div class="timetable-table" v-for="(data,index) in allDatas" :key="index">
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
  </div> -->
  <!-- <div class="timetable-tit">
    <span class="tit-l">星期二</span>
    <span class="tit-r">09-18</span>
  </div> -->
  <div class="detial-list"   v-for="(data,index) in allDatas" :key="index">
    <dl>
      <dt>{{data.beginTime}}-{{data.endTime}}</dt>
      <dd>班级：{{data.className}}</dd>
      <dd>校区：{{data.campusName}}</dd>
      <dd>教室：{{data.classRoomName}}</dd>
      <dd>状态：{{data.stateId}}</dd>
      <dd>内容：{{data.courseName}}</dd>
    </dl>
    <!--<dl>-->
    <!--<dt>{{list.time}}</dt>-->
    <!--<dd>班级：{{list.class}}</dd>-->
    <!--<dd>校区：{{list.schoolArea}}</dd>-->
    <!--<dd>教室：{{list.schoolArea}}</dd>-->
    <!--<dd>状态：{{list.state}}</dd>-->
    <!--<dd>内容：{{list.content}}</dd>-->
    <!--</dl>-->
    <van-cell-group>
      <van-cell title="上课人数" v-bind:value="data.realPeopleCount+'/'+data.willPeopleCount" isLink />
    </van-cell-group>
  </div>
  <div class="empty"  v-if="!allDatas">暂无上课班级</div>
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
      totalCount:0,
      calendar:{
        //显示小黄点的日期，需传入一个格式为2018-11-10数组
        detialDate:['2018-11-10','2018-11-17'],
        date:'',
        showClassDetil:false,
        detialCurrentDate:'',
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
    this.findMyClassRecordWithDay();
    this.findMyClassRecordWithMonth();
  },
  methods: {
    //findMyClassRecord
    subStr(time) {
      return time.substring(10, 20);
    },
    subStrClassName(name) {
      return name.substring(0, 8) + "...";
    },
    //更新newDate
    updateDate(newDate){
      this.findMyClassRecordWithDay(newDate);
    },
    //获取排课详细
     getMyClassRecord(id) {
      let _self = this;
      let params = new URLSearchParams();
      params.append("timeable_id",id);

      api.getMyClassRecord(params).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
          console.log(res.data.data);
        }
      });
    },
    findMyClassRecordWithMonth(newDate) {
      let _self = this;
      let params = new URLSearchParams();
      let beginDate=null;
      let endDate=null;
      if(!newDate){
        let now=new Date();
         beginDate=now.format("yyyy-MM-dd");
         endDate=now.format("yyyy-MM-dd");
      }else{
        beginDate=newDate;
        endDate=newDate;
      }

      params.append("current_day",beginDate);
      api.findMyClassRecordWithMonth(params).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
           let allDatas = res.data.data;
           this.calendar.detialDate=allDatas;
          //  _self.allDatas = allDatas;
          console.log(allDatas);
        }
      });
    },
    findMyClassRecordWithDay(newDate) {
      let _self = this;
      let params = new URLSearchParams();
      let beginDate=null;
      let endDate=null;
      if(!newDate){
        let now=new Date();
         beginDate=now.format("yyyy-MM-dd");
         endDate=now.format("yyyy-MM-dd");
      }else{
        beginDate=newDate;
        endDate=newDate;
      }
      // params.append("begin_date", "2018-10-12");
      params.append("current_day",beginDate);
      // params.append("begin_date", beginDate);
      // params.append("end_date", endDate);
      // params.append("page", 1);
      // params.append("rows", 10);
      api.findMyClassRecordWithDay(params).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
           let allDatas = res.data.data;
          //  let totalCount=res.data.data;
          //  _self.totalCount=totalCount;
           _self.allDatas = allDatas;
          console.log(allDatas);
        }
      });
    }
  },
  computed: {

  },
  watch:{
    'calendar.date':function (n,o) {
      this.$toast(n)
      if(this.calendar.detialCurrentDate ===n  && this.calendar.detialDate.includes(n)){
        this.calendar.showClassDetil = true
      }else if(!this.calendar.detialDate.includes(n)){
        this.calendar.showClassDetil = false
      }

    }
  }
};
</script>
<style lang="less">
.my-timetable {
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
.detial-list{
  width: 700px;
  padding: 20px 0;
  margin: 0 auto 20px;
  background: #fff;
dt{
  padding-left: 20px;
  line-height: 60px;
}
dd{
  padding-left: 20px;
  line-height: 40px;
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
