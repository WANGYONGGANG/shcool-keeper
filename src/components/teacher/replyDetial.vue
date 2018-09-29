<template>
<div class="reply-list">
  <div class="list-cont" @click="goTo">
    <div class="cont-l">
      <dl><dt>2018.09.13 18:34</dt><dd>老师仪容仪表5星；教学态度5星；教学内容五星</dd></dl>
    </div>
    <div class="cont-r"><van-icon name="arrow" /></div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  methods: {
    goTo () {
      this.$router.push({path: '/teacher/commentedList'})
    }
  }
}
</script>
<style lang="less">
  .reply-list{
    .list-cont{
      padding: 0 25px;
      background: #fff;
      height: 137px;

      .cont-l{
        padding-top: 20px;
        float: left;
        dt{
          font-size: 24px;
          color: #888;
          line-height: 50px;
        }
        dd{
          font-size: 26px;
          color: #444;
        }
      }
  .cont-r{
    line-height: 137px;
    float: right;
    .van-icon-arrow{
      color: #888;
    }
  }
    }
  }
</style>
