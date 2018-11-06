<template>
  <div class="customer-analysis">
    <van-tabs type="card" v-model="active" @click="changeTab">
      <van-tab title="招生来源">
        <div class="class-tab">
          <div class="commented-tab">
            <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
          </div>
          <div class="operation">筛选</div>
        </div>
        <van-cell-group class="card-list-item">
          <van-cell title="选择校区" is-link class="line65"/>
        </van-cell-group>
        <van-cell-group class="card-list-item02">
          <van-cell title="市场推广" is-link to="/teacher/enrollmentStatistics2">
            <van-progress :percentage="66.67" />
          </van-cell>
      </van-cell-group>
        <van-cell-group class="card-list-item02">
          <van-cell title="默认" is-link to="/teacher/enrollmentStatistics3">
            <van-progress :percentage="50" />
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="意向级别">
        <div class="class-tab">
          <div class="commented-tab">
            <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
          </div>
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
      </van-tab>
    <van-tab title="销售漏斗">
      <div class="class-tab">
        <div class="commented-tab">
          <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
        </div>
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
    </van-tab>
    </van-tabs>
    <bottom-btn v-if="active === 0" :buttonData="buttonData1"></bottom-btn>
    <bottom-btn v-if="active === 2" :buttonData="buttonData2"></bottom-btn>
    <commented-pop></commented-pop>
  </div>
</template>
<script>
import CommentedPop from '../popup/commentedPop'
import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    BottomBtn,
    CommentedPop
  },
  data () {
    return {
      active: 0,
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
    changeTab (index, title) {
      if (title === '意向级别') {
        this.drawLine()
      }
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (param) {
      this.$router.push({path: param})
    },
    drawLine () {
      let chart01 = this.$echarts.init(document.getElementById('chart01'))
      let chart02 = this.$echarts.init(document.getElementById('chart02'))
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
  .customer-analysis{
  .class-tab{
    background: #fff;
    height: 83px;
    border-top:1px #000 solid ;
    padding:10px 20px;
  .commented-tab{
    height: 76px;
    background: #fff;
    margin-bottom: 10px;
    padding-left:20px;
    float: left;
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
  .van-cell{
    font-size: 26px;
  }
  .van-cell__left-icon{
    font-size: 26px;
    top:15px;
    margin-right: 10px;
  }
  .van-search__action{
    font-size: 26px;
    background: #eff1f6;
    position: relative;
    left:-32px;
    border-radius: 35px;
    padding: 16px 23px;
  }
  .van-search{
    width: 606px;
  }
  .van-search .van-cell{
    border: 1px #eff1f6 solid;
    border-right:none;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    padding: 0px 10px;
    line-height: 54px;
  }
  .operation{
    float: right;
    padding: 16px 23px;
    font-size: 26px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 6px 5px 0 0;
  }
  }
  .van-tab{
    font-size: 26px;
  }
  .van-tabs--card{
    padding-top: 75px;
  }
  .van-tabs__nav--card .van-tab.van-tab--active{
    background-color: #4286ed;
    color: #fff;
  }
  .van-tabs--card .van-tabs__wrap{
    height: 105px;
  }
  .van-tabs__content{
    padding-top: 20px;

  }
  .van-tabs__nav--card{
    border: 1px #4286ed solid;
    height: 56px;

  }
  .van-tabs__nav--card .van-tab{
    border-right:1px #4286ed solid ;
    line-height: 56px;
    color: #4286ed;
  }
  .van-tabs__nav--card .van-tab{

  }
  .van-tabs--card .van-tabs__wrap{
    padding: 20px;
    background: #fff;
  }

  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
   .line65{
     line-height: 65px;
   }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  .card-list-item02{
  .van-cell{
    font-size: 24px;
    line-height: 65px;
    color:#838383;
    padding: 10px 29px;
  }
.van-progress{
  top:32px;
}
  }
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
