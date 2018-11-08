<template>
  <div class="notice">
    <calendar-packing></calendar-packing>
    <div class="timetable-table">
     <div class="empty">还没有通知消息，需要发布一条吗？</div>
    </div>
    <div class="bottom-btn" @click="goTo(urls.resleaseNotice)">发布通知</div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking
  },
  data () {
    return {
      urls: {
        resleaseNotice: '/teacher/resleaseNotice'
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
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
    item :{
      //日期快速切换值
      handler(val){
        this.$toast(val)
      }
    }
  }
}
</script>
<style lang="less">
.notice{
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
