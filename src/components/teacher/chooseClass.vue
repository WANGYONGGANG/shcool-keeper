<template>
  <div class="choose-class">
    <div class="class-tab">
      <div class="list-search-l">
        <van-search placeholder="输入班级名称" background="#fff"  show-action v-model="value">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="operation">筛选</div>
    </div>
    <div class="choose-school-zone" @click="showShoolZoneDia">
      <van-cell-group>
        <van-cell title="选择校区" value="潮人部落" is-link />
      </van-cell-group>
    </div>
    <van-radio-group v-model="radio">
    <div class="class-list"  @click="radio = '1'">
    <div class="class-list-l">
        <van-radio name="1" />
    </div>
    <div class="class-list-r">
      <dl>
        <dt>2018暑假初二英语同步班0523<span class="num">1/1</span></dt>
        <dd><van-icon name="location" />潮人部落</dd>
        <dd class="last-item"><van-icon name="contact" />潮人部落<span><van-icon name="idcard" />2018寒假五年...</span></dd>
      </dl>
    </div>
  </div>
    <div class="class-list"  @click="radio = '2'">
      <div class="class-list-l">
          <van-radio name="2" />
      </div>
      <div class="class-list-r">
        <dl>
          <dt>2018暑假初二英语同步班0523<span class="num">1/1</span></dt>
          <dd><van-icon name="location" />潮人部落</dd>
          <dd class="last-item"><van-icon name="contact" />潮人部落<span><van-icon name="idcard" />2018寒假五年...</span></dd>
        </dl>
      </div>
    </div>
    <div class="class-list"  @click="radio = '3'">
      <div class="class-list-l">
          <van-radio name="3" />
      </div>
      <div class="class-list-r">
        <dl>
          <dt>2018暑假初二英语同步班0523<span class="num">1/1</span></dt>
          <dd><van-icon name="location" />潮人部落</dd>
          <dd class="last-item"><van-icon name="contact" />潮人部落<span><van-icon name="idcard" />2018寒假五年...</span></dd>
        </dl>
      </div>
    </div>
    </van-radio-group>
    <div class="bottom-btn">
      点击下一步进行班级信息填写 <span @click="goTo">下一步</span>
    </div>
    <school-pop></school-pop>
  </div>
</template>
<script>
import SchoolPop from '../popup/schoolPop'
export default {
  components: {
    SchoolPop
  },
  data () {
    return {
      value: '',
      radio: '1'
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
    goTo () {
      this.$router.push({path: '/teacher/setClassInformation'})
    }
  }
}
</script>
<style lang="less">
.choose-class{
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
    padding: 16px 23px;
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
.class-list{
  padding: 10px 35px;
  background:#fff;
  margin-bottom: 20px;
  height:170px;
.class-list-l{
  float: left;
  width: 60px;
  .van-radio__input{
    height: 5em;
    top:72px;
    font-size: 30px;
  }
.van-radio .van-icon-checked{
  color: #4286ed;
}
}
.class-list-r{
  float: left;
width:600px;
dt{
  font-size: 32px;
  line-height: 64px;
span{
  float: right;
  color: #838383;
}
}
dd{
  color: #838383;
  line-height: 43px;
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 10px;
}
}
.last-item{
span{
  float: right;
}
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 10px;
  color: #dc951a;
}
}
}
}
.bottom-btn{
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background:#fff;
  line-height: 100px;
  text-align: right;
  color: #838383;
  span{
    display: inline-block;
    background: #4286ed;
    color: #fff;
    line-height: 35px;
    padding: 10px 40px;
    border-radius: 40px;
    margin: 0 15px;
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

}
.shool-zone{

}
</style>
