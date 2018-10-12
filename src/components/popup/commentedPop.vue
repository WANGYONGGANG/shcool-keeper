<template>
  <van-popup v-model="isShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt>日期快速切换</dt>
      <dd @click="goTo">今天</dd>
      <dd @click="goTo">昨天</dd>
      <dd @click="goTo">本周</dd>
      <dd @click="goTo">最近7天</dd>
      <dd @click="goTo">最近30天</dd>
      <dd @click="goTo">本月</dd>
      <dd @click="goTo">上月</dd>
    </dl>
  </van-popup>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goTo (url) {
      this.$store.state.commentPopup.isShow = false
    },
    closePop () {
      this.$store.state.commentPopup.isShow = false
    }
  },
  mounted () {
  },
  computed: {
    isShow: {
      get () {
        return this.$store.state.commentPopup.isShow
      },
      set () {
      }
    }
  }
}
</script>
<style lang="less">
  .van-popup{
    width: 100%;
  }
  .ip-list{
    background:#fff ;
    text-align: left;
    dt{
    text-align: center;
    font-size: 30px;
    line-height: 100px;
    color: #838383;
  }
    dd{
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    text-indent: 15px;
    border-bottom:1px #eef1f6 solid ;
  }

  }

</style>
