<template>
  <div class="evaluation-latitude">
    <div class="chart">
      <div id="chart01"></div>
    </div>
    <div class="charge-table">
      <table class="table-top">
        <tr class="title">
          <th class="w450">维度</th>
          <th class="w150">平均分</th>
          <th class="w150">排名</th>
        </tr>
        <tr @click="goTo(urls.evaluationLatitudeDetial)" v-for="data in resourceList" :id="data.id">
          <td class="w450">{{data.name}}</td>
          <td class="w150">{{data.average_score}}</td>
          <td class="w150">{{data.ranking}}<van-icon name="arrow" size="1" class="w150-arrow" /></td>
        </tr>
        <!-- <tr @click="goTo(urls.evaluationLatitudeDetial)">
          <td class="w450">教学内容</td>
          <td class="w150">5.0000</td>
          <td class="w150">1<van-icon name="arrow" size="1" class="w150-arrow" /></td>
        </tr>
        <tr @click="goTo(urls.evaluationLatitudeDetial)">
          <td class="w450">教学态度</td>
          <td class="w150">5.0000</td>
          <td class="w150">1<van-icon name="arrow" size="1" class="w150-arrow" /></td>
        </tr> -->
      </table>
    </div>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
import Router from "vue-router";
export default {
  data () {
    return {
      resourceList:[],
      urls: {
        evaluationLatitudeDetial: '/user/evaluationLatitudeDetial'
      }
    }
  },
  mounted () {
    this.drawLine();
    console.log(this.$route.query.id)
    console.log(this.$route.query.campus_id)
    this.parentEvaluationDimension()
  },
  methods: {
    parentEvaluationDimension:function(){
        let params = new URLSearchParams();
        params.append('id',   this.$route.query.id);
        params.append('begin_date' ,this.$route.query.begin_date);
        params.append('end_data' ,this.$route.query.end_date);
        params.append('campus_id', '['+JSON.parse(this.$route.query.campus_id)+']');
        params.append('type_id' ,this.$route.query.type_id);

        let _self = this;
        api.parentEvaluationDimension(params)
          .then(res => {
            console.log(res)
            if(res.code===1){
              _self.resourceList=res.data;
            }
          })
          .catch(error => {
            
          });
    },
    goTo (url) {
      this.$router.push({path: url})
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let chart01 = this.$echarts.init(document.getElementById('chart01'))
      chart01.setOption({
        radar: [
          {
            indicator: [
              { text: '老师仪容仪表' },
              { text: '教学内容' },
              { text: '教学态度' },
            ],
            radius: 120,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
              formatter:'{value}',
              textStyle: {
                color:'#333'
              },
              fontSize:24
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(255, 255, 255,1)',
                  'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)',
                  'rgba(255, 255, 255,1)', 'rgba(255, 255, 255,1)'],


              }
            },
            emphasis:{

            },
            axisLine: {
              lineStyle: {
                color: 'rgba(158, 154, 154, 1)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(81, 139, 245, 0.5)'
              }
            }
          }
        ],
        series: [
          {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
              emphasis: {
                // color: 各异,
                lineStyle: {
                  width: 4
                }
              }
            },
            data: [
              {
                value: [100, 8, 0.40, -80, 2000],
                name: '图一',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    type: 'dashed'
                  }
                }
              }
            ]
          }
        ]
      })

    }

  },
  computed : {

  },
  watch:{

  }
}
</script>
<style lang="less">
.evaluation-latitude{
.chart{
width:100%;
background:#fff;
#chart01{
  width: 750px;
  height: 400px;
}
}
.charge-table{
  width:100%;
.w450{
  width: 450px;
  padding-left: 30px;
}
.w150{
  width: 150px;
}
.w100{
  width: 100px;
}
.table-top{
th{
  border-bottom:2px #d2d5da solid ;
  border-top:15px #eef1f6 solid ;
  background: #fff;
  line-height: 80px;
}
td{
  background: #fff;
  line-height: 80px;
}
.fa-icon{
  position: relative;
  top: 6px;
  color: #d4d1d1;
}
}
}
.w150-arrow{
  position: relative;
  left: 25px;
  top: 4px;
  color: #DADCE3;
}
}
</style>
