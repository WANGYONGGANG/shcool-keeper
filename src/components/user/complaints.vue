<template>
<div class="complaints">
  <section @click="goTo(urls.complaintsDetial,item)" v-for='item in dataList'>
    <div class="timetable-table">
      <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
      <div class="table-l">
        <div class="class-tit">{{item.studentName}}</div>
        <div class="class-details"><span class="time">{{item.createTime}}</span></div>
      </div>
      <div class="table-r">
        <van-icon name="pending-evaluate" />
      </div>
    </div>
    <div class="complaints-txt" v-html="item.content"></div>
  </section>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      urls:{
        complaintsDetial:'/user/complaintsDetial'
      },
      dataList:[],
    }
  },
  mounted(){
    this.haveList()
  },
  methods: {
    haveList(){
      let params = new URLSearchParams();
      params.append("page", '1');
      params.append("rows", '100');
      api.finaAllSuggertion(params)
        .then(res=>{
          this.dataList=res.data.data.rows
      },()=>{

      })
      ;
    },
    goTo (url,item) {
      this.$router.push({path: url,query:{information:item}})
    }
  }
}
</script>
<style lang="less">
  .complaints{
  background:#fff;
  .timetable-table{
    background: #fff;
    border-bottom: 1px #eff1f6 solid;
    height: 126px;
  .img{
    width: 80px;
    height: 80px;
    float: left;
    padding: 26px 30px 0 30px;
    border-radius: 100%;
  img{
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  }
  .empty{
    line-height: 170px;
    text-align: center;
    font-size: 32px;
    color: #838383;
  }
  .table-l{
    float: left;
    padding-left:60px;

  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }

  .class-details{
    font-size: 24px;
    color: #838383;
    line-height: 40px;


  }
  }
  .table-r{
    float: right;
    text-align: center;
    font-size: 26px;
    padding-top: 35px;
    width: 180px;
    color: #838383;
  .completion{
    display: inline-block;
    border-radius: 50px;
    line-height: 40px;
    padding: 0 20px;
    margin: 0px auto 0;
  }
  }
  }
.complaints-txt{
  text-align: left;
  padding: 0 30px 20px 40px;
  line-height: 40px;
  font-size: 26px;
}
  }

</style>
