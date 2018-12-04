<template>
  <van-popup v-model="filterShow" position="right" class="filter" >
    <div class="right-pop">
      <van-checkbox-group v-model="result">
      <van-checkbox v-for="data in allDatas" @click="chooseFn(data.itemName,data.id,data.content)">
        <dl>
          <dt>{{ data.itemName}}</dt>
        <dd>{{data.content}}</dd>
        </dl>
      </van-checkbox>
    </van-checkbox-group>

      <li >
        
      </li>
    </div>

    <!--<div class="filter-btn">-->
    <!--<span class="btn-reset" @click="resetFn">重置</span>-->
    <!--<span class="btn-submit" @click="submitFn">确定</span>-->
    <!--</div>-->
  </van-popup>
</template>
<script>
  export default {
    props:['allDatas','filterShow','selectItem','selectID','selectCon'],
    data () {
      return {
      }
    },
    methods: {
      showCommentedDia () {
      },
      chooseFn (v,id,con) {
        this.$emit('update:filterShow', false);
        this.$emit('update:selectItem', v);
        this.$emit('update:selectID', id);
        this.$emit('update:selectCon', con);
      }
    },
    mounted () {

    }
  }
</script>
<style lang="less" rel="stylesheet/less">
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
  .bottom-btn{
    height: 99px;
    line-height: 99px;
    font-size: 32px;
    color: #fff;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background: #4286ed;
    z-index: 100;

  }
</style>
