<template>
  <van-popup v-model="isShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt>{{title}}</dt>
      <dd v-for="(item, index) in items" @click="clickFn(item, index)" :data-index="index" :class="{ select: item.isSelect }" :v-model="item.sort">
        {{item.text}}
        <span v-show="item.isSelect" ><van-icon name="upgrade"/></span>
        <span v-show="item.isSelect" class="fn-right"><van-icon name="success" /></span>
      </dd>
    </dl>
  </van-popup>
</template>
<script>
export default {
  props:['items','isShow','title','selectId'],
  data () {
    return {
    }
  },
  methods: {
    clickFn (item,index) {
      this.$emit('update:isShow', false);
      this.$emit('update:selectId', item.id);
      this.items.map(function (v,k) {
        v.isSelect = false
      })
      if(!item.isSelect){
      //传递参数
        item.isSelect = !item.isSelect
      }
    },
    closePop () {
      this.$emit('update:isShow', false);
    }
  }
}
</script>
<style lang="less">
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
      width: 100%;
    height: 80px;
      overflow: hidden;
    line-height: 80px;
    font-size: 28px;
    text-indent: 15px;
    border-bottom:1px #eef1f6 solid ;
    .van-icon{
      position: relative;
      top: 3px;
    }
    .fn-right{
      float: right;
      padding-right: 20px;
    }
  }
  .select{
    color: #4286ed;
  }

  }

</style>
