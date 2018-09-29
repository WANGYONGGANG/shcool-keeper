<template>
<div class="naming">
  <div class="naming-tab">
    9月28日(周五)
  </div>
  <div class="naming-table">
    <div class="table-l">
      <div class="class-tit">17暑假初二英语同步班_补课班级</div>
      <div class="class-address"><van-icon name="location" />超人部落</div>
      <div class="class-details">
        <span class="name"><van-icon name="idcard" />17暑假初二英语同</span>
        <span class="time">09:00-11:00<i class="no-class">未上课</i></span>
      </div>
    </div>
    <div class="table-r">
     0/1
    </div>
  </div>
  <div class="quick-schedule" @click="chooseClass">快速排课</div>
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    chooseClass () {
      this.$router.push({path: '/teacher/chooseClass'})
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .naming{
    .naming-tab{
      height: 86px;
      background: #fff;
      padding-left:20px;
      text-align: center;
      line-height: 86px;
      font-size: 28px;
    }

  .naming-table{
    background: #fff;
    height: 170px;
  margin-top:10px;
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
  .class-address{
    font-size: 24px;
    color: #838383;
    line-height: 40px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;
    color: #dc951a;
  }
  }
  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 50px;
  .name{
    padding-right: 15px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;
    color: #dc951a;

  }
  }
  .time{
    .no-class{
      font-size: 15px;
      height: 23px;
      line-height: 23px;
      position: relative;
      top: -3px;
      font-style: normal;
      display: inline-block;
      background: #ebf5ff;
      color: #0a64d9;
      text-align: center;
      padding: 2px 5px;
      border-radius: 20px;
      margin-left: 15px;

    }
  }
  }
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    width: 120px;
    line-height: 170px;
    color: #838383;

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
