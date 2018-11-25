<template>
<div class="charge">
  <tolltrend-chart></tolltrend-chart>
  <div class="charge-top">
    <div class="charge-top-tab">
      <calendar-packing></calendar-packing>
    </div>
    <div class="charge-top-right"  @click="showFilter">
      筛选<van-icon name="wap-nav" />
    </div>
  </div>
  <div class="charge-table">
    <table class="table-top">
      <tr class="title">
        <th class="w300">校区</th>
        <th class="w150">小时 <icon name="sort" scale="2"/></th>
        <th class="w100">次 <icon name="sort" scale="2"/></th>
        <th class="w150">课消 <icon name="sort" scale="2"/></th>
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
  <chart-filter :filterShow1.sync="filterShow1"></chart-filter>

</div>
</template>
<script>
  import CalendarPacking from '../general/calendarPacking'
import tolltrendChart from '../general/tolltrendChart'
  import ChartFilter from '../general/chartFilter'

  export default {
  components: {
    CalendarPacking,
    tolltrendChart,
    ChartFilter

  },
  data () {
    return {
      filterShow1:false
    }
  },
  mounted () {
  },
  methods: {
    showFilter (){
      this.filterShow1=true
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
.charge{
  .charge-top{
    padding-top: 10px;
    height: 88px;
    background: #fff;
.charge-top-tab{
  float: left;
  width: 542px;
  margin-bottom: 10px;
.commented-tab{
  padding-top: 0px;
}}
   .charge-top-right{
     float: right;
     line-height: 40px;
     padding-top: 15px;
     padding-right: 15px;
     .van-icon{
       margin-left: 10px;
       position: relative;
       top: 5px;
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
  width:100%;
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
}
}

</style>
