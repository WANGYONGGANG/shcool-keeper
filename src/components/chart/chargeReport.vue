<template>
<div class="charge-report">
  <div class="charge-report-title">收费报表</div>
  <van-cell-group>
    <van-cell title="收费汇总表" icon="edit-data" is-link to="/chargeReport/charge" />
    <van-cell title="退费汇总表" icon="records" is-link  to="/chargeReport/Refund" />
    <van-cell title="课程收费汇总" icon="sign" is-link to="/chargeReport/courseCharge" />
    <van-cell title="净收汇总表" icon="sign" is-link to="/chargeReport/netIncome"  />
  </van-cell-group>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  .charge-report{
  .charge-report-title{
    font-size: 30px;
    line-height: 120px;
    padding-left: 30px;
  }
  .van-cell-group{
    background: #eef1f6
  }
  .van-cell{
    font-size: 30px;
    line-height: 100px;
  }
  .van-cell__left-icon{
    font-size: 45px;
    line-height: 100px;
    margin:0 25px 0 15px;
    color: #4983f7;
  }
  .van-cell__right-icon{
    line-height: 100px;
    font-size: 20px;
  }
  }

</style>
