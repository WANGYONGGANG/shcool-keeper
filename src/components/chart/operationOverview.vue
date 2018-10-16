<template>
<div class="operation-overview">
  <dl class="overview-title"><dt>运营总览</dt><dd>日期：2018-10-15</dd></dl>
  <div id="chart01"></div>
  <div id="chart02"></div>
  <div id="chart03"></div>
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
    goTo () {
      this.$router.push({path: '/chart/fullclassRate'})
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
        color: ['#00a0f4', '#14a5f4', '#4bb3f4', '#33acf4', '#46b2f4'],
        series: [
          {
            name: '满班率',
            type: 'pie',
            radius: ['50%', '70%'],
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
      chart02.setOption({
        color: ['#00a0f4', '#14a5f4', '#4bb3f4', '#33acf4', '#46b2f4'],
        series: [
          {
            name: '满班率',
            type: 'pie',
            radius: ['50%', '70%'],
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
}
</style>
