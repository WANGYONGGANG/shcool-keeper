<template>
<div class="password">
  <van-cell-group>
    <van-field
      v-model="password"
      type="password"
      label="旧密码"
      placeholder="输入旧密码"
      border
    />
    <van-field
      v-model="password"
      type="password"
      label="新密码"
      placeholder="输入新密码"
      border
    />
    <van-field
      v-model="password"
      type="password"
      label="确认密码"
      placeholder="重复输入新密码"
      border
    />
  </van-cell-group>
  <van-button type="default" size="large" block>保存</van-button>

</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  .password{
  .van-cell{
    font-size: 28px;
    line-height: 100px;
    /*border-bottom:1px #141414 solid ;*/
  }
  .van-field .van-cell__title{
    max-width: 150px;
  }
  .van-button--large{
    font-size: 32px;
    line-height: 90px;
    height: 90px;
    width: 80%;
    margin: 50px auto 0;
    background: #4983f7;
    color: #fff;
    border-radius: 5px;
  }

  }

</style>
