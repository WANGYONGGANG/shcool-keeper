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
    <bottom-btn :buttonData="buttonData"></bottom-btn>
  </div>
</template>
<script>
  import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    BottomBtn
  },
  data () {
    return {
      active: 0,
      urls: {
      },
      buttonData: {
        text: '确认提交',
        url: ''
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
  .van-tab{
  font-size: 26px;
}

.detial-tit{
  color: #838383;
  padding: 20px 0 0;
  text-align: center;
  font-size: 27px;
  span{
    font-size: 28px;
    color: #333333;
    display: inline-block;
    width: 100%;
    padding: 20px 0;
    text-align: center;
  }
}
.van-cell{
  border-bottom: 20px #eef1f6 solid;
}
}
</style>
