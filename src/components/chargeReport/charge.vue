<template>
<div class="charge">
  <div class="charge-top">
    <div class="charge-top-tab">
      <calendar-packing></calendar-packing>
    </div>
    <div class="charge-top-right" @click="showPop">
      选择列<van-icon name="wap-nav" />
    </div>
  </div>
  <div class="charge-table"></div>
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
<choose-column :columnData="popData.columnData" :filterShow.sync="popData.filterShow" :selectId.sync="popData.selectId"></choose-column>
</div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
import ChooseColumn from '../general/chooseColumn'

export default {
  components: {
    CalendarPacking,
    ChooseColumn

  },
  data () {
    return {
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
      popData:{
        filterShow:false,
        selectId:0, //columnData 数组元素的下标
        columnData: [
          {
            text:'新增',
            isSelect:true,
            id:0

          },
          {
            text:'续费',
            isSelect:false,
            id:1

          },
          {
            text:'扩科',
            isSelect:false,
            id:2

          },
          {
            text:'转介绍',
            isSelect:false,
            id:3
          },
          {
            text:'连报',
            isSelect:false,
            id:4
          },
          {
            text:'多期',
            isSelect:false,
            id:6
          }
          ,
          {
            text:'补欠交',
            isSelect:false,
            id:6
          }
          ,
          {
            text:'销售',
            isSelect:false,
            id:7
          }
          ,
          {
            text:'预存',
            isSelect:false,
            id:8
          }
          ,
          {
            text:'从他人结转',
            isSelect:false,
            id:8
          }
        ]
      }

    }
  },
  methods: {
    showPop (){
      this.popData.filterShow = true
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
    },
    'popData.selectId':function (n,o) {
      //显示选中的元素的id 数组元素的下标
      this.$toast(n)
    }
  }
}
</script>
<style lang="less">
.charge{
  .charge-top{
    padding-top: 10px;
    height: 82px;
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
       top: 5px;
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
.filter {
  width: 78%;
  height: 100%;
}

}

</style>
