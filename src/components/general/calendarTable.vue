<template>
  <div class="calendar-table">
    <!-- 年份 月份 -->
    <ul class="select">
      <li class="year">
        <!-- 上一年 -->
        <van-icon name="arrow-left" class="fn-left" @click="pickerLastYear(currentYear,currentMonth)" />
        <span>{{currentYear}}</span>
        <!-- 下一年 -->
        <van-icon name="arrow"  class="fn-right" @click="pickerNextYear(currentYear,currentMonth)" />
      </li>
      <li class="month">
        <!-- 上一个月 -->
        <van-icon name="arrow-left" class="fn-left" @click="pickerLastMonth(currentYear,currentMonth)" />
        <span>{{currentMonth}}</span>
        <!-- 下一个月 -->
        <van-icon name="arrow" class="fn-right"  @click="pickerNextMonth(currentYear,currentMonth)" />
      </li>
    </ul>
    <!-- 星期 -->
    <ul class="week">
      <li>周日</li>
      <li>周一</li>
      <li>周二</li>
      <li>周三</li>
      <li>周四</li>
      <li>周五</li>
      <li>周六</li>
    </ul>
    <!-- 日期 -->
    <ul class="day fn-clear">
      <li v-for="(dayobject ,index) in days" @click="output(dayobject.day,index)">
        <i v-if="isHaveDetial(dayobject.day)" class="point"></i>
          <!--如果不是本月  改变类名加灰色-->
          <span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month" >{{ dayobject.day.getDate() }}</span>
          <!--如果是本月  还需要判断是不是这一天-->
          <span v-else>
          <!--今天  同年同月同日-->
                <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" class="active">{{ dayobject.day.getDate() }}</span>
                <span v-else>{{ dayobject.day.getDate() }}</span>
         </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:['date','haveDetial','list'],
  data () {
    return {
      currentYear:2018,//初始化当天的年份动态取值
      currentMonth:11,//初始化当天的月份动态取值
      currentWeek:1,
      currentDay:1,
      minYear: 1980,//设置最小可以查看的年份
      maxYear: 2050,//设置最大可以查看的年份
      isSelect:false,
      days:[]
    }
  },
  methods: {
    pickerLastYear (year, month) {
      let yearDate=year
      // 当前要查看的年份等于设置的最小年份时禁止点击
      if(yearDate === this.minYear){
        return
      }
      yearDate--
      this.currentYear = yearDate
      // 前翻设置
      let d = new Date(this.formatDate(yearDate , month , 1));
      d.setDate(0);
      this.renderDays(this.formatDate(d.getFullYear(),month,1));

    },
    pickerNextYear (year, month) {
      let yearDate=year
      // 当前要查看的年份等于设置的最大年份时禁止点击
      if(yearDate === this.maxYear){
        return
      }
      yearDate++
      this.currentYear = yearDate
      // 后翻设置
      let d = new Date(this.formatDate(yearDate , month , 1));
      d.setDate(42);
      this.renderDays(this.formatDate(d.getFullYear(),month,1));
    },
    pickerLastMonth (year, month) {
      let monthDate=this.currentMonth
      if(monthDate===1){
      // 要递减所以设置的值要加上1 不可直接设置为12
        monthDate=13
      }
      monthDate--
      this.currentMonth = monthDate
      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(dx) 参数dx为 上月最后一天的前后dx天
      // 前翻设置
      let d = new Date(this.formatDate(year , month , 1));
      d.setDate(0);
      this.renderDays(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
    },
    pickerNextMonth (year, month) {
      let monthDate=this.currentMonth
      if(monthDate===12){
      //要递增所以设置的值要减1 不可直接设置为1
        monthDate=0
      }
      monthDate++
      this.currentMonth = monthDate
      // 后翻设置
      let d = new Date(this.formatDate(year , month , 1));
      d.setDate(35);
      this.renderDays(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
    },
    renderDays (cur) {
      var date
      if (cur) {
        date = new Date(cur);
      } else {
        let now=new Date();
        let d = new Date(this.formatDate(now.getFullYear() , now.getMonth() , 1));
        d.setDate(42);
        date = new Date(this.formatDate(d.getFullYear(),d.getMonth() + 1,1));
      }
      this.currentYear = date.getFullYear()
      this.currentMonth = date.getMonth()+1
      this.currentDay = date.getDate()
      this.currentWeek = date.getDay(); // 1...6,0

      var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);
      this.days.length = 0;

      //初始化本周
      for (var i = this.currentWeek; i >= 0; i--) {
        let d = new Date(str);
        d.setDate(d.getDate() - i);
        let dayobject={}; //用一个对象包装Date对象  以便为以后预定功能添加属性
        dayobject.day=d;
        dayobject.isSelect=false
        this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用
      }
      //其他周
      for (var i = 1; i <= 41 - this.currentWeek; i++) {
        let d = new Date(str);
        d.setDate(d.getDate() + i);
        let dayobject={};
        dayobject.day=d;
        dayobject.isSelect = false
        this.days.push(dayobject);
      }
    },
    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year,month,day){
      var y = year;
      var m = month;
      if(m<10) m = "0" + m;
      var d = day;
      if(d<10) d = "0" + d;
      return y+"-"+m+"-"+d
    },
    output (dateObject,index) {
      let year =dateObject.getFullYear()//获取完整的年份(4位,1970-????)
      let month =dateObject.getMonth()+1//获取当前月份(0-11,0代表1月)
      let date =dateObject.getDate()//获取当前日(1-31)
      let newDate = this.formatDate(year,month,date)
      this.$emit('update:date', newDate)
      if(this.haveDetial.includes(newDate)){

      }
    },
    isHaveDetial(dateObject){
      let year =dateObject.getFullYear()//获取完整的年份(4位,1970-????)
      let month =dateObject.getMonth()+1//获取当前月份(0-11,0代表1月)
      let date =dateObject.getDate()//获取当前日(1-31)
      let newDate = this.formatDate(year,month,date)
      if(this.haveDetial.includes(newDate)){
        return true
      }
    },
    isblue () {

    }
  },
  mounted () {
    this.renderDays()
  }
}
</script>
<style lang="less">
  .calendar-table{
    width: 100%;
    .select{
      display:flex;
      width:100%;
      line-height: 80px;
      text-align: center;
      font-size: 28px;
       height:80px;
      .year{
        -webkit-box-flex:1.0; /* Safari 和 Chrome */
        flex:1.0;
      }
      .month{
        -webkit-box-flex:1.0; /* Safari 和 Chrome */
        flex:1.0;
      }
      .van-icon{
        margin: 26px 10px 0;
        color: #4286ed;
      }
    }
  .week,.day{
    margin: 0 auto;
    padding-left: 10px;
    width: 730px;
    li{
      float: left;
      width: 14%;
      line-height: 70px;
      height: 70px;
      position: relative;
      text-align: center;
  .point{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: #efc303;
    display: block;
  }
    }
  }
  .day{
    height: 435px;
    overflow: hidden;
    li{
      border: 1px #eef1f6 solid;
      background: #fff;
    }
  }
  .other-month{
    color:#999 ;
  }
  .active{
    color: #fff;
    display: inline-block;
    background: #4286ed;
    width:100%;
    height: 70px;
    line-height: 70px;
  }
  .li-select{
    color: #fff;
    display: inline-block;
    background: #4286ed;
    width:100%;
    height: 70px;
    line-height: 70px;
  }

  }

</style>
