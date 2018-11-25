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
<div class="charge-table">
  <table class="table-top">
  <tr class="title">
    <th class="w300">校区</th>
    <th class="w150">人次数 <icon name="sort" scale="2"/></th>
    <th class="w100">金额 <icon name="sort" scale="2"/></th>
    <th class="w150">电子钱包 <icon name="sort" scale="2"/></th>
  </tr>
  <tr>
    <td class="w300">潮人部落</td>
    <td class="w150">3</td>
    <td class="w100">1000</td>
    <td class="w150">100</td>
  </tr>
  </table>
  <table class="table-bottom">
    <tr>
      <td class="w300">合计</td>
      <td class="w150 red">0</td>
      <td class="w100 red">0.00</td>
      <td class="w150 red">0.00</td>
    </tr>
  </table>
</div>
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
  width:100%;
  .w300{
    width: 330px;
    padding-left: 30px;
  }
  .w150{
    width: 150px;
  }
  .w100{
    width: 120px;
  }
.table-top{
th{
  border-bottom:2px #d2d5da solid ;
  border-top:15px #eef1f6 solid ;
  background: #fff;
  line-height: 80px;
}
td{
  background: #fff;
  line-height: 80px;
}
.fa-icon{
  position: relative;
  top: 6px;
  color: #d4d1d1;
}

    }
.table-bottom{
  position: fixed;
  bottom: 0;
  td{
    border-top:2px #d2d5da solid ;
    background: #fff;
    line-height: 80px;
  }
  .red{
    color: #fb6555;
  }
}
  }
.filter{
  width: 78%;
  height: 100%;
}
}

</style>
