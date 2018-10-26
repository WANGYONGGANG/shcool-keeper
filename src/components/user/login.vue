<template>
<div class="login">
  <div class="login-tit">身份验证</div>
  <van-cell-group>
    <van-field
      v-model="username"
      clearable
      label="用户名"
      placeholder="请输入用户名"
    />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
    />
  </van-cell-group>
  <van-button type="default" size="large" block  @click="submitForm">保存</van-button>
  <div class="forget-password">忘记密码?</div>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted:function () {
           
        },
  methods: {
    submitForm:function () {
        let _self = this;
        let loginData = new URLSearchParams();
         loginData.append('username',this.username)
				loginData.append('password',this.password)
        api.submitLogin(loginData)
					.then(res=>{
            if(res.code == 1){
						  this.active = true;
							this.$router.push({path: "/index"});

						}else if(res.code == 0){
							// alert('用户名或密码错误');
							let instance = Toast('用户名或密码错误');
							setTimeout(() => {
								instance.close();
							}, 1500);
							// _self.$toast({
							// 	message: '',
							// 	position: 'bottom',
							// 	duration: 3000,
							// 	// className:'errorMes'
							// 	});
          }
				},()=>{
					alert('请输入用户名或密码');
				});
            }

  }
}
</script>
<style lang="less">
  .login{
    padding-bottom: 50px;
    background: #fff;
  .login-tit{
    text-align: center;
    line-height: 60px;
    font-size: 40px;
    padding: 70px 0;
    background: #fff;
  }
  .van-cell{
    font-size: 32px;
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
    width: 90%;
    margin: 50px auto 0;
    background: #4983f7;
    color: #fff;
    border-radius: 5px;
  }
  .forget-password{
    width: 90%;
    font-size: 28px;
    line-height: 100px;
    text-align: right;
    margin: 0 auto;
    color: #838383;
  }
  }
</style>
