<template>
  <div class="customer-contrast">
    <van-cell-group class="card-list-item" v-for="(resource,index) in resourceList" v-bind:key="index">
      <van-cell    v-bind:title="resource.campus_name"  v-bind:value="resource.sum+'人'" />
      <van-cell>
        <div class="progress"></div>
      </van-cell>
    </van-cell-group>
    <bottom-btn :buttonData="buttonData"></bottom-btn>
  </div>
</template>
<script>
import BottomBtn from '../general/bottomBtn'
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  components: {
    BottomBtn
  },
  data () {
    return {
      resourceList:[],
      buttonData: {
        text: '对比',
        url: ''
      }
    }
  },
  mounted () {
    this.ReportCustomerAnalysisForStateCompare();
  },
  methods: {
    //销售漏斗对比
    ReportCustomerAnalysisForStateCompare: function(campus_ids) {
      let params ={};      
      // params.begin_date="2018-07-01";
      // params.campus_ids="[8,9,10]";
      // params.end_date="2018-11-30";
      let _self = this;
      api.ReportCustomerAnalysisForStateCompare(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  this.resourceList=res.data.data;
                  console.log(this.resourceList);
                }
          } else {
            let params = { msg: "销售漏斗对比" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "销售漏斗对比" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
  .customer-contrast{
  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
  }
  .progress{
    width: 100%;
    height: 10px;
    border-radius: 40px;
    background: #4286ed;
    margin: 20px auto;
  }
  }
</style>
