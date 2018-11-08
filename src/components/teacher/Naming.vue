<template>
<div class="naming">
  <div class="naming-tab">
    <div class="naming-tab-l fn-left"><van-icon name="arrow-left" /></div>
    <div class="naming-tab-m fn-left" @click="showCalendar">{{dataStr}}(周{{nowDayOfWeek}})<span class="arrow-down"><van-icon name="arrow" /></span>
    </div>
    <div class="naming-tab-r fn-right"><van-icon name="arrow" /></div>
  </div>
  <div class="naming-table" @click="goTo(urls.studentList,data.id)" v-for="(data,index) in allDatas" :key="index">
    <div class="table-l">
      <div class="class-tit">{{data.className}}</div>
      <div class="class-address"><van-icon name="location" />{{data.classRoomName}}</div>
      <div class="class-details">
        <span class="name"><van-icon name="idcard" />{{subStrClassName(data.courseName)}}</span>
        <span class="time">{{subStr(data.createTime)}}-{{subStr(data.endTime)}}<i class="no-class" v-if="data.stateId==1">未上课</i><i class="no-class" v-if="data.stateId==2">已上课</i></span>
      </div>
    </div>
    <div class="table-r">
     {{data.realPeopleCount}}/{{data.willPeopleCount}}
    </div>
  </div>
  <calendar :date.sync="calendar.date" :isVisible.sync="calendar.isVisible"></calendar>
  <div class="quick-schedule" @click="goTo(urls.chooseClass)">快速排课</div>
</div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import Calendar from '../general/calendar'
export default {
  components: {
    Calendar
  },
  data () {
    return {
      calendar:{
        isVisible:false,
        date:'2018-10-30'
      },
      urls: {
        chooseClass: '/teacher/chooseClass',
        studentList: '/teacher/studentList'
      },
      allDatas : [],
      nowDayOfWeek:null,
      nowMonth:null,
      dataStr:null

    }
  },
 mounted() {
    this.getMyClassRecord();
    this.getNowDateWeek();
  },
  methods: {
    showCalendar () {
      //根据参数显示对应日历弹层
      this.calendar.isVisible = true
    },
    goTo (url,id) {
      this.$router.push({path: url,query: {timeable_id: id}})
    },
     subStr(time) {
      return time.substring(10, 20);
    },
    subStrClassName(name) {
      return name.substring(0, 8) + "...";
    },
    getNowDateWeek(){
     let now = new Date(); //当前日期
     let nowDayOfWeek = now.getDay(); //今天本周的第几天
     let weekArray = new Array("日", "一", "二", "三", "四", "五", "六");
     let nowWeek = weekArray[new Date().getDay()];

     let nowMonth = now.getMonth()+1; //当前月
     this.nowDayOfWeek=nowWeek;
     this.nowMonth=nowMonth;
     this.dataStr=nowMonth+"月"+now.getDate()+"日";
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
  watch:{
    'calendar.date' :function (n,o) {
      this.$toast(n)
    }
  }
}
</script>
<style lang="less">
  .naming{
    padding-bottom: 99px;
    .naming-tab{
      height: 86px;
      background: #fff;
      text-align: center;
      line-height: 86px;
      font-size: 28px;
  .naming-tab-l,.naming-tab-r{
    width: 50px;
    position: relative;
    top: 5px;
  }
      .naming-tab-m{
        width: 650px;
        text-align: center;
      }
  .arrow-down .van-icon{
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin-left: 10px;
    position: relative;
    top: 5px;
  }
    }

  .naming-table{
    background: #fff;
    height: 170px;
  margin-top:10px;
  .table-l{
    float: left;
    padding-left:30px;

  /*width: 550px;*/
  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }
  .class-address{
    font-size: 24px;
    color: #838383;
    line-height: 40px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;
    color: #dc951a;
  }
  }
  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 50px;
  .name{
    padding-right: 15px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;
    color: #dc951a;

  }
  }
  .time{
    .no-class{
      font-size: 15px;
      height: 23px;
      line-height: 23px;
      position: relative;
      top: -3px;
      font-style: normal;
      display: inline-block;
      background: #ebf5ff;
      color: #0a64d9;
      text-align: center;
      padding: 2px 5px;
      border-radius: 20px;
      margin-left: 15px;

    }
  }
  }
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    width: 120px;
    line-height: 170px;
    color: #838383;

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
