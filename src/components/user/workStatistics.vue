<template>
<div class="work-statistics">
  <van-cell-group class="card-list-item">
    <van-cell title="已上课时" value="详情" is-link class="line65"  @click="goTo"/>
  </van-cell-group>
  <dl class="work-statistics-list" @click="goTo">
    <dt>上课率</dt>
    <dd class="num">0</dd>
    <dd class="progress"></dd>
    <dd>
      <van-cell-group>
        <van-cell title="已上：0节" value="共计：0节"  class="line30"/>
      </van-cell-group>
    </dd>
  </dl>
  <van-cell-group class="card-list-item">
    <van-cell title="学生出勤" value="详情" is-link class="line65" @click="goTo" />
  </van-cell-group>
  <dl class="work-statistics-list" @click="goTo">
    <dt>出勤率</dt>
    <dd class="num">0</dd>
    <dd class="progress"></dd>
    <dd>
      <van-cell-group>
        <van-cell title="实到：0节" value="报到：0节"  class="line30"/>
      </van-cell-group>
    </dd>
  </dl>
  <van-cell-group class="card-list-item">
    <van-cell title="课程评价" value="详情" is-link class="line65" @click="goTo" />
  </van-cell-group>
  <dl class="work-statistics-list" @click="goTo">
    <dt>评价率</dt>
    <dd class="num">0</dd>
    <dd class="progress"></dd>
    <dd>
      <van-cell-group>
        <van-cell title="已评价：0人" value="应评价：0人"  class="line30"/>
      </van-cell-group>
    </dd>
     </dl>
    <div class="naming-tab">
      <div class="naming-tab-l fn-left"><van-icon name="arrow-left" /></div>
      <div class="naming-tab-m fn-left" ><span @click="showCalendar">2018年11月</span>
    </div>
      <div class="naming-tab-r fn-right"><van-icon name="arrow" /></div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    goTo () {
      this.$router.push({path: '/user/workStatisticsDetial'})
    },
  }
}
</script>
<style lang="less">
  .work-statistics{
  padding-bottom:100px;
  .van-cell-group{
    background-color: transparent;
  }
  .van-cell--clickable:active{
    background-color: transparent;
  }
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    background-color: transparent;
    padding: 10px 29px;
  }
  .line65{
    line-height: 65px;
    padding: 10px 40px;
  }
  [class*=van-hairline]::after{
    border: 0 #fff solid;
  }
  .work-statistics-list{
    width: 90%;
    background: #fff;
    padding: 10px 0 30px;
    border-radius: 5px;
    margin: 0 auto;

  dt{
    padding: 30px 0 10px;
    text-align: center;
  }
  dd{
    font-size: 30px;
    color: #6a6b6b;

  }
  .num{
    font-size: 32px;
    text-align: center;
  }
  .progress{
    width: 90%;
    height: 10px;
    border-radius: 40px;
    background: #4286ed;
    margin: 20px auto;
  }
  }
  .naming-tab{
    height: 86px;
    background: #fff;
    text-align: center;
    line-height: 86px;
    position: fixed;
    bottom: 0;
    font-size: 28px;
  .naming-tab-l,.naming-tab-r{
    width: 50px;
    position: relative;
    top: 5px;
  }
  .naming-tab-m{
    width: 650px;
    text-align: center;
  }
  .arrow-down .van-icon{
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin-left: 10px;
    position: relative;
    top: 5px;
  }
  }

  }

</style>
