<template>
<div class="complaints-detial">
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
    <div class="complaints-txt">灯火辉煌
    <br/>
    <img src="../../assets/images/banner.jpg" width="400">
    </div>
  </section>
  <div class="class-evaluation">
    <van-cell-group>
      <van-cell title="回复"/>
      <van-field v-model="message" type="textarea" placeholder="输入回复内容（500字以内）" rows="1"/>
    </van-cell-group>
  </div>
  <ul class="check">
    <li class="check-item01"><input type="checkbox">匿名回复</li>
    <li class="check-item02">勾选"匿名回复"后，家长不能看到回复人的具体姓名，否则，系统会显示回复人的真实姓名</li>
  </ul>
<div class="complaints-submit">提交</div>
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
      alert('111')
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
  .complaints-detial{
    padding-bottom: 40px;
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
  .class-evaluation {
    width: 692px;
    background: #fff;
    margin: 0 auto;
  .van-cell {
    font-size: 28px;
    line-height: 24px;
    padding: 35px 15px;
  }
  .van-field {
    line-height: 40px;
    height: 300px;
    width: 95%;
    margin: 0 auto;
    border: 1px #e0e5ed solid;
  }
  .van-field--min-height .van-field__control {
    min-height: 300px;
  }

  }

  .check{
    margin-top: 20px;
    padding: 20px 40px;
    .check-item01{
      font-size: 28px;
      input{
        width: 25px;
        height: 25px;
        margin-right: 10px;
        position: relative;
        top: 2px;
      }
    }
    .check-item02{
      line-height: 30px;
      font-size: 20px;
      padding-top: 10px;
      color: #98999e;
    }

  }
  .complaints-submit{
    width: 90%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #fff;
    background: #4286ed;
    margin: 30px auto;
    font-size: 28px;
  }
  }

</style>
