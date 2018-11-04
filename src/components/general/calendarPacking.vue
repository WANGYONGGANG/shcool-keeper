<template>
  <div>
  <div class="commented-tab">
    <span class="tab-radius" @click="showCalendar">2018-09-01</span>-<span class="tab-radius" @click="showCalendar">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
  </div>
  <commented-pop></commented-pop>
  <calendar></calendar>
  </div>
</template>
<script>
//日历选择组件
import CommentedPop from '../popup/commentedPop'
import Calendar from './calendar'
export default {
  components: {
    CommentedPop,
    Calendar
  },
  methods: {
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    showCalendar () {
      this.$store.state.calendar.isShow = true
    }
  }
}
</script>
<style lang="less">
.commented-tab{
  height: 76px;
  padding-top: 10px;
  background: #fff;
  margin-bottom: 10px;
  padding-left:20px;
.tab-radius{
  height: 48px;
  display: inline-block;
  padding: 0px 30px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 50px;
  border: 1px #d4daea solid;
  margin: 8px 10px 0;
}
.arrow-down .van-icon{
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
}

</style>
