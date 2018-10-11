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
          <div class="operation">筛选</div>
          <div class="operation">排序</div>
        </div>
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
        <div class="card-list-btn">
          <span>拨号</span>
          <span>查看购买详情</span>
        </div>

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
        <div class="card-list-btn">
          <span>拨号</span>
          <span>查看购买详情</span>
        </div>
      </van-tab>
      <van-tab title="待沟通">
        <div class="no-data">
          暂无沟通记录
      </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 1
    }
  },
  methods: {
    onSearch () {

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
  height: 56px;
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
  top:5px;
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
  padding: 12px 10px;
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
  height: 50px;
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
}
</style>
