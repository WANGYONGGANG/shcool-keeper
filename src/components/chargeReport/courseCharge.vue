<template>
<div class="course-charge">
  <tolltrend-chart></tolltrend-chart>
  <div class="charge-top fn-clear">
    <div class="charge-top-tab">
      <calendar-packing></calendar-packing>
    </div>
    <div class="charge-top-right">
      <span @click="showFilter">筛选<van-icon name="wap-nav" /></span>
    </div>
  </div>
  <van-cell-group>
    <van-cell title="收费类型" value="课程收费汇总" arrow-direction="down" is-link  @click="showSortPop"/>
  </van-cell-group>

    <template>
      <div>
        <v-table
          :width="750"
          :columns="columns"
          :table-data="tableData"
          :title-row-height="120"
          :row-height="100"
          even-bg-color="#f4f4f4"
          row-hover-color="#eee"
          row-click-color="#edf7ff"
        ></v-table>
      </div>
    </template>
<chart-filter :filterShow1.sync="filterShow"></chart-filter>
<sort-pop :title="popData.title" :items.sync="popData.items" :isShow.sync="popData.isShow" :selectId.sync="popData.selectId" ></sort-pop>

</div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
import tolltrendChart from '../general/tolltrendChart'
import ChartFilter from '../general/chartFilter'
import sortPop from '../popup/sortPopPublish'
export default {
  components: {
    CalendarPacking,
    tolltrendChart,
    ChartFilter,
    sortPop
  },
  data () {
    return {
      popData:{
        isShow:false,
        selectId:0,
        items: [
          {
            text:'课程收费汇总',
            isSelect:true,
            id:0

          },
          {
            text:'新增',
            isSelect:false,
            id:1

          },
          {
            text:'续费',
            isSelect:false,
            id:2

          },
          {
            text:'扩科',
            isSelect:false,
            id:3

          }
        ]
      },
      tableData: [
        {'name': '潮人部落', 'shishoujiner': '0.00', 'zhuanjieshao': '0.00', 'lianbao': '0.00', 'yucun': '0.00', 'zhuanjie': '0.00', 'duoqi': '0.00', 'vxufei': '0.00', 'kuoke': '0.00', 'xinzeng': '0.00', 'buqianjiao': '0.00', 'xiaoshou': '0.00'}
      ],
      columns: [
        {field: 'name', title: '校区', width: 200, titleAlign: 'center', columnAlign: 'center', isFrozen: true},
        {field: 'shishoujiner', title: '实收金额', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'zhuanjieshao', title: '转介绍', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'lianbao', title: '连报', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'yucun', title: '预存', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'zhuanjie', title: '从他人转接的费用', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'duoqi', title: '多期', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'xufei', title: '续费', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'kuoke', title: '扩科', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'xinzeng', title: '新增', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'buqianjiao', title: '补欠交', width: 150, titleAlign: 'center', columnAlign: 'center'},
        {field: 'xiaoshou', title: '销售', width: 150, titleAlign: 'center', columnAlign: 'center'}
      ],
      filterShow:false
    }
  },
  methods: {
    showFilter (){
      this.filterShow=true
    },
    showSortPop(){
      this.filterShow=false
      this.popData.isShow=true
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
        this.$toast(val)
      }
    }
  }
}
</script>
<style lang="less">
.course-charge{
.charge-top{
  padding-top: 10px;
  height: 110px;
  overflow: hidden;
  background: #fff;
.charge-top-tab{
  float: left;
  width: 542px;
  margin-bottom: 10px;
.commented-tab{
  padding-top: 0px;
}
}
.charge-top-right{
  float: right;
  line-height: 40px;
  padding-top: 15px;
  padding-right: 15px;
.van-icon{
  margin-left: 10px;
  position: relative;
  top: 3px;
}
}
}
  .charge-table{
    overflow: hidden;
    background:#fff;
    .charge-table-left{
      width: 200px;
      float: left;
    }
    .charge-table-right{
      width: 500px;
      float: left;
    }
  }
.filter{
  width: 78%;
  height: 100%;
}
}

</style>
