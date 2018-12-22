<template>
<div class="complaints-detial">
  <section class="reply-box">
    <div class="timetable-table">
      <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
      <div class="table-l">
        <div class="class-tit">{{this.$route.query.studentName}}</div>
        <div class="class-details"><span class="time">{{this.$route.query.createTime}}</span></div>
      </div>
    </div>
    <div class="complaints-txt" v-html="this.$route.query.content">
    </div>
  </section>
  <div class="reply-record" @click="immediateReply">
    <van-cell title="回复记录（条）">
      <template>
        <span class="custom-text">立即回复</span>
        <van-icon name="pending-evaluate" />
      </template>
    </van-cell>
  </div>
  <section class="reply-box" @click="goTo(urls.complaintsDetialReply,item)" v-for="item in dataList">
    <div class="timetable-table">
      <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
      <div class="table-l">
        <div class="class-tit">{{item.isIncognito ? '回复':item.teacherName}}</div>
        <div class="class-details"><span class="time">{{item.createTime}}</span></div>
      </div>
      <div class="table-r">
        <van-icon name="records" />
      </div>
    </div>
    <div class="complaints-txt">{{item.content}}
    </div>
  </section>
  
  <div class="class-evaluation">
    <van-cell-group>
      <van-cell title="回复"/>
      <van-field v-model="message" type="textarea" placeholder="输入回复内容（500字以内）" rows="1"/>
    </van-cell-group>
  </div>
  <ul class="check">
    <li class="check-item01"><input type="checkbox" @click="checkFun()" v-model="checkNum">匿名回复</li>
    <li class="check-item02">勾选"匿名回复"后，家长不能看到回复人的具体姓名，否则，系统会显示回复人的真实姓名</li>
  </ul>
<div class="complaints-submit" @click="btnFun()">提交</div>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      urls:{
        complaintsDetialReply:'/user/complaintsDetialReply'
      },
      message:'',
      dataList:'',
      checkNum:false
    }
  },
   mounted(){
    //  this.$route.query.information
    this.haveReplyList()
   },
  methods: {
    
      haveReplyList(){
        let params = new URLSearchParams();
        params.append("suggestionId", this.$route.query.id);
        api.finaAllSuggertionForTeacher(params)
        .then(res=>{
          this.dataList=res.data.data
        },()=>{

      })
      },
     btnFun(){
      let params = new URLSearchParams();
      params.append("isIncognito", this.checkNum);
      params.append("content", this.message);
      params.append("suggestionId", this.$route.query.id);
      api.addSuggestionWithTeacher(params)
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
    checkFun(){
      console.log(this.checkNum)
    },
    immediateReply (){
      //点击立即回复 手动滚动到响应地址
      let Reply=document.getElementsByClassName('class-evaluation')[0]
      let path=Reply.getBoundingClientRect().top
      window.scrollTo({
        top: path,
        behavior: "smooth"
      });
    },
    goTo (url,item) {
      this.$router.push({path: url,query:{content:item.content,id:item.id,suggestionId:item.suggestionId,isIncognito:item.isIncognito}})
    }
  }
}
</script>
<style lang="less">
  .complaints-detial{
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
  .check{
    margin-top: 20px;
    padding: 20px 40px;
    .check-item01{
      font-size: 28px;
      input{
        width: 25px;
        height: 25px;
        margin-right: 10px;
        position: relative;
        top: 2px;
      }
    }
    .check-item02{
      line-height: 30px;
      font-size: 20px;
      padding-top: 10px;
      color: #98999e;
    }

  }
  .complaints-submit{
    width: 90%;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #fff;
    background: #4286ed;
    margin: 30px auto;
    font-size: 28px;
  }
  }

</style>
