<template>
  <div class="communication-template">
    <van-checkbox-group v-model="result">
      <van-checkbox
        v-for="(item, index) in list"
        :key="index"
        :name="item.name"
      >
        <dl>
          <dt>{{item.name}}</dt>
        <dd>{{item.cont}}</dd>
        </dl>
      </van-checkbox>
    </van-checkbox-group>

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
      result: ['初次联系', '多次沟通'],
      list: [
        {
          name: '初次联系',
          cont: '理解学校和课程，狮子等情况'
        },
        {
          name: '原有停机',
          cont: '原有停机，情况'
        },
        {
          name: '多次沟通',
          cont: '了解一项课'
        }
      ],
      buttonData: {
        text: '确定',
        url: ''
      }
    }
  }
}
</script>
<style lang="less">
  .communication-template{
  .van-checkbox__icon, .van-checkbox__label{
    margin-left: 30px;
    margin-top: 40px;
  }
  .van-checkbox__icon .van-icon{
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    border-radius: 0;
  }
  .van-checkbox__icon--checked .van-icon{
    border-color: #4286ed;
    background-color: #4286ed ;
  }
  dl{
  dt{
    font-size: 30px;
    line-height: 45px;
  }
  dd{
    font-size: 24px;
    line-height: 40px;
    color: #ccc;
  }
  }

  }
</style>
