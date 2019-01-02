<template>
<div class="password">
  <van-cell-group>
    <van-field
      v-model="oldPassword"
      type="password"
      label="旧密码"
      placeholder="输入旧密码"
      border
    />
    <van-field
      v-model="newPassword"
      type="password"
      label="新密码"
      placeholder="输入新密码"
      border
    />
    <van-field
      v-model="resNewPassword"
      type="password"
      label="确认密码"
      placeholder="重复输入新密码"
      border
    />
  </van-cell-group>
  <van-button type="default" size="large" block @click="submit()">保存</van-button>
  <van-popup v-model="show">两次密码不一样</van-popup>

</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      show: false,
      oldPassword:'',
      newPassword:'',
      resNewPassword:'',
    }
  },
  methods: {
    password () {
    },
    submit(){
      if(this.oldPassword==""){
        this.$toast('请输入旧密码');
      }else if(this.newPassword.length<6){
        this.$toast('新密码不能少于6位');
      }else if(this.newPassword!=this.resNewPassword){
        this.$toast('两次密码输入不一致');
      }else{
        console.log('11')
        let params = new URLSearchParams();
        params.append("newPassword", this.newPassword);
        params.append("oldPassword", this.oldPassword);
        api.resetPassword(params)
        .then(res=>{
          // this.dataList=res.data.data
          console.log(res)
          if(res.code==1){
            this.$toast('修改成功，请重新登录');
            this.$router.push({path: '/user/login'})
          }else{
            this.$toast(res.data.message);
          }
        },()=>{

      })
      }
    },
    clickAlert(){
      this.$toast.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      });
    }
    
  }
}
</script>
<style lang="less">
  .password{
  .van-cell{
    font-size: 28px;
    line-height: 100px;
    /*border-bottom:1px #141414 solid ;*/
  }
  .van-field .van-cell__title{
    max-width: 150px;
  }
  .van-button--large{
    font-size: 32px;
    line-height: 90px;
    height: 90px;
    width: 80%;
    margin: 50px auto 0;
    background: #4983f7;
    color: #fff;
    border-radius: 5px;
  }

  }

</style>
