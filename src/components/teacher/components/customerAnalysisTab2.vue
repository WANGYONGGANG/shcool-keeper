<template>
  <div class="tab2">
    <div class="class-tab">
      <calendar-packing></calendar-packing>
    </div>
    <van-cell-group class="card-list-item">
      <van-cell title="选择校区" is-link class="line65"/>
    </van-cell-group>
    <div class="chart01">
      <div id="chart01"></div>
      <div class="chart01-tit">意向级别</div>
    </div>
    <div class="analysis-table">
      <table border="0" width="750" class="list-table">
        <tr>
          <th width="50%">意向级别</th>
          <th width="30%">客户数量</th>
          <th width="20%">比例</th>
        </tr>
        <tr>
          <td class="name"><van-rate :count="star" v-model="star"  readonly="true" /></td>
          <td>1</td>
          <td>16.67%</td>
        </tr>
        <tr>
          <td class="name">未填写意向级别</td>
          <td>1</td>
          <td>16.67%</td>
        </tr>
        <tr>
          <td class="name"><van-rate :count="star" v-model="star"  readonly="true" /></td>
          <td>4</td>
          <td>16.67%</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import CalendarPacking from '../../general/calendarPacking'
import BottomBtn from '../../general/bottomBtn'
export default {
  components: {
    BottomBtn,
    CalendarPacking
  },
  data () {
    return {
      star: 4,
      buttonData1: {
        text: '查看详情',
        url: '/teacher/enrollmentStatistics'
      },
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
    goTo (param) {
      this.$router.push({path: param})
    },
    drawLine () {
      let chart01 = this.$echarts.init(document.getElementById('chart01'))
      chart01.setOption({
        color: ['#00a0f4'],
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
              {value: 335}
            ]
          }
        ]
      })
    }
  }
}
</script>
<style lang="less">
  .tab2{
  .chart01{
    width: 100%;
    background: #fff;
    height: 300px;
    font-size: 20px;
    position: relative;
    text-align: center;
    .chart01-tit{
      position: absolute;
      top: 130px;
      left: 323px;
      font-size: 24px;
    }
  }
  #chart01{
    width: 350px;
    height: 300px;
    margin: 0 auto;
  }
  .analysis-table{
    width: 100%;
    background: #fff;
    margin-top: 20px;
  th{
    color: #838383;
    height: 80px;
    text-align: left;
    padding: 15px;
    border-bottom: 1px #f1f1f1 solid;
  }
  td{
    text-align: left;
    padding: 15px;
    font-size: 24px;
    border-bottom: 1px #f1f1f1 solid;
  }
  }
  }
</style>
