<template>
  <van-popup v-model="ipShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt>身份切换</dt>
      <dd @click="goTo(routerUrl.index)">校长</dd>
      <dd @click="goTo(routerUrl.studytube)">学管师</dd>
      <dd @click="goTo(routerUrl.teacher)">老师</dd>
      <dd @click="goTo(routerUrl.headmaster)">班主任</dd>
    </dl>
  </van-popup>
</template>
<script>
export default {
  data () {
    return {
      routerUrl: {
        index: '/index',
        teacher: '/teacher/teacherIndex/teacher',
        studytube: '/teacher/teacherIndex/studytube',
        headmaster: '/teacher/teacherIndex/headmaster'
      }
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
      this.$store.state.ipPopup.ipShow = false
    },
    closePop () {
      this.$store.state.ipPopup.ipShow = false
    }
  },
  mounted () {
  },
  computed: {
    ipShow: {
      get () {
        return this.$store.state.ipPopup.ipShow
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
    font-size: 32px;
    line-height: 100px;
  }
    dd{
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    text-indent: 15px;
    border-bottom:1px #eef1f6 solid ;
  }

  }

</style>
