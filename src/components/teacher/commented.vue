<template>
  <div class="commented">
    <div class="commented-tab">
      <span class="tab-radius">2018-09-01</span> － <span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
    </div>
    <div class="timetable-table" @click="goTo">
      <div class="table-l">
        <div class="class-tit">17暑假初二英语同步班_补课班级</div>
        <div class="class-details"><span class="time"><van-icon name="idcard" />17暑假初二英语同</span></div>
        <div class="class-details"> <span class="time"><van-icon name="clock" />09:00-11:00</span></div>
      </div>
      <div class="table-r">
        点评<br/>
        <span class="completion">0/2</span>
      </div>
    </div>
    <commented-pop></commented-pop>
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
      }
    },
    methods: {
      showCommentedDia () {
        this.$store.state.commentPopup.isShow = true
      },
      goTo () {
        this.$router.push({path: '/teacher/commentedList'})
      }
    }
  }
</script>
<style lang="less">
  .commented{
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
    margin: 17px 10px 0;
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
  .table-l{
    float: left;
    padding-left:30px;

  /*width: 550px;*/
  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 40px;
  .name{
    padding-right: 15px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 15px;
    color: #dc951a;

  }
  }
  .time{
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 15px;
    color: #dc951a;
  }
  }
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
    margin: 15px auto 0;
  }
  }
  }
  }

</style>
