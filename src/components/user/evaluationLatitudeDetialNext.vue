<template>
  <div class="evaluation-latitude-detial-next">
    <p class="next-tit">2018</p>
    <ul class="detial-list">
      <li class="item01">上课时间 07-04</li>
      <li class="item02"><span>平均分：5.0000</span><span>出勤人数：2</span><span>评价人数：1</span></li>
    </ul>
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
  .evaluation-latitude-detial-next{
  .next-tit{
    font-size: 30px;
    line-height: 79px;
    padding-left: 26px;
  }
  .detial-list{
    padding: 15px 20px 10px;
    border-bottom: 1px #f1f1f1 solid;
    background: #fff;
  .item01{
    color: #7d7070;
    line-height: 26px;
    font-size: 26px;
    padding:10px 0 ;
  }

  .item02{
    font-size: 24px;
    padding:10px 0 ;
    color: #7d7070;
  span{
    padding-right: 40px;
    font-size: 24px;
    display: inline-block;
  }
  }
  }

  }

</style>
