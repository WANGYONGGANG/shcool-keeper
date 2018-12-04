<template>
  <div class="evaluation-latitude-detial">
    <dl class="detial-tit"><dt>教学内容</dt><dd>5.0000</dd></dl>
    <div class="charge-table">
      <table class="table-top">
        <tr class="title">
          <th class="w550">班级(一对一班级除外)</th>
          <th class="w200">平均分</th>
        </tr>
        <tr @click="goTo(urls.evaluationLatitudeDetialNext)">
          <td class="w550">17暑初二英语同步班</td>
          <td class="w200">5.0000<van-icon name="arrow" size="1" class="w150-arrow" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      urls: {
        evaluationLatitudeDetialNext: '/user/evaluationLatitudeDetialNext'
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
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
.evaluation-latitude-detial{
background:#fff;
.detial-tit{
  text-align: center;
  color: #4286ed;
  dt{
    font-size: 30px;
    padding: 20px 0 10px;

  }
  dd{
    font-size: 72px;
    padding: 20px;
  }
}
.charge-table{
  width:100%;
.w550{
  width: 550px;
  padding-left: 30px;
}
.w200{
  width: 200px;
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
.title{
  th{
    color: #a9a4a4;
  }
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
