<template>
  <van-tabbar v-model="isActive" @change="onChange" class="bottom-tabbar">
    <van-tabbar-item icon="shop" to="/teacher/teacherIndex">主页</van-tabbar-item>
    <van-tabbar-item icon="chat" >师生信</van-tabbar-item>
    <van-tabbar-item icon="records" to="/teacher/mine" >我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onChange (index) {
      console.log(index)
      this.$store.state.navbar.active = index
    }
  },
  computed: {
    isActive: {
      get () {
        return this.$store.state.navbar.active
      },
      set () {
      }
    }
  }
}
</script>
<style lang="less">
  .bottom-tabbar{
    height: 100px;
  .van-tabbar-item{
    font-size: 24px;
  }
  .van-tabbar-item__icon{
    font-size: 34px;
    margin-bottom: 10px;
  }
  .van-cell__right-icon{
    font-size: 20px;
    margin-left: 10px;
  }
  .van-cell__right-icon:before{
    -webkit-transform: rotate(90deg);
    color: #ee8434;
  }
  .van-tabbar{
    background-color: #f2f2f2;
  }

  }

</style>
