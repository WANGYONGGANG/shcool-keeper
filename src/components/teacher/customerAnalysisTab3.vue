<template>
  <div class="tab3">
    <div class="class-tab">
      <calendar-packing></calendar-packing>
    </div>
    <van-cell-group class="card-list-item">
      <van-cell title="选择校区" is-link class="line65"/>
    </van-cell-group>
    <div class="chart02">
      <div id="chart02"></div>
    </div>
    <van-cell-group class="card-list-item">
      <van-cell title="未指定" value="1" />
      <van-cell title="原有测试无效资源" value="0" />
      <van-cell title="原有转化成功" value="0" />
      <van-cell title="原有在线咨询" value="0" />
      <van-cell title="原有上门" value="0" />
      <van-cell title="原有来电咨询" value="0" />
      <van-cell title="原有已上门" value="0" />
      <van-cell title="对培训不感兴趣" value="0" />
      <van-cell title="无效" value="0" />
      <van-cell title="转化成功" value="0" />
      <van-cell title="晚点再报名" value="0" />
      <van-cell title="未上门" value="0" />
      <van-cell title="预约试听" value="0" />
      <van-cell title="有效单" value="0" />
      <van-cell title="已上门" value="0" />
    </van-cell-group>
    <bottom-btn :buttonData="buttonData2"></bottom-btn>
  </div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    BottomBtn,
    CalendarPacking
  },
  data () {
    return {
      buttonData2: {
        text: '查看详情',
        url: '/teacher/customerContrast'
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    changeTab (index, title) {
      if (title === '意向级别') {
        this.drawLine()
      }
    },
    goTo (param) {
      this.$router.push({path: param})
    },
    drawLine () {
      let chart02 = this.$echarts.init(document.getElementById('chart02'))
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
              color: '#fff',
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
            borderColor: '#6eadf5',
            color: '#6eadf5'
          },
          lineStyle: {
            color: '#fff'
          }
        }]
      })
    }
  }
}
</script>
<style lang="less">
  .tab3{
  .chart02{
    width: 100%;
    height: 400px;
    background: #fff;
    #chart02{
      width: 750px;
      height: 300px;
    }
  }
  }
</style>
