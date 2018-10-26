<template>
  <div class="customers-step-two">
    <van-cell-group>
    <van-cell title="父亲职业" is-link />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="母亲电话">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="母亲职业" is-link />
     </van-cell-group>
    <van-cell-group>
      <van-cell title="家庭电话">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell class="address">
        <van-cell title="家庭住址" />
        <van-field
          v-model="message"
          type="textarea"
          placeholder="输入家庭住址"
          rows="1"
        />
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data () {
  },
  mounted () {
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.customers-step-two{
.van-cell-group{
  border-bottom:20px #eef1f6 solid;
}
.van-cell__value{
.no-border{
  border: none;
  width: 100%;
}
}
.address{
  padding-bottom: 40px;
.van-cell{
  padding-left: 0px;
}
.van-field{
  line-height: 40px;
  height: 120px;
  width:100%;
  padding-left: 20px;
  font-size: 24px;
  border-radius: 10px;
  margin: 0 auto;
  border: 1px #e0e5ed solid;
}
.van-field--min-height .van-field__control{
  min-height: 100px;
}
}
}
</style>
