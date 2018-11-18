<template>
  <div class="communication-template">
    <van-checkbox-group v-model="result">
      <van-checkbox
        v-for="(item,index) in list"
        :key="item.id"
        :name="item"
      >
        <dl>
          <dt>{{item.name}}</dt>
        <dd>{{item.content}}</dd>
        </dl>
      </van-checkbox>
    </van-checkbox-group>

    <div class="bottom-btn"  @click="getCon()">确定</div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
// import BottomBtn from '../general/bottomBtn'
export default {
  // components: {
  //   BottomBtn
  // },
  data () {
    return {
      result: [],
      list: [],

    }
  },
  mounted(){
      if(this.$route.query.type == 1){
          //todo 沟通类型接口
        this.findTalkType();
      }else if(this.$route.query.type == 2){
          //todo 沟通结果接口
      }else if(this.$route.query.type == 3){
        this.findTalkContentTemplate();
      }else if(this.$route.query.type == 4){
          //todo 跟进类型接口
      }
  },
  methods:{
    findTalkContentTemplate: function() {
        let _self = this;
        api.findTalkContentTemplate().then(res => {
          if (res.data.code == 1) {
            _self.list = res.data.data;
          }
      });
    },
    findTalkType: function() {
        let _self = this;
        api.findTalkType().then(res => {
          if (res.data.code == 1) {
            _self.list = res.data.data;
          }
      });
    },
    getCon:function(){
      // this.$emit('content',this.result[0]);
        console.log(this.result.name);
//        this.$router.push({ path: '/teacher/addCommunicationRecord', query: { con: this.result[0] } })

        this.$router.push({ name: 'addCommunicationRecord', params: { con: this.result,type : this.$route.query.type}});
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .communication-template{
  .van-checkbox__icon, .van-checkbox__label{
    margin-left: 30px;
    margin-top: 40px;
  }
  .van-checkbox__icon .van-icon{
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    border-radius: 0;
  }
  .van-checkbox__icon--checked .van-icon{
    border-color: #4286ed;
    background-color: #4286ed ;
  }
  dl{
  dt{
    font-size: 30px;
    line-height: 45px;
  }
  dd{
    font-size: 24px;
    line-height: 40px;
    color: #ccc;
  }
  }

  }
  .bottom-btn{
    height: 99px;
    line-height: 99px;
    font-size: 32px;
    color: #fff;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background: #4286ed;
    z-index: 100;

  }
</style>
