<template>
  <div class="anal-month">
    <div class="day-box01 fn-clear">
      <ul class="day-box01-l">
        <li class="box01-l-item01">收费金额222</li>
        <li class="box01-l-item02">0.00</li>
        <li class="box01-l-item03">0人次</li>
      </ul>
      <div class="day-box01-r">
        <div class="box01-r-item01">退费<span>0人次</span><span class="red">0.00</span></div>
        <div class="box01-r-item02">净额<span class="green">0.00</span></div>
      </div>
    </div>
    <div class="day-box02">
      <div class="chart01"><div id="chart01"></div></div>
      <div class="chart02">
        <div class="chart02-tit">近七天收费金额趋势分析</div>
        <div id="chart02"></div></div>
    </div>
    <div class="day-box03">
      <div class="day-box03-tit">校区收费排行榜 <span>top10</span></div>
      <div class="no-data">没有数据</div>
    </div>
    <div class="day-box03">
      <div class="day-box03-tit">招生排行榜 <span>top10</span></div>
      <div class="no-data">没有数据</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let chart01 = this.$echarts.init(document.getElementById('chart01'))
      let chart02 = this.$echarts.init(document.getElementById('chart02'))
      chart01.setOption({
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
            ]
          }
        ]
      })
      // 绘制图表
      chart02.setOption({
        title: {
          text: '收费金额（元）',
          textStyle: {
            color: '#fff',
            fontSize: 26
          },
          padding: [10, 0, 0, 30]
        },
        xAxis: {
          boundaryGap: false,
          data: ['09', '10', '11', '12', '13', '14', '15'],
          axisLabel: {
            fontSize: 24 // 刻度标签文字的大小
          },
          axisLine: {
            lineStyle: { // x轴颜色和字体大小
              color: '#4286ed',
              opacity: 1
            }
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            fontSize: 24,
            label: {
              show: true
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '收费金额',
          type: 'line',
          smooth: true,
          data: [100, 1000, 0, 10, 0, 0, 0],
          label: {
            color: '#4286ed',
            fontSize: 24,
            normal: {
              show: true,
              position: 'top'
            }
          },
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: { // 折线拐点标志的样式。
            borderWidth: 3,
            borderColor: '#6eadf5',
            color: '#6eadf5'
          },
          lineStyle: {
            color: '#4286ed'
          }
        }]
      })
    }
  }
}
</script>
<style lang="less">
  .anal-month{
  .day-box01{
    border: 1px #ccc solid;
    height: 200px;
    width:660px;
    margin:30px auto 0;
  .day-box01-l{
    padding-left: 30px;
    float: left;
    width:250px;
    height: 200px;
    border-right:1px #ccc solid;
  .box01-l-item01{
    line-height: 80px;
  }
  .box01-l-item02{
    line-height: 50px;
    font-size: 50px;
    color: #4286ed;
  }
  .box01-l-item03{
    padding-top: 10px;
    line-height: 50px;
    font-size: 24px;
  }
  }
  .day-box01-r{
    width: 408px;
    font-size: 28px;
    padding-left: 30px;
    float: right;
  .box01-r-item01{
    height: 100px;
    line-height: 100px;
    border-bottom:1px #ccc solid ;
  span{
    float: right;
    padding-right: 20px;
  }
  }
  .box01-r-item02{
    height: 99px;
    line-height: 99px;
    padding-right: 20px;
  span{
    float: right;
  }
  }
  .red{
    color:#f8613d;
  }
  .green{
    color:#33d158;
  }
  }
  }
  .chart01{
  #chart01{
    width: 750px;
    height: 400px;
  }
  }

  .chart02{
    padding: 30px 0;
    border-top:1px #ccc solid ;
  .chart02-tit{
    line-height: 80px;
    padding-left: 50px;
  }
  #chart02{
    width: 750px;
    height: 400px;
  }
  }
  .day-box03{
    border-top:20px #eef1f6 solid ;
  .day-box03-tit{
    line-height:120px;
    font-size: 32px;
    text-align: center;
    border-bottom:1px #eef1f6 solid ;
  span{
    font-size: 24px;
    padding-left: 20px;
    color: #333333;
  }
  }
  .no-data{
    text-align: center;
    height: 200px;
    line-height: 200px;
  }

  }
  }
</style>
