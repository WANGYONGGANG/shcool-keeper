<template>
  <div class="tab1">
    <div class="class-tab">
      <calendar-packing></calendar-packing>
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
    <bottom-btn :buttonData="buttonData1"></bottom-btn>
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
      buttonData1: {
        text: '查看详情',
        url: '/teacher/enrollmentStatistics'
      }
    }
  },
  mounted () {
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    }
  }
}
</script>
<style lang="less">
  .tab1{
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
  }
</style>
