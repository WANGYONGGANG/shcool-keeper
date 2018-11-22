<template>
  <div class="tab1">
    <div class="class-tab">
       <calendar-packing v-on:updateDate="updateDate"  v-bind:begin_date="begin_date"  v-bind:end_date="end_date" v-if="showCalendar" ></calendar-packing>
      <div class="operation">筛选</div>
    </div>
     <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
    <van-cell-group class="card-list-item02"  v-for="resource in  resourceList">
      <van-cell v-bind:title="resource.name" is-link to="/teacher/enrollmentStatistics2">
        <van-progress :percentage="resource.Rate" />
      </van-cell>
    </van-cell-group>
    <van-cell-group class="card-list-item02">
      <van-cell title="默认" is-link to="/teacher/enrollmentStatistics3">
        <van-progress :percentage="50" />
      </van-cell>
    </van-cell-group>
    <bottom-btn :buttonData="buttonData1"></bottom-btn>
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
      buttonData1: {
        text: '查看详情',
        url: '/teacher/enrollmentStatistics'
      },
      begin_date:null,
      end_date:null,
      showCalendar:false,
      resourceList:[],
        schoolPartList:null,
        sortData:{
        title:'排序方式',
        lists:['选择校区'],
        isShow:false,
        selectItem:''
      },
    }
  },
  mounted () {
        this.initDateWeek();
        this.refreshDepartment();
        this.ReportCustomerAnalysisForSourceway();
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    },
    updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.ReportCustomerAnalysisForSourceway();
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
    //查询招生来源
    ReportCustomerAnalysisForSourceway: function() {
      let params ={};      
       params.begin_date=this.begin_date;
      if(this.campus_ids){
        this.campus_ids="["+this.campus_ids+"]";
      }
      params.campus_ids=this.campus_ids;
      params.end_date=this.end_date;
      // params.campus_ids="[8,9,10]";
      //   params.begin_date="2018-07-01";
      // params.end_date="2018-11-30";
      params.source_type_id=1;

      let _self = this;
      api.ReportCustomerAnalysisForSourceway(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  this.resourceList=res.data.data;
                  console.log(res.data.data);
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
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
       'sortData.selectItem':function (n,o) {
       this.$toast(n.item);
        this.campus_ids=this.schoolPartList[n.index-1].id;
       this.ReportCustomerAnalysisForSourceway();
    },
    item :{
      //日期快速切换值
      handler(val){
        this.$toast(val)
      }
    }
  }
}
</script>
<style lang="less">
  .tab1{
  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
   .line65{
     line-height: 65px;
   }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  .card-list-item02{
  .van-cell{
    font-size: 24px;
    line-height: 65px;
    color:#838383;
    padding: 10px 29px;
  }
.van-progress{
  top:32px;
}
  }
  }
</style>
