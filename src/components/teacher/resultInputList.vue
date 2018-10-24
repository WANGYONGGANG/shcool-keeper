<template>
  <div class="result-input-list">
    <van-tabs type="card" v-model="active">
      <van-tab title="未录入">
        <table border="0" width="750" class="list-table">
          <tr>
            <th width="30%">姓名</th>
            <th width="30%">成绩</th>
            <th width="25%">备注</th>
            <th width="15%"></th>
          </tr>
          <tr @click="goTo(urls.resultInputListDetial)">
            <td class="name">0000李八<span>s1181</span></td>
            <td>语文<br/>数学<br/>英语</td>
            <td></td>
            <td><van-icon name="arrow" /></td>
          </tr>
        </table>
      </van-tab>
      <van-tab title="已录入">
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0,
      urls: {
        resultInputListDetial: '/teacher/resultInputListDetial'
      }
    }
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style lang="less">
.result-input-list{
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
.list-table{
  th{
    color: #838383;
    height: 80px;
    text-align: center;
    border-bottom: 1px #f1f1f1 solid;
  }
  td{
    text-align: center;
    padding: 15px;
    border-bottom: 1px #f1f1f1 solid;
  }
  .name{
    text-align: left;
    span{
      color: #838383;
      font-size: 20px;
      display: block;
    }

  }
}
}
</style>
