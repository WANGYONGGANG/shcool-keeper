<template>
<div class="roster-detial">
  <div class="roster-detial-tit">
    17暑假初二英语同步班_补课班级
  </div>
  <div class="roster-detial-card">
    <div class="card-id">张跃拢 <span>s121716</span></div>
    <div class="card-list">
      <div class="card-list-tit"><i class="point"></i>17暑假初二英语同步班_补课班级</div>
      <div class="card-list-flag">
        <span>2017</span>
        <span>暑假班</span>
        <span>潮人部落</span></div>
    </div>
    <div class="card-list">
      <div class="card-list-tit"><i class="point"></i>17暑假初二英语同步班_补课班级</div>
      <div class="card-list-flag">
        <span>2017</span>
        <span>暑假班</span>
        <span>潮人部落</span></div>
    </div>
    <div class="card-list">
      <div class="card-list-tit"><i class="point"></i>17暑假初二英语同步班_补课班级</div>
      <div class="card-list-flag">
        <span>2017</span>
        <span>暑假班</span>
        <span>潮人部落</span></div>
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
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .roster-detial{
  padding-top:20px;
    .roster-detial-tit{
      line-height: 100px;
      font-size: 36px;
      text-align: center;
    }
  .roster-detial-card{
    width: 710px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    .card-id{
      height: 80px;
      line-height: 80px;
      border-bottom:1px #eff1f6 solid ;
      font-size: 32px;
      padding-left: 40px;
      span{
        font-size: 26px;
        color: #838383;
        margin-left: 10px;
      }
    }
  .card-list{
  padding:0 0 30px 40px;
    .card-list-tit{
      font-size: 28px;
      line-height: 85px;
      .point{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        position: relative;
        top: -4px;
        left: -10px;
        overflow: hidden;
        background: #75ee14;
      }

    }
  .card-list-flag{
  padding-left:10px;
    span{
      display: inline-block;
      background: #eff1f6;
      padding: 5px 10px;
      margin: 0 15px 0 0;
    }
  }

  }
  }
  }

</style>
