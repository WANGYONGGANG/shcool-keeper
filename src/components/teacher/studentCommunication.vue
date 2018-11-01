<template>
  <div class="student-communication">
    <van-tabs type="card">
      <van-tab title="全部">
        <div class="list-search">
          <div class="list-search-l">
            <van-search placeholder="姓名／电话／学号" background="#fff"  show-action v-model="value">
              <div slot="action" @click="onSearch">搜索</div>
            </van-search>
          </div>
          <div class="operation" @click="showFilterDia">筛选</div>
          <div class="operation" @click="showSortDia">排序</div>
        </div>
        <div @click="goTo(urls.communicationRecord)">
          <div class="card-list">
            <div class="card-list-l">
              <img class="img" src="../../assets/images/user/test.jpg"/>王梓桐<span class="times">沟通次数：2</span>
            </div>
            <div class="card-list-r"><van-icon name="arrow" /></div>
          </div>
          <van-cell-group class="card-list-item">
            <van-cell title="上次沟通" value="2018-07-04" />
            <van-cell title="下次沟通" value="待定" />
            <van-cell title="手机号码" value="1300000000" />
            <van-cell title="剩余学费" value="23,300.00" class="tuition" />
            <van-cell title="学管师" value="测试员" />
          </van-cell-group>
        </div>
        <div class="card-list-btn">
          <span>拨号</span>
          <span @click="goTo(urls.purchaseDetails)">查看购买详情</span>
        </div>
        <div @click="goTo(urls.communicationRecord)">
          <div class="card-list">
            <div class="card-list-l">
              <img class="img" src="../../assets/images/user/test.jpg"/>王梓桐<span class="times">沟通次数：2</span>
            </div>
            <div class="card-list-r"><van-icon name="arrow" /></div>
          </div>
          <van-cell-group class="card-list-item">
            <van-cell title="上次沟通" value="2018-07-04" />
            <van-cell title="下次沟通" value="待定" />
            <van-cell title="手机号码" value="1300000000" />
            <van-cell title="剩余学费" value="23,300.00" class="tuition" />
            <van-cell title="学管师" value="测试员" />
          </van-cell-group>
        </div>
        <div class="card-list-btn">
          <span>拨号</span>
          <span @click="goTo(urls.purchaseDetails)">查看购买详情</span>
        </div>
      </van-tab>
      <van-tab title="待沟通">
        <div class="no-data">
          暂无沟通记录
        </div>
      </van-tab>
    </van-tabs>
    <sort-pop></sort-pop>
    <van-popup v-model="filterShow" position="right" class="filter">
      <dl class="filter-dl">
        <dt>剩余学费(元)</dt>
        <dd>
          <input type="text" placeholder="最低值" /> --- <input type="text" placeholder="最高值" />
        </dd>
      </dl>
      <dl class="filter-dl"><dt>沟通时间</dt><dd>
        <input type="text" placeholder="开始日期" /> --- <input type="text" placeholder="结束日期" />
      </dd></dl>
      <dl class="filter-dl"><dt>跟进时间</dt>
        <dd>
          <input type="text" placeholder="开始日期" /> --- <input type="text" placeholder="结束日期" />
        </dd></dl>
      <van-cell-group class="class-name">
        <van-cell title="班级名称" is-link  @click="showClassPop" />
      </van-cell-group>
      <div class="filter-btn">
        <span class="btn-reset" @click="resetFn">重置</span>
        <span class="btn-submit" @click="submitFn">确定</span>
      </div>
    </van-popup>
    <van-popup v-model="classFilterShow" position="right" class="filter">
      <div class="class-back" @click="goBack"><van-icon name="arrow-left" />选择班级</div>
      <div class="class-search"><input type="text" placeholder="请输入名称" /></div>
      <van-cell-group class="filter-cell">
      <van-cell title="01-美术01-启蒙涂鸦_试听班级">
        <input type="radio" name="class" value="" />
      </van-cell>
        <van-cell title="01-数学111_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术1111-试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术01-启蒙涂鸦_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-数学111_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术1111-试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术01-启蒙涂鸦_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-数学111_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术1111-试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术01-启蒙涂鸦_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-数学111_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术1111-试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术01-启蒙涂鸦_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-数学111_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术1111-试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术01-启蒙涂鸦_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-数学111_试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
        <van-cell title="01-美术1111-试听班级">
          <input type="radio" name="class" value="" />
        </van-cell>
      </van-cell-group>
      <div class="filter-btn">
        <span class="btn-reset" @click="resetFn(2)">重置</span>
        <span class="btn-submit" @click="submitFn(2)">确定</span>
      </div>
    </van-popup>
  </div>
</template>
<script>
  import SortPop from '../popup/sortPop'
  export default {
    components: {
      SortPop
    },
    data () {
      return {
        filterShow:true,
        classFilterShow:true,
        active: 1,
        urls: {
          communicationRecord: '/teacher/communicationRecord',
          purchaseDetails: '/teacher/purchaseDetails'
        }
      }
    },
    methods: {
      onSearch () {

      },
      showFilterDia () {
        this.filterShow = true
      },
      showSortDia () {
        //控制排序弹出层显示
        this.$store.state.sortPopup.isShow = true
      },
      showClassPop () {
        this.classFilterShow = true
      },
      goTo (param) {
        this.$router.push({path: param})
      },
      resetFn (param){
        if(param === 2){
          this.classFilterShow = false
        }else{
          this.filterShow = false
        }
      },
      submitFn (param) {
        if(param === 2){
          this.classFilterShow = false
        }else{
          this.filterShow = false
        }
      },
      goBack () {
        this.classFilterShow = false
      }
    }
  }
</script>
<style lang="less">
  .student-communication{
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
    height: 105px;
  }
  .van-tabs__content{
    padding-top: 20px;

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
  .van-tabs__nav--card .van-tab{

  }
  .van-tabs--card .van-tabs__wrap{
    padding: 20px;
    background: #fff;
  }
  .card-list{
    background: #fff;
    height:90px;
    line-height:90px;
    padding: 0 30px;
    margin:10px auto 0;
  .card-list-l{
    float: left;
    font-size: 28px;
  .img{
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 100%;
    margin-right: 15px;
    vertical-align: middle;
  }
  .times{
    font-size: 24px;
    padding-left: 15px;
    color: #838383;

  }
  }
  .card-list-r{
    float: right;
  .van-icon{
    top:3px;
    color:#838383;
  }
  }
  }
  .list-search{
    background: #fff;
    height: 105px;
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
    width: 500px;
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
  .no-data{
    text-align: center;
    padding: 30px 0;
  }
  .card-list-item{
  .van-cell{
    font-size: 24px;
    line-height: 38px;
    color:#838383;
    padding: 10px 29px;
  }
  .tuition{
  .van-cell__value{
    color: #4286ed;
  }
  }
  }
  .card-list-btn{
    background: #fff;
    height: 95px;
    padding: 20px 0;
    border-top: 1px #eff1f6 solid;
    text-align:right;
  span{
    display: inline-block;
    border: 1px #4286ed solid;
    padding: 10px 28px;
    color: #4286ed;
    border-radius: 32px;
    margin-right: 20px;
  }
  }
  .filter{
    width: 78%;
    height: 100%;
    .filter-dl{
    padding:30px 0 0 25px;
      dt{
        line-height: 45px;
        font-size: 28px;
      }
      dd{
        padding:15px 0 0 0;
        input{
          width: 245px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border: 1px #b9babb solid;
          border-radius: 2px;
          font-size: 20px;
        }
      }
    }
  .class-name{
    margin-top: 100px;
    .van-cell__title{
      color: #7f8081;
    }
  }
  .filter-btn{
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 80px;
    font-size: 32px;
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
  .class-search{
  padding:20px;
    input{
      width: 90%;
      height: 60px;
      text-indent: 15px;
      font-size: 22px;
      line-height: 60px;
      border: 1px #e2e1e1 solid;
      border-radius: 10px;
      color: #999;

    }
  }
  .filter-cell{
    overflow-y: scroll;
  height:800px;
    .van-cell{
      font-size: 24px;
      padding: 18px 20px;
      line-height: 32px;
      .van-cell__title{
        -webkit-box-flex: 6;
        flex:6;
      }
      .van-cell__value{
        input{
          width: 25px;
          height: 25px;
          border: 1px #999 solid;
          border-radius: 100%;
          -webkit-appearance:button;
        }
      }
    }
  }
  }
  }
</style>
