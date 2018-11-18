<template>
  <div class="tab3">
    <div class="class-tab">
        <calendar-packing v-on:updateDate=updateDate  v-bind:begin_date="begin_date"  v-bind:end_date="end_date" v-if="showCalendar" ></calendar-packing>
    </div>
       <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
    <div class="chart02">
      <div id="chart02"></div>
    </div>
    <van-cell-group class="card-list-item">
      <van-cell v-bind:title="resource.name" v-bind:value="resource.sum"  v-for="resource in   resourceList" />
      <!-- <van-cell title="原有测试无效资源" value="0" /> -->
      <!-- <van-cell title="原有转化成功" value="0" />
      <van-cell title="原有在线咨询" value="0" />
      <van-cell title="原有上门" value="0" />
      <van-cell title="原有来电咨询" value="0" />
      <van-cell title="原有已上门" value="0" />
      <van-cell title="对培训不感兴趣" value="0" />
      <van-cell title="无效" value="0" />
      <van-cell title="转化成功" value="0" />
      <van-cell title="晚点再报名" value="0" />
      <van-cell title="未上门" value="0" />
      <van-cell title="预约试听" value="0" />
      <van-cell title="有效单" value="0" />
      <van-cell title="已上门" value="0" /> -->
    </van-cell-group>
    <bottom-btn :buttonData="buttonData2"></bottom-btn>
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
      buttonData2: {
        text: '查看详情',
        url: '/teacher/customerContrast'
      },
       begin_date:null,
      end_date:null,
            campus_ids:null,
      showCalendar:false,
        schoolPartList:null,
        resourceList:null,
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
        this.ReportCustomerAnalysisForState();
  },
  methods: {
    changeTab (index, title) {
      if (title === '意向级别') {
        this.drawLine()
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
    //销售漏斗
    ReportCustomerAnalysisForState: function(campus_ids) {
      let params ={};      
      // params.begin_date="2018-07-01";
      // params.campus_ids="[8,9,10]";
      // params.end_date="2018-11-30";
       params.begin_date=this.begin_date;
      if(this.campus_ids){
        this.campus_ids="["+this.campus_ids+"]";
      }
      params.campus_ids=this.campus_ids;
      params.end_date=this.end_date;
      let _self = this;
      api.ReportCustomerAnalysisForState(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let resourceList=this.resourceList=res.data.data;
                  let newResourceNameList=[];
                  let newResourceSumList=[];
                  for(let i=0;i<resourceList.length;i++){
                       newResourceNameList.push(resourceList[i].name);
                       newResourceSumList.push(resourceList[i].sum);
                  }
                  this.drawLine(newResourceNameList,newResourceSumList);
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
      initDate(){
      let schoolPartList=this.schoolPartList;
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
       this.sortData.selectItem.item=schoolPartList[0].name;
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
    goTo (param) {
      this.$router.push({path: param})
    },
    drawLine (newResourceNameList,newResourceSumList) {
      let chart02 = this.$echarts.init(document.getElementById('chart02'))
      chart02.setOption({
         color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data :newResourceNameList,
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '20%',
            data:newResourceSumList 
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
        this.campus_ids=this.schoolPartList[n.index-1].id;
       this.ReportCustomerAnalysisForState();
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
  .tab3{
  .chart02{
    width: 100%;
    height: 400px;
    background: #fff;
    #chart02{
      width: 750px;
      height: 300px;
    }
  }
  }
</style>
