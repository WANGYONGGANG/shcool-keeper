<template>
  <div class="bulletinDetial">
    <dl>
      <dt class="title">放暑假</dt>
      <dd class="subtltle">2018-08-16</dd>
      <dd class="text">就这样吧，我不不写了</dd>
    </dl>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less">
.bulletinDetial{
  padding: 20px;
  min-height: 500px;
  background: #fff;
  .title{
    font-size: 32px;
    line-height: 45px;
    padding-left: 20px;
  }
  .subtltle{
    font-size: 28px;
    color: #bbb;
    padding-left: 20px;
    line-height: 72px;
    border-bottom:1px #eff1f6 solid ;
  }
  .text{
    font-size: 26px;
    line-height: 35px;
    padding-top: 40px;
    color: #999;
    text-indent: 2em;
  }
}
</style>
