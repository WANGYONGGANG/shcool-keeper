<template>
  <div class="task">
    <div class="commented-tab">
      <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
    </div>
    <div class="task-table">
      <van-cell-group class="tab-list-item01">
        <van-cell title="基础舞蹈" is-link to="/teacher/taskDetial"/>
      </van-cell-group>
      <div @click="goTo(urls.studentCompletion)">
      <van-cell-group class="tab-list-item02">
        <van-cell title="17暑初二英语同步班0523班" value="2018-07-0411:28"/>
      </van-cell-group>
      <div class="tabl-list-item03">
        <span>已读1/1人</span>
        <span>已交1人</span>
        <span>已评0人</span>
      </div>
      </div>
    </div>
    <commented-pop></commented-pop>
    <div class="list-bottom" @click="goTo(urls.resleaseAssignments)">发布作业</div>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
import CommentedPop from '../popup/commentedPop'
export default {
  components: {
    CommentedPop
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
    this.getAllReleaseHomeworkStudent();
  },
  methods: {
    getAllReleaseHomeworkStudent : function () {
      let _self = this;
      let param = new URLSearchParams();
      param.append('work_id' , 2);
      api.getAllReleaseHomeworkStudent(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            _self.allDatas = res.data.data;
          }
        });
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.task{
.commented-tab{
  height: 76px;
  padding-top: 10px;
  background: #fff;
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
