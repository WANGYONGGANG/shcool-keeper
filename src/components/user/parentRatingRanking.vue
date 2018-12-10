<template>
  <div class="parent-rating-ranking">
    <div class="choose-school-zone" @click="showAreaPop">
      <van-cell-group>
        <van-cell title="选择校区" value="潮人部落" is-link/>
      </van-cell-group>
    </div>
    <div class="class-tab fn-clear">
      <calendar-packing v-on:updateDate="updateDate"  v-bind:begin_date="begin_date"  v-bind:end_date="end_date"
        ref="CalendarPacking"  v-if="showCalendar" ></calendar-packing>
      <div class="operation" @click="showPop">{{popData.selectText}}</div>
    </div>
    <ul class="average" :model="resourceList">
      <li class="average-tit">我的平均分</li>
      <li class="average-item01">{{resourceList.average_score}}</li>
      <li class="average-item02">在教师中排名第{{resourceList.ranking}}名</li>
      <li class="average-item03" v-if="resourceList.ranking === 1"><span>超越了所有人，位于榜首</span></li>
      <li class="average-item04">
        <span>学校老师平均分<br/>{{resourceList.school_average_score}}</span>
        <span>学校老师最高分<br/>{{resourceList.school_max_score}}</span>
      </li>
    </ul>
    <div class="charge-table">
      <table class="table-top">
        <tr class="title">
          <th class="w450">课程</th>
          <th class="w150" @click="sortFn">平均分 <icon name="sort" scale="2" /></th>
          <th class="w150" @click="sortFn">排名 <icon name="sort" scale="2" /></th>
        </tr>
        <tr @click="goTo(urls.evaluationLatitude)"  v-for="data in resourceList.detail" :id="data.id">
          <td class="w450">{{data.name}}</td>
          <td class="w150">{{data.average_score}}</td>
          <td class="w150">{{data.ranking}}<van-icon name="arrow" size="1" class="w150-arrow" /></td>
        </tr>
      </table>
    </div>
    <choose-school :isShow.sync="chooseSchoolDatas.filterShow2" :list.sync="chooseSchoolDatas.list" :selectItem.sync="chooseSchoolDatas.selectItem"></choose-school>
    <sort-pop :title="popData.title" :items.sync="popData.items" :isShow.sync="popData.isShow" :selectId.sync="popData.selectId" ></sort-pop>
  </div>
</template>
<script>
  import CalendarPacking from '../general/calendarPacking'
  import SortPop from '../popup/sortPopPublish'
  import ChooseSchool from '../general/chooseSchool'
  import { api } from "../../../static/js/request-api/request-api.js"
  export default {
    components: {
      CalendarPacking,
      SortPop,
      ChooseSchool
    },
    data () {
      return {
        begin_date:null,
        end_date:null,
        showCalendar:false,
        value: '',
        chooseSchoolDatas:{
          filterShow2:false,
          selectItem:[],
          list:['潮人部落','金色阳光']
        },
        urls: {
          examinationResult: '/teacher/examinationResult',
          evaluationLatitude:'/user/evaluationLatitude'
        },
        popData:{
          isShow:false,
          selectId:0,
          selectText:'期段',
          items: [
            {
              text:'期段',
              isSelect:true,
              id:2

            },
            {
              text:'类型',
              isSelect:false,
              id:1

            },
            {
              text:'年级',
              isSelect:false,
              id:3
            },
            {
              text:'科目',
              isSelect:false,
              id:4
            },
            {
              text:'课程',
              isSelect:false,
              id:5
            }
          ]
        },
        resourceList:'',
        schoolPartList:[]
      }
    },
    mounted () {
      this.initDateWeek();
      this.parentEvaluationRanking();
    },
    methods: {
      parentEvaluationRanking:function(){
        let params = new URLSearchParams();
        params.append('begin_date' ,this.begin_date);
        params.append('end_data' ,this.end_date);
        params.append('campus_id', '[9,10]');
        params.append('type_id' ,2);

        let _self = this;
        api.parentEvaluationRanking(params)
          .then(res => {
            if(res.code===1){
              _self.resourceList=res.data;
            }
          })
          .catch(error => {
            
          });
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
                  _self.initDate();
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
      updateDate:function(beginDate,endDate){
        this.begin_date=beginDate;
        this.end_date=endDate;
        this.parentEvaluationRanking();
      },
      initDate(){
        let schoolPartList=this.schoolPartList;
        for(let i=0;i<schoolPartList.length;i++){
          this.chooseSchoolDatas.lists.push(schoolPartList[i].name);
        }
        this.chooseSchoolDatas.selectItem.item=schoolPartList[0].name;
      },
     initDateWeek:function(){
          this.begin_date = this.getAllDateFromNow(0);
          this.end_date = this.getWeekEndDate(0);
          this.showCalendar=true;
    },
    getDate(val) {
      let date = new Date();
      let seperator = "-";
      let year = date.getFullYear(); //获取年份
      let month = date.getMonth() + 1; //获取月份
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      let strDate = date.getDate(); //获取日期
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let week = date.getDay(); //获取星期
      if (val == "今天") {
        this.date1 = year + seperator + month + seperator + strDate;
        this.date2 = year + seperator + month + seperator + strDate;
      }
      if (val == "昨天") {
        this.date1 = this.timeForMat(0,date);
        this.date2 = this.timeForMat(0,date);
      }
      if (val == "本周") {
        let num = week - 1;
        date.setDate(date.getDate() - num); //本周第一天
        let str = this.format("yyyy-MM-dd", date);
        date.setDate(date.getDate() + 6); //本周最后一天
        let str1 = this.format("yyyy-MM-dd", date);
        this.date1 = str;
        this.date2 = str1;
      }
      if (val == "最近7天") {
        this.date1 = this.timeForMat(6,date);
        this.date2 = year + seperator + month + seperator + strDate;
      }
      if (val == "最近30天") {
        this.date1 = this.timeForMat(29,date);
        this.date2 = year + seperator + month + seperator + strDate;
      }
      if (val == "本月") {
        date.setDate(1); //本月第一天
        var str = this.format("yyyy-MM-dd", date);
        date.setMonth(date.getMonth() + 1); //下个月
        date.setDate(date.getDate() - 1); //下个月第一天减1得到本月最后一天
        var str1 = this.format("yyyy-MM-dd", date);
        this.date1 = str;
        this.date2 = str1;
      }
      if (val == "上月") {
        month = month - 1;
        if (month == 0) {
          month = 12;
          year = year - 1;
        }
        if (month < 10) {
          month = "0" + month;
        }
        this.date1 = year + "-" + month + "-" + "01"; //上个月的第一天
        var myDate = new Date(year, month, 0);
        this.date2 = year + "-" + month + "-" + myDate.getDate(); //上个月的最后一天
      }
    },
      initDate(){
        let schoolPartList=this.schoolPartList;
        for(let i=0;i<schoolPartList.length;i++){
          this.chooseSchoolDatas.lists.push(schoolPartList[i].name);
        }
        this.chooseSchoolDatas.selectItem.item=schoolPartList[0].name;
      },
     initDateWeek:function(){
          this.begin_date = this.getAllDateFromNow(0);
          this.end_date = this.getWeekEndDate(0);
          this.showCalendar=true;
    },
     //获取昨天，最近7天，最近30天
    timeForMat(count,date) {
      date.setTime(date.getTime() - 24 * 60 * 60 * 1000 * count);
      let Y2 = date.getFullYear();
      let M2 =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let D2 = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      return Y2 + "-" + M2 + "-" + D2;
    },
    //获取本周、本月
    format(fmt, date) {
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    },
     formatDate(date) {
      var myyear = date.getFullYear();
      var mymonth = date.getMonth() + 1;
      var myweekday = date.getDate();

      if (mymonth < 10) {
        mymonth = "0" + mymonth;
      }
      if (myweekday < 10) {
        myweekday = "0" + myweekday;
      }
      return myyear + "-" + mymonth + "-" + myweekday;
    },
     //获取本周开始日期
    getAllDateFromNow(index) {
      var now = new Date(); //当前日期
      var nowDayOfWeek = now.getDay(); //今天本周的第几天
      var nowDay = now.getDate(); //当前日
      var nowMonth = now.getMonth(); //当前月
      var nowYear = now.getFullYear(); //当前年
      if (nowDayOfWeek == 0) {
        nowDayOfWeek = 7;
      }
      var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek+index+1);

      return this.formatDate(weekStartDate);
    },
    getWeekEndDate(index) {
      var now = new Date(); //当前日期
      var nowDayOfWeek = now.getDay(); //今天本周的第几天
      var nowDay = now.getDate(); //当前日
      var nowMonth = now.getMonth(); //当前月
      var nowYear = now.getFullYear(); //当前年
      if (nowDayOfWeek == 0) {
        nowDayOfWeek = 7;
      }
      var weekEndDate = new Date(
        nowYear,
        nowMonth,
        nowDay + (7 - nowDayOfWeek+index)
      );
      return this.formatDate(weekEndDate);
    },

      showCommentedDia () {
        this.$store.state.commentPopup.isShow = true
      },
      showAreaPop(){
        this.chooseSchoolDatas.filterShow2=true
      },
      goTo (url) {
        this.$router.push({path: url})
      },

      showPop(){
        this.popData.isShow = true
      },
      sortFn(){
        this.$toast('排序')
      }
    },
    computed : {
      item () {
        return this.$store.state.commentPopup.item
      }
    },
    watch:{
      item :{
        //日期快速切换值
        handler(val){
          this.getDate(val);
          this.$toast(val)
          this.begin_date=this.date1;
          this.end_date=this.date2;
          console.log(this.begin_date)
          this.parentEvaluationRanking();
          this.$refs.CalendarPacking.setCheckedDateValue(this.begin_date,this.end_date);
        }
      },
      'popData.selectId':function (n,o) {
        this.popData.selectText=this.popData.items[n].text

      },
      'chooseSchoolDatas.selectItem'(val){
        console.log(val)
        this.$toast('找到我查看选中校区的值')
      }
    }
  }
</script>
<style lang="less">
  .parent-rating-ranking{
  .class-tab{
    background: #fff;
    height: 85px;
    padding:0 20px 10px;
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
    width: 606px;
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
    padding: 6px 18px;
    font-size: 24px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 34px 5px 0 0;
    color: #4286ed;
  }
  }
  .choose-school-zone{
  .van-cell{
    font-size: 28px;
    line-height: 45px;
    padding: 15px 35px;
  }
  .van-cell__right-icon{
    font-size: 24px;
    line-height: 45px;
    margin-left: 10px;
  }
  }
  .van-popup{
    width: 100%;
  }
  .average{
    padding: 15px 0;
    width:100%;
    margin-top: 20px;
    background: #fff;
  .average-tit{
    text-align: left;
    padding-left: 30px;
    width: 100%;
    line-height: 40px;
  }
  .average-item01{
    text-align: center;
    font-size: 80px;
    padding-top: 20px;
    color: #4286ed;
  }
  .average-item02{
    text-align: center;
  }
  .average-item03{
    margin-top: 20px;
    text-align: center;
  span{
    display: inline-block;
    border: 1px #e0e5ed solid;
    font-size: 24px;
    border-radius: 40px;
    padding: 8px 30px;
    color: #838383;
  }
  }
  .average-item04{
    height: 125px;
    padding-top: 30px;
    width:100%;
  span{
    display: inline-block;
    width: 50%;
    text-align: center;
    font-size: 24px;
    float: left;
    line-height: 45px;
  }
  }
  }

  .filter{
    height: 100%;
    width: 78%;
  .class-back{
    height: 70px;
    line-height: 70px;
    background: #eef1f6;
    padding-left: 10px;
  .van-icon{
    position: relative;
    top: 4px;
    margin-right: 10px;
    color: #999;
  }
  }
  .van-checkbox{
    line-height: 70px;
  .van-checkbox__icon{
    margin:0 8px 0 30px;
  i{
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: 16px;
  }
  }
  }
  .filter-btn{
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 80px;
    font-size: 32px;
    background: #fff;
    height: 81px;
  .btn-reset{
    background: #feffff;
    display: inline-block;
    width: 49%;
    height: 80px;
    color: #333333;
    border-top:1px #f1f1f1 solid ;
  }
  .btn-submit{
    background: #0097ef;
    width: 49%;
    display: inline-block;
    height: 80px;
    color: #fff;
    border-top:1px #0097ef solid ;
  }
  }
  }
  .charge-table{
    width:100%;
  .w450{
    width: 450px;
    padding-left: 30px;
  }
  .w150{
    width: 150px;
  }
  .w100{
    width: 100px;
  }
  .table-top{
  th{
    border-bottom:2px #d2d5da solid ;
    border-top:15px #eef1f6 solid ;
    background: #fff;
    line-height: 80px;
  }
  td{
    background: #fff;
    line-height: 80px;
  }
  .fa-icon{
    position: relative;
    top: 6px;
    color: #d4d1d1;
  }

  }

  }
  .w150-arrow{
    position: relative;
    left: 25px;
    top: 4px;
    color: #DADCE3;
  }
   .choose-school-filter{
     width: 78%;
     height: 100%;
   }
  }
</style>
