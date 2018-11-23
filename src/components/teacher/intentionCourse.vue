<template>
  <div class="course">
     <van-cell title="课程(1)" @click="clickFn('item01')">
    </van-cell>
      <van-cell title="校区" is-link   @click="clickFn('item01')">
       <!-- {{rightPopDates.item01.selectItem}} -->
    </van-cell>
     <van-cell title="意向课程" is-link   @click="clickFn('item01')">
       <!-- {{rightPopDates.item01.selectItem}} -->
    </van-cell>
     <van-cell title="意向班级" is-link   @click="clickFn('item01')">
       <!-- {{rightPopDates.item01.selectItem}} -->
    </van-cell>
      <div class="button">
        <div><span>添加课程</span></div><div><span>确认</span></div>
      </div>
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
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
  .course{
    width: 750px;
    .button{
      height: 85px;
      width: 750px;
      background-color: #fff;
      position: fixed;
      bottom: 0px;;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      div:nth-child(1){
        color: #4286ed;
        border: 1px solid #4286ed;
        margin-right: 20px;
      }
      div:nth-child(2){
        background-color: #4286ed;
        color: #fff;
      }
      div{
        width: 200px;
        border-radius: 100px;
        height: 60px;
        text-align: center;
        line-height: 60px;
      }
    }
  }
</style>
