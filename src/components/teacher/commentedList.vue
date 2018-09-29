<template>
  <div class="commented-list">
    <van-cell-group>
      <van-cell title="上课内容：" is-link to="/teacher/classContent"/>
      <van-cell title="查看家长回复" value="1" to="/teacher/replyList" is-link />
    </van-cell-group>
    <div class="list-box" @click="goTo">
      <div class="list-box-l">
        <span class="box-l"><img src="../../assets/images/user/test.jpg"/></span>
        <span class="name">张跃龙</span>
        <span><van-checkbox v-model="checked"></van-checkbox></span>
      </div>
      <div class="list-box-r">立即点评<van-icon name="arrow" /></div>
    </div>
    <div class="list-box" @click="goTo">
      <div class="list-box-l">
        <span class="box-l"><img src="../../assets/images/user/test.jpg"/></span>
        <span class="name">张跃龙</span>
        <span><van-checkbox v-model="checked"></van-checkbox></span>
      </div>
      <div class="list-box-r">立即点评<van-icon name="arrow" /></div>
    </div>
    <div class="list-bottom">
      <div class="bottom-l">
        <van-checkbox v-model="checked">全选</van-checkbox>
      </div>
      <div class="bottom-r"><span @click="goTo">上课点评</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        checked: true
      }
    },
    methods: {
      goTo () {
        this.$router.push({path: '/teacher/immediatelyCommented'})
      }
    }
  }
</script>
<style lang="less">
  .commented-list{
    color:#444;
  .van-checkbox{
    height: 50px;
  }
  .van-checkbox__icon .van-icon{
    width: 28px;
    height: 28px;
    font-size: 20px;
    background: #38f;

  }
  .van-checkbox__icon--round .van-icon{
    border-radius: 5px;
  }
  .van-checkbox__icon, .van-checkbox__label{
    position: relative;
    top: 15px;
    left: 25px;
  }

  .van-cell{
    font-size: 28px;
    line-height: 80px;
    border-bottom: 1px #eceff4 solid;
    margin-bottom: 10px;
    padding: 10px 15px 10px 38px;
  }
  .van-cell__right-icon{
    font-size: 24px;
    line-height: 80px;
  }
  .van-cell__value{
    color: #b6b6b6;
  }
  .list-box{
    height: 212px;
    padding: 0 30px;
    border-bottom: 1px #eceff4 solid;
    background:#fff;
  .list-box-l{
    padding-top:10px;
    float: left;
  .box-l{
    width: 78px;
    height: 78px;
    display: inline-block;
    border: 1px #fff solid;
    border-radius: 50%;
    margin:23px 10px 0 0;

  img{
    width: 78px;
    height: 78px;
    border-radius: 50%;

  }
  }
  .name{
    font-size: 26px;
    position: relative;
    top: 10px;
  }

  }

  .list-box-r{
    float: right;
    line-height: 212px;
    color: #b6b6b6;
  .van-icon-arrow{
    margin-left: 10px;
    position: relative;
    top: 4px;
  }
  }
  }
  .list-bottom{
    height: 95px;
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    background: #fff;
  .bottom-l{
    float: left;
    width: 300px;
    padding-top: 10px;
  }
  .bottom-r{
    float: right;
    padding:24px 20px 0 0;
  span{
    background: #38f;
    color: #fff;
    display: inline-block;
    border-radius: 39px;
    padding: 10px 70px;
  }
  }

  }
  }
</style>
