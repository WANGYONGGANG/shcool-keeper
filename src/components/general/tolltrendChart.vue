<template>
  <div class="charge-chart">
    <div id="myChart" class="my-chart"></div>
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
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '课消总趋势图（最近七天）',
          textStyle: {
            color: '#fff',
            fontSize: 26
          },
          padding: [30, 0, 0, 30]
        },
        xAxis: {
          boundaryGap: false,
          data: ['09', '10', '11', '12', '13', '14', '15'],
          axisLabel: {
            fontSize: 24 // 刻度标签文字的大小
          },
          axisLine: {
            lineStyle: { // x轴颜色和字体大小
              color: '#fff',
              opacity: 0
            }
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            label: {
              show: true
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '消费额度',
          type: 'line',
          smooth: true,
          data: [100, 1000, 0, 10, 0, 0, 0],
          label: {
            color: '#fff',
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
            borderColor: '#fff',
            color: '#0095f1'
          },
          lineStyle: {
            color: '#fff'
          }
        }]
      })
    }
  },
  computed: {

  }
}
</script>
<style lang="less">
  .charge-chart{
    background: #0095f1;
    width: 100%;
    height: 400px;
  #myChart{
    width: 750px;
    height: 400px;
  }
  }
</style>
