<template>
  <div class="customer-follow-up">
    <van-tabs type="card">
      <van-tab title="沟通统计">
        <tab-one  v-bind:schoolPartList="schoolPartList"></tab-one>
      </van-tab>
      <van-tab title="转化统计">
        <tab-two v-bind:schoolPartList="schoolPartList"></tab-two>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import CalendarPacking from '../general/calendarPacking'
import TabOne from './components/customerFollowUpStatisticsTab1'
import TabTwo from './components/customerFollowUpStatisticsTab2'
export default {
  components: {
    CalendarPacking,
    TabOne,
    TabTwo
  },
  data () {
    return {
      active: 1,
      schoolPartList:null,
      urls: {
        communicationRecord: '/teacher/communicationRecord',
        purchaseDetails: '/teacher/purchaseDetails'
      }
 
    }
  },
   mounted:function(){
    this.refreshDepartment(); 
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    },
    //查询所有校区
    refreshDepartment: function() {
      let params ={};      
      let _self = this;
      api.refreshDepartment(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.schoolPartList=res.data.data;
                }
          } else {
            let params = { msg: "查询所有校区" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "查询所有校区" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
  .customer-follow-up{
  .card-tit{
    height: 76px;
    position: relative;

  .fuzeren{
    padding-right: 30px;
    position: absolute;
    right: 30px;
    top: 10px;
    padding-top: 19px;
  input{
    -webkit-appearance:checkbox;
    width: 25px;
    height: 25px;
    position: relative;
    top: 5px;
    margin-right: 10px;
  }
  }
  }

  .van-tab{
    font-size: 26px;
  }
  .van-tabs--card{
    padding-top: 75px;
  }
  .van-tabs__nav--card .van-tab.van-tab--active{
    background-color: #4286ed;
    color: #fff;
  }
  .van-tabs--card .van-tabs__wrap{
    height: 105px;
  }
  .van-tabs__content{
    padding-top: 20px;

  }
  .van-tabs__nav--card{
    border: 1px #4286ed solid;
    height: 56px;

  }
  .van-tabs__nav--card .van-tab{
    border-right:1px #4286ed solid ;
    line-height: 56px;
    color: #4286ed;
  }
  .van-tabs__nav--card .van-tab{

  }
  .van-tabs--card .van-tabs__wrap{
    padding: 20px;
    background: #fff;
  }
  .card-list{
    background: #fff;
    height:90px;
    line-height:90px;
    padding: 0 30px;
    margin:10px auto 0;
  .card-list-l{
    float: left;
    font-size: 28px;
  .img{
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 100%;
    margin-right: 15px;
    vertical-align: middle;
  }
  .times{
    font-size: 24px;
    padding-left: 15px;
    color: #838383;

  }
  }
  .card-list-r{
    float: right;
  .van-icon{
    top:3px;
    color:#838383;
  }
  }
  }
  .list-search{
    background: #fff;
    height: 105px;
    padding:10px 20px;
  .list-search-l{
    float: left;
  }
  .van-cell{
    font-size: 26px;
  }
  .van-cell__left-icon{
    font-size: 26px;
    top:15px;
    margin-right: 10px;
  }
  .van-search__action{
    font-size: 26px;
    background: #eff1f6;
    position: relative;
    left:-32px;
    border-radius: 35px;
    padding: 16px 23px;
  }
  .van-search{
    width: 500px;
  }
  .van-search .van-cell{
    border: 1px #eff1f6 solid;
    border-right:none;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    padding: 0px 10px;
    line-height: 54px;
  }
  .operation{
    float: right;
    padding: 16px 23px;
    font-size: 26px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 6px 5px 0 0;
  }
  }
  .no-data{
    text-align: center;
    padding: 30px 0;
  }
  .card-list-item{
    margin-bottom: 20px;
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
   .line65{
     line-height: 65px;
   }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  .card-list-btn{
    background: #fff;
    height: 95px;
    padding: 20px 0;
    border-top: 1px #eff1f6 solid;
    text-align:right;
  span{
    display: inline-block;
    border: 1px #4286ed solid;
    padding: 10px 28px;
    color: #4286ed;
    border-radius: 32px;
    margin-right: 20px;
  }
  }
  }
</style>
