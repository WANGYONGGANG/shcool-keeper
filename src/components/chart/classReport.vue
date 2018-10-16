<template>
<div class="class-report">
  <div class="charge-top">
    <div class="charge-top-tab">
     开班: <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
    </div>
    <div class="charge-top-right">
      筛选<van-icon name="wap-nav" />
    </div>
  </div>
  <div class="class-chart">
    <div class="erea">不限区域<van-icon name="arrow" /></div>
    <div class="set" @click="goTo"><van-icon name="discount" />设置</div>
    <div id="classChart"></div>
  </div>
  <van-cell-group>
    <van-cell title="满班率" value="班级数"  />
    <van-cell title="0%-50%" is-link value="0" />
    <van-cell title="52%-80%" is-link value="0" />
    <van-cell title="81%-90%" is-link value="0" />
    <van-cell title="91%-100%" is-link value="0" />
  </van-cell-group>
  <commented-pop></commented-pop>
</div>
</template>
<script>
import CommentedPop from '../popup/commentedPop'
export default {
  components: {
    CommentedPop
  },
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
      let myChart = this.$echarts.init(document.getElementById('classChart'))
      // 绘制图表
      myChart.setOption({
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
.class-report{
  .charge-top{
    padding-top: 10px;
    height: 76px;
    background: #fff;
    .charge-top-tab{
      float: left;
      width: 557px;
      margin-bottom: 10px;
      padding-left:20px;
    .tab-radius{
      height: 53px;
      display: inline-block;
      padding: 0px 30px;
      font-size: 24px;
      line-height: 55px;
      border-radius: 50px;
      border: 1px #eff1f6 solid;
      margin: 8px 10px 0;
    }
    .arrow-down .van-icon{
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    }
   .charge-top-right{
     float: right;
     line-height: 40px;
     padding-top: 15px;
     padding-right: 15px;
     .van-icon{
       margin-left: 10px;
       position: relative;
       top: 5px;
     }
   }
  }

.class-chart{
  width: 100%;
  padding-top: 50px;
  height: 450px;
  position: relative;
  background: #0095f1;
 #classChart{
  width: 750px;
  height: 400px;
}
 .erea{
   position: absolute;
   left: 300px;
   top: 40px;
   color: #fff;
   font-size: 28px;
 .van-icon{
   position: relative;
   top: 2px;
   margin-left: 10px;
   font-size: 24px;
 }
 }
 .set{
   position: absolute;
   right:30px;
   top: 40px;
   color: #fff;
 .van-icon{
   position: relative;
   top: 5px;
   font-size: 24px;
   margin-right: 10px;
 }
 }
}
}

</style>
