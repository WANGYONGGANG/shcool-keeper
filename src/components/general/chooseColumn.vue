<template>
  <van-popup v-model="filterShow" position="right" class="filter">
    <van-cell-group class="class-name">
      <van-cell title="选择要展示的列"  />
    </van-cell-group>
    <ul class="column">
      <li v-for="(item,index) in columnData" @click="clickFn(item,index)" key="index">{{item}}</li>
    </ul>
    <div class="filter-btn">
      <span class="btn-reset" @click="resetFn()">重置</span>
      <span class="btn-submit" @click="submitFn()">确定</span>
    </div>
  </van-popup>
</template>
<script>
export default {
  props: ['filterShow','columnData','selectId'],
  data () {
    return {
//      columnData:[
//        '新增', '续费', '扩科', '转介绍', '连报','多期', '补欠交', '销售', '预存', '从他人结转'
//      ]
    }
  },
  methods: {
    resetFn(){
      this.filterShow = false
    },
    submitFn(){
      this.filterShow = false
    },
    clickFn(item,index){
      this.$emit('update:filterShow', false)
      this.$emit('update:selectItem', index)
      this.filterShow = false
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .filter{
  .column{
  li{
    width: 175px;
    background: #f1f1f1;
    float: left;
    height: 60px;
    overflow: hidden;
    text-align: center;
    line-height: 60px;
    margin: 15px 0 0 15px;
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

  }
</style>
