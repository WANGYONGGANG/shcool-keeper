<template>
  <div class="reply-detial">
    <dl class="detial-list">
      <dt>教学内容</dt>
      <dd><van-rate v-model="value" size="40" disabled-color="#f8d304" disabled /></dd>
    </dl>
    <dl class="detial-list">
      <dt>教学态度</dt>
      <dd><van-rate v-model="value" size="40" disabled-color="#f8d304" disabled /></dd>
    </dl>
    <dl class="detial-list">
      <dt>教学仪容仪表</dt>
      <dd><van-rate v-model="value" size="40" disabled-color="#f8d304" disabled /></dd>
    </dl>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 5
      }
    }
  }
</script>
<style lang="less">
  .reply-detial{
    .detial-list{
      padding: 30px 0;
      background: #fff;
      margin-bottom: 15px;
      text-align: center;
      dt{
        color: #444;
        font-size: 28px;
        line-height: 40px;
      }
      dd{
        padding:20px 0 0;
      }
    }

  }
</style>
