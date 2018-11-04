<template>
  <div class="student-list">
    <van-cell-group>
      <van-cell title="上课时间：" value="16:04～18:04，时长02:00" is-link/>
      <van-cell title="上课内容" is-link />
    </van-cell-group>
    <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="输入学生姓名" background="#fff"  show-action v-model="value">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="operation">排序</div>
      <div class="operation">添加学员</div>
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
      tableData: [
      //        {"name":"赵伟","chuqin":"156*****1987","jifei":"钢琴、书法、唱歌","shiting":"上海市黄浦区金陵东路569号17楼","queqin":""}
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
    this.getMyClassRecord();
  },
  methods: {
    onSearch () {

    },
     getMyClassRecord() {
      let _self = this;
      let params = {};
      params.timeable_id=_self.$route.query.timeable_id;
      api.getMyClassRecord(params).then(res => {
        console.log(res);
        if (res.data.code == 1) {
          var allDatas = res.data.data.rows;
          _self.allDatas = allDatas;
          // console.log(allDatas);
        }
      });
    },
    goTo () {

    }
  }
}
</script>
<style lang="less">
.student-list{
.list-search{
  background: #fff;
  height: 105px;
  margin-top: 20px;
  padding:10px 20px;
.list-search-l{
  float: left;
  width: 452px;
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
  width: 462px;
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
.bottom-btn{
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background:#fff;
  color: #838383;
.bottom-btn-item01{
  line-height: 40px;
  float: left;
  padding: 10px 0 0 20px;
  margin-left: 20px;
  font-size: 24px;
}
.bottom-btn-item03{
  float: right;
   span{
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
