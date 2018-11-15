<template>
  <div class="intentional-customers-detial">
    <div class="detial-tit">基本信息</div>
    <van-cell-group>
      <van-cell title="姓名" v-bind:value="customerObj.name" />
      <van-cell title="录入时间" v-bind:value="customerObj.createTime" />
      <van-cell title="性别" v-bind:value="customerObj.sex"/>
      <van-cell title="公立学校" v-bind:value="customerObj.studentsPublicSchoolName" />
      <van-cell title="手机号码" v-bind:value="customerObj.mobile" />
    </van-cell-group>
    <div class="detial-tit">招生信息</div>
    <van-cell-group>
      <van-cell title="招生来源" v-bind:value="customerObj.sourceName" is-link />
      <van-cell title="所属校区" v-bind="customerObj.studentsPublicSchoolName" />
      <van-cell title="主责任人" v-bind:value="customerObj.adminName" />
      <van-cell title="意向级别">
      <van-rate :count="star" v-model="star" readonly="true" />
      </van-cell>
      <van-cell title="客户状态" v-bind:value="customerObj.customerStatusName" />
      <van-cell title="预约试听时间" v-bind:value="customerObj.reservationsDate" />
      <van-cell title="意向课程" value="2018冬季班初一拓..." is-link />
    </van-cell-group>
    <div class="bottom-btn fn-clear">
      <span class="bottom-btn-item03 fn-right" @click="goTo(urls.addCustomers)">编辑</span>
      <span class="bottom-btn-item02 fn-right" @click="goTo(urls.customerCommunicationRecord)">沟通记录</span>
    </div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  data () {
    return {
      star: 4,
      urls: {
        customerCommunicationRecord: '/teacher/customerCommunicationRecord',
        addCustomers: '/teacher/addCustomers'
      },
      customerObj:null
    }
  },
  mounted:function(){
      this.getIntentionClientDetail();
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    },
    //获取意向客户明细
    getIntentionClientDetail: function() {
      let id= this.$route.query.id;
      let params ={};
      params.id =id;      
      let _self = this;
      api.getIntentionClientDetail(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.customerObj=res.data.data;
                }
          } else {
            let params = { msg: "获取意向客户明细" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取意向客户明细" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
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
