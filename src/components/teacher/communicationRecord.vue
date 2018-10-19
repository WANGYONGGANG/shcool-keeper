<template>
<div class="communication-record">
  <div class="charge-top">
    <div class="charge-top-tab">
      <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
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
  <commented-pop></commented-pop>
</div>
</template>
<script>
import CommentedPop from '../popup/commentedPop'
import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    CommentedPop,
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
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
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
  .charge-top{
    padding-top: 10px;
    height: 86px;
    background: #fff;
    .charge-top-tab{
      float: left;
      width: 500px;
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
  }

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
