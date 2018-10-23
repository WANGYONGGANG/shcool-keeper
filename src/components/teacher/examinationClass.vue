<template>
  <div class="examination-class">
    <div class="class-tab">
      <div class="list-search-l">
        <van-search placeholder="输入班级名称" background="#fff"  show-action v-model="value">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <v-table
      :width="750"
      :columns="columns"
      :table-data="tableData"
      title-row-height="80"
      row-height="80"
      :select-all="selectALL"
      :select-change="selectChange"
      :show-vertical-border="false"
      :select-group-change="selectGroupChange"
    ></v-table>
    <bottom-btn :buttonData="buttonData"></bottom-btn>
  </div>
</template>
<script>
  import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    BottomBtn
  },
  data () {
    return {
      tableData: [
        {'name': '17暑初二英语同步班_补课班级','teacher': '测试员','number': '0/100','time': '2018-07-04'},
        {'name': '17暑初二英语同步班_补课班级','teacher': '测试员','number': '0/100','time': '2018-07-04'},
        {'name': '17暑初二英语同步班_补课班级','teacher': '测试员','number': '0/100','time': '2018-07-04'},
      ],
      columns: [
        {width: 62, titleAlign: 'center',columnAlign:'center',type: 'selection'},
        {field: 'name', title: '班级名称', width: 172, titleAlign: 'center', columnAlign: 'center',isResize:true},
        {field: 'teacher', title: '任课老师', width: 172, titleAlign: 'center', columnAlign: 'center',isResize:true},
        {field: 'number', title: '人数', width: 172, titleAlign: 'center', columnAlign: 'center',isResize:true},
        {field: 'time', title: '开班日期', width: 172, titleAlign: 'center', columnAlign: 'left',isResize:true}
      ],
      buttonData: {
        text: '确定',
        url: '/teacher/resultInputList'
      },
    }
  },
  mounted () {
  },
  methods: {
    onSearch () {
    },
    goTo () {
      this.$router.push({path: '/teacher/setClassInformation'})
    }
  }
}
</script>
<style lang="less">
.examination-class{
  .class-tab{
    background: #fff;
    height: 83px;
    border-top:1px #000 solid ;
    padding:10px 20px;
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
    width: 734px;
    height: 64px;
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
.v-checkbox-inner{
  width: 23px;
  height: 23px;
}
.v-checkbox-inner:after{
  left: 7px;
  top: 2px;
  width: 9px;
  height: 12px;

}

}

</style>
