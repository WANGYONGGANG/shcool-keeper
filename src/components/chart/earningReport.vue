<template>
<div class="earning-report">
  <div class="charge-top">
    <div class="charge-top-tab">
      <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
    </div>
    <div class="charge-top-right">
      选择列<van-icon name="wap-nav" />
    </div>
  </div>
  <van-search placeholder="请输入老师姓名" background="#fff" class="earning-search" v-model="value" />
  <div class="timetable-table">
    <div class="img"><img src="../../assets/images/user/test.jpg"/></div>
    <div class="table-l">
      <div class="class-tit">潮人部落</div>
      <div class="class-details"><span class="time">班级：1</span><span class="people-num">人数：2</span></div>
      <div class="class-details"> <span class="time">课消：10000.00（4.00小时，0.00次）</span></div>
    </div>
    <div class="table-r">
      <van-rate v-model="starValue" count=1 size=30 />0.00<br/>
      <span class="completion">评分</span>
    </div>
  </div>
  <commented-pop></commented-pop>
</div>
</template>
<script>
import CommentedPop from '../popup/commentedPop'
export default {
  components: {
    CommentedPop
  },
  data () {
    return {
      tableData: [
        {"name":"潮人部落","shishoujiner":"0.00","zhuanjieshao":"0.00","lianbao":"0.00","yucun":"0.00","zhuanjie":"0.00","duoqi":'0.00',"xufei":'0.00',"kuoke":'0.00',"xinzeng":'0.00',"buqianjiao":'0.00',"xiaoshou":'0.00'},
        ],
      columns: [
        {field: 'name', title:'校区', width: 200, titleAlign: 'center',columnAlign:'center', isFrozen: true},
        {field: 'shishoujiner', title: '实收金额', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'zhuanjieshao', title: '转介绍', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'lianbao', title: '连报', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'yucun', title: '预存', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'zhuanjie', title: '从他人转接的费用', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'duoqi', title: '多期', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'xufei', title: '续费', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'kuoke', title: '扩科', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'xinzeng', title: '新增', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'buqianjiao', title: '补欠交', width: 150, titleAlign: 'center',columnAlign:'center'},
        {field: 'xiaoshou', title: '销售', width: 150, titleAlign: 'center',columnAlign:'center'}

      ],
      starValue:1
    }
  },
  methods: {
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
  },
  created(){

  }


}
</script>
<style lang="less">
.earning-report{
  .charge-top{
    padding-top: 10px;
    height: 86px;
    background: #eef1f6;
    .charge-top-tab{
      float: left;
      width: 500px;
      margin-bottom: 10px;
      padding-left:20px;
    .tab-radius{
      height: 53px;
      display: inline-block;
      padding: 0px 30px;
      font-size: 24px;
      line-height: 55px;
      border-radius: 50px;
      border: 1px #eff1f6 solid;
      margin: 8px 10px 0;
    }
    .arrow-down .van-icon{
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
    }
   .charge-top-right{
     float: right;
     line-height: 40px;
     padding-top: 15px;
     padding-right: 15px;
     .van-icon{
       margin-left: 10px;
       position: relative;
       top: 5px;
     }
   }
  }
.earning-search{
  padding: 26px 15px;
  width: 100%;
  .van-cell{
    border: 1px #cbcbcb solid;
    border-radius: 10px;
  }
  .van-cell__left-icon{
    display: none;
  }
}
  .timetable-table{
    background: #fff;
    border-bottom: 1px #eff1f6 solid;
    height: 170px;
  .img{
    width: 80px;
    height: 80px;
    float: left;
    padding: 50px 30px 0 30px;
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
  .name{
    padding-right: 15px;

  }
  .people-num{
    padding-left: 10px;
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
    border-radius: 50px;
    line-height: 40px;
    padding: 0 20px;
    margin: 0px auto 0;
  }
  }
  }
}

</style>
