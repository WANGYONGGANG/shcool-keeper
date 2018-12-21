<template>
  <div class="operation-details">
    <div class="recipient" @click="goTo(urls.taskDetial)">
        <dl>
          <dt class="title">{{data.title}}</dt>
          <dd class="subtltle"><span><van-icon name="contact" />{{data.classTeacherName}}</span><span><van-icon name="clock" />{{data.beginTime}}</span></dd>
          <dd class="text"><van-icon name="arrow" />{{data.content}}</dd>
        </dl>
    </div>
    <div class="question-answer">
      <div class="qa-user fn-clear">
        <div class="qa-user-l fn-left"><img class="img" src="../../assets/images/user/test.jpg"/></div>
        <div class="qa-user-r fn-left">
          <dl>
            <dt>{{studentMsg.studentName}}</dt>
            <dd>{{studentMsg.answerDatetime}}</dd>
          </dl>
        </div>
      </div>
      <div class="qa-text">{{studentMsg.myAnswer}}</div>
      <div class="qa-icon">问<br/>答</div>
    </div>
    <div class="score-box">
      <span class="title">我的点评</span>
      <van-cell-group>
        <van-field v-model="studentMsg.homeworkScore" clearable label="分数" type="number" placeholder="请输入作业分数" />
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="选择评价模版" />
        <van-field  v-model="studentMsg.teacherComment" type="textarea" placeholder="写点评价吧，您的评价对这位学生会有更大对帮助呦！(500字以内)" rows="1" />
      </van-cell-group>
      <div class="add-voice">点击录制语音</div>
      <div class="file-out">
        <div class="add-img" v-on:click="addImg">添加图片</div>
        <div class="img-sign"  v-for="(item,index) in  imgArray"  v-bind:key="index"><img  v-bind:src="'http://teacher.rexuejiewu.com.cn'+item"/></div>
      </div>
      <div class="file-out">
        <div class="add-img" v-on:click="addMedia">添加视频</div>
        <div class="img-sign" v-for="(item,index) in mediaArray" v-bind:key="index"><span>{{item}}</span></div>
      </div>
      <div class="file-out">
        <div class="add-img" v-on:click="addFile">添加文件</div>
         <div class="img-sign" v-for="(item,index) in fileArray" v-bind:key="index"><span>{{item}}</span></div>
      </div>
      <div style="display:none;">
        <div>
          <input type="file"  @change="uploadImg($event)"  multiple="multiple"  id="uploadImg" v-on:click="openUploadImg">
        </div>
        <div>
          <input type="file" @change="uploadMedia($event)" multiple="multiple" id="uploadMedia" v-on:click="openUploadMedia">
        </div>
        <div>
          <input type="file" @change="uploadFile($event)" multiple="multiple" id="uploadFile" v-on:click="openUploadFile">
        </div>
      </div>
    </div>
    <div class="list-bottom">提交</div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
  export default {
    data () {
      return {
        urls: {
          taskDetial: '/teacher/taskDetial'
        }
      }
    },
    methods: {
      goTo (param) {
        this.$router.push({path: param})
      },
      //作业-增加对学员的评论 /releaseHomework/addComentForStudent
      //参数
      //image_path string  图片文件地址列表
      //["/fielupload/teacher/20181027/cc496fd1-1a83-45a9-b6e4-f4e7749fb0da.pdf","/fielupload/teacher/20181027/efb7e7b6-1d28-4377-84a2-8e59d1df5724.pdf"]
      //score  integer 作业平分 4
      //student_id integer  评价的学员  98
      //teacher_comment  string  老师评价  123123
      //video_paths  string 视频文件地址列表 
      //["/fielupload/teacher/20181027/cc496fd1-1a83-45a9-b6e4-f4e7749fb0da.pdf","/fielupload/teacher/20181027/efb7e7b6-1d28-4377-84a2-8e59d1df5724.pdf"]
      //voice_paths  string 语音文件地址列表
      //["/fielupload/teacher/20181027/cc496fd1-1a83-45a9-b6e4-f4e7749fb0da.pdf","/fielupload/teacher/20181027/efb7e7b6-1d28-4377-84a2-8e59d1df5724.pdf"]
      //work_id  integer  作业主键  1???
      addComentForStudent: function() {
        let _self = this;
        let param = new URLSearchParams();

        param.append("image_path", '');
        param.append("score", 4);
        param.append("student_id", 98);
        param.append("teacher_comment", '21312');
        param.append("video_paths", '');
        param.append("voice_paths", '');
        param.append("work_id", 1);

        api.addComentForStudent(param).then(res => {
          if (res.data.code == 1) {
            console.log(res.data);
          }
        });
      },
      //录音
      openRecorder:function(){
        var rec=Recorder();
        rec.open(function(){//打开麦克风授权获得相关资源
        rec.start();//开始录音
      
        setTimeout(function(){
          rec.stop(function(blob){//到达指定条件停止录音，拿到blob对象想干嘛就干嘛：立即播放、上传
          console.log(URL.createObjectURL(blob));
          rec.close();//释放录音资源
        },function(msg){
          console.log("录音失败:"+msg);
        });
      },3000);
        },function(msg){//未授权或不支持
        console.log("无法录音:"+msg);
      });
    },
    addImg: function() {
      $("#uploadImg").click();
    },
    addMedia: function() {
      $("#uploadMedia").click();
    },
    addFile: function() {
      $("#uploadFile").click();
    },
    //打开上传域文件
    openUploadFile: function(event) {

    },
    //打开上传图片
    openUploadMedia: function(event) {

    },
    openUploadImg:function(event){

    },
    //打开上传域文件
    uploadImg: function(event) {

    },
    uploadImg: function(event) {
    let _self = this;
    this.file = event.target.files[0]; //获取input的图片file值
    // this.file = event.target.files; //获取input的图片file值
    let param = new FormData(); // 创建form对象
    param.append("files", this.file); //对应后台接收图片名
    console.log(this.file);
    api.uploadFile(param)
      .then(res => {
        if (res.code == 1) {
          let fileArray = res.data;
          for (let i = 0; i < fileArray.length; i++) {
            _self.imgArray.push(fileArray[i]);
          }
        } else {
          let params = { msg: "上传文件错误" };
        }
      })
      .catch(error => {
        let params = { msg: "上传文件错误" };
      });
    },
    uploadMedia: function(event) {
      let _self = this;
      this.file = event.target.files[0]; //获取input的图片file值
      // this.file = event.target.files; //获取input的图片file值
      let param = new FormData(); // 创建form对象
      param.append("files", this.file); //对应后台接收图片名
      api.uploadFile(param)
        .then(res => {
          if (res.code == 1) {
            let fileArray = res.data;
            for (let i = 0; i < fileArray.length; i++) {
              _self.mediaArray.push(fileArray[i]);
            }
          } else {
            let params = { msg: "上传文件错误" };
          }
        })
        .catch(error => {
          let params = { msg: "上传文件错误" };
        });
    },
    uploadFile: function(event) {
      let _self = this;
      this.file = event.target.files[0]; //获取input的图片file值
      // this.file = event.target.files; //获取input的图片file值
      let param = new FormData(); // 创建form对象
      param.append("files", this.file); //对应后台接收图片名
      api
        .uploadFile(param)
        .then(res => {
          if (res.code == 1) {
            let fileArray = res.data;
            for (let i = 0; i < fileArray.length; i++) {
              _self.fileArray.push(fileArray[i]);
            }
          } else {
            let params = { msg: "上传文件错误" };
          }
        })
        .catch(error => {
          let params = { msg: "上传文件错误" };
        });
    },
    addNotice: function() {
      let params = {};
      let _self = this;
      // let loginData = new URLSearchParams();
      // loginData.append("username", this.userName);
      // loginData.append("password", this.myPassword);
      params.image_path=this.imgArray;
      params.notice_title=this.notice_title;
      params.notice_content=this.notice_content;
      params.notice_student=this.notice_student;
      params.video_paths=this.mediaArray;
      params.voice_paths=null,
      api.addNotice(params)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            let code = res.data.code;
            if (code === 1) {
              _self.list = res.data.data;
            }
          } else {
            let params = { msg: "获取购物车列表错误" };
          }
        })
        .catch(error => {
          let params = { msg: "获取购物车列表错误" };
        });
      },
    },
    computed : {
      data () {
        console.log(this.$store.state.teacherTask.taskDetial);
          return this.$store.state.teacherTask.taskDetial;
      },
      studentMsg () {
        console.log(this.$store.state.teacherTask.operationDetails);
        return this.$store.state.teacherTask.operationDetails;
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
    position: relative;
    background: #fff;
    padding-bottom: 30px;
    margin: 0 auto 20px;
    .qa-user{
      height:100px;
  .qa-user-l{
    margin-left: 20px;
    margin-top: 23px;
  }
  .qa-user-r{
    margin-top: 20px;
    margin-left: 10px;
    line-height: 36px;
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
  .qa-icon{
    position: absolute;
    right: 20px;
    top: 0px;
    width: 40px;
    padding:10px 0;
    color: #fff;
    text-align: center;
    background: #4286ed;
    border-bottom-left-radius:20px;
    border-bottom-right-radius: 20px;

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
