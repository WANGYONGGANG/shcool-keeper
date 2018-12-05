<template>
  <div class="tab1">
    <div class="card-tit">
      <calendar-packing v-on:updateDate="updateDate"  ref="CalendarPacking"></calendar-packing>
      <span class="fuzeren"><input type="checkbox"  v-model="isPrincipal"  value="true"   v-bind:checked="checkedIsPrincipal" />主负责人</span>
    </div>
        <van-cell-group class="card-list-item">
      <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
      </van-cell-group>
    <van-cell-group class="card-list-item" v-for="campusObj in campusObjList ">
      <van-cell v-bind:title="campusObj.campusName"  v-bind:value="'完成率'+campusObj.completeness"   class="line65 tuition" />
      <van-cell value="新增客户：0人"   v-bind:title="'意向客户'+campusObj.intentionClientCount+'人'"   />
      <van-cell v-bind:value="'已经沟通'+campusObj.talkedCount+'人'"   v-bind:title="'拟沟通'+campusObj.willTalkCount+'人'"  />
      <van-cell  v-bind:value="'有效沟通'+campusObj.communication+'次'"   v-bind:title="'无效沟通'+campusObj.ineffectiveCommunication+'次'" />
    </van-cell-group>
    <!-- <van-cell-group class="card-list-item">
      <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
      <van-cell title="潮人部落e2140" value="完成率：0.00%" class="line65 tuition" />
      <van-cell title="意向客户：1人" value="新增客户：0人" />
      <van-cell title="拟沟通：0人" value="已经沟通：0人" />
      <van-cell title="有效沟通：0次" value="无效沟通：0次" />
    </van-cell-group> -->
    <select-pop :title="sortData.title" :lists="sortData.lists" :isShow.sync="sortData.isShow" :selectItem.sync="sortData.selectItem"></select-pop>
  </div>
</template>
<script>
import { api } from "../../../../static/js/request-api/request-api.js";
import SelectPop from '../../popup/bottomSelectPop'
import CalendarPacking from '../../general/calendarPacking'
export default {
  components: {
    SelectPop,
    CalendarPacking
  },
  // props: ["schoolPartList"],
  data () {
  return {
  schoolPartList:null,
  begin_date:"2018-07-01",
  end_date:"2018-11-30",
  campus_id:null,
  campusObjList:[{completeness:0,intentionClientCount:0,talkedCount:0,willTalkCount:0,communication:0,ineffectiveCommunication:0}],
  isPrincipal:false,
  sortData:{
        title:'排序方式',
        lists:['选择校区'],
        isShow:false,
        selectedId:null,
        selectItem:{item:""}
      },
    }
  },
  mounted:function(){
    this.refreshDepartment();
  
  },
  methods: {
    initDateCampus(){
      let schoolPartList=this.schoolPartList;
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
       this.sortData.selectedId=schoolPartList[0].id;
       this.sortData.selectItem.item=schoolPartList[0].name;
       this.campus_id=schoolPartList[0].id;
       this.reportTalkStatistics(); 
    },
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
      this.reportTalkStatistics();
    },
    sortPopShow(param){
         this.sortData.isShow=true;
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
                  _self.initDateCampus();
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
    //主要负责人选择
    checkedIsPrincipal(){
       this.reportTalkStatistics();
    },
     //沟通统计
    reportTalkStatistics: function() {
      let params ={};
      params.begin_date =this.begin_date;
      // params.campus_id=10;
       params.campus_id=this.campus_id;
      params.end_date=this.end_date;
      // params.begin_date ="2018-07-01";
      // params.end_date="2018-11-30";   
      params.primary_owner=this.isPrincipal;
      let _self = this;
      api.reportTalkStatistics(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  if(res.data.data){
                     this.campusObjList=res.data.data;
                  }
                }
          } else {
            let params = { msg: "沟通统计" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "沟通统计错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
     'sortData.selectItem':function (n,o) {
       this.$toast(n.item);
       this.campus_id=this.schoolPartList[n.index-1].id;
       this.reportTalkStatistics();
    },
    isPrincipal:function(){
      this.reportTalkStatistics();
    },
    item :{
      //日期快速切换值
      handler(val){
        this.getDate(val);
        this.$toast(val)
        this.begin_date=this.date1;
        this.end_date=this.date2;
        this.reportTalkStatistics();
        this.$refs.CalendarPacking.setCheckedDateValue(this.begin_date,this.end_date);
      }
    }
  }
}
</script>
<style lang="less">
  .tab1{
  }
</style>
