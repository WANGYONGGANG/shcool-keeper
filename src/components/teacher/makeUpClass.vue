<template>
  <div class="make-up-class">
    <div class="class-tab">
      <calendar-packing></calendar-packing>
      <div class="operation">筛选</div>
    </div>
    <div class="choose-school-zone" @click="showShoolZoneDia">
      <van-cell-group>
        <van-cell title="选择校区" value="潮人部落" is-link />
      </van-cell-group>
    </div>
    <div class="no-data">
      还没有补课信息～
    </div>
    <school-pop></school-pop>
    <div class="bottom-btn fn-clear">
      <span class="bottom-btn-item01 fn-left">删除</span>
      <span class="bottom-btn-item03 fn-right">新开班补课</span>
      <span class="bottom-btn-item02 fn-right">跟班补课</span>
    </div>
  </div>
</template>
<script>
import SchoolPop from '../popup/schoolPop'
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    CalendarPacking,
    SchoolPop
  },
  data () {
    return {
      value: '',
      urls: {
        examinationResult: '/teacher/examinationResult'
      }
    }
  },
  mounted () {
  },
  methods: {
    onSearch () {
    },
    showShoolZoneDia () {
      this.$store.state.schoolPopup.isShow = true
    },
    goTo (url) {
      this.$router.push({path: url})
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
.make-up-class{
  .class-tab{
    background: #fff;
    height: 83px;
    border-top:1px #000 solid ;
    position: relative;
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
  .choose-school-zone{
  .van-cell{
    font-size: 28px;
    line-height: 45px;
    padding: 15px 35px;
  }
  .van-cell__right-icon{
    font-size: 24px;
    line-height: 45px;
    margin-left: 10px;
  }
  }
.van-popup{
  width: 100%;
}
.ip-list{
  background:#fff ;
  text-align: left;
dt{
  text-align: center;
  font-size: 30px;
  line-height: 100px;
  color: #838383;
}
dd{
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  text-indent: 15px;
  border-bottom:1px #eef1f6 solid ;
}
}
.no-data{
  padding-top: 300px;
  text-align: center;
  font-size: 32px;
  color: #838383;
}
.bottom-btn{
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding-top: 15px;
  height: 85px;
  span{
    display: inline-block;
    line-height: 45px;
    padding: 0px 40px;
    text-align: center;
    border-radius: 45px;
    font-size: 28px;
    margin-left: 20px;
  }
  .bottom-btn-item01{
    color: #333333;
    border: 1px #333333 solid;
  }
  .bottom-btn-item02{
    color: #4286ed;
    border: 1px #4286ed solid;
  }
 .bottom-btn-item03{
   color: #fff;
   background: #4286ed;
   border: 1px #4286ed solid;
   margin-right: 20px;
 }
}
}
</style>
