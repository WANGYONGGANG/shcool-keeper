<template>
  <div class="resultinput">
   <dl class="resultinput-item01">
     <dt>考试名称</dt>
     <dd>学习班考试</dd>
   </dl>
    <dl class="resultinput-item02">
      <dt>选择此次考试您需要录入成绩的班级里的<br/>所有学员</dt>
      <dd><span>选择班级</span></dd>
    </dl>
    <dl class="resultinput-item02">
      <dt>选择此次考试您需要录入成绩学员，并选<br/>择学员所在班级</dt>
      <dd><span class="yellow">选择学员</span></dd>
    </dl>
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {
    onSearch () {
    },
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.resultinput{
  .resultinput-item01{
    width: 100%;
    background: #fff;
    padding-bottom: 50px;
    text-align: center;
    dt{
      font-size: 24px;
      padding-top: 50px;
      color: #827f77;
    }
    dd{
      font-size: 32px;
      padding-top: 30px;
    }
  }
.resultinput-item02{
  width: 95%;
  background: #fff;
  margin: 20px auto 0;
  padding: 40px 0 50px;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #827f77;
  span{
    display: inline-block;
    width: 77%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    margin: 40px auto 0;
    color: #fff;
    font-size: 32px;
    background: #4286ed;
    border-radius: 40px;
  }
  .yellow{
    background: #f6b10b;
  }
}
}

</style>
