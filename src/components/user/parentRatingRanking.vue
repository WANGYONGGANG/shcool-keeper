<template>
  <div class="parent-rating-ranking">
    <div class="choose-school-zone" @click="showShoolZoneDia">
      <van-cell-group>
        <van-cell title="选择校区" value="潮人部落" is-link />
      </van-cell-group>
    </div>
    <div class="class-tab fn-clear">
      <div class="commented-tab">
        <span class="tab-radius">2018-09-01</span>-<span class="tab-radius">2018-09-30</span> <span class="arrow-down" @click="showCommentedDia"><van-icon name="arrow" /></span>
      </div>
      <div class="operation">课程</div>
    </div>
    <ul class="average">
      <li class="average-tit">我的平均分</li>
      <li class="average-item01">5.0000</li>
      <li class="average-item02">在教师中排名第1名</li>
      <li class="average-item03"><span>超越了所有人，位于榜首</span></li>
      <li class="average-item04">
        <span>学校老师平均分<br/>4.3710</span>
        <span>学校老师最高分<br/>5.0000</span>
      </li>
    </ul>
    <v-table
      is-horizontal-resize
      style="width:100%"
      :multiple-sort="multipleSort"
      :columns="columns"
      :table-data="tableData"
      :title-row-height="50"
      :row-height="50"
      @sort-change="sortChange"
      row-hover-color="#eee"
      row-click-color="#edf7ff"
    ></v-table>
    <school-pop></school-pop>
    <commented-pop></commented-pop>
  </div>
</template>
<script>
import CommentedPop from '../popup/commentedPop'
import SchoolPop from '../popup/schoolPop'

export default {
  components: {
    CommentedPop,
    SchoolPop
  },
  data () {
    return {
      value: '',
      urls: {
        examinationResult: '/teacher/examinationResult'
      },
      tableData: [
        {'name': '17暑初二英语同步班','average': '5.0000','rank':'1'}
      ],
      multipleSort:false,
      columns: [
        {field: 'name', title: '课程', width: 450, titleAlign: 'left', columnAlign: 'left', orderBy: 'asc'},
        {field: 'average', title: '平均分', width: 150, titleAlign: 'center', columnAlign: 'center', orderBy: 'asc'},
        {field: 'rank', title: '排名', width: 150, titleAlign: 'center', columnAlign: 'center'}
        ]
    }
  },
  mounted () {
  },
  methods: {
    onSearch () {
    },
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    showShoolZoneDia () {
      this.$store.state.schoolPopup.isShow = true
    },
    goTo (url) {
      this.$router.push({path: url})
    },
    // 获取 table 组件每次操作后的参数（重新去请求数据）
    sortChange(params){
      console.log(params)
    }
  }
}
</script>
<style lang="less">
.parent-rating-ranking{
.commented-tab{
  height: 58px;
  background: #fff;
  margin-bottom: 10px;
  float: left;
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
  .class-tab{
    background: #fff;
    height: 85px;
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
    float: right;
    padding: 6px 18px;
    font-size: 24px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 15px 5px 0 0;
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
.average{
  padding: 15px 0;
width:100%;
  margin-top: 20px;
  background: #fff;
.average-tit{
  text-align: left;
  padding-left: 30px;
  width: 100%;
  line-height: 40px;
}
.average-item01{
  text-align: center;
  font-size: 80px;
  padding-top: 20px;
  color: #4286ed;
}
.average-item02{
  text-align: center;
}
.average-item03{
  margin-top: 20px;
  text-align: center;
  span{
    display: inline-block;
    border: 1px #e0e5ed solid;
    font-size: 24px;
    border-radius: 40px;
    padding: 8px 30px;
    color: #838383;
  }
}
.average-item04{
  height: 125px;
  padding-top: 30px;
  width:100%;
  span{
    display: inline-block;
    width: 50%;
    text-align: center;
    font-size: 24px;
    float: left;
    line-height: 45px;
  }
}
}
.v-table-views{
margin-top:20px;
td{
  font-size: 24px;
}
.v-table-body-cell{
  padding: 0 15px;
}
.v-table-title-cell{
  padding: 0 15px;
}
.v-table-sort-icon{
  width: 32px;
  height: 38px;
  i{
    width: 32px;
    height: 30px;
  }
}
}

}
</style>
