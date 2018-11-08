<template>
  <van-popup v-model="isShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt>日期快速切换</dt>
      <dd v-for="(item,index) in items"  @click="exportResult(item)">{{item}}</dd>
    </dl>
  </van-popup>
</template>
<script>
export default {
  data () {
    return {
      items:['今天','昨天','本周','最近7天','最近30天','本月','上月']
    }
  },
  methods: {
    exportResult (item) {
      this.$store.state.commentPopup.isShow = false
      this.$store.state.commentPopup.item= item
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
