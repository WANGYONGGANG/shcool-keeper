<template>
<div class="class-content">
<div class="content-title">
  上课内容
</div>
<div class="content-detial" ref="mybox">
  上课内容
  <br/>
  <van-cell-group>
    <van-field
      placeholder="暂无上课内容"
      type="textarea"
      autosize
    />
  </van-cell-group></div>
<div class="content-btn"><div class="btn-item gray">取消</div><div class="btn-item blue">确定</div></div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    const innerHeight = window.innerHeight
    this.$refs.mybox.style.height = (innerHeight - 90) + 'px'
  }
}
</script>
<style lang="less" scope>
  .class-content{
    width:100%;
    height: 100%;
    background: #fff;
    .content-title{
      height: 90px;
      line-height: 90px;
      font-size: 28px;
      text-align: center;
      color: #fff;
      background: #1e88f5;
      width: 100%;
    }
  .content-detial{
    padding: 20px;
    line-height: 25px;
  .van-cell{
    font-size: 28px;
    padding: 10px 0;
  }
  .van-field__control{
    line-height: 58px;
  }
  }

  .content-btn{
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    border-top:1px #ecf0f3 solid;
    height: 90px;
    .btn-item{
      width: 50%;
      height: 90px;
      line-height: 90px;
      float: left;
      text-align: center;
    }
    .blue{
      background: #38f;
      color:#fff ;
    }
  }

  }

</style>
