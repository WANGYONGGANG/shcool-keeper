<template>
  <div class="tab3">
    <div class="class-tab">
      <calendar-packing></calendar-packing>
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
    this.drawLine()
        this.refreshDepartment();
        this.ReportCustomerAnalysisForState();
  },
  methods: {
    changeTab (index, title) {
      if (title === '意向级别') {
        this.drawLine()
      }
    },
          //销售漏斗
    ReportCustomerAnalysisForState: function(campus_ids) {
      let params ={};      
      params.begin_date="2018-07-01";
      params.campus_ids="[8,9,10]";
      params.end_date="2018-11-30";
      let _self = this;
      api.ReportCustomerAnalysisForState(params)
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
    drawLine () {
      let chart02 = this.$echarts.init(document.getElementById('chart02'))
      chart02.setOption({
        title: {
          text: '收费金额（元）',
          textStyle: {
            color: '#fff',
            fontSize: 26
          },
          padding: [10, 0, 0, 30]
        },
        xAxis: {
          boundaryGap: false,
          data: ['09', '10', '11', '12', '13', '14', '15'],
          axisLabel: {
            fontSize: 24 // 刻度标签文字的大小
          },
          axisLine: {
            lineStyle: { // x轴颜色和字体大小
              color: '#fff',
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            fontSize: 24,
            label: {
              show: true
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '收费金额',
          type: 'line',
          smooth: true,
          data: [100, 1000, 0, 10, 0, 0, 0],
          label: {
            color: '#fff',
            fontSize: 24,
            normal: {
              show: true,
              position: 'top'
            }
          },
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: { // 折线拐点标志的样式。
            borderWidth: 3,
            borderColor: '#6eadf5',
            color: '#6eadf5'
          },
          lineStyle: {
            color: '#fff'
          }
        }]
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
       this.reportTransformationStatistics(this.schoolPartList[n.index].id);
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
