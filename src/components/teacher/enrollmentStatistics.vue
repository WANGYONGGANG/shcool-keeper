<template>
  <div class="enrollment-statistics">
    <van-cell-group class="card-list-item">
      <van-cell title="市场推广" class="line65 tuition" />
      <van-cell title="客户数量：4" value="比例：66.67%" />
      <van-cell title="转化成功：0" value="转化率：66.67%" />
    </van-cell-group>
    <van-cell-group class="card-list-item">
      <van-cell title="默认" class="line65 tuition" />
      <van-cell title="客户数量：4" value="比例：66.67%" />
      <van-cell title="转化成功：0" value="转化率：100.00%" />
    </van-cell-group>
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
  .enrollment-statistics{
  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
  .line65{
    line-height: 65px;
  }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  }
</style>
