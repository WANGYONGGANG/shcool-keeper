<template>
  <div class="month-day">
    <div class="percentage fn-clear bluebg">
      <ul class="percentage-l fn-left">
        <li class="l-item01">满班率</li>
        <li class="l-item02">1.67%</li>
      </ul>
      <ul class="percentage-r fn-right">
        <li></li>
        <li>班级数：3</li>
      </ul>
    </div>
    <div class="day-box02">
      <div class="chart02">
        <div class="chart02-tit">近七天满班率趋势分析</div>
        <div id="chart01"></div></div>
    </div>
    <div class="day-box03">
      <van-cell-group>
        <van-cell title="满班率排行" value="切换至最后五名" />
      </van-cell-group>
      <div v-if="true">
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 70%">2.00%</span>
          </dd>
        </dl>
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 70%">2.00%</span>
          </dd>
        </dl>
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 35%">1.00%</span>
          </dd>
        </dl>
      </div>
      <div v-else class="no-data">没有数据</div>
    </div>

    <div class="percentage fn-clear orangebg">
      <ul class="percentage-l fn-left">
        <li class="l-item01">出勤率</li>
        <li class="l-item02">1.67%</li>
      </ul>
      <ul class="percentage-r fn-right">
        <li></li>
        <li>班级数：3</li>
      </ul>
    </div>
    <div class="day-box02">
      <div class="chart02">
        <div class="chart02-tit">近七天出勤率趋势分析</div>
        <div id="chart02"></div></div>
    </div>
    <div class="day-box03">
      <van-cell-group>
        <van-cell title="出勤率排行" value="切换至最后五名" />
      </van-cell-group>
      <div v-if="true">
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 70%">2.00%</span>
          </dd>
        </dl>
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 70%">2.00%</span>
          </dd>
        </dl>
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 35%">1.00%</span>
          </dd>
        </dl>
      </div>
      <div v-else class="no-data">没有数据</div>
    </div>
    <div class="percentage fn-clear greenbg">
      <ul class="percentage-l fn-left">
        <li class="l-item01">续费率</li>
        <li class="l-item02">1.67%</li>
        <li class="l-item03">应续费人数：0</li>
      </ul>
      <ul class="percentage-r fn-right">
        <li></li>
        <li>班级数：3</li>
        <li class="item03">已续费人数：0</li>
      </ul>
    </div>
    <div class="day-box02">
      <div class="chart02">
        <div class="chart02-tit">近七天续费率趋势分析</div>
        <div id="chart03"></div></div>
    </div>
    <div class="day-box03">
      <van-cell-group>
        <van-cell title="续费率排行" value="切换至最后五名" />
      </van-cell-group>
      <div v-if="true">
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 70%">2.00%</span>
          </dd>
        </dl>
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 70%">2.00%</span>
          </dd>
        </dl>
        <dl class="box03-progress">
          <dt>17暑初二英语同步班0523班（潮人部落）</dt>
          <dd>
            <span style="width: 35%">1.00%</span>
          </dd>
        </dl>
      </div>
      <div v-else class="no-data">没有数据</div>
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
        let chart03 = this.$echarts.init(document.getElementById('chart03'))
        // 绘制图表
        chart01.setOption({
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
        chart03.setOption({
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
  .month-day{
  .percentage{
    border-radius: 10px;
    width: 92%;
    margin: 60px auto 20px;
    color: #fff;
    padding: 20px;
  .percentage-l{
  .l-item02{
    font-size: 56px;
    padding-top: 20px;
  }
  }
  .percentage-r .item03{
    line-height: 45px;
    padding-top: 102px;
  }
  }
  .bluebg{
    background: #64a1ff;
  }
  .orangebg{
    background: #ffb764;
  }
  .greenbg{
    background: #acd467;
  }

  .chart02{
    padding: 30px 0;
    border-top:1px #ccc solid ;
  .chart02-tit{
    line-height: 80px;
    padding-left: 50px;
  }
  #chart01{
    width: 750px;
    height: 400px;
  }
  #chart02{
    width: 750px;
    height: 400px;
  }
  #chart03{
    width: 750px;
    height: 400px;
  }
  }
  .day-box03{
    border-top:20px #eef1f6 solid;
    border-bottom:20px #eef1f6 solid;
  .box03-progress{
    width: 92%;
    padding: 20px 0;
    margin: 0 auto;
  span{
    display: inline-block;
    border-radius: 5px;
    background: #4286ed;
    height: 50px;
    width: 70%;
    margin:10px 0;
    text-align: right;
    line-height: 50px;
    padding-right: 20px;
    color: #fff;
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
