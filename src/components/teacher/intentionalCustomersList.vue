<template>
  <div class="intentional-customers-list">
    <div class="customers-list-tit"><input class="in-cu-input" type="checkbox">全选</div>
    <div @click="goTo(urls.communicationRecord)">
      <div class="card-list">
        <div class="card-list-l">
          <input class="in-cu-input" type="checkbox"> Cindy王
        </div>
      </div>
    </div>
    <div class="management-list">
      <ul class="management-list-l fn-left">
        <li>主责任人：测试员</li>
        <li>手机号码：13123678649</li>
        <li>客户状态：转化成功</li>
        <li>意项级别：<van-rate :count="star" v-model="star"  readonly="true" /></li>
      </ul>
    </div>
    <div class="bottom-btn">
      <span>删除</span>
      <span>转为正式学员</span>
      <span>取消转化</span>
      <span>修改</span>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      star: 4,
      urls: {
        addCustomers: '/teacher/addCustomers'
      }
    }
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    }
  }
}
</script>
<style lang="less">
  .intentional-customers-list{
  .in-cu-input{
    width: 25px;
    height: 25px;
    border: 1px #4286ed solid;
    border-radius: 2px;
    margin-right: 10px;
    position: relative;
    top: 3px;
    -webkit-appearance: checkbox;
  }
  .customers-list-tit{
    padding-left: 30px;
    height: 60px;
    line-height: 60px;
    background: #fff;
  }
  .card-list{
    background: #fff;
    height:90px;
    line-height:90px;
    padding: 0 30px;
    margin:10px auto 0;
  .card-list-l{
    float: left;
    font-size: 28px;
  }
  }
  .management-list{
    background: #fff;
    padding: 0px 30px 0 74px;
    height: 200px;

  .management-list-l{
    line-height: 45px;
  }
  .van-rate{
    display: inline-block;
  }
  }
  .bottom-btn{
    position: fixed;
    bottom: 0;
    height: 80px;
    padding-top: 20px;
    border-top:1px #e0e5ed solid ;
    width: 100%;
  span{
    display: inline-block;
    line-height: 40px;
    text-align: center;
    font-size: 24px;
    border: 1px #333333 solid;
    border-radius: 40px;
    padding: 0 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
  .border-right{
    width: 374px;
    border-right:1px #838383 solid ;
  }

  }
  }
</style>
