<template>
  <div class="customer-communication-record">
    <calendar-packing></calendar-packing>
      <ul class="record-list">
        <li class="record-list-item01">
          <span class="list-item01-l"><img class="img" src="../../assets/images/user/test.jpg"/></span>
          <span class="list-item01-m">内置管理员<br/><i class="time">2018-07-16 20:09:56</i></span>
          <span class="list-item01-r">无效沟通<i class="edit"><van-icon name="edit" /></i></span>
        </li>
        <li class="record-list-item02">已回收客户重新分配：主责任人</li>
        <li class="record-list-item03">下次跟进：2018-07-16</li>
        <li class="record-list-item03">到访日期：2018-07-27</li>
      </ul>
    <ul class="record-list">
      <li class="record-list-item01">
        <span class="list-item01-l"></span>
        <span class="list-item01-m">内置管理员<br/><i class="time">2018-07-16 20:09:56</i></span>
      </li>
      <li class="record-list-item02">已回收客户重新分配：主责任人</li>
      <li class="record-list-item03">下次跟进：2018-07-16</li>
      <li class="record-list-item03">到访日期：2018-07-27</li>
      <li class="record-list-item04">是否到访<van-switch v-model="checked" size="25px" /><span>实到访日：2018-07-04 17:00</span></li>
      <li class="record-list-item05">待审核</li>
    </ul>
    <commented-pop></commented-pop>
    <div class="bottom-btn" @click="goTo(urls.addCommunicationRecordTwo)">添加沟通记录</div>
  </div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking
  },
  data () {
    return {
      checked: true,
      urls: {
        addCommunicationRecordTwo: '/teacher/addCommunicationRecordTwo'
      }
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
.customer-communication-record{
  background: #fff;
.record-list{
  margin-bottom: 20px;
  padding-bottom: 20px;
  .record-list-item01{
    padding-left: 20px;
  span{
    display: inline-block;
  }
    .list-item01-l{
      width: 60px;
      height: 60px;
      border-radius: 100%;
      background: #eff1f6;
      margin-right: 15px;
      position: relative;
      top: -17px;
      vertical-align: middle;
      img{
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 100%;
        margin-right: 15px;
      }
    }
.list-item01-m{
  padding-top: 20px;
  .time{
    font-size: 20px;
    font-style: normal;
    color: #333333;
  }
}
.list-item01-r{
  float: right;
  color: #7c4f45;
  padding-right: 20px;
  padding-top: 20px;
  font-size: 20px;
  .edit{
    display: inline-block;
    color: #4286ed;
    margin-left: 10px;
    position: relative;
    top: 2px;
  }
}
  }
.record-list-item02{
  padding-left: 100px;
  line-height: 45px;
}
.record-list-item03{
  padding-left: 100px;
  line-height: 45px;
  font-size: 20px;
}
.record-list-item04{
  padding-left: 100px;
  line-height: 65px;
  padding-right: 20px;
  border-top: 1px #eff1f6 solid;
  font-size: 20px;
  span{
    float: right;
  }
.van-switch--on{
  background-color: #4286ed;
  position: relative;
  top: 6px;
  margin-left: 10px;
}
}
.record-list-item05{
  text-align: right;
  padding-right: 20px;
  font-size: 20px;
  color: #4286ed;
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
