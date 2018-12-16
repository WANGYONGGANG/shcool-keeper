<template>
<div class="work-statistics-attendance">
  <ul class="detial-list" v-for='item in dataList'>
    <li class="item01">{{item.className}}</li>
    <li class="item02"><span class="w45">{{item.classPleanDate}} {{item.beginTime}}</span><span class="w25">应到：{{item.recruitStudentsCount}}</span><span class="w25">实到：{{item.realPeopleCount}}</span></li>
  </ul>
  <div class="detial-btn">
    <ul class="all fn-clear">
      <li class="all-l w45">合计<span>{{dataList.length}}节</span></li>
      <li class="all-r w25">2</li>
      <li class="all-r w25">2</li>
    </ul>
  </div>
</div>
</template>
<script>
  import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      dataList:''
    }
  },
  mounted(){
    let time=this.$route.query.time+'-'+new Date().getDate()
    let params = new URLSearchParams();
      params.append("current_month", time);
      api.getWorkStatisticsDetail(params)
					.then(res=>{
            console.log(res)
            this.dataList=res.data.detail
				},()=>{
          
				});
  },
  methods: {

  }
}
</script>
<style lang="less">
  .work-statistics-attendance{
  .w45{
    width: 45%;
  }
  .w25{
    width: 25%;
  }
    .detial-list{
      padding: 15px 20px 10px;
      border-bottom: 1px #f1f1f1 solid;
      background: #fff;
      .item01{
        color: #000000;
        line-height: 24px;
        font-size: 24px;
        padding:10px 0 ;
      }

  .item02{
    font-size: 20px;
    padding:10px 0 ;
    color: #aba3a3;
    span{
      padding-right: 40px;
      font-size: 20px;
      display: inline-block;
    }
  }
    }

  .detial-btn{
    position: fixed;
    z-index: 102;
    bottom: 0px;
    width: 100%;
  .all{
    height: 100px;
    background: #fff;
    border-top: 2px #f1f1f1 solid;
    line-height: 100px;
  .all-l{
    float: left;
    padding-left: 30px;
    span{
      padding-left: 20px;
    }
  }
  .all-r{
    float: left;
    color: #4286ed;

  }

  }

  }


  }

</style>
