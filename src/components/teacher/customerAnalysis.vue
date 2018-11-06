<template>
  <div class="customer-analysis">
    <van-tabs type="card" v-model="active">
      <van-tab title="招生来源">
       <tab-one></tab-one>
      </van-tab>
      <van-tab title="意向级别">
        <tab-two></tab-two>
      </van-tab>
    <van-tab title="销售漏斗">
      <tab-three></tab-three>
    </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import BottomBtn from '../general/bottomBtn'
import TabOne from './customerAnalysisTab1'
import TabTwo from './customerAnalysisTab2'
import TabThree from './customerAnalysisTab3'
export default {
  components: {
    BottomBtn,
    TabOne,
    TabTwo,
    TabThree
  },
  data () {
    return {
      active: 0,
      buttonData1: {
        text: '查看详情',
        url: '/teacher/enrollmentStatistics'
      },
      buttonData2: {
        text: '查看详情',
        url: '/teacher/customerContrast'
      }
    }
  },
  mounted () {
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    }
  }
}
</script>
<style lang="less">
  .customer-analysis{
  .class-tab{
    background: #fff;
    position: relative;
    height: 83px;
    border-top:1px #000 solid ;
    padding:10px 20px;
  .van-cell{
    font-size: 26px;
  }
  .van-cell__left-icon{
    font-size: 26px;
    top:15px;
    margin-right: 10px;
  }
  .van-search__action{
    font-size: 26px;
    background: #eff1f6;
    position: relative;
    left:-32px;
    border-radius: 35px;
    padding: 16px 23px;
  }
  .van-search{
    width: 606px;
  }
  .van-search .van-cell{
    border: 1px #eff1f6 solid;
    border-right:none;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    padding: 0px 10px;
    line-height: 54px;
  }
  .operation{
    position: absolute;
    right: 20px;
    top: 15px;
    padding: 10px 23px;
    font-size: 26px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 6px 5px 0 0;
  }
  }
  .van-tab{
    font-size: 26px;
  }
  .van-tabs--card{
    padding-top: 75px;
  }
  .van-tabs__nav--card .van-tab.van-tab--active{
    background-color: #4286ed;
    color: #fff;
  }
  .van-tabs--card .van-tabs__wrap{
    height: 105px;
  }
  .van-tabs__content{
    padding-top: 20px;
  }
  .van-tabs__nav--card{
    border: 1px #4286ed solid;
    height: 56px;
  }
  .van-tabs__nav--card .van-tab{
    border-right:1px #4286ed solid ;
    line-height: 56px;
    color: #4286ed;
  }
  .van-tabs--card .van-tabs__wrap{
    padding: 20px;
    background: #fff;
  }
  }
</style>
