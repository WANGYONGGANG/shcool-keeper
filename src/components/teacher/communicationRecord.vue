<template>
<div class="communication-record">
  <div class="charge-top">
    <calendar-packing></calendar-packing>
  </div>
  <div class="timetable-table">
    <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
    <div class="table-l">
      <div class="class-tit">潮人部落</div>
      <div class="class-details"><span class="time">7-414:原有一对一53</span></div>
      <div class="class-text">是是是</div>
      <div class="class-details"> <span class="time">下次跟进： 电话联系</span></div>
    </div>
    <div class="table-r">
      <span class="completion" @click="goTo(urls.addCommunicationRecord)"><van-icon name="edit-data" color="#4286ed" size="30px"/></span>
    </div>
  </div>
  <div class="timetable-table">
    <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
    <div class="table-l">
      <div class="class-tit">潮人部落</div>
      <div class="class-details"><span class="time">7-414:原有一对一53</span></div>
      <div class="class-text">是是是</div>
      <div class="class-details"> <span class="time">下次跟进： 电话联系</span></div>
    </div>
    <div class="table-r">
      <span class="completion" @click="goTo(urls.addCommunicationRecord)"><van-icon name="edit-data" color="#4286ed" size="30px"/></span>
    </div>
  </div>
  <bottom-btn :buttonData="buttonData"></bottom-btn>
</div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    CalendarPacking,
    BottomBtn
  },
  data () {
    return {
      urls: {
        addCommunicationRecord: '/teacher/addCommunicationRecord'
      },
      buttonData: {
        text: '添加沟通记录',
        url: '/teacher/addCommunicationRecord'
      }
    }
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    }
  },
  created () {
  }
}
</script>
<style lang="less">
.communication-record{
  .timetable-table{
    background: #fff;
    border-bottom: 1px #eff1f6 solid;
    height: 270px;
  .img{
    width: 80px;
    height: 80px;
    float: left;
    padding: 80px 30px 0 30px;
    border-radius: 100%;
    img{
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
  }
  .empty{
    line-height: 270px;
    text-align: center;
    font-size: 32px;
    color: #838383;
  }
  .table-l{
    float: left;
    padding-left:60px;

  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 50px;
  .name{
    padding-right: 15px;

  }
  .people-num{
    padding-left: 10px;
  }

  }
.class-text{
  font-size: 30px;
  line-height: 56px;
  padding-bottom: 20px;
}
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    padding-top: 35px;
    width: 180px;
    color: #838383;
  .completion{
    display: inline-block;
    border-radius: 50px;
    line-height: 40px;
    padding: 0 20px;
    margin: 0px auto 0;
  }
  }
  }
.quick-schedule{
  height: 99px;
  line-height: 99px;
  font-size: 32px;
  color: #fff;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0px;
  background: #4286ed;
  z-index: 100;

}
}

</style>
