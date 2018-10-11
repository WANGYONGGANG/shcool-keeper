<template>
  <div class="student-completion">
    <van-tabs type="card">
      <van-tab v-for="(item,index) in tabItem" :title="item" :key="index">
      <div class="card-list">
        <div class="card-list-l"><img class="img" src="../../assets/images/user/test.jpg"/>王梓桐
        </div>
        <div class="card-list-r">待评价<van-icon name="arrow" /></div>
      </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabItem: ['全部', '已提交', '未提交']
    }
  }
}
</script>
<style lang="less">
.student-completion{
  padding: 20px;
  background: #fff;
  .van-tab{
  font-size: 26px;
}
.van-tabs--card{
  padding-top: 75px;
}
.van-tabs__nav--card .van-tab.van-tab--active{
  background-color: #4286ed;
  color: #fff;
}
.van-tabs--card .van-tabs__wrap{
  height: 56px;
}
.van-tabs__nav--card{
  border: 1px #4286ed solid;
  height: 56px;

}
.van-tabs__nav--card .van-tab{
  border-right:1px #4286ed solid ;
  line-height: 56px;
  color: #4286ed;
}
.student-completion .van-tabs__nav--card .van-tab{

}
.card-list{
height:90px;
line-height:90px;
width:650px;
margin:0 auto;
  .card-list-l{
    float: left;
    .img{
      width: 60px;
      height: 60px;
      display: inline-block;
      border-radius: 100%;
      margin-right: 15px;
      vertical-align: middle;
    }
  }
.card-list-r{
  float: right;
  .van-icon{
    top:3px;
    color: #333333;
  }
}
}
}
</style>
