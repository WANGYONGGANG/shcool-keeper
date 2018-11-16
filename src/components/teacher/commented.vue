<template>
  <div class="commented">
    <calendar-packing ref="calendar"></calendar-packing>
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
        className:'17暑假初二英语同步班_补课班级',
        courseName:'17暑假初二英语同',
        classPleanDate:'09:00-11:00',
        evaluationCount:0,
        recruitStudentsCount:2

      }],
      date1: "",
      date: "",
    }
  },
  mounted () {
    this.date1 = this.$refs.calendar.$el.innerText.substr(0, 10); //2018-11-01
    this.date2 = this.$refs.calendar.$el.innerText.substr(11); //2018-11-31
    this.findMyClassRecord(this.date1,this.date2);
  },
  methods: {
    //findMyClassRecord获取当前登录人的排课计划
    findMyClassRecord (date1, date2) {
      let _self = this;
      let param = new URLSearchParams();

      param.append('begin_date' , date1);//'2018-10-01'
      param.append('end_date' , date2);//'2018-10-31'
      param.append('pag ' , 1);
      param.append('rows' , 10);

      api.findMyClassRecord(param).then( res => {
        if( res.data.code == 1 ){
          console.log(res.data);
          _self.Alldatas = res.data.data.rows;
          console.log(_self.Alldatas);
          }
      } );
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (param) {
      this.$router.push({path: '/teacher/commentedList',query:{id:param}})
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
      console.log(this.date1);
      console.log(this.date2);
    }
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
        console.log(val);
        this.getDate(val);
        this.findMyClassRecord(this.date1, this.date2);
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
