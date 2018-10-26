<template>
<div class="mine">
  <ul class="banner">
    <li class="user-img">
      <img src="../../assets/images/user/test.jpg"/>
    </li>
    <li class="user-name">测试员</li>
    <li class="user-ip">班主任</li>
  </ul>

  <van-cell-group>
    <van-cell title="修改密码" icon="edit-data" is-link to="/user/changePassword" />
    <van-cell title="修改图像" icon="records" is-link to="" />
    <van-cell title="招生二维码" icon="records" is-link to="" />
  </van-cell-group>

  <van-cell-group>
    <van-cell title="工作统计" icon="edit-data" is-link to="/user/workStatistics" />
    <van-cell title="家长评价排名" icon="records" is-link to="" />
    <van-cell title="投诉与建议" icon="sign" is-link />
  </van-cell-group>

  <van-cell-group>
    <van-cell title="老师秀" icon="edit-data" is-link to="" />
    <van-cell title="电子推荐卡" icon="edit-data" is-link to="" />
  </van-cell-group>
  <van-cell-group>
    <van-cell title="退出登陆" icon="edit-data" is-link to="" />
  </van-cell-group>
  <btm-tobbar></btm-tobbar>
</div>
</template>
<script>
import BtmTobbar from '../general/tabbar'
export default {
  components: {
    BtmTobbar
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  .mine{
  .banner{
    width: 100%;
    height: 347px;
    background: #4983f7;
  .user-img{
    width: 117px;
    height: 173px;
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
    background: #eef1f6;
    margin:0 0 30px 0 ;
  }
  .van-cell{
    font-size: 26px;
    line-height: 80px;
    padding: 8px 15px 0;
    margin: 0;
  }
  .van-cell__left-icon{
    font-size: 28px;
    line-height: 80px;
    margin:0 25px 0 15px;
    color: #4983f7;
  }
  .van-cell__right-icon{
    line-height: 100px;
    font-size: 20px;
  }

  }

</style>
