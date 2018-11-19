<template>
  <van-popup v-model="filterShow" position="right" class="filter" >
    <ul class="right-pop">
      <li v-for="data in allDatas" @click="chooseFn(data.itemName,data.id)">
        {{ data.itemName }}
      </li>
    </ul>

    <!--<div class="filter-btn">-->
    <!--<span class="btn-reset" @click="resetFn">重置</span>-->
    <!--<span class="btn-submit" @click="submitFn">确定</span>-->
    <!--</div>-->
  </van-popup>
</template>
<script>
  export default {
    props:['allDatas','filterShow','selectItem','selectID',],
    data () {
      return {
      }
    },
    methods: {
      showCommentedDia () {
      },
      chooseFn (v,id) {
        this.$emit('update:filterShow', false);
        this.$emit('update:selectItem', v);
        this.$emit('update:selectID', id);
      }
    },
    mounted () {

    }
    //回调参数试用方法 哪个页面用到
//  computed : {
//    item () {
//      return this.$store.state.commentPopup.item
//    }
//  },
//  watch:{
//    item :{
    //日期快速切换值
//      handler(val){
//        this.$toast(val)
//      }
//    }
//  }
  }
</script>
<style lang="less">
  .right-pop{
    width: 600px;
    height: 100%;;
  li{
    padding-left: 20px;
    width: 100%;
    font-size: 28px;
    line-height: 75px;
    border-bottom:1px #f5f5f5 solid;
  }
  }

</style>
