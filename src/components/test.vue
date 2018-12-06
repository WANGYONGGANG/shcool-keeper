<template>
  <van-popup v-model="isShow" position="right" class="source-filter">
    <div class="filter-box">
        <ul class="box-l">
          <li>SSSS</li>
          <li>SSSS</li>
        </ul>
      <section class="box-r"></section>
    </div>
    <div class="filter-btn">
      <span class="btn-reset" @click="resetFn()">取消</span>
      <span class="btn-submit" @click="submitFn()">确定({{resultLength}}/{{listLength}})</span>
    </div>
  </van-popup>
</template>
<script>
export default {
  data () {
    return {
      isShow:true

    }
  },
  methods: {
  }
}
</script>
<style lang="less">
  .source-filter{
   width:100%;
  height:100%;
    .filter-box{
      .box-l{
        width: 200%;
        float: left;
        li{
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 25px;
        }
      }
      .box-r{
        width: 550px;
        float: left;
      }
    }
  .filter-btn{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 80px;
    font-size: 32px;
    background: #fff;
    height: 81px;
  .btn-reset{
    background: #feffff;
    display: inline-block;
    width: 49%;
    height: 80px;
    color: #333333;
    border-top:1px #f1f1f1 solid ;
  }
  .btn-submit{
    background: #0097ef;
    width: 49%;
    display: inline-block;
    height: 80px;
    color: #fff;
    border-top:1px #0097ef solid ;
  }
  }
  }

</style>
