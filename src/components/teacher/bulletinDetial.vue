<template>
  <div class="bulletinDetial">
    <dl>
      <dt class="title">{{noticeContent.title}}</dt>
      <dd class="subtltle">{{noticeContent.createTime}}</dd>
      <dd class="text" v-html="noticeContent.content"></dd>
    </dl>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import Router from "vue-router";
export default {
    data () {
    return {
      noticeContent:{}
    }
  },
   mounted() {
     this.getAnnouncement();

   },
   methods:{
      getAnnouncement: function() {
      let _self = this;
      let params ={};
      params.announcement_id =_self.$route.query.id;
      api.getAnnouncement(params)
        .then(res => {
          console.log(res.data);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.noticeContent=res.data.data;
                }
          } else {
            let params = { msg: "获取公告错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取公告错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
   }
}
</script>
<style lang="less">
.bulletinDetial{
  padding: 20px;
  min-height: 500px;
  overflow: hidden;
  background: #fff;
  .title{
    font-size: 32px;
    line-height: 45px;
    padding-left: 20px;
  }
  .subtltle{
    font-size: 28px;
    color: #bbb;
    padding-left: 20px;
    line-height: 72px;
    border-bottom:1px #eff1f6 solid ;
  }
  .text{
    font-size: 26px;
    line-height: 35px;
    padding-top: 40px;
    color: #999;
    text-indent: 2em;
  }
}
</style>
