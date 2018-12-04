<template>
<div class="complaints">
  <section @click="goTo(urls.complaintsDetial)">
    <div class="timetable-table">
      <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
      <div class="table-l">
        <div class="class-tit">张跃龙</div>
        <div class="class-details"><span class="time">2018-11-22 20:26</span></div>
      </div>
      <div class="table-r">
        <van-icon name="pending-evaluate" />
      </div>
    </div>
    <div class="complaints-txt">灯火辉煌</div>
  </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      urls:{
        complaintsDetial:'/user/complaintsDetial'
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
  .complaints{
  background:#fff;
  .timetable-table{
    background: #fff;
    border-bottom: 1px #eff1f6 solid;
    height: 126px;
  .img{
    width: 80px;
    height: 80px;
    float: left;
    padding: 26px 30px 0 30px;
    border-radius: 100%;
  img{
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  }
  .empty{
    line-height: 170px;
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
    line-height: 40px;


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
.complaints-txt{
  text-align: left;
  padding: 0 30px 20px 40px;
  line-height: 40px;
  font-size: 26px;
}
  }

</style>
