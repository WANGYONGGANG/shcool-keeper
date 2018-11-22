<template>
  <div class="intentional-customers-list">
    <div class="customers-list-tit"><input class="in-cu-input" type="checkbox">全选</div>
    <div  v-for="customer in customerList">
    <div @click="goTo(urls.communicationRecord)">
      <div class="card-list">
        <div class="card-list-l">
          <input class="in-cu-input" type="checkbox" v-bind:value="customer.id"  v-model="checkedid">{{customer.name}}
        </div>
      </div>
    </div>
    <div class="management-list">
      <ul class="management-list-l fn-left" >
        <li>主责任人：{{customer.adminName}}</li>
        <li>手机号码：{{customer.mobile}}</li>
        <li>客户状态：{{customer.customerStatusName}}</li>
        <li>意项级别：<van-rate :count="customer.willLevel" v-model="star"  readonly="true" /></li>
      </ul>
    </div>
    </div>
    <div class="bottom-btn">
      <span v-on:click="deleteStu">删除</span>
      <span v-on:click="conversion">转为正式学员</span>
      <span v-on:click="cancelConversion">取消转化</span>
      <span v-on:click="updateConversion">修改</span>
  </div>
  <attention v-if="showAttentionAlert" v-bind:attentionText="attentionText" style="z-index:600;"></attention>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import attention from '../teacher/attention'
export default {
  data () {
    return {
      value: '',
      star: 4,
      showAttentionAlert:false,
      checkedid:[],
      attentionText:"成功",
      customerList:[],
      urls: {
        addCustomers: '/teacher/addCustomers'
      }
    }
  },
   components: {  
       attention
  },
   mounted:function(){
   this.findIntentionClientForStartPage();
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    },
    deleteIntentionClient:function(){
      let params =new URLSearchParams();
      params.append('id',this.checkedid);
      let _self = this;
      api.deleteIntentionClient(params)
        .then(res => {
          if (res.status == 200) {
              let code=res.data.code;
            _self.showAttentionAlert=true;
              setTimeout(function(){
              _self.showAttentionAlert=false;
          },2000)
              this.findIntentionClientForStartPage();
          } else {
            let params = { msg: "删除意向客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "删除意向客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      transformToRegular:function(){
      let params =new URLSearchParams();
      params.append('id',this.checkedid);
      let _self = this;
      api.transformToRegular(params)
        .then(res => {
          if (res.status == 200) {
              let code=res.data.code;
              _self.showAttentionAlert=true;
               setTimeout(function(){
              _self.showAttentionAlert=false;
          },2000)
            this.findIntentionClientForStartPage();
          } else {
            
             _self.attentionText=res.message;
             _self.showAttentionAlert=true;
               setTimeout(function(){
              _self.showAttentionAlert=false;
          },2000)
          }
        })
        .catch(error => {
             _self.attentionText="错误";
             _self.showAttentionAlert=true;
               setTimeout(function(){
              _self.showAttentionAlert=false;
          },2000)
        });
    },
    deleteStu:function(){
      this.deleteIntentionClient();
    },
    conversion:function(){
      this.transformToRegular();
    },
    cancelConversion:function(){

    },
    updateConversion:function(){

    },
     //获取意向客户
    findIntentionClientForStartPage: function() {
      let params ={};
      // params.order=desc;
      params.page =1;
      params.query_conditions=this.value;
      params.rows=10;
      params.sort=this.defaultSort;
      
      let _self = this;
      api.findIntentionClientForStartPage(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.customerList=res.data.data.rows;
                }
          } else {
            let params = { msg: "获取意向客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取今日意向客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
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
