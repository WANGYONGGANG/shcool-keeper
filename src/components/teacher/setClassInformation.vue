<template>
  <div class="set-class">
    <van-cell-group class="set-class-item01">
      <van-cell title="上课日期" value="2018.10.12" />
      <van-cell title="上课班级" value="17暑初二英语同步班_补课班级"/>
    </van-cell-group>
    <van-cell-group class="set-class-item02">
      <van-cell required title="科目" value="钢琴" is-link />
      <van-cell required title="任课老师" value="测试员" is-link />
      <van-cell title="助教" is-link />
      <van-cell required title="开始时间" is-link value="15:20" />
      <van-cell required title="上课时长" is-link />
      <van-cell required title="上课教室" is-link />
    </van-cell-group>
    <van-radio-group v-model="radio">
      <van-cell-group class="set-class-item03">
        <van-cell title="检查上课冲突" clickable @click="radio = '1'">
          <van-radio name="1" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <div class="bottom-btn">
      <span class="white-bg" @click="$router.back(-1)">上一步</span><span class="blue-bg">保存并点名</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
    onSearch () {

    }
  }
}
</script>
<style lang="less">
.set-class{
  .set-class-item01{

  }
  .set-class-item02{
    .van-cell__value{
      color: #4286ed;
    }

  }
.van-radio__input{
  top: -18px;
}
.van-cell__value{
  -webkit-box-flex:2;
  flex: 2;
}
.bottom-btn{
  height: 100px;
  background: #fff;
  text-align: right;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  span{
    display: inline-block;
    padding: 0 55px;
    line-height: 51px;
    border-radius: 30px;
    margin-right: 15px;
    margin-top: 23px;
  }
  .white-bg{
    border: 1px #4286ed solid;
    color: #4286ed;
  }
  .blue-bg{
    border: 1px #4286ed solid;
    color: #fff;
    background: #4286ed;
  }

}
}
</style>
