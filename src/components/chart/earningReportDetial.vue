<template>
  <div class="earning-report-detial">
    <div class="charge-top">
      <div class="charge-top-tab">
        <calendar-packing></calendar-packing>
      </div>
    </div>
    <div class="detial-ele fn-clear">
     <dl class="ele-l"><dt>1</dt><dd><span>班级数</span></dd></dl>
      <dl class="ele-r"><dt>0.00</dt><dd><span>总评分</span></dd></dl>
    </div>
    <ul class="detial-list">
      <li class="list-item01">2018冬季班初一拓展班集体班 2班 1人</li>
      <li class="list-item02">已上课次：<i class="blue">1次</i>（共1次）<span class="right">评分:<i class="orange">0.00</i></span></li>
      <li class="list-item03">已上课消：300.00元（1.00次）</li>
    </ul>
  </div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking
  },
  data () {
    return{

    }
  },
  methods: {

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
  .earning-report-detial{
  .charge-top{
    padding-top: 10px;
    height: 86px;
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
    padding-right: 30px;
  .van-icon{
    margin-left: 10px;
    position: relative;
    top: 5px;
  }
  }
  }

.detial-ele{
  background: #fff;
  padding-bottom: 20px;
  width: 100%;
  dl{
    width: 48%;
    text-align: center;
    dt{
      font-size: 40px;
      padding: 10px 0;
    }
    dd{
      font-size: 22px;
      span{
        color: #333;
      }
    }
  }
  .ele-l{
    color: #4286ed;
    float: left;
    border-right:1px #dcd5d5  solid ;
  }
  .ele-r{
    color: #fc9004;
    float: right;
  }
}
  .detial-list{
    margin-top:10px ;
    padding: 20px;
    background: #fff;
    font-size: 24px;
    color: #5f5e5e ;
    line-height: 40px;
    .list-item01{
      color: #000;
    }
    .list-item02{
      .right{
        float: right;
        height: 40px;
      }
      i{
        font-style: normal;
        padding: 0 10px;
      }
      .blue{
        color: #4286ed;
      }
      .orange{
        color: #fc9004;
      }
    }
  }

  }

</style>
