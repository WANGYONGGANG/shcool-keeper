<template>
  <div class="customers-step-two">
    <van-cell-group>
    <van-cell title="父亲职业" is-link />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="母亲电话" required>
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="母亲职业" is-link />
     </van-cell-group>
    <van-cell-group>
      <van-cell title="家庭电话" required>
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell>

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

}
</style>
