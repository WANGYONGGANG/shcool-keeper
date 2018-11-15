<template>
  <div class="reslease-ass">
    <div class="recipient"><van-cell-group>
      <van-cell title="接受人" value="内容" is-link to="/general/publishClass" />
    </van-cell-group>
    </div>
    <div class="ass-title">
      <van-cell-group>
        <van-field
          v-model="message"
          label="标题"
          type="textarea"
          placeholder="请输入标题"
          rows="1"
        />
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="内容" />
        <van-field
          v-model="message"
          type="textarea"
          placeholder="写点什么吧"
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
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  data () {
    return {
    }
  },
  methods:{
     addNotice: function() {
      let params ={};
      let _self = this;
			let loginData = new URLSearchParams();
      loginData.append('username',this.userName)
			loginData.append('password',this.myPassword)
      api.addNotice(null)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.list=res.data.data;
                }
          } else {
            let params = { msg: "获取购物车列表错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取购物车列表错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
.reslease-ass{
.recipient{
  width: 692px;
  background: #fff;
  margin: 0 auto;
  .van-cell__right-icon{
    position: relative;
    top: 3px;

  }
}
.ass-title{
  width: 692px;
  background: #fff;
  margin: 20px auto;
.van-field__control{
  text-align: right;
}
}
.class-evaluation{
  width: 692px;
  background: #fff;
  margin: 0 auto;
  .van-cell{
    font-size: 28px;
    line-height: 24px;
    padding: 35px 15px;
  }
  .van-field{
    line-height: 40px;
    height: 300px;
    width:95%;
    margin: 0 auto;
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
