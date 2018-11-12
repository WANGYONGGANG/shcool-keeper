<template>
<div class="my-timetable">
  <div class="time-tab">
    <span class="select-label">上周</span>
    <span class="select-label">本周</span>
    <span class="select-label">下周</span>
    <span class="select-label fn-right">按月</span>
  </div>
  <div class="timetable-tit">
    <span class="tit-l">星期一</span>
    <span class="tit-r">09-17</span>
  </div>
  <div class="timetable-table">
    <div class="table-l">
      <div class="class-tit">17暑假初二英语同步班_补课班级</div>
      <div class="class-address"><van-icon name="location" />超人部落</div>
      <div class="class-details"><span class="name"><van-icon name="idcard" />17暑假初二英语同</span> <span class="time"><van-icon name="clock" />09:00-11:00</span></div>
    </div>
    <div class="table-r already">
      未上课<br/>
      <span class="completion">0/1</span>
    </div>
  </div>

  <div class="timetable-tit">
    <span class="tit-l">星期二</span>
    <span class="tit-r">09-18</span>
  </div>
  <div class="timetable-table">
    <div class="table-l">
      <div class="class-tit">17暑假初二英语同步班_补课班级</div>
      <div class="class-address"><van-icon name="location" />超人部落</div>
      <div class="class-details"><span class="name"><van-icon name="idcard" />17暑假初二英语同</span> <span class="time"><van-icon name="clock" />09:00-11:00</span></div>
    </div>
    <div class="table-r">
      已上课<br/>
      <span class="completion">1/1</span>
    </div>
  </div>

  <div class="timetable-tit">
    <span class="tit-l">星期二</span>
    <span class="tit-r">09-18</span>
  </div>
  <div class="timetable-table">
    <div class="empty">暂无上课班级</div>
  </div>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      allDatas : [],

    }
  },
  mounted () {
    this.getMyClassRecord();
  },
  methods: {
    //findMyClassRecord
    getMyClassRecord () {
      let _self = this;
      let params = new URLSearchParams();
      params.append('begin_date','2018-10-01');
      params.append('end_date','2018-10-31');
      params.append('page',1);
      params.append('rows',10);
      api.findMyClassRecord( params ).then( res => {
        console.log(res);
        if( res.data.code == 1 ){
          let allDatas = res.data.data.rows;
          _self.allDatas = allDatas;
          console.log(allDatas);
        }
      } );
    }
  }
}
</script>
<style lang="less">
  .my-timetable{
    .time-tab{
      height: 86px;
      background: #fff;
      padding-left:20px;
      .select-label{
        height: 53px;
        display: inline-block;
        padding: 0px 30px;
        font-size: 24px;
        line-height: 55px;
        border-radius: 50px;
        border: 1px #eff1f6 solid;
        margin: 17px 10px 0;
      }
      .fn-right{
        float: right;
        background: #eff1f6;
      }
    }
  .timetable-tit{
    height: 80px;
    color: #494847;
    font-size: 28px;
    line-height: 80px;
    padding: 0 30px;
    .tit-r{
      float: right;
    }
  }
  .timetable-table{
    background: #fff;
    height: 170px;
  .empty{
    line-height: 170px;
    text-align: center;
    font-size: 32px;
    color: #838383;
  }

  .table-l{
    float: left;
    padding-left:30px;

  /*width: 550px;*/
  .class-tit{
    font-size: 32px;
    color: #141414;
    line-height: 65px;
    padding-top: 10px;
  }
  .class-address{
    font-size: 24px;
    color: #838383;
    line-height: 40px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;

  }
  }
  .class-details{
    font-size: 26px;
    color: #838383;
    line-height: 50px;
  .name{
    padding-right: 15px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;
    color: #dc951a;
  }
  }
  .time{
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 5px;
    color: #dc951a;
  }
  }
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
    border: 1px #838383 solid;
    border-radius: 50px;
    line-height: 40px;
    padding: 0 20px;
    margin: 15px auto 0;

    background: #f8f8f8;
  }
  }
  .already{
    color: #0a64d9;
  .completion{
    background: #ebf5ff;
    color: #0a64d9;
    border: 1px #0a64d9 solid;
  }
  }

  }

  }

</style>
