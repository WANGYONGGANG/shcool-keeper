<template>
  <div class="intentional-customers">
    <dl class="my-customers">
      <dt>我的客户（人）</dt>
      <dd>1</dd>
    </dl>
    <van-cell-group>
      <van-cell title="今日新增客户"    is-link  v-bind:value="toDayNewAddCus"/>
      <van-cell title="今日待沟通客户"  is-link  v-bind:value="noCommunicateCus" />
      <van-cell title="今日已沟通客户"  is-link   v-bind:value="alreadyCommunicateCus" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="客户管理" is-link to="/teacher/customerManagement" />
      <van-cell title="跟进统计" is-link to="/teacher/customerFollowUpStatistics" />
      <van-cell title="客户分析" is-link to="/teacher/customerAnalysis" />
    </van-cell-group>
    <div class="bottom-btn" @click="goTo(urls.addCustomers)">添加客户</div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import Router from "vue-router";
export default {
  data () {
    return {
      urls: {
        addCustomers: '/teacher/addCustomers'
      },
      alreadyCommunicateCus:0,
      noCommunicateCus:0,
      toDayNewAddCus:0

    }
  },
  mounted() {
    this.getCommunicatingCustomers();
    this.getTodayAlreadyCommunicatingCustomers();
    this.getNewCustomersToday();
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    },
     //获取今日新增客户
    getNewCustomersToday: function() {
      let params ={};
      let _self = this;
      api.getNewCustomersToday(null)
        .then(res => {
          console.log(res.data);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data.length);
                  _self.toDayNewAddCus=res.data.data.length;
                }
          } else {
            let params = { msg: "获取今日新增客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日新增客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取今日没有沟通客户
     getCommunicatingCustomers: function() {
      let params ={};
      let _self = this;
      api.getCommunicatingCustomers(null)
        .then(res => {
          console.log(res.data);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.noCommunicateCus=res.data.data.length;
                }
          } else {
            let params = { msg: "获取今日没有沟通客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日没有沟通客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取今日已沟通客户错误
      getTodayAlreadyCommunicatingCustomers: function() {
      let params ={};
      let _self = this;
      api.getTodayAlreadyCommunicatingCustomers(null)
        .then(res => {
          console.log(res.data);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.alreadyCommunicateCus=res.data.data.length;
                }
          } else {
            let params = { msg: "获取今日已经沟通客户错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日已经沟通客户错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
  .intentional-customers{
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
