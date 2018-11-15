<template>
  <van-popup v-model="isShow" position="bottom" @click-overlay="closePop">
    <dl class="ip-list">
      <dt>学员沟通排序</dt>
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
  data () {
    return {
      items: [
        {
          text:'按沟通时间排序',
          isSelect:true,
          sort:'lastDate'
        },
        {
          text:'按姓氏排序',
          isSelect:false,
          sort:'name'
        },
        {
          text:'按跟进时间排序',
          isSelect:false,
          sort:'nextDate'
        }
      ]
    }
  },
  methods: {
    clickFn (item,index) {
      this.$store.state.sortPopup.index = index
      this.$store.state.sortPopup.isShow = false
      this.items.map(function (v,k) {
        v.isSelect = false
      })
      if(!item.isSelect){
      //传递参数
        this.$emit('sort',item.sort);
        item.isSelect = !item.isSelect
      }
    },
    closePop () {
      this.$store.state.sortPopup.isShow = false
    }
  },
  mounted () {
    this.items[this.$store.state.sortPopup.index]['isSelect'] = true;
  },
  computed: {
    isShow: {
      get () {
        return this.$store.state.sortPopup.isShow
      },
      set () {
      }
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
