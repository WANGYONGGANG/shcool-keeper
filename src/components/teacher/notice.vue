<template>
  <div class="notice">
    <div class="commented-tab">
      <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
    </div>
    <div class="timetable-table">
     <div class="empty">还没有通知消息，需要发布一条吗？</div>
    </div>
    <commented-pop></commented-pop>
    <div class="bottom-btn" @click="goTo(urls.resleaseNotice)">发布通知</div>
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
      urls:{
        resleaseNotice:'/teacher/resleaseNotice'
      }
    }
  },
  methods: {
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.notice{
.commented-tab{
  height: 76px;
  padding-top: 10px;
  background: #fff;
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
.timetable-tit{
  height: 80px;
  color: #494847;
  font-size: 28px;
  line-height: 80px;
  padding: 0 30px;
.tit-r{
  float: right;
}
}
.timetable-table{
  background: #fff;
  height: 170px;
.empty{
  line-height: 170px;
  text-align: center;
  font-size: 32px;
  color: #838383;
}
}
.bottom-btn{
  height: 95px;
  line-height: 95px;
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  background: #4286ed;
  color: #fff;
  text-align: center;
  font-size: 32px;
}
}

</style>
