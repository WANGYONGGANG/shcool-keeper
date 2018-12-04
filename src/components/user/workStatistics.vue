<template>
<div class="work-statistics">
  <van-cell-group class="card-list-item">
    <van-cell title="已上课时" value="详情" is-link class="line65"  @click="goTo(urls.workStatisticsDetial)"/>
  </van-cell-group>
  <dl class="work-statistics-list" @click="goTo(urls.workStatisticsDetial)">
    <dt>上课率</dt>
    <dd class="num">{{attendance.attendance_ratio}}</dd>
    <dd class="progress">
      <span :style="{ width: attendance.attendance_ratio+'%'}"></span>
    </dd>
    <dd>
      <van-cell-group>
        <van-cell :title=attendance.already_in_class :value=attendance.total_class  class="line30"/>
      </van-cell-group>
    </dd>
  </dl>
  <van-cell-group class="card-list-item">
    <van-cell title="学生出勤" value="详情" is-link class="line65" @click="goTo(urls.workStatisticsAttendance)" />
  </van-cell-group>
  <dl class="work-statistics-list" @click="goTo(urls.workStatisticsAttendance)">
    <dt>出勤率</dt>
    <dd class="num">{{comment.comment_ratio}}</dd>
    <dd class="progress">
      <span :style="{ width: attendance.attendance_ratio+'%'}"></span>
    </dd>
    <dd>
      <van-cell-group>
        <van-cell :title=comment.sign_in_count :value=comment.total_count  class="line30"/>
      </van-cell-group>
    </dd>
  </dl>
  <van-cell-group class="card-list-item">
    <van-cell title="课程评价" class="line65" />
  </van-cell-group>
  <dl class="work-statistics-list">
    <dt>评价率</dt>
    <dd class="num">{{course.course_ratio}}</dd>
    <dd class="progress">
      <span :style="{ width: attendance.attendance_ratio+'%'}"></span>
    </dd>
    <dd>
      <van-cell-group>
        <van-cell :title=course.real_count :value=course.total_count  class="line30"/>
      </van-cell-group>
    </dd>
     </dl>
    <div class="naming-tab">
      <div class="naming-tab-l fn-left" @click='lessTime'><van-icon name="arrow-left" /></div>
      <!--<div class="naming-tab-m fn-left" ><span @click="showCalendar">2018年11月</span>-->
      <div class="naming-tab-m fn-left" ><span>{{timeData}}</span></div>
      <div class="naming-tab-r fn-right" @click='addTime'><van-icon name="arrow" /></div>
    </div>
</div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data ()
{
  return {
    attendance: '',
    comment: '',
    course: '',
    timeData: '',
    year: '',
    month: '',
    urls: {
      workStatisticsDetial: '/user/workStatisticsDetial',
      workStatisticsAttendance: '/user/workStatisticsAttendance'
    }
  }
}
,
mounted()
{
  var date = new Date();
  this.month = date.getMonth() + 1
  this.year = date.getFullYear()
  this.timeData = this.year + '-' + this.month
  this.getClass()
}
,
methods: {
  getClass(){
    var timeData = this.timeData + '-' + new Date().getDate()
    let params = new URLSearchParams();
    params.append("current_month", timeData);
    api.getWorkStatistics(params)
      .then(res=>{
      //已上课时
      this.attendance = res.data.attendance
      this.attendance.already_in_class = "已上：" + this.attendance.already_in_class + '节'
      this.attendance.total_class = "共计：" + this.attendance.total_class + '节'
      //学生出勤
      this.comment = res.data.comment
      this.comment.total_count = '应到：' + this.comment.total_count + '人'
      this.comment.sign_in_count = '实到：' + this.comment.sign_in_count + '人'
      //课程评价
      this.course = res.data.course
      this.course.real_count = '已评价：' + this.course.real_count + '人'
      this.course.total_count = '已评价：' + this.course.total_count + '人'
    },()=>{

    })
    ;
  },
  //前一个月
  lessTime()
  {
    if (this.month == 1) {
      this.month = 12
      this.year = this.year - 1
    } else {
      this.month = this.month - 1
    }
    this.timeData = this.year + '-' + this.month
    this.getClass()
    // timeData=this.timeData+'-'+new Date().getDate()
  }
,
  // //后一个月
  addTime()
  {
    console.log(new Date().getFullYear())
    if (this.year == new Date().getFullYear()) {
      if (this.month == new Date().getMonth() + 1) {
        this.$toast('已是当前月');
      } else {
        this.month = this.month + 1
      }
    } else {
      if (this.month == 12) {
        this.month = 1
        this.year = this.year + 1
      } else {
        this.month = this.month + 1
      }
    }
    this.timeData = this.year + '-' + this.month
    this.getClass()
    // timeData=this.timeData+'-'+new Date().getDate()
  }
,
//    goTo()
//    {
//      this.$router.push({path: '/user/workStatisticsDetial', query: {time: this.timeData}})
//    }
//  ,
  goTo(url)
  {
    this.$router.push({path: url})
  }

},
}
</script>
<style lang="less">
  .work-statistics{
  padding-bottom:100px;
  .van-cell-group{
    background-color: transparent;
  }
  .van-cell--clickable:active{
    background-color: transparent;
  }
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    background-color: transparent;
    padding: 10px 29px;
  }
  .line65{
    line-height: 65px;
    padding: 10px 40px;
  }
  [class*=van-hairline]::after{
    border: 0 #fff solid;
  }
  .work-statistics-list{
    width: 90%;
    background: #fff;
    padding: 10px 0 30px;
    border-radius: 5px;
    margin: 0 auto;

  dt{
    padding: 30px 0 10px;
    text-align: center;
  }
  dd{
    font-size: 30px;
    color: #6a6b6b;

  }
  .num{
    font-size: 32px;
    text-align: center;
  }
  .progress{
    width: 90%;
    height: 10px;
    border-radius: 40px;
    background: #eee;
    margin: 20px auto;
    span{
      border-radius: 40px;
      display:inline-block;
      background-color:#4286ed;
      height:100%;
      vertical-align:top
    }
  }
  }

  .naming-tab{
    height: 86px;
    background: #fff;
    text-align: center;
    line-height: 86px;
    position: fixed;
    bottom: 0;
    font-size: 28px;
  .naming-tab-l,.naming-tab-r{
    width: 50px;
    position: relative;
    top: 5px;
  }
  .naming-tab-m{
    width: 650px;
    text-align: center;
  }
  .arrow-down .van-icon{
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin-left: 10px;
    position: relative;
    top: 5px;
  }
  }

  }

</style>
