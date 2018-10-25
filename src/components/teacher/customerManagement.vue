<template>
  <div class="customer-management">
    <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="姓名／电话／公立学校" background="#fff"  show-action v-model="value">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="operation">筛选</div>
      <div class="operation">排序</div>
    </div>
    <div @click="goTo(urls.customerCommunicationRecord)">
      <div class="card-list">
        <div class="card-list-l">
          Cindy王
        </div>
        <div class="card-list-r">沟通记录<van-icon name="arrow" /></div>
      </div>
    </div>
    <div class="management-list" @click="goTo(urls.intentionalCustomersDetial)">
      <ul class="management-list-l fn-left">
        <li>主责任人：测试员</li>
        <li>手机号码：13123678649</li>
        <li>客户状态：转化成功</li>
        <li>意项级别：<van-rate :count="star" v-model="star"  readonly="true" /></li>
      </ul>
      <div class="management-list-r fn-right">
        <span>
          <van-icon name="phone" />
        </span>
      </div>
    </div>
    <div class="bottom-btn">
      <span class="border-right" @click="goTo(urls.addCustomers)">添加客户</span>
      <span @click="goTo(urls.intentionalCustomersList)">客户管理操作</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value:'',
      star: 4,
      urls: {
        addCustomers: '/teacher/addCustomers',
        intentionalCustomersList: '/teacher/intentionalCustomersList',
        customerCommunicationRecord: '/teacher/customerCommunicationRecord',
        intentionalCustomersDetial: '/teacher/intentionalCustomersDetial'
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
.customer-management{
.card-list{
  background: #fff;
  height:90px;
  line-height:90px;
  padding: 0 30px;
  margin:10px auto 0;
.card-list-l{
  float: left;
  font-size: 28px;
.img{
  width: 60px;
  height: 60px;
  display: inline-block;
  border-radius: 100%;
  margin-right: 15px;
  vertical-align: middle;
}
.times{
  font-size: 24px;
  padding-left: 15px;
  color: #838383;

}
}
.card-list-r{
  float: right;
.van-icon{
  top:3px;
  color:#838383;
}
}
}
.list-search{
  background: #fff;
  height: 105px;
 padding:10px 20px;
.list-search-l{
  float: left;
}
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
  width: 500px;
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
  float: right;
  padding: 16px 23px;
  font-size: 26px;
  background: #eff1f6;
  border-radius: 35px;
  margin: 6px 5px 0 0;
}
}
.management-list{
  background: #fff;
  padding: 0px 30px;
  height: 200px;

.management-list-l{
line-height: 45px;
}
  .van-rate{
    display: inline-block;
  }
}
.management-list-r{
  padding: 50px 30px 0 0;
  span{
    display: inline-block;
    border-radius: 100%;
    width: 50px;
    line-height: 52px;
    height: 50px;
    border: 1px #4286ed solid;
    text-align: center;
    color: #4286ed;
  }
}
.bottom-btn{
  position: fixed;
  bottom: 0;
  height: 100px;
  color: #fff;
  background: #4286ed;
  line-height: 100px;
  width: 750px;
  span{
    display: inline-block;
    line-height: 100px;
    width: 365px;
    text-align: center;
    font-size: 32px;
  }
  .border-right{
    width: 374px;
    border-right:1px #838383 solid ;
  }

}
}
</style>
