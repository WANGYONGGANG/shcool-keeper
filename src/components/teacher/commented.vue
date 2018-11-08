<template>
  <div class="commented">
    <calendar-packing></calendar-packing>
    <div class="timetable-table" @click="goTo"  v-for="data in Alldatas">
      <div class="table-l">
        <div class="class-tit">{{data.className}}</div>
        <div class="class-details"><span class="time"><van-icon name="idcard" />{{data.courseName}}</span></div>
        <div class="class-details"><span class="time"><van-icon name="clock" />{{data.classPleanDate}}</span></div>
      </div>
      <div class="table-r">
        点评<br/>
        <span class="completion">0/2</span>
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
    this.getAllClassAndCommentsInTheClass();
  },
  methods: {
    //findAllClassAndCommentsInTheClass
    getAllClassAndCommentsInTheClass () {
      let _self = this;
      let param = new URLSearchParams();
      param.append('timeable_id',371);
      api.findAllClassAndCommentsInTheClass(param).then( res => {
        if( res.data.code == 1 ){
          _self.Alldatas = res.data.data;
          console.log(_self.Alldatas);
          }
      } );
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo () {
      this.$router.push({path: '/teacher/commentedList'})
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
