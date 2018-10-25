<template>
  <div class="intentional-customers-detial">
    <div class="detial-tit">基本信息</div>
    <van-cell-group>
      <van-cell title="姓名" value="Cindy王" />
      <van-cell title="录入时间" value="2018-06-30 12:24:27" />
      <van-cell title="性别" value="男" />
      <van-cell title="公立学校" value="育才" />
      <van-cell title="手机号码" value="13126782345" />
    </van-cell-group>
    <div class="detial-tit">招生信息</div>
    <van-cell-group>
      <van-cell title="招生来源" value="退学转入，预约试听" is-link />
      <van-cell title="所属校区" value="潮人部落" />
      <van-cell title="主责任人" value="测试员" />
      <van-cell title="意向级别">
      <van-rate :count="star" v-model="star" readonly="true" />
      </van-cell>
      <van-cell title="客户状态" value="转化成功" />
      <van-cell title="预约试听时间" value="星期四，星期六" />
      <van-cell title="意向课程" value="2018冬季班初一拓..." is-link />
    </van-cell-group>
    <div class="bottom-btn fn-clear">
      <span class="bottom-btn-item03 fn-right" @click="goTo(urls.addCustomers)">编辑</span>
      <span class="bottom-btn-item02 fn-right" @click="goTo(urls.customerCommunicationRecord)">沟通记录</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      star: 4,
      urls: {
        customerCommunicationRecord: '/teacher/customerCommunicationRecord',
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
  .intentional-customers-detial{
  .detial-tit{
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    padding-left: 30px;
  }
  .van-cell{
    border-bottom: 1px #e0e5ed solid;
  }
  .bottom-btn{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    padding-top: 15px;
    height: 85px;
  span{
    display: inline-block;
    line-height: 45px;
    padding: 0px 40px;
    text-align: center;
    border-radius: 45px;
    font-size: 28px;
    margin-left: 20px;
  }
  .bottom-btn-item02{
    color: #4286ed;
    border: 1px #4286ed solid;
  }
  .bottom-btn-item03{
    color: #fff;
    background: #4286ed;
    border: 1px #4286ed solid;
    margin-right: 20px;
  }
  }
  }
</style>
