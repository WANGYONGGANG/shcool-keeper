<template>
  <van-popup v-model="ipShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt>选择校区</dt>
      <dd @click="goTo">潮人部落</dd>
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
      this.$store.state.schoolPopup.isShow = false
    },
    closePop () {
      this.$store.state.schoolPopup.isShow = false
    }
  },
  mounted () {
    console.log(this.$store.state.schoolPopup)
  },
  computed: {
    ipShow: {
      get () {
        return this.$store.state.schoolPopup.isShow
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
