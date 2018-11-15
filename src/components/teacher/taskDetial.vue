<template>
  <div class="taskDetial">
    <dl>
      <dt class="title">{{data.title}}</dt>
      <dd class="subtltle"><span><van-icon name="contact" />{{data.classTeacherName}}</span><span><van-icon name="clock" />{{data.beginTime}}</span></dd>
      <dd class="text"><van-icon name="arrow" />{{data.content}}</dd>
    </dl>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  computed : {
    data () {
        return this.$store.state.teacherTask.taskDetial;
    },
  }
}
</script>
<style lang="less">
.taskDetial{
  width: 696px;
  margin: 20px auto;
  padding: 20px;
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
  }
}
</style>
