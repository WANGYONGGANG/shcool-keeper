<template>
<div class="charge">
  <div class="charge-top">
    <div class="charge-top-tab">
      <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
    </div>
    <div class="charge-top-right">
      选择列<van-icon name="wap-nav" />
    </div>
  </div>
  <div class="charge-table"></div>
    <template>
      <div>
        <v-table
          :width="1100"
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
  <commented-pop></commented-pop>
</div>
</template>
<script>
import CommentedPop from '../popup/commentedPop'
export default {
  components: {
    CommentedPop
  },
  data () {
    return {
      tableData: [
        {"name":"潮人部落","shishoujiner":"0.00","zhuanjieshao":"0.00","lianbao":"0.00","yucun":"0.00","zhuanjie":"0.00","duoqi":'0.00',"xufei":'0.00',"kuoke":'0.00',"xinzeng":'0.00',"buqianjiao":'0.00',"xiaoshou":'0.00'},
        ],
      columns: [
        {field: 'name', title:'校区', width: 200, titleAlign: 'center',columnAlign:'center', isFrozen: true},
        {field: 'shishoujiner', title: '实收金额', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'zhuanjieshao', title: '转介绍', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'lianbao', title: '连报', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'yucun', title: '预存', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'zhuanjie', title: '从他人转接的费用', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'duoqi', title: '多期', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'xufei', title: '续费', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'kuoke', title: '扩科', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'xinzeng', title: '新增', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'buqianjiao', title: '补欠交', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'xiaoshou', title: '销售', width: 150, titleAlign: 'center',columnAlign:'center'}

      ]
    }
  },
  methods: {
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
  },
  created(){

  }


}
</script>
<style lang="less">
.charge{
  .charge-top{
    padding-top: 10px;
    height: 76px;
    background: #fff;
    .charge-top-tab{
      float: left;
      width: 500px;
      margin-bottom: 10px;
      padding-left:20px;
    .tab-radius{
      height: 53px;
      display: inline-block;
      padding: 0px 30px;
      font-size: 24px;
      line-height: 55px;
      border-radius: 50px;
      border: 1px #eff1f6 solid;
      margin: 8px 10px 0;
    }
    .arrow-down .van-icon{
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
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

}

</style>
