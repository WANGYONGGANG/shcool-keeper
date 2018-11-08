<template>
  <div class="select-students">
    <div class="class-tab">
      <calendar-packing></calendar-packing>
      <div class="operation">筛选</div>
    </div>
    <van-radio-group v-model="radio">
      <table border="0" width="750" class="list-table">
        <tr>
          <th width="10%"></th>
          <th width="30%">姓名</th>
          <th width="30%">班级</th>
          <th width="30%">校区</th>
        </tr>
        <tr>
        <td><van-radio name="1" /></td>
        <td class="name">0000李八<span>s1181</span></td>
        <td>高二</td>
        <td>0000长沙校区</td>
      </tr>
        <tr>
          <td><van-radio name="2" /></td>
          <td class="name">yl<span>s12231</span></td>
          <td></td>
          <td>潮人部落</td>
        </tr>
      </table>
      </van-radio-group>
    <bottom-btn :buttonData="buttonData"></bottom-btn>
  </div>
</template>
<script>
import BottomBtn from '../general/bottomBtn'
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking,
    BottomBtn
  },
  data () {
    return {
      value: '',
      radio: '1',
      buttonData: {
        text: '确定',
        url: '/teacher/resultInputList'
      }
    }
  },
  mounted () {
  },
  methods: {
    onSearch () {
    },
    goTo (url) {
      this.$router.push({path: url})
    },
    selectFn (value, url) {
      this.radio = value
      this.goTo(url)
    }
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
    item :{
      //日期快速切换值
      handler(val){
        this.$toast(val)
      }
    }
  }
}
</script>
<style lang="less">
.select-students{
  background: #fff;
 .class-tab{
    background: #fff;
    height: 83px;
   position: relative;
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
    width: 606px;
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
    position: absolute;
    right: 20px;
    top: 15px;
    padding: 10px 23px;
    font-size: 26px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 6px 5px 0 0;
  }
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
