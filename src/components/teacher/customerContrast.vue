<template>
  <div class="customer-contrast">
    <van-cell-group class="card-list-item">
      <van-cell title="潮人部落" value="6人" />
      <van-cell>
        <div class="progress"></div>
      </van-cell>
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
      buttonData: {
        text: '对比',
        url: ''
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  .customer-contrast{
  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
  }
  .progress{
    width: 100%;
    height: 10px;
    border-radius: 40px;
    background: #4286ed;
    margin: 20px auto;
  }
  }
</style>
