<template>
  <div class="student-completion">
    <van-tabs type="card" v-model="active">
      <van-tab :title='allDatasLen' >
        <div class="card-list" v-for="data in allDatas">
          <div class="card-list-l">
            <img class="img" src="../../assets/images/user/test.jpg"/>{{data.studentName}}
          </div>
          <div class="card-list-r">
            <span v-if = "data.isScore">已评价</span>
            <span v-else>待评价</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </van-tab>
      <van-tab :title="submitDataLen">
        <div class="card-list" v-for="data in submitData">
          <div class="card-list-l"><img class="img" src="../../assets/images/user/test.jpg"/>{{data.studentName}}
          </div>
          <div class="card-list-r">
            <span v-if = "data.isScore">已评价</span>
            <span v-else>待评价</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </van-tab>
      <van-tab :title="noSubmitDataLen">
        <div class="card-list" v-for="data in noSubmitData">
          <div class="card-list-l"><img class="img" src="../../assets/images/user/test.jpg"/>{{data.studentName}}
          </div>
          <div class="card-list-r">
            <span v-if = "data.isScore">已评价</span>
            <span v-else>待评价</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      active: 0,
      allDatasLen:'全部',
      submitDataLen:'已提交',
      noSubmitDataLen:'未提交',
      allDatas:[],
      submitData:[],
      noSubmitData:[],
    }
  },
  //getAllReleaseHomeworkStudent
  mounted () {
    this.getAllReleaseHomeworkStudent();
    this.getAllReleaseHomeworkStudentAndSubmit();
    this.getAllReleaseHomeworkStudentNoSubmit();
  },
  methods: {
    //获取接到作业的全部学员
    getAllReleaseHomeworkStudent : function () {
      let _self = this;
      let param = new URLSearchParams();
      //let id = this.$route.params.id
      param.append('work_id' , this.$route.query.id);
      api.getAllReleaseHomeworkStudent(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(111);
            console.log(res.data.data);
            _self.allDatas = res.data.data;
            _self.allDatasLen += '(' + _self.allDatas.length + ')';
          }
        });
    },
    //getAllReleaseHomeworkStudentAndSubmit 已提交   获取接到作业的学员并且是没有提交的
    getAllReleaseHomeworkStudentAndSubmit : function () {
      let _self = this;
      let param = new URLSearchParams();
      param.append('work_id' , this.$route.query.id);
      api.getAllReleaseHomeworkStudentAndSubmit(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            _self.submitData = res.data.data;
            _self.submitDataLen +='(' + _self.submitData.length + ')';
          }
        });
    },
    //getAllReleaseHomeworkStudentNoSubmit 未提交   获取接到作业的学员并且是已提交的
    getAllReleaseHomeworkStudentNoSubmit : function () {
      let _self = this;
      let param = new URLSearchParams();
      param.append('work_id' , this.$route.query.id);
      api.getAllReleaseHomeworkStudentNoSubmit(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            _self.noSubmitData = res.data.data;
            _self.noSubmitDataLen += '(' + _self.noSubmitData.length + ')';
          }
        });
    },
  },
}
</script>
<style lang="less">
.student-completion{
  padding: 20px;
  background: #fff;
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
  height: 56px;
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
.student-completion .van-tabs__nav--card .van-tab{

}
.card-list{
height:90px;
line-height:90px;
width:650px;
margin:0 auto;
  .card-list-l{
    float: left;
    .img{
      width: 60px;
      height: 60px;
      display: inline-block;
      border-radius: 100%;
      margin-right: 15px;
      vertical-align: middle;
    }
  }
.card-list-r{
  float: right;
  .van-icon{
    top:3px;
    color: #333333;
  }
}
}
}
</style>
