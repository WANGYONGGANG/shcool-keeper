<template>
  <div class="bulletin">
    <van-cell-group>
      <van-cell title="放暑假" label="2018-09-19" is-link to="/teacher/bulletinDetial" />
      <van-cell title="放暑假" label="2018-09-19" is-link to="/teacher/bulletinDetial" />
      <van-cell title="放暑假" label="2018-09-19" is-link to="/teacher/bulletinDetial" />
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
    goTo () {
      this.$router.push({path: '/teacher/bulletinDetial'})
    }
  }
}
</script>
<style lang="less">
.bulletin{
.van-cell-group{
  padding: 10px 20px;
  background: none;
.van-cell{
  padding: 25px 20px;
  margin: 20px auto 0;
  font-size: 28px;
  line-height: 56px;
  background: #fff;
}
.van-cell__label{
  font-size: 24px;
  line-height: 2;
}
.van-cell__right-icon{
  font-size: 26px;
  position: relative;
  top: 41px;
}
}
}

</style>
