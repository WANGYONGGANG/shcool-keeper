<template>
  <div class="parent-rating-ranking">
    <div class="choose-school-zone" @click="showShoolZoneDia">
      <van-cell-group>
        <van-cell title="选择校区" value="潮人部落" is-link />
      </van-cell-group>
    </div>
    <div class="class-tab fn-clear">
      <calendar-packing></calendar-packing>
      <div class="operation" @click="showPop">{{popData.selectText}}</div>
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
    <div class="charge-table">
      <table class="table-top">
        <tr class="title">
          <th class="w450">课程</th>
          <th class="w150">平均分 <icon name="sort" scale="2"/></th>
          <th class="w150">排名 <icon name="sort" scale="2"/></th>
        </tr>
        <tr @click="goTo(urls.evaluationLatitude)">
          <td class="w450">17暑初二英语同步班</td>
          <td class="w150">5.0000</td>
          <td class="w150">1<van-icon name="arrow" size="1" class="w150-arrow" /></td>
        </tr>
      </table>
    </div>

    <van-popup v-model="filterShow2" position="right" class="filter">
      <div class="class-back"><van-icon name="arrow-left" @click="goBack" />校区选择</div>
      <van-checkbox-group v-model="result">
        <van-checkbox>
          全选
        </van-checkbox>
        <van-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ item }}
        </van-checkbox>
      </van-checkbox-group>
      <div class="filter-btn">
        <span class="btn-reset" @click="resetFn()">取消</span>
        <span class="btn-submit" @click="submitFn()">确定(0/1)</span>
      </div>
    </van-popup>
    <sort-pop :title="popData.title" :items.sync="popData.items" :isShow.sync="popData.isShow" :selectId.sync="popData.selectId" ></sort-pop>
  </div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
import SortPop from '../popup/sortPopPublish'

export default {
  components: {
    CalendarPacking,
    SortPop
  },
  data () {
    return {
      value: '',
      urls: {
        examinationResult: '/teacher/examinationResult',
        evaluationLatitude:'/user/evaluationLatitude'
      },
      popData:{
        isShow:false,
        selectId:0,
        selectText:'期段',
        items: [
          {
            text:'期段',
            isSelect:true,
            id:0

          },
          {
            text:'类型',
            isSelect:false,
            id:1

          },
          {
            text:'年级',
            isSelect:false,
            id:2
          },
          {
            text:'科目',
            isSelect:false,
            id:3
          },
          {
            text:'课程',
            isSelect:false,
            id:4
          }
        ]
      },
      result:[],
      filterShow2:false,
      list:['潮人部落','金色阳光']
    }
  },
  mounted () {
  },
  methods: {
    showCommentedDia () {
      this.$store.state.commentPopup.isShow = true
    },
    showShoolZoneDia () {
      this.filterShow2=true
    },
    goTo (url) {
      this.$router.push({path: url})
    },
    goBack(){
      this.filterShow2=false
    },
    resetFn(){

    },
    submitFn(){
      this.filterShow2=false
    },
    showPop(){
      this.popData.isShow = true
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
    },
    'popData.selectId':function (n,o) {
      this.popData.selectText=this.popData.items[n].text

    }
  }
}
</script>
<style lang="less">
.parent-rating-ranking{
  .class-tab{
    background: #fff;
    height: 85px;
    padding:0 20px 10px;
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
    margin: 34px 5px 0 0;
    color: #4286ed;
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

.filter{
  height: 100%;
  width: 78%;
.class-back{
  height: 70px;
  line-height: 70px;
  background: #eef1f6;
  padding-left: 10px;
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 10px;
  color: #999;
}
}
.van-checkbox{
  line-height: 70px;
.van-checkbox__icon{
  margin:0 8px 0 30px;
i{
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
}
}
}
.filter-btn{
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 80px;
  font-size: 32px;
  background: #fff;
  height: 81px;
.btn-reset{
  background: #feffff;
  display: inline-block;
  width: 49%;
  height: 80px;
  color: #333333;
  border-top:1px #f1f1f1 solid ;
}
.btn-submit{
  background: #0097ef;
  width: 49%;
  display: inline-block;
  height: 80px;
  color: #fff;
  border-top:1px #0097ef solid ;
}
}
}
.charge-table{
  width:100%;
.w450{
  width: 450px;
  padding-left: 30px;
}
.w150{
  width: 150px;
}
.w100{
  width: 100px;
}
.table-top{
th{
  border-bottom:2px #d2d5da solid ;
  border-top:15px #eef1f6 solid ;
  background: #fff;
  line-height: 80px;
}
td{
  background: #fff;
  line-height: 80px;
}
.fa-icon{
  position: relative;
  top: 6px;
  color: #d4d1d1;
}

}

}
.w150-arrow{
  position: relative;
  left: 25px;
  top: 4px;
  color: #DADCE3;
}
}
</style>
