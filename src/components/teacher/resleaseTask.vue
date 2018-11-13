<template>
  <div class="task">
    <calendar-packing></calendar-packing>
    <div class="task-table"  v-for="data in allDatas">
      <van-cell-group class="tab-list-item01">
        <van-cell :title="data.title" is-link :to="{path:'/teacher/taskDetial',query:{id:data.id}}" :childData="data"/>
      </van-cell-group>
      <div @click="goTo(urls.studentCompletion,data.id)">
      <van-cell-group class="tab-list-item02">
        <van-cell :title="data.courseName" :value="data.classPleanDate"/>
      </van-cell-group>
      <div class="tabl-list-item03">
        <span>已读{{data.readCount}}人</span>
        <span>已交{{data.submitCount}}人</span>
        <span>已评{{data.comentCount}}人</span>
      </div>
      </div>
    </div>
    <div class="list-bottom" @click="goTo(urls.resleaseAssignments)">发布作业</div>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
import CommentedPop from '../popup/commentedPop'
import CalendarPacking from '../general/calendarPacking'
import TaskDetial from './taskDetial'
export default {
  components: {
    CalendarPacking,
    TaskDetial
  },
  data () {
    return {
      allDatas:[],
      urls: {
        studentCompletion: '/teacher/studentCompletion',
        resleaseAssignments: '/teacher/resleaseAssignments'
      }
    }
  },
  mounted () {
    this.findReleaseHomework();
  },
  methods: {
    findReleaseHomework : function () {
      let _self = this;
      let param = new URLSearchParams();

      param.append('begin_date' , '2018-11-01');
      param.append('end_date' , '2018-11-31');
      param.append('pag ' , 1);
      param.append('rows' , 10);

      api.findReleaseHomework(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            _self.allDatas = res.data.data.rows;
          }
        });
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (url,param) {
      this.$router.push({path: url, query: {id: param}});
      //this.$router.push({path: '/transport/dispatch', query: {paicheNo: obj.paicheNo}})
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
.task{
.task-table {
  padding: 0 15px;
  background: #fff;
.tab-list-item01{
.van-cell{
  font-size: 26px;
  line-height: 50px;
}
.van-cell__right-icon{
  line-height: 50px;
}
}
.tab-list-item02{
.van-cell{
  color: #bbb;
  font-size: 24px;
  line-height: 50px;

}
}
.tab-list-item02.van-hairline--top-bottom::after{
  border-width:0;
}
.tabl-list-item03{
  width: 100%;
  padding-bottom: 20px;

  display: -webkit-inline-flex; /* Safari */
  display: inline-flex;
  span{
    display: inline-block;
    width: 33%;
    text-align: left;
    color: #838383;
    line-height: 40px;
    text-indent: 30px;
  }
}
}
.list-bottom{
  height: 95px;
  line-height: 95px;
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  background: #4286ed;
  color: #fff;
  text-align: center;
  font-size: 32px;
}
}

</style>
