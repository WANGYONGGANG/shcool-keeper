<template>
  <div class="commented">
    <calendar-packing></calendar-packing>
    <div class="timetable-table" @click="goTo(data.id)"  v-for="data in Alldatas">
      <div class="table-l">
        <div class="class-tit">{{data.className}}</div>
        <div class="class-details"><span class="time"><van-icon name="idcard" />{{data.courseName}}</span></div>
        <div class="class-details"><span class="time"><van-icon name="clock" />{{data.classPleanDate}}</span></div>
      </div>
      <div class="table-r">
        点评<br/>
        <span class="completion">{{data.evaluationCount}}/{{data.recruitStudentsCount}}</span>
      </div>
    </div>
  </div>
</template>
<script>
//上课点评页面
import {api} from  '../../../static/js/request-api/request-api.js';
//日历选择组件
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking
  },
  data () {
    return {
      Alldatas:[]
    }
  },
  mounted () {
    this.findMyClassRecord();
  },
  methods: {
    //findMyClassRecord获取当前登录人的排课计划
    findMyClassRecord () {
      let _self = this;
      let param = new URLSearchParams();
      
      param.append('begin_date' , '2018-10-01');
      param.append('end_date' , '2018-10-31');
      param.append('pag ' , 1);
      param.append('rows' , 10);

      api.findMyClassRecord(param).then( res => {
        if( res.data.code == 1 ){
          console.log(res.data);
          _self.Alldatas = res.data.data.rows;
          console.log(_self.Alldatas);
          }
      } );
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (param) {
      this.$router.push({path: '/teacher/commentedList',query:{id:param}})
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
    }
  }
}
</script>
<style lang="less">
.commented{
.timetable-table{
  background: #fff;
  height: 170px;
  margin-bottom: 10px;
.empty{
  line-height: 170px;
  text-align: center;
  font-size: 32px;
  color: #838383;
}
.table-l{
  float: left;
  padding-left:30px;
  overflow: hidden;
  width: 550px;
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
  white-space: nowrap;
.name{
  padding-right: 15px;
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 15px;
  color: #dc951a;

}
}
.time{
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 15px;
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
  border-radius: 50px;
  line-height: 40px;
  padding: 0 20px;
  margin: 15px auto 0;
}
}
}
}

</style>
