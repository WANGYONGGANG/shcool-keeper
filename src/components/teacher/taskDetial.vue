<template>
  <div class="taskDetial">
    <dl>
      <dt class="title">基础舞蹈</dt>
      <dd class="subtltle"><span><van-icon name="contact" />测试员</span><span><van-icon name="clock" />2018-07-04 11:28</span></dd>
      <dd class="text">就这样吧，我不不写了</dd>
    </dl>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
.taskDetial{
  width: 696px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  .title{
    font-size: 28px;
    line-height: 45px;
  }
  .subtltle{
    font-size: 24px;
    color: #bbb;
    line-height: 72px;
    .van-icon{
      position: relative;
      top: 4px;
      margin-right: 6px;
    }
    .van-icon-clock{
      margin-left: 15px;
    }
  }
  .text{
    font-size: 26px;
    line-height: 35px;
    color: #999;
  }
}
</style>
