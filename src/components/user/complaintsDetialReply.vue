<template>
<div class="complaints-detial-reply">
  <section class="reply-box">
    <div class="timetable-table">
      <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
      <div class="table-l">
        <div class="class-tit">回复</div>
        <div class="class-details"><span class="time">2018-11-22 20:26</span></div>
      </div>
      <div class="table-r">
        <van-icon name="records" />
      </div>
    </div>
    <div class="complaints-txt">什么鬼
    </div>
  </section>
  <section class="reply-box">
    <div class="timetable-table">
      <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
      <div class="table-l">
        <div class="class-tit">回复</div>
        <div class="class-details"><span class="time">2018-11-22 20:26</span></div>
      </div>
      <div class="table-r">
        <van-icon name="records" />
      </div>
    </div>
    <div class="complaints-txt">
      哈哈哈
    </div>
  </section>

  <div class="class-evaluation">
    <van-cell-group>
      <van-cell title="回复"/>
      <van-field v-model="message" type="textarea" placeholder="输入回复内容（500字以内）" rows="1"/>
    </van-cell-group>
  </div>
<div class="complaints-submit">
  <ul>
    <li class="blue" @click="btnFun()">确定</li>
    <li>取消</li>
  </ul>
</div>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      urls:{
        complaintsDetial:'/user/complaintsDetial'
      },
      message:'',
    }
  },
   mounted(){
    this.message=this.$route.query.reply.content
   },
  methods: {
      btnFun(){
      let params = new URLSearchParams();
      params.append("id", this.$route.query.reply.id);
      params.append("content", this.message);
      params.append("suggestionId", this.$route.query.reply.suggestionId);
      api.editSuggestionWithTeacher(params)
        .then(res=>{
          console.log(res)
          if(res.code==1){
            this.haveReplyList();
            this.message=''
          }
          
          // this.dataList=res.data.data.rows
      },()=>{

      })
      ;
    },
  }
}
</script>
<style lang="less">
  .complaints-detial-reply{
    padding-bottom: 40px;
  background:#fff;
  .timetable-table{
    background: #fff;
    height: 126px;
  .img{
    width: 80px;
    height: 80px;
    float: left;
    padding: 26px 30px 0 30px;
    border-radius: 100%;
  img{
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  }
  .empty{
    line-height: 170px;
    text-align: center;
    font-size: 32px;
    color: #838383;
  }
  .table-l{
    float: left;
    padding-left:60px;

  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 40px;


  }
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    padding-top: 35px;
    width: 180px;
    color: #838383;
  .completion{
    display: inline-block;
    border-radius: 50px;
    line-height: 40px;
    padding: 0 20px;
    margin: 0px auto 0;
  }
  .van-icon-records{
    color: #4286ed;
  }
  }
  }
.complaints-txt{
  text-align: left;
  padding: 0 30px 20px 40px;
  line-height: 40px;
  font-size: 26px;
}
  .class-evaluation {
    width: 692px;
    background: #fff;
    margin: 0 auto;
  .van-cell {
    font-size: 28px;
    line-height: 24px;
    padding: 35px 15px;
  }
  .van-field {
    line-height: 40px;
    height: 300px;
    width: 95%;
    margin: 0 auto;
    border: 1px #e0e5ed solid;
  }
  .van-field--min-height .van-field__control {
    min-height: 300px;
  }

  }
  .reply-box{
    padding-bottom: 30px;
    border-bottom: 1px #DADCE3 solid;
  }

  .reply-record{
  .van-cell{
    font-size: 26px;
    padding: 10px 42px;
    color: #98999e;
  }

    .van-icon-pending-evaluate{
      position: relative;
      top:5px;
      color: #4286ed;
    }
  }

  .complaints-submit{
    width: 90%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #fff;
    margin: 30px auto;
    font-size: 28px;
    li{
      float: left;
      width: 48%;
      background: #DADCE3;
      color: #8e8888;
    }
    .blue{
      background: #4286ed;
      color: #fff;
      margin-right: 10px;
    }

  }
  }

</style>
