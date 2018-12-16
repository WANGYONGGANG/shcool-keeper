<template>
  <div class="evaluation-latitude-detial-next">
    <div v-for="data in resourceList">
        <p class="next-tit">{{data.year}}</p>
        <ul class="detial-list" v-for="detail in data.detail">
          <li class="item01">上课时间 {{detail.begin_class_date}}</li>
          <li class="item02"><span>平均分：{{detail.average_score}}</span><span>出勤人数：{{detail.people_count}}</span><span>评价人数：{{detail.evaluation}}</span></li>
        </ul>
    </div>
    
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js"
  export default {
    data () {
      return {
        rankId:this.$route.query.id,
        begin_date:this.$route.query.begin_date,
        end_date:this.$route.query.end_date,
        campus_id:this.$route.query.campus_id,
        type_id:this.$route.query.type_id,
        dimension_id:this.$route.query.dimension_id,
        resourceList:[],
      }
    },
    mounted () {
    // this.drawLine()
    this.parentEvaluationDimensionDetailWithClassPlean();
  },
    methods: {
      parentEvaluationDimensionDetailWithClassPlean:function(){
        let params = new URLSearchParams();
        params.append('id',   this.rankId);
        params.append('begin_date' ,this.begin_date);
        params.append('end_data' ,this.end_date);
        params.append('campus_id', JSON.parse(this.campus_id));
        params.append('type_id' ,this.type_id);
        params.append('dimension_id' ,this.dimension_id);
        let _self = this;
        api.parentEvaluationDimensionDetailWithClassPlean(params)
          .then(res => {
            if(res.code===1){
              _self.resourceList=res.data;
            }
          })
          .catch(error => {
            
          });
      }
    }
  }
</script>
<style lang="less">
  .evaluation-latitude-detial-next{
  .next-tit{
    font-size: 30px;
    line-height: 79px;
    padding-left: 26px;
  }
  .detial-list{
    padding: 15px 20px 10px;
    border-bottom: 1px #f1f1f1 solid;
    background: #fff;
  .item01{
    color: #7d7070;
    line-height: 26px;
    font-size: 26px;
    padding:10px 0 ;
  }

  .item02{
    font-size: 24px;
    padding:10px 0 ;
    color: #7d7070;
  span{
    padding-right: 40px;
    font-size: 24px;
    display: inline-block;
  }
  }
  }

  }

</style>
