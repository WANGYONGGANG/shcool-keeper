<template>
<div class="work-statistics-detial">
  <ul class="detial-list" v-for='item in dataList'>
    <li class="item01">{{item.className}}</li>
    <li class="item02">{{item.classPleanDate}} {{item.beginTime}}</li>
    <li class="item03"><span>单位：{{item.paymentTypeId==1?'次':'时'}}</span><span>数量：1.00</span><span>计费：1</span><span>欠费：0</span></li>
  </ul>
  <div class="detial-btn">
    <div v-if="isShowAll" class="btn-fen">
      <div class="tit">
        合计详情
      </div>
      <div class="list">
        <table>
          <tr>
            <th>计费</th>
            <th>欠费</th>
          </tr>
          <tr>
            <td>
            2.00人次
          </td>
            <td>
              0.00人次
            </td>
          </tr>
          <tr>
            <td>
              0.00人时
            </td>
            <td>
              0.00人时
            </td>
          </tr>
          <tr>
            <td>
              0.00人天
            </td>
            <td>
              0.00人天
            </td>
          </tr>

        </table>
      </div>
    </div>
    <ul class="all fn-clear">
      <li class="all-l">合计<span>{{dataList.length}}节</span></li>
      <li class="all-r" @click="showAll">更多详情</li>
    </ul>
  </div>
  <div class="layer" v-if="isShowAll" @click="closeLayer"></div>

</div>
</template>
<script>
  import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      isShowAll:false,
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


    showAll(){
      this.isShowAll=true
    },
    closeLayer(){
      this.isShowAll=false
    }

  }
}
</script>
<style lang="less">
  .work-statistics-detial{
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
        color: #827979;
        padding:10px 0 ;
      }
  .item03{
    font-size: 20px;
    padding:10px 0 ;
    color: #aba3a3;
    span{
      padding-right: 40px;
      font-size: 20px;
    }
  }
    }
  .detial-btn{
    position: fixed;
    z-index: 102;
    bottom: 0px;
    width: 100%;
  .btn-fen{
    padding: 10px 0 20px;
    background: #fff;
    .tit{
      text-align: center;
      font-size: 28px;
      line-height: 70px;
    }
    table{
      width: 100%;
    th{
      line-height: 60px;
      width: 50%;
      text-align: center;

    }
      td{
        text-align: center;
        width: 50%;
        line-height: 35px;
      }
    }

  }
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
    float: right;
    padding-right: 30px;
  }

  }

  }

.layer{
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  background: #000000;
  opacity: 0.4;
  position: fixed;
  z-index: 100;
}
  }

</style>
