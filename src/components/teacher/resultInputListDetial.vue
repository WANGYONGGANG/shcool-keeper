<template>
  <div class="result-input-list-detial">
    <div class="detial-tit">
      考试名称：学习班考试
      <span>0000李八的成绩</span>
    </div>
    <van-cell-group>
      <van-field v-model="value1" label="语文" />
      <van-field v-model="value2" label="数学" />
      <van-field v-model="value3" label="英语" />
      <van-field
        v-model="message"
        label="备注"
        type="textarea"
        placeholder="最多输入200个子符"
        autosize
      />
    </van-cell-group>


  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      urls: {

      }
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.result-input-list-detial{
  padding: 20px;
  background: #fff;
  .van-tab{
  font-size: 26px;
}

}
</style>
