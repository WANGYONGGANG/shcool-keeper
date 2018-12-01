<template>
  <div class="student-list">
    <van-cell-group>
      <van-cell title="上课时间：" v-bind:value="classTimeReturn(beginTime,endTime)"  />
      <van-cell title="上课内容" >{{courseName}}</van-cell>
    </van-cell-group>
    <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="输入学生姓名" background="#fff"  show-action v-model="studentName">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="operation">排序</div>
      <div class="operation" v-on:click="addStu">添加学员</div>
    </div>
    <div class="list-table">
      <v-table
        :width="750"
        :title-row-height="100"
        :row-height="80"
        :columns="columns"
        :table-data="tableData"
        :show-vertical-border="false"
      ></v-table>
    </div>
    <ul class="bottom-btn fn-clear">
      <li class="bottom-btn-item01">共1人<br/>计费：0</li>
      <li class="bottom-btn-item01">出勤：0<br/>试听：0</li>
      <li class="bottom-btn-item03"><span @click="goTo">点名上课</span>
      </li>
      </ul>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  data () {
    return {
      value: '',
      courseName:"",
      beginTime:'',
      endTime:"",
      studentName:"",
      tableData: [
            //  {"name":"赵伟","chuqin":"156*****1987","jifei":"钢琴、书法、唱歌","shiting":"上海市黄浦区金陵东路569号17楼","queqin":""}
      ],
      columns: [
        {field: 'name', title: '姓名', width: 160, titleAlign: 'center', columnAlign: 'center'},
        {field: 'chuqin', title: '出勤', width: 130, titleAlign: 'center', columnAlign: 'center'},
        {field: 'jifei', title: '计费（小时）', width: 200, titleAlign: 'center', columnAlign: 'center'},
        {field: 'shiting', title: '试听', width: 130, titleAlign: 'center', columnAlign: 'left'},
        {field: 'queqin', title: '缺勤原因', width: 130, titleAlign: 'center', columnAlign: 'left'}
      ]
    }
  },
  mounted () {
    this.getMyClassRoster();
    this.initData();
  },
  methods: {
    onSearch () {
      this.tableData=[];
      this.getMyClassRoster();
    },
    addStu(){
      let timeable_id=this.$route.query["timeable_id"];
       this.$router.push({
        path: "/teacher/addStu",
        query: {timeable_id:timeable_id}
      });
    },
    initData:function(){
        this.beginTime=this.$route.query["beginTime"];
        this.endTime=this.$route.query["endTime"];
        this.courseName=this.$route.query["courseName"];
    },
    classTimeReturn:function(beginTime,endTime){
      let date3=new Date(beginTime).getTime()-new Date(endTime).getTime();
      //计算出相差天数
      var days=Math.floor(date3/(24*3600*1000))
      
      //计算出小时数

      var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
      var hours=Math.floor(leave1/(3600*1000))
      //计算相差分钟数
      var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
      var minutes=Math.floor(leave2/(60*1000))
      

      //计算相差秒数
      var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
      var seconds=Math.round(leave3/1000)
      return beginTime+"~"+endTime+" ,时长"+hours+":"+minutes+"0";

    },
     getMyClassRoster() {
      let _self = this;
      let params = {};
      params.order=null;
      params.sort=null;
      params.student_name=null;
      params.timeable_id=this.$route.query["timeable_id"];
      params.student_name=this.studentName;
      api.getMyClassRoster(params).then(res => {
        if (res.data.code == 1) {
          let allDatas=[]
          allDatas = res.data.data;
          if(allDatas){
            for(let i=0;i<allDatas.length;i++){
               let stu={};
               stu.name=allDatas[i].studentName;
               let isAttendance="是";
               if(allDatas[i].isAttendance){
                 isAttendance="是";
               }else{
                 isAttendance="否";
               }
               stu.chuqin=isAttendance;
               stu.jifei=allDatas[i].realPeriodCount;
               let isTry="是";
               if(allDatas[i].isTry){
                 isTry="是";
               }else{
                 isTry="否";
               }
               stu.shiting=isTry;
               stu.queqin=allDatas[i].absentId;
               _self.tableData.push(stu);
            }
          }
        }
      });
    },
    goTo () {

    }
  }
}
</script>
<style lang="less">
.student-list {
  .list-search {
    background: #fff;
    height: 105px;
    margin-top: 20px;
    padding: 10px 20px;
    .list-search-l {
      float: left;
      width: 452px;
    }
    .van-cell {
      font-size: 26px;
    }
    .van-cell__left-icon {
      font-size: 26px;
      top: 15px;
      margin-right: 10px;
    }
    .van-search__action {
      font-size: 26px;
      background: #eff1f6;
      position: relative;
      left: -32px;
      border-radius: 35px;
      padding: 16px 23px;
    }
    .van-search {
      width: 462px;
    }
    .van-search .van-cell {
      border: 1px #eff1f6 solid;
      border-right: none;
      border-top-left-radius: 35px;
      border-bottom-left-radius: 35px;
      padding: 0px 10px;
      line-height: 54px;
    }
    .operation {
      float: right;
      padding: 16px 23px;
      font-size: 26px;
      background: #eff1f6;
      border-radius: 35px;
      margin: 6px 5px 0 0;
    }
  }
  .bottom-btn {
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    color: #838383;
    .bottom-btn-item01 {
      line-height: 40px;
      float: left;
      padding: 10px 0 0 20px;
      margin-left: 20px;
      font-size: 24px;
    }
    .bottom-btn-item03 {
      float: right;
      span {
        display: inline-block;
        background: #4286ed;
        color: #fff;
        line-height: 35px;
        padding: 10px 40px;
        border-radius: 40px;
        margin: 15px 15px 0;
      }
    }
  }
}
</style>
