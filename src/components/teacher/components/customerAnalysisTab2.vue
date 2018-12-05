<template>
  <div class="tab2">
    <div class="class-tab">
      <calendar-packing v-on:updateDate=updateDate  v-bind:begin_date="begin_date" 
       v-bind:end_date="end_date" v-if="showCalendar"   ref="CalendarPacking" >
      </calendar-packing>
    </div>
        <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
    <div class="chart01">
      <div id="chart01"></div>
      <div class="chart01-tit">意向级别</div>
    </div>
    <div class="analysis-table">
      <table border="0" width="750" class="list-table">
        <tr>
          <th width="50%">意向级别</th>
          <th width="30%">客户数量</th>
          <th width="20%">比例</th>
        </tr>
        <tr v-for="resource in  resourceList">
          <td class="name"><van-rate :count="resource.WillLevel" v-model="star"  readonly=true /></td>
          <td>{{resource.sum}}</td>
          <td>{{resource.Rate}}%</td>
        </tr>
        <!-- <tr>
          <td class="name">未填写意向级别</td>
          <td>1</td>
          <td>16.67%</td>
        </tr>
        <tr>
          <td class="name"><van-rate :count="star" v-model="star"  readonly=true /></td>
          <td>4</td>
          <td>16.67%</td>
        </tr> -->
      </table>
    </div>
        <select-pop :title="sortData.title" :lists="sortData.lists" :isShow.sync="sortData.isShow" :selectItem.sync="sortData.selectItem"></select-pop>
  </div>
</template>
<script>
import { api } from "../../../../static/js/request-api/request-api.js";
import CalendarPacking from '../../general/calendarPacking'
import BottomBtn from '../../general/bottomBtn'
import SelectPop from '../../popup/bottomSelectPop'
export default {
  components: {
    BottomBtn,
    SelectPop,
    CalendarPacking
  },
  data () {
    return {
      star: 4,
      buttonData1: {
        text: '查看详情',
        url: '/teacher/enrollmentStatistics'
      },
      showCalendar:false,
      // begin_date:"2018-07-01",
      // end_date:"2018-11-30",
        begin_date:null,
      end_date:null,
      campus_ids:null,
      resourceList:[],
        sortData:{
        title:'排序方式',
        lists:['选择校区'],
        isShow:false,
        selectItem:''
      },
        schoolPartList:null,
      buttonData2: {
        text: '查看详情',
        url: '/teacher/customerContrast'
      }
    }
  },
  mounted () {
    this.initDateWeek();
    this.refreshDepartment();
    this.ReportCustomerAnalysisForWillLevel();
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
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
    },
     updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.ReportCustomerAnalysisForState();
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
    updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.ReportCustomerAnalysisForWillLevel();
    },
    initDateWeek:function(){
          this.begin_date = this.getAllDateFromNow(0);
          this.end_date = this.getWeekEndDate(0);
          this.showCalendar=true;
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
    //初始化数据
    initDate(){
      let schoolPartList=this.schoolPartList;
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
       this.sortData.selectItem.item=schoolPartList[0].name;
    },

  //查询意向级别
    ReportCustomerAnalysisForWillLevel: function() {
      let params ={};      
      params.begin_date=this.begin_date;
      if(this.campus_ids){
        this.campus_ids="["+this.campus_ids+"]";
      }
      params.campus_ids=this.campus_ids;
      params.end_date=this.end_date;
      let _self = this;
      api.ReportCustomerAnalysisForWillLevel(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                 let resourceList=this.resourceList=res.data.data;
                 let newResourceList=[];
                  for(let i=0;i<resourceList.length;i++){
                    let resourceObj={};
                    resourceObj.value=resourceList[i].Rate;
                    resourceObj.name=resourceList[i].name;
                    newResourceList.push(resourceObj);
                  }
                  this.drawLine(newResourceList);
                }
          } else {
            let params = { msg: "查询意向级别" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "查询意向级别" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
   //查询所有校区
    refreshDepartment: function() {
      let params ={};      
      let _self = this;
      api.refreshDepartment(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.schoolPartList=res.data.data;
                  _self.initDate();
                }
          } else {
            let params = { msg: "查询所有校区" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "查询所有校区" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    sortPopShow(param){
         this.sortData.isShow=true;
    },
    drawLine (newResourceList) {
      let chart01 = this.$echarts.init(document.getElementById('chart01'))
      chart01.setOption({
         tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
        series: [
          {
            name: '满班率',
            type: 'pie',
            radius: ['50%', '70%'],
            hoverAnimation: false,
            legendHoverLink: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data:newResourceList
          }
        ]
      })
    }
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
       'sortData.selectItem':function (n,o) {
       this.$toast(n.item);
       if(n.index==0){
           this.ReportCustomerAnalysisForWillLevel(null);
       }else{
              this.campus_ids=this.schoolPartList[n.index-1].id;
              this.ReportCustomerAnalysisForWillLevel();
       }
 
    },
    item :{
      //日期快速切换值
      handler(val){
          this.getDate(val);
          this.$toast(val);
          this.begin_date=this.date1;
          this.end_date=this.date2;
          this.ReportCustomerAnalysisForWillLevel();
          this.$refs.CalendarPacking.setCheckedDateValue(this.begin_date,this.end_date);
      }
    }
  }
}
</script>
<style lang="less">
  .tab2{
  .chart01{
    width: 100%;
    background: #fff;
    height: 300px;
    font-size: 20px;
    position: relative;
    text-align: center;
    .chart01-tit{
      position: absolute;
      top: 130px;
      left: 323px;
      font-size: 24px;
    }
  }
  #chart01{
    width: 350px;
    height: 300px;
    margin: 0 auto;
  }
  .analysis-table{
    width: 100%;
    background: #fff;
    margin-top: 20px;
  th{
    color: #838383;
    height: 80px;
    text-align: left;
    padding: 15px;
    border-bottom: 1px #f1f1f1 solid;
  }
  td{
    text-align: left;
    padding: 15px;
    font-size: 24px;
    border-bottom: 1px #f1f1f1 solid;
  }
  }
  }
</style>
