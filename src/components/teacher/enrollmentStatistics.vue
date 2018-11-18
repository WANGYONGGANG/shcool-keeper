<template>
  <div class="enrollment-statistics">
    <van-cell-group class="card-list-item"  v-for="resource in  resourceList">
      <van-cell  v-bind:title="resource.name" class="line65 tuition" />
      <van-cell   v-bind:title="'客户数量:'+resource.sum"      v-bind:value="'比例:'+resource.Rate" />
      <van-cell  v-bind:title="'转化成功:'+resource.transum"   v-bind:value="'转化率:'+resource.tranRate" />
    </van-cell-group>
    <van-cell-group class="card-list-item" v-if="false">
      <van-cell title="默认" class="line65 tuition" />
      <van-cell title="客户数量：4" value="比例：66.67%" />
      <van-cell title="转化成功：0" value="转化率：100.00%" />
    </van-cell-group>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  data () {
    return {
      resourceList:[]
    }
  },
    mounted () {
        // this.refreshDepartment();
        this.ReportCustomerAnalysisForSourceway();
  },
  methods: {
             //查询招生来源
    ReportCustomerAnalysisForSourceway: function(campus_ids) {
      let params ={};      
      params.begin_date="2018-07-01";
      params.campus_ids="[8,9,10]";
      params.end_date="2018-11-30";
      params.source_type_id=1;

      let _self = this;
      api.ReportCustomerAnalysisForSourceway(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  this.resourceList=res.data.data;
                  console.log(res.data.data);
                }
          } else {
            let params = { msg: "查询所有校区" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "查询所有校区" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
  .enrollment-statistics{
  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
  .line65{
    line-height: 65px;
  }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  }
</style>
