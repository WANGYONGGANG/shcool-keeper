<template>
  <div class="immediately">
    <div class="class-detial">
      <div class="immediately-title"><van-icon name="pending-payment" />上课详情</div>
      <van-cell-group>
        <van-cell title="学生" value="王自信" />
        <van-cell title="班级" value="17暑初二英语同步班_试听班级" />
        <van-cell title="老师" value="超人部落" />
      </van-cell-group>
    </div>
    <div class="class-comment">
      <div class="immediately-title"><van-icon name="records" />上课评价</div>
      <dl class="detial-list">
        <dt>随堂作业表现能力</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate v-model="value" size="50" color="#f8d304" /></dd>
      </dl>
      <dl class="detial-list">
        <dt>口语表达</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate v-model="value" size="50" color="#f8d304" /></dd>
      </dl>
      <dl class="detial-list">
        <dt>课堂表现</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate v-model="value" size="50" color="#f8d304" /></dd>
      </dl>
    </div>
    <div class="class-evaluation">


    </div>
    <div class="immediately-bottom">
      <span class="blue-font">存为草稿</span>
      <span class="blue-bg">提交</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 3
      }
    }
  }
</script>
<style lang="less">
  .immediately{
  .immediately-title{
    height: 78px;
    line-height: 78px;
    font-size: 28px;
    color: #5f5f5f;
    padding-left: 30px;
  .van-icon{
    position: relative;
    top: 3px;
    margin-right: 8px;
  }
  }
  .class-detial{
  .van-icon{
    color: #4bc76f;

  }
  .van-cell-group{
    width: 692px;
    margin: 0 auto;
  .van-cell__title{
    width: 150px;
  }
  .van-cell{
    font-size: 28px;
    line-height: 78px;
    height: 78px;
  .van-cell__value{
    color: #38f;
  }
  }

  }
  }
  .class-comment{
  .van-icon{
    color: #eaa945;

  }
  .detial-list{
    padding: 30px 0;
    width: 691px;
    margin: 0 auto 15px;
    background: #fff;
    text-align: center;
  dt{
    color: #444;
    font-size: 30px;
    line-height: 40px;
  }
  dd{
    padding:20px 0 0;

  }
  .word{
  span{
    padding: 0 15px;
  }
  }
  }
  }
  .immediately-bottom{
    height: 100px;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0px;
    text-align: right;
    border-top:1px #e3e3e3 solid;
    span{
      display: inline-block;
      height: 50px;
      line-height: 50px;
      border-radius:50px;
      padding: 0px 30px;
      border: 1px #38f solid;
      margin: 18px 30px 0 0;
    }
  .blue-font{
    color: #38f;
    background: #fff;

  }
  .blue-bg{
    color: #fff;
    background: #38f;
  }
  }
  }
</style>
