<template>
  <div class="bulletin">
    <van-cell-group>
      <van-cell v-if="!noticeList||noticeList.length==0">暂无数据</van-cell>
      <van-cell  v-bind:title="noticeItem.title"  v-bind:label="noticeItem.createTime"    v-for="(noticeItem,index) in noticeList" :key="index"  v-on:click="openNoticeContent(noticeItem.id)"/>
    </van-cell-group>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import Router from "vue-router";
export default {
  data () {
    return {
      noticeList:[]
    }
  },
  mounted() {
    this.findAllAnnouncement();
  },
  methods: {
    goTo () {
      this.$router.push({path: '/teacher/bulletinDetial'})
    },
    //打开公告详情
    openNoticeContent:function(id){
        this.$router.push({path: "/teacher/bulletinDetial", query: {id: id}});
    },
    findAllAnnouncement: function() {
      let params ={};
      let _self = this;
      api.findAllAnnouncement(null)
        .then(res => {
          console.log(res.data);
          if (res.code ==1) {
                // let code=res.data.code;
                // if(code===1){
                  _self.noticeList=res.data;
                // }
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
.bulletin{
.van-cell-group{
  padding: 10px 20px;
  background: none;
.van-cell{
  padding: 25px 20px;
  margin: 20px auto 0;
  font-size: 28px;
  line-height: 56px;
  background: #fff;
}
.van-cell__label{
  font-size: 24px;
  line-height: 2;
}
.van-cell__right-icon{
  font-size: 26px;
  position: relative;
  top: 41px;
}
}
}

</style>
