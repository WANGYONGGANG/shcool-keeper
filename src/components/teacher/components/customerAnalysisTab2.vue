<template>
  <div class="tab2">
    <div class="class-tab">
      <calendar-packing v-on:updateDate=updateDate  v-bind:begin_date="begin_date"  v-bind:end_date="end_date" v-if="showCalendar" ></calendar-packing>
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
        this.$toast(val)
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
