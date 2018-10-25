<template>
  <div class="customers">
    <dl class="my-customers">
      <dt>我的客户（人）</dt>
      <dd>1</dd>
    </dl>
    <van-cell-group>
      <van-cell title="今日新增客户" is-link value="0" />
      <van-cell title="今日待沟通客户" is-link value="0" />
      <van-cell title="今日已沟通客户" is-link value="0" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="客户管理" is-link to="/teacher/customerManagement" />
      <van-cell title="跟进统计" is-link to="" />
      <van-cell title="客户分析" is-link to="" />
    </van-cell-group>
    <div class="bottom-btn" @click="goTo(urls.addCustomers)">添加客户</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      urls: {
        addCustomers: '/teacher/addCustomers'
      }
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
  .customers{
  .my-customers{
    background: #fff;
    width: 100%;
    padding: 15px 0;
    text-align: center;
    color: #4286ed;
  dt{
    font-size: 40px;
    line-height: 80px;
  }
  dd{
    line-height: 163px;
    font-size: 64px;
  }
  }
  .van-cell-group{
    margin-top: 20px;

  .van-cell{
    font-size: 26px;
    line-height: 60px;
    color: #818181;
    padding: 10px 30px;
  }
  .van-cell__right-icon{
    position: relative;
    top: -2px;
    font-size: 24px;
    margin-left: 15px;
  }
  .van-cell__value{
    color:#4286ed ;
  }
  }
  .bottom-btn{
    height: 95px;
    line-height: 95px;
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    background: #4286ed;
    color: #fff;
    text-align: center;
    font-size: 32px;
  }
  }

</style>
