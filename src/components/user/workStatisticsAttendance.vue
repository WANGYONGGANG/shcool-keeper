<template>
<div class="work-statistics-attendance">
  <ul class="detial-list">
    <li class="item01">2018冬季班初一拓展班集体班2班</li>
    <li class="item02"><span class="w45">2018.11.18 14:39:00</span><span class="w25">应到：1.00</span><span class="w25">实到：1</span></li>
  </ul>
  <div class="detial-btn">
    <ul class="all fn-clear">
      <li class="all-l w45">合计<span>2节</span></li>
      <li class="all-r w25">2</li>
      <li class="all-r w25">2</li>
    </ul>
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

  }
}
</script>
<style lang="less">
  .work-statistics-attendance{
  .w45{
    width: 45%;
  }
  .w25{
    width: 25%;
  }
    .detial-list{
      padding: 15px 20px 10px;
      border-bottom: 1px #f1f1f1 solid;
      background: #fff;
      .item01{
        color: #000000;
        line-height: 24px;
        font-size: 24px;
        padding:10px 0 ;
      }

  .item02{
    font-size: 20px;
    padding:10px 0 ;
    color: #aba3a3;
    span{
      padding-right: 40px;
      font-size: 20px;
      display: inline-block;
    }
  }
    }

  .detial-btn{
    position: fixed;
    z-index: 102;
    bottom: 0px;
    width: 100%;
  .all{
    height: 100px;
    background: #fff;
    border-top: 2px #f1f1f1 solid;
    line-height: 100px;
  .all-l{
    float: left;
    padding-left: 30px;
    span{
      padding-left: 20px;
    }
  }
  .all-r{
    float: left;
    color: #4286ed;

  }

  }

  }


  }

</style>
