<template>
<div class="roster">
  <div class="naming-table" @click="goTo(data.id)" v-for="data in classList">
    <div class="table-l">
      <div class="class-tit" :parentToChild="data.className">{{data.className}}</div>
      <div class="class-address"><van-icon name="location" />{{data.campusName}}</div>
    </div>
    <div class="table-r">
      <van-icon name="contact" />{{data.currentStudentCount}}
    </div>
  </div>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
import rosterDetial from './rosterDetial';
export default {
  name:'roster',
  data () {
    return {
      datas:[],
      classList:[],
      parentToChild:''
    }
  },
  components:{
       rosterDetial
   },
  mounted () {
    this.findAllClass();
  },
  methods: {
    goTo (parame) {
      this.$router.push({path: '/teacher/rosterDetial',query:{id:parame}})
    },
    findAllClass : function () {
      let _self = this;
      // let param = new URLSearchParams();
      // param.append('class_plan_id',341);
      api.findAllClass(null)
        .then( res => {
            if (res.status == 200) {
                  let code=res.data.code;
                  if(code===1){
                    _self.classList=res.data.data;
                  }
            }
        });
    }
  },
  
}
</script>
<style lang="less">
  .roster{
  padding-top:20px;
  .naming-table{
    background: #fff;
    height: 170px;
    width: 95%;
    border-radius: 10px;
    margin: 0 auto 20px;
  .table-l {
    float: left;
    padding-left: 30px;
  .class-tit {
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-address {
    font-size: 24px;
    color: #838383;
    line-height: 70px;
  .van-icon {
    position: relative;
    top: 4px;
    margin-right: 5px;
  }
  }
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    width: 120px;
    padding-top: 92px;
    color: #838383;
  .van-icon{
    margin-right: 5px;
    color: #dc951a;
    font-size: 22px;
  }
  }
  }
  }

</style>
