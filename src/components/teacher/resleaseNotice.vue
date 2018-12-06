<template>
  <div class="reslease-ass">
    <div class="recipient">
      <van-cell-group>
        <van-cell title="接受人" value="内容" is-link to="/general/publishClass"/>
      </van-cell-group>
    </div>
    <div class="ass-title">
      <van-cell-group>
        <van-field v-model="notice_title" label="标题" type="textarea" placeholder="请输入标题" rows="1"/>
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="内容"/>
        <van-field v-model="notice_content" type="textarea" placeholder="写点什么吧" rows="1"/>
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
import $ from "jquery";
export default {
  data() {
    return {
      notice_content:"",
      notice_title:"",
      fileArray: [],
      mediaArray:[],
      imgArray:[]
    };
  },
  mounted: function() {},
  methods: {
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
      params.video_paths=this.mediaArray;
      params.voice_paths=null,
      api.addNotice(null)
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
    }
  }
};
</script>
<style lang="less">
.reslease-ass {
  .class-evaluation .file-out{
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
  .recipient {
    width: 692px;
    background: #fff;
    margin: 0 auto;
    .van-cell__right-icon {
      position: relative;
      top: 3px;
    }
  }
  .ass-title {
    width: 692px;
    background: #fff;
    margin: 20px auto;
    .van-field__control {
      text-align: right;
    }
  }
  .class-evaluation {
    width: 692px;
    background: #fff;
    margin: 0 auto;
    padding-bottom: 95px;
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
    .add-voice {
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
    .add-img {
      width: 195px;
      height: 195px;
      line-height: 195px;
      margin-top: 30px;
      margin-left: 20px;
      text-align: center;
      border: 1px #e0e5ed solid;
    }
    .img-sign{
      width: 195px;
      height: 195px;
      line-height: 195px;
      margin-top: 30px;
      margin-left: 20px;
      text-align: center;
      border: 1px #e0e5ed solid;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .list-bottom {
    height: 95px;
    line-height: 95px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #4286ed;
    color: #fff;
    text-align: center;
    font-size: 32px;
  }
}
</style>
