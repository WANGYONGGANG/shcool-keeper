<template>
  <div class="communication-template">
    <van-checkbox-group v-model="result">
      <van-checkbox
        v-for="(item, index) in list"
        :key="index"
        :name="item.content"
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
    this.findTalkContentTemplate();
  },
  methods:{
    findTalkContentTemplate: function() {
        let _self = this;
        api.findTalkContentTemplate().then(res => {
          if (res.data.code == 1) {
            _self.list = res.data.data;
          console.log(_self.list);
          }
      });
    },
    getCon:function(){
      // this.$emit('content',this.result[0]);
        //console.log(this.result);
        this.$router.push({ path: '/teacher/addCommunicationRecord', query: { con: this.result[0] } })
    }
  }
}
</script>
<style lang="less">
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
