<template>
  <div class="add-com-rec">
    <div class="recipient">
      <van-cell-group>
        <van-cell title="沟通类型" required  v-model="talkType" to="/teacher/communicationTemplate?type=1" is-link />
        <van-cell title="沟通结果" required v-model="talkResult" to="/teacher/communicationTemplate?type=2" is-link />
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="沟通内容" required value="请选择" to="/teacher/communicationTemplate?type=3" is-link />
        <van-field
          v-model="talkConent"
          type="textarea"
          placeholder="请输入沟通内容（必填，限300字）"
          rows="1"
        />
      </van-cell-group>
    </div>
    <van-cell-group class="next">
      <van-cell title="下次跟进类型" v-model="followType" to="/teacher/communicationTemplate?type=4" is-link />
      <van-cell title="下次跟进时间">
        <van-radio-group v-model="radio" class="next-time">
          <van-radio name="1">选择时间</van-radio>
          <van-radio name="2">时间待定</van-radio>
        </van-radio-group>
      </van-cell>
    </van-cell-group>
    <bottom-btn :buttonData="buttonData"></bottom-btn>
  </div>
</template>
<script>
import BottomBtn from '../general/bottomBtn';
import CommunicationTemplate from './communicationTemplate'
export default {
  components: {
    BottomBtn,
    CommunicationTemplate
  },
  data () {
    return {
      buttonData: {
        text: '提交',
        url: ''
      },
      radio:'',
      talkType:'请选择',
      talkResult:'请选择',
      talkConent:'请选择',
      followType:'请选择',
    }
  },
  mounted(){
//      window.history.back(function () {
//        console.log('back')
//      });
//    this.message = this.$route.query.con;

    if(this.$route.params.type){
        if(this.$route.params.type == 1){
          console.log(this.$route.params.con[0].content);
            this.talkType = this.$route.params.con[0].content;
        }else if(this.$route.params.type == 2){

        }else if(this.$route.params.type == 3){
          this.talkConent = this.$route.params.con[0].content;
        }else if(this.$route.params.type == 4){
          // this.talkConent = this.$route.params.con[0].content;
        }
    }
//    this.message = this.$route.params.con;

  },
  methods:{
     // 接受参数
    getMes: function(p){
      // console.log(this.$route.query.con);
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .add-com-rec{
  .recipient{
    width: 100%;
    background: #fff;
    margin: 0 auto;
  .van-cell__right-icon{
    position: relative;
    top: 3px;
  }
  .van-cell__value{
    color:#ccc;

  }
  }
  .ass-title{
    width: 100%;
    background: #fff;
    margin: 20px auto;
  .van-field__control{
    text-align: right;
  }
  }
  .class-evaluation{
    width: 100%;
    background: #fff;
    padding-bottom: 20px;
    margin: 20px auto 0;
  .van-cell__value{
    color:#ccc;
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

  }
  .next{
    margin-top: 20px;
  .van-cell__value{
    color:#ccc;
  }
  .next-time{
    .van-radio{
      float: right;
    margin-left:20px;
    .van-radio__input{
      top:-14px;
    }
    }
  }
  }

  }
</style>
