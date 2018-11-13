<template>
  <div class="operation-overview">
    <dl class="overview-title"><dt>运营总览</dt><dd>日期：2018-10-15</dd></dl>
    <div class="chart01" @click="goTo(urls.chargeAnal)"><div id="chart01"></div></div>
    <div class="chart02" @click="goTo(urls.curriculumConsumptionCharge)"><div id="chart02"></div></div>
    <div class="overview-class-tit">
      <van-icon name="more-o" />班级指标
    </div>
    <div class="overview-class">
      <div class="chart03" @click="goTo(urls.classIndex)"><div id="chart03"></div><span>满班率</span></div>
      <div class="chart04" @click="goTo(urls.classIndex)"><div id="chart04"></div><span>出勤率</span></div>
      <div class="chart05" @click="goTo(urls.classIndex)"><div id="chart05"></div><span>缴费率</span></div>
    </div>
    <div class="overview-class-tit">
      <van-icon name="more-o" />招生情况
    </div>
    <div class="recruit-students">
      <ul class="stu-block fn-left">
        <li class="stu-block-item01">
          到访率<van-icon name="question" />
        </li>
        <li class="stu-block-item02"><span>0.00</span>%</li>
        <li class="stu-block-item03"><i class="circle"></i>邀约人数：0</li>
        <li class="stu-block-item04"><i class="circle"></i>到访人数：0</li>
      </ul>
      <ul class="stu-block fn-right">
        <li class="stu-block-item01">
          转化率<van-icon name="question" />
        </li>
        <li class="stu-block-item02"><span>0.00</span>%</li>
        <li class="stu-block-item03"><i class="circle"></i>已跟进：0</li>
        <li class="stu-block-item04"><i class="circle"></i>已转化：0</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      urls: {
        chargeAnal: '/analysis/chargeAnal',
        curriculumConsumptionCharge: '/analysis/curriculumConsumptionCharge',
        classIndex: '/analysis/classIndex'
      }
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let chart01 = this.$echarts.init(document.getElementById('chart01'))
      let chart02 = this.$echarts.init(document.getElementById('chart02'))
      // 绘制图表
      chart01.setOption({
        title: {
          text: '收费金额（元）0.00 0人次',
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
      chart02.setOption({
        title: {
          text: '课消金额（元）',
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
            label: {
              show: true
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '课消金额',
          type: 'line',
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
            borderColor: '#71ce57',
            color: '#71ce57'
          },
          lineStyle: {
            color: '#fff'
          }
        }]
      })

      let chart03 = this.$echarts.init(document.getElementById('chart03'))
      let chart04 = this.$echarts.init(document.getElementById('chart04'))
      let chart05 = this.$echarts.init(document.getElementById('chart05'))

      chart03.setOption({
        color: ['#00a0f4'],
        series: [
          {
            name: '满班率',
            type: 'pie',
            radius: ['55%', '70%'],
            hoverAnimation: false,
            legendHoverLink: false,
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
              {value: 335}
            ]
          }
        ]
      })
      chart04.setOption({
        color: ['#00a0f4', '#14a5f4', '#4bb3f4', '#33acf4', '#46b2f4'],
        series: [
          {
            name: '满班率',
            type: 'pie',
            radius: ['55%', '70%'],
            hoverAnimation: false,
            legendHoverLink: false,
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
              {value: 335, name: '0%-50%'},
              {value: 310, name: '52%-80%'},
              {value: 234, name: '81%-90%'},
              {value: 135, name: '91%-100%'}
            ]
          }
        ]
      })
      chart05.setOption({
        color: ['#00a0f4', '#14a5f4', '#4bb3f4', '#33acf4', '#46b2f4'],
        series: [
          {
            name: '满班率',
            type: 'pie',
            radius: ['55%', '70%'],
            hoverAnimation: false,
            legendHoverLink: false,
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
              {value: 335, name: '0%-50%'},
              {value: 310, name: '52%-80%'},
              {value: 234, name: '81%-90%'},
              {value: 135, name: '91%-100%'}
            ]
          }
        ]
      })
    }
  }
}
</script>
<style lang="less">
.operation-overview{
  width: 100%;
  background: #fff;
.overview-title{
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
}
}
.chart01{
  width: 710px;
  margin: 10px auto;
  background: #6eadf5;
  padding-top: 40px;
#chart01{
  width: 710px;
  height: 400px;
}
}
.chart02{
  width: 710px;
  margin: 10px auto;
  background: #71ce57;
  padding-top: 40px;
#chart02{
  width: 710px;
  height: 400px;
}
}
.overview-class-tit{
  width: 720px;
  border-top:1px #f1f1f1 solid ;
  margin-top: 40px;
  line-height: 80px;
  font-size: 30px;
  padding: 30px 0 0px 30px;
.van-icon{
  margin-right: 10px;
  color: #ffbd18;
  position: relative;
  top: 3px;
}
}
.overview-class{
  height: 200px;

}
.chart03,.chart04,.chart05{
  width: 250px;
  float: left;
  font-size: 20px;
  text-align: center;

}
#chart03,#chart04,#chart05{
  width: 250px;
  height: 200px;
}
.recruit-students{
  height: 300px;
  color:#fff;
.stu-block{
  width: 330px;
  padding: 30px 0 0 30px;
  border-radius: 10px;
  height: 270px;
.stu-block-item01{
  font-size: 26px;
.van-icon{
  font-size: 24px;
  margin-left: 10px;
  position: relative;
  top: 2px;
}
}
.stu-block-item02{
  line-height: 90px;
span{
  font-size: 50px;
}
}
.stu-block-item03{
  line-height: 40px;
.circle{
  display: inline-block;
  border: 6px #fff solid;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  margin-right: 10px;
}
}
.stu-block-item04{
  line-height: 40px;
.circle{
  display: inline-block;
  border: 6px #d9d962 solid;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  margin-right: 10px;
}
}
}
.fn-left{
  background: #6eadf5;
  margin-left: 30px;
}
.fn-right{
  background: #74859a;
  margin-right: 30px;
}
}
}
</style>
