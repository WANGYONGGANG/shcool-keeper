<template>
<div class="user-index">
  <ul class="banner">
    <li class="user-img">
      <img src="../../assets/images/user/test.jpg"/>
    </li>
    <li class="user-name">测试员</li>
    <li class="user-ip" @click="showIpDia">测试<i class="van-icon van-icon-arrow van-cell__right-icon"></i></li>
  </ul>
  <van-cell-group>
    <van-cell title="修改密码" icon="edit-data" is-link to="/user/changePassword" />
    <van-cell title="查看投诉与建议" icon="records" is-link to="/user/blank" />
    <van-cell title="退出登录" icon="sign" is-link />
  </van-cell-group>
  <van-popup v-model="ipShow" position="bottom">
    <dl class="ip-list">
      <dt>身份切换</dt>
      <dd @click="goTo(routerUrl.index)">校长</dd>
      <dd @click="goTo(routerUrl.teacher)">学管师</dd>
      <dd @click="goTo(routerUrl.teacher)">老师</dd>
      <dd @click="goTo(routerUrl.teacher)">班主任</dd>
    </dl>
  </van-popup>
</div>
</template>
<script>
export default {
  data () {
    return {
      ipShow: false,
      routerUrl: {
        index: '/index',
        teacher: '/teacher/teacherIndex'
      }
    }
  },
  methods: {
    showIpDia () {
      this.ipShow = true
    },
    goTo (param) {
      this.$router.push({path: param})
    }

  }
}
</script>
<style lang="less">
  .user-index{
  .banner{
    width: 100%;
    height: 347px;
    background: #4983f7;
  .user-img{
    width: 117px;
    height: 117px;
    padding: 57px 0 0 0;
    margin: 0 auto;
  }
  .user-img img{
    width: 117px;
    height: 117px;
  }
  .user-name{
    color: #fff;
    font-size: 28px;
    text-align: center;
    padding: 30px 0 20px;
  }
  .user-ip{
    width: 163px;
    height: 54px;
    border-radius:50px;
    margin: 0 auto;
    border: 1px #fff solid;
    text-align: center;
    font-size: 24px;
    line-height: 54px;
    color: #fff;
  }
  }
  .van-cell-group{
    background: #eef1f6
  }
  .van-cell{
    font-size: 26px;
    line-height: 80px;
    margin:30px 0 0 0 ;
    padding: 8px 15px 0;
  }
  .van-cell__left-icon{
    font-size: 28px;
    line-height: 80px;
    margin:0 25px 0 15px;
    color: #4983f7;
  }
  .van-cell__right-icon{
    font-size: 20px;
  }
  .van-cell__right-icon:before{
    -webkit-transform: rotate(90deg);
    color: #fff;
  }
  .van-popup{
    width: 100%;
  }
  .ip-list{
    background:#fff ;

    text-align: left;

  }
  .ip-list dt{
    text-align: center;
    font-size: 32px;
    line-height: 100px;
  }
  .ip-list dd{
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    text-indent: 15px;
    border-bottom:1px #eef1f6 solid ;
  }
  }

</style>
