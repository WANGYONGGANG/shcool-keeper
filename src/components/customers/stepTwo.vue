<template>
  <div class="customers-step-two">
    <van-cell-group>
      <van-cell title="父亲职业">
        <span><input type="text" class="no-border" v-model="rightPopDates.item01.selectItem" /></span>
        <van-icon slot="right-icon" name="arrow" class="van-cell__right-icon" @click="clickFn('item01')"/>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="母亲电话">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="母亲职业">
        <span><input type="text" class="no-border" v-model="rightPopDates.item02.selectItem" /></span>
        <van-icon slot="right-icon" name="arrow" class="van-cell__right-icon" @click="clickFn('item02')"/>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="家庭电话">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell class="address">
        <van-cell title="家庭住址" />
        <van-field
          v-model="message"
          type="textarea"
          placeholder="输入家庭住址"
          rows="1"
        />
      </van-cell>
    </van-cell-group>
    <right-pop :filterShow.sync="rightPopDates.item01.isShow" :selectItem.sync="rightPopDates.item01.selectItem" :allDatas="rightPopDates.item01.data"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item02.isShow" :selectItem.sync="rightPopDates.item02.selectItem" :allDatas="rightPopDates.item01.data"></right-pop>
  </div>
</template>
<script>
  import RightPop from '../general/rightPop'
  export default {
    components: {
      RightPop
    },
    data () {
      return {
        rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'工人'
            },
              {
                itemName:'教师'
              },
              {
                itemName:'老师'
              },
              {
                itemName:'商人'
              },
              {
                itemName:'白领'
              }
            ]
          },
          item02:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'工人'
            },
              {
                itemName:'教师'
              },
              {
                itemName:'老师'
              },
              {
                itemName:'商人'
              },
              {
                itemName:'白领'
              }
            ]
          }
        }
      }
    },
    mounted () {
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
      clickFn (n){
        this.rightPopDates[n].isShow = true
      }
    },
    watch:{
      'this.rightPopDates.item01.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      'this.rightPopDates.item02.selectItem':function(newval,oldval){
        this.$toast(newval)
      }
    }
  }
</script>
<style lang="less">
  .customers-step-two{
  .van-cell-group{
    border-bottom:20px #eef1f6 solid;
  }
  .van-cell__value{
  .no-border{
    border: none;
    width: 100%;
  }
  }
  .address{
    padding-bottom: 40px;
  .van-cell{
    padding-left: 0px;
  }
  .van-field{
    line-height: 40px;
    height: 120px;
    width:100%;
    padding-left: 20px;
    font-size: 24px;
    border-radius: 10px;
    margin: 0 auto;
    border: 1px #e0e5ed solid;
  }
  .van-field--min-height .van-field__control{
    min-height: 100px;
  }
  }
  .no-border{
    text-align: right;
  }
  }
</style>
