<template>
<div class="earning-report">
  <div class="charge-top">
    <div class="charge-top-tab">
      <calendar-packing></calendar-packing>
    </div>
    <div class="charge-top-right">
      <span @click="showPop">排序</span>
    </div>
  </div>
  <van-search placeholder="请输入老师姓名" background="#fff" class="earning-search" v-model="value" />
  <div class="timetable-table" @click="goTo(urls.earningReportDetial)">
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
  <sort-pop :title="popData.title" :items.sync="popData.items" :isShow.sync="popData.isShow" :selectId.sync="popData.selectId" ></sort-pop>
</div>
</template>
<script>
  import SortPop from '../popup/sortPopPublish'
  import CalendarPacking from '../general/calendarPacking'
  export default {
  components: {
    CalendarPacking,
    SortPop
  },
  data () {
  return{
    urls:{
      earningReportDetial:'/chart/earningReportDetial'
    },
    popData:{
      isShow:false,
      title:'排序方式',
      selectId:0,
      items: [
        {
          text:'按班级个数排序',
          isSelect:true,
          id:0

        },
        {
          text:'按课消金额排序',
          isSelect:false,
          id:1

        },
        {
          text:'按人数排序',
          isSelect:false,
          id:2

        },
        {
          text:'按好评率排序',
          isSelect:false,
          id:3

        }
      ]
    }
  }
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    },
    showPop(){
      this.popData.isShow = true
    }
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
    item :{
      handler(val){
        //日期快速切换值
        this.$toast(val)
      }
    },
    'popData.selectId':function (n,o) {
      this.$toast('排序方式选择'+n)
  }
  }
}
</script>
<style lang="less">
.earning-report{
  .charge-top{
    padding-top: 10px;
    height: 86px;
    background: #fff;
    .charge-top-tab{
      float: left;
      width: 542px;
      margin-bottom: 10px;
.commented-tab{
  padding-top: 0px;
}
    }
   .charge-top-right{
     float: right;
     line-height: 40px;
     padding-top: 10px;
     padding-right: 30px;
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
