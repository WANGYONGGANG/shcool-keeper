<template>
  <div class="operation-details">
    <div class="recipient" @click="goTo(urls.taskDetial)">
        <dl>
          <dt class="title">基础舞蹈</dt>
          <dd class="subtltle"><span><van-icon name="contact" />测试员</span><span><van-icon name="clock" />2018-07-04 11:28</span></dd>
          <dd class="text"><van-icon name="arrow" /></dd>
        </dl>
    </div>
    <div class="question-answer">
      <div class="qa-user fn-clear">
        <div class="qa-user-l fn-left"><img class="img" src="../../assets/images/user/test.jpg"/></div>
        <div class="qa-user-r fn-left"><dl><dt>王紫潼</dt><dd>2019.07，04 12:17</dd></dl></div>
      </div>
      <div class="qa-text">和军事基地</div>
    </div>
    <div class="score-box">
      <span class="title">我的点评</span>
      <van-cell-group>
        <van-field
          v-model="score"
          clearable
          label="分数"
          type="number"
          placeholder="请输入作业分数"
        />
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="选择评价模版" />
        <van-field
          v-model="message"
          type="textarea"
          placeholder="写点评价吧，您的评价对这位学生会有更大对帮助呦！(500字以内)"
          rows="1"
        />
      </van-cell-group>
      <div class="add-voice">点击录制语音</div>
      <div class="add-img">添加图片</div>
      <div class="add-img">添加视频</div>
      <div class="add-img">添加文件</div>
    </div>
    <div class="list-bottom">提交</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        message:'',
        urls: {
          taskDetial: '/teacher/taskDetial'
        }
      }
    },
    methods: {
      goTo (param) {
        this.$router.push({path: param})
      }
    }
  }
</script>
<style lang="less">
  .operation-details{
  padding-bottom:120px;
  .recipient{
    width: 692px;
    margin: 20px auto;
    padding: 20px;
    position: relative;
    background: #fff;
  .title{
    font-size: 28px;
    line-height: 45px;
  }
  .subtltle{
    font-size: 24px;
    color: #bbb;
    line-height: 72px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 6px;
  }
  .van-icon-clock{
    margin-left: 15px;
  }
  }
  .text{
    font-size: 26px;
    line-height: 35px;
    color: #999;
    position: absolute;
    right: 25px;
    top:59px;
  }
  }
  .question-answer{
    width: 692px;
    background: #fff;
    padding-bottom: 30px;
    margin: 0 auto 20px;
    .qa-user{
      height:100px;
  .qa-user-l{
    margin-left: 20px;
    margin-top: 20px;
  }
  .qa-user-r{
    margin-top: 20px;
    margin-left: 10px;
  }
  .img{
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 100%;
    margin-right: 15px;
    vertical-align: middle;
  }
    }
  .qa-text{
    width: 94%;
    border: 1px #dcd5d5 solid;
    line-height: 40px;
    margin: 0 auto;
    padding: 15px;
    background: #fffbec;
  }
  }
  .score-box{
    width: 692px;
    background: #fff;
    margin: 0 auto;
   .title{
     font-size: 24px;
      padding-left: 29px;
     display: block;
     line-height: 61px;
    }
    input{
      text-align: right;

    }
  }
  .class-evaluation{
    width: 692px;
    padding-bottom: 50px;
    background: #fff;
    margin: 0 auto;
  .van-cell{
    font-size: 28px;
    line-height: 24px;
    padding: 35px 28px;
    .van-cell__title{
      font-size: 24px;
    }
  }
  .van-field{
    line-height: 40px;
    height: 300px;
    width:91%;
    margin: 0 auto;
    font-size: 20px;
    border: 1px #e0e5ed solid;
  }
  .van-field--min-height .van-field__control{
    min-height: 300px;
  }
  .add-voice{
    width: 95%;
    height: 85px;
    line-height: 85px;
    font-size: 28px;
    color: #1395f1;
    text-align: center;
    border-radius: 10px;
    border: 1px #e0e5ed solid;
    background: #f7fbff;
    margin: 30px auto 0;
  }
  .add-img{
    width: 195px;
    height: 195px;
    line-height: 195px;
    margin-top: 30px;
    margin-left: 20px;
    text-align: center;
    border: 1px #e0e5ed solid;
  }
  }
  .list-bottom{
    height: 95px;
    line-height: 95px;
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
    background: #4286ed;
    color: #fff;
    text-align: center;
    font-size: 32px;
  }
  }
</style>
