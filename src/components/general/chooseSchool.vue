<template>
  <van-popup v-model="isShow" position="right" class="choose-school-filter">
    <div class="class-back"><van-icon name="arrow-left" @click="goBack" />校区选择</div>
    <van-checkbox v-model="checked" @change="changeFn">
      全选
    </van-checkbox>
    <van-checkbox-group v-model="result">
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
      <span class="btn-submit" @click="submitFn()">确定({{resultLength}}/{{listLength}})</span>
    </div>
  </van-popup>
</template>
<script>
  export default {
    props:['list','isShow','selectItem'],
    data () {
      return {
        checked:false,
        result:[],
        listLength:this.list.length,
        resultLength:0
      }
    },
    methods: {
      goBack(){
        this.$emit('update:isShow', false)
      },
      changeFn(value){
        if(value===true){
          this.result=this.list
        }else{
          this.result=[]
        }
      },
      resetFn(){
        this.$emit('update:isShow', false)
      },
      submitFn(){
        this.$emit('update:isShow', false)
        this.$emit('update:selectItem', this.result)
      },
    },
    mounted () {
    },
    watch:{
      result(n,o){
        this.resultLength=n.length
      }
    }
  }
</script>
<style lang="less">
  .choose-school-filter{
    width: 100%;
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
</style>
