<template>
  <van-popup v-model="isShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt v-if="title">{{title}}</dt>
      <dd v-for="(item,index) in lists"  @click="exportResult(item,index)" :class="item===selectItem?'actived':''">
        {{item}}
        <!-- <span v-show="item.isSelect" ><van-icon name="upgrade"/></span> -->
        <!-- <span v-show="item.isSelect" class="fn-right"><van-icon name="success" /></span> -->
        </dd>
    </dl>
  </van-popup>
</template>
<script>
export default {
  props:['title','lists','isShow','selectItem'],
  data(){
    return {
      //  items: [
      //   {
      //     text:'按沟通时间排序',
      //     isSelect:true,
      //     sort:'lastDate'
      //   },
      //   {
      //     text:'按姓氏排序',
      //     isSelect:false,
      //     sort:'name'
      //   },
      //   {
      //     text:'按跟进时间排序',
      //     isSelect:false,
      //     sort:'nextDate'
      //   }
      // ]

    }
  },
  mounted () {
    //  this.items[this.$store.state.sortPopup.index]['isSelect'] = false;
  },
  methods: {
    exportResult (item,index) {
      let newItem={};
      newItem.item=item;
      newItem.index=index;
      this.$emit('update:isShow', false)
      this.$emit('update:selectItem', newItem);
      // this.$emit('showNewDate',item);
    },
    closePop () {
      this.$emit('update:isShow', false)    
      },

    //    clickFn (item,index) {
    //   this.$store.state.sortPopup.index = index
    //   this.$store.state.sortPopup.isShow = false
    //   this.items.map(function (v,k) {
    //     v.isSelect = false
    //   })
    //   if(!item.isSelect){
    //   //传递参数
    //     this.$emit('sort',item.sort);
    //     item.isSelect = !item.isSelect
    //   }
    // },
    // closePop () {
    //   this.$store.state.sortPopup.isShow = false
    // }
  },
  //  computed: {
  //   isShow: {
  //     get () {
  //       return this.$store.state.sortPopup.isShow
  //     },
  //     set () {
  //     }
  //   }
  // }
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
