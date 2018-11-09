<template>
  <van-popup v-model="isShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt v-if="title">{{title}}</dt>
      <dd v-for="(item,index) in lists"  @click="exportResult(item,index)" :class="item===selectItem?'actived':''">{{item}}</dd>
    </dl>
  </van-popup>
</template>
<script>
export default {
  props:['title','lists','isShow','selectItem'],
  data(){
    return {

    }
  },
  mounted () {
  },
  methods: {
    exportResult (item,index) {
      this.$emit('update:isShow', false)
      this.$emit('update:selectItem', item)
    },
    closePop () {
      this.$emit('update:isShow', false)    }
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
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    text-indent: 15px;
    border-bottom:1px #eef1f6 solid ;
  }
    .actived{
      color: #4286ed;
    }

  }

</style>
