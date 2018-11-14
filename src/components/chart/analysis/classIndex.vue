<template>
  <div class="class-index">
    <dl class="charge-anal-title"><dt>班级分析</dt><dd>日期：2018-10-15</dd></dl>
    <table class="charge-anal-tab" border="1" cellspacing="0">
      <tr>
        <td :class="[index==0 ? 'active' : '']" @click="change(0)">日报</td>
        <td :class="[index==1 ? 'active' : '']" @click="change(1)">月报</td>
        <td :class="[index==2 ? 'active' : '']" @click="change(2)">年报</td>
      </tr>
    </table>
    <component :is="currentView"></component>
  </div>
</template>
<script>
  import day from './components/class/day'
  import month from './components/class/month'
  import year from './components/class/year'
export default {
  components: {
    day,
    month,
    year
  },
  data () {
    return {
      index:2,
      arr:['day','month','year']
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
    },
    change (index) {
      this.index=index
    }
  },
  computed:{
    currentView(){
      return this.arr[this.index];
    }
  }
}
</script>
<style lang="less">
.class-index{
  width: 100%;
  background: #fff;
.charge-anal-title{
  text-align: center;
  border-bottom: 1px #eef1f6 solid;
  padding: 20px 0;
  line-height: 45px;
dt{
  font-size: 28px;
  color: #141414;
  font-weight: bold;
}
dd{
  font-size: 24px;
span{
  margin-left: 80px;
}
}
}
.charge-anal-tab{
  margin: 20px auto 0;
   width:660px;
 border:1px #4286ed solid;
  td{
  width:220px;
  height: 60px;
    text-align: center;
  }
  .active{
    background: #4286ed;
    color: #fff;
  }
}
}
</style>
