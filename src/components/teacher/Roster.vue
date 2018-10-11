<template>
<div class="roster">
  <div class="naming-table" @click="goTo">
    <div class="table-l">
      <div class="class-tit">17暑假初二英语同步班_补课班级</div>
      <div class="class-address"><van-icon name="location" />超人部落</div>
    </div>
    <div class="table-r">
      <van-icon name="contact" />1
    </div>
  </div>
  <div class="naming-table">
    <div class="table-l">
      <div class="class-tit">17暑假初二英语同步班_补课班级</div>
      <div class="class-address"><van-icon name="location" />超人部落</div>
    </div>
    <div class="table-r">
      <van-icon name="contact" />1
    </div>
  </div>
  <div class="naming-table">
    <div class="table-l">
      <div class="class-tit">17暑假初二英语同步班_补课班级</div>
      <div class="class-address"><van-icon name="location" />超人部落</div>
    </div>
    <div class="table-r">
      <van-icon name="contact" />1
    </div>
  </div>
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
      this.$router.push({path: '/teacher/rosterDetial'})
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .roster{
  padding-top:20px;
  .naming-table{
    background: #fff;
    height: 170px;
    width: 95%;
    border-radius: 10px;
    margin: 0 auto 20px;
  .table-l {
    float: left;
    padding-left: 30px;
  .class-tit {
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-address {
    font-size: 24px;
    color: #838383;
    line-height: 70px;
  .van-icon {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
  }
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    width: 120px;
    padding-top: 92px;
    color: #838383;
  .van-icon{
    margin-right: 5px;
    color: #dc951a;
    font-size: 22px;
  }
  }
  }
  }

</style>
