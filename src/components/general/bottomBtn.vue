<template>
  <div class="bottom-btn" @click="goTo(buttonData.url)">{{buttonData.text}}</div>
</template>
<script>
export default {
  props: ['buttonData'],
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .bottom-btn{
    height: 99px;
    line-height: 99px;
    font-size: 32px;
    color: #fff;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background: #4286ed;
    z-index: 100;

  }
</style>
