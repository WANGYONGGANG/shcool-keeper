<template>
<div class="index">
  <div class="banner">
    <!--<img src="../assets/images/banner.jpg" class="img-auto" />-->
    <div class="user-center" @click="goToUser"><icon name="user" scale="2"></icon></div>
  </div>
  <div class="blank01">
    <div class="blank-tit">我的运营仪表盘</div>
    <div class="blank01-box">
      <div class="blank01-box-item01"><icon name="home" scale="6"></icon></div>
      <div class="blank01-box-item02"><dl><dt>已为您生成运营日报</dt><dd>日期：2018-09-19</dd></dl></div>
      <div class="blank01-box-item03"><a class="">立即查看></a></div>
    </div>
  </div>
  <div class="blank02">
    <div class="blank-tit">校区数据统计报表</div>
    <ul class="blank02-category">
      <li class="category-item">
        <icon name="home" scale="3"></icon>
        <span>收费报表</span>
      </li>
      <li class="category-item">
        <icon name="book" scale="3"></icon>
        <span>课消报表</span>
      </li>
      <li class="category-item">
        <icon name="server" scale="3"></icon>
        <span>业绩报表</span>
      </li>
      <li class="category-item">
        <icon name="user" scale="3"></icon>
        <span>班级报表</span>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  methods: {
    goToUser () {
      this.$router.push({path: '/user/userIndex'})
    }
  }
}
</script>
<style lang="less">
  .index{
  /*.img-auto{*/
    /*display: inline-block;*/
    /*width: 100%;*/
  /*}*/
  .fa-icon{
    color: #4983f7;
  }
  .banner{
      width: 100%;
      height: 300px;
      background: #4983f7;
  }
  .user-center{
    position: absolute;
    right: 34px;
    top: 30px;
    background: #fff;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    text-align: center;
    line-height: 40px;

  }

  .blank-tit{
    color: #555d73;
    font-size:24px;
    line-height: 90px;
    padding-left: 10px;
  }
  .blank01{
    padding: 20px 40px 20px 40px;
    .blank01-box{
      width: 675px;
      height: 125px;
      margin: 0 auto;
      background: #fff;
      border-radius:50px;
      display: -webkit-flex; /* Safari */
      display: flex;
    }
    .blank01-box-item01{
      margin-left: 20px;
      margin-top: 20px;
      color: #66b7f6;

    }
  .blank01-box-item02{
    margin: 15px 0 0 20px;
     dt{
    line-height: 50px;
       font-size: 28px;
    }
    dd{
      color: #7e7e7e;
      font-size: 24px;
      line-height: 40px;
    }

  }
  .blank01-box-item03{
    margin: 43px 0 0 131px;
    font-size: 28px;
    a{
      color: #4983f7;
    }
  }
  }
  .blank02{
    padding: 20px 0 0 20px;
  .blank-tit{
    padding-left: 40px;
  }
  .blank02-category{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
  .category-item{
    width: 280px;
    padding: 40px 0 0 40px;
    height: 141px;
    margin: 0 0 30px 30px;
    background: #fff;
    border-radius: 20px;
    .fa-icon{
      display: block;
      margin-bottom: 20px;
    }
  }

  }
  }

  }

</style>
