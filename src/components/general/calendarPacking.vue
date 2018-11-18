<template>
  <div>
  <div class="commented-tab" ref="calendar">
    <span class="tab-radius" @click="showCalendar(1)" >{{calendar.item1.date}}</span>-<span class="tab-radius" @click="showCalendar(2)">{{calendar.item2.date}}</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
  </div>
  <commented-pop></commented-pop>
    <!--每个日历选择按钮都需要调用一个日历组件-->
    <calendar :date.sync="calendar.item1.date" :isVisible.sync="calendar.item1.isVisible" v-on:updateDate=updateDate></calendar>
    <calendar :date.sync="calendar.item2.date" :isVisible.sync="calendar.item2.isVisible" v-on:updateDate=updateDate></calendar>
  </div>
</template>
<script>
//日历选择组件
import CommentedPop from "../popup/commentedPop";
import Calendar from "./calendar";
export default {
  components: {
    CommentedPop,
    Calendar
  },
  props: ["begin_date", "end_date"],
  data() {
    return {
      calendar: {
        item1: {
          isVisible: false,
          date: this.begin_date
          // date:'2018-11-01'    //作业列表页数据所需时间范围
        },
        item2: {
          isVisible: false,
          date: this.end_date
          // date:'2018-11-31'    //作业列表页数据所需时间范围
        }
      }
    };
  },
  mounted() {
    this.getDefaultDate();
  },
  watch: {
    calendar: {
      handler(val) {
        console.log("val");
        //  this.$toast(val)
      },
      deep: true
    }
  },
  methods: {
    showCommentedDia() {
      this.$store.state.commentPopup.isShow = true;
    },
    getDefaultDate: function() {
      if(!this.begin_date){
          this.calendar.item1.date="2018-11-01";
      }
      if(!this.end_date){
         this.calendar.item2.date="2018-11-31";
      }
    },
    updateDate: function(newDate) {
      // console.log(this.calendar);
      this.$emit(
        "updateDate",
        this.calendar.item1.date,
        this.calendar.item2.date
      );
    },
    showCalendar(n) {
      //根据参数显示对应日历弹层
      switch (n) {
        case 1:
          this.calendar.item1.isVisible = true;
          break;
        case 2:
          this.calendar.item2.isVisible = true;
          break;
        default:
          Toast("出错了");
      }
    }
  }
  //回调参数试用方法 哪个页面用到
  //  computed : {
  //    item () {
  //      return this.$store.state.commentPopup.item
  //    }
  //  },
};
</script>
<style lang="less">
.commented-tab {
  height: 76px;
  padding-top: 10px;
  background: #fff;
  margin-bottom: 10px;
  padding-left: 20px;
  .tab-radius {
    height: 48px;
    display: inline-block;
    padding: 0px 30px;
    font-size: 24px;
    line-height: 48px;
    border-radius: 50px;
    border: 1px #d4daea solid;
    margin: 8px 10px 0;
  }
  .arrow-down .van-icon {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
</style>
