<template>
  <van-popup v-model="filterShow" position="right" class="filter">
    <van-cell-group class="class-name">
      <van-cell title="选择要展示的列"  />
    </van-cell-group>
    <ul class="column">
      <li v-for="(item,index) in columnData" @click="clickFn(item,index)" key="index" :class="{ select: item.isSelect }">{{item.text}}</li>
    </ul>
    <div class="filter-btn">
      <span class="btn-reset" @click="resetFn()">重置</span>
      <span class="btn-submit" @click="submitFn()">确定</span>
    </div>
  </van-popup>
</template>
<script>
export default {
  props: ['filterShow','selectId'],
  data () {
    return {
      columnData: [
        {
          text:'新增',
          isSelect:true,
          id:0

        },
        {
          text:'续费',
          isSelect:false,
          id:1

        },
        {
          text:'扩科',
          isSelect:false,
          id:2

        },
        {
          text:'转介绍',
          isSelect:false,
          id:3
        },
        {
          text:'连报',
          isSelect:false,
          id:4
        },
        {
          text:'多期',
          isSelect:false,
          id:6
        }
        ,
        {
          text:'补欠交',
          isSelect:false,
          id:6
        }
        ,
        {
          text:'销售',
          isSelect:false,
          id:7
        }
        ,
        {
          text:'预存',
          isSelect:false,
          id:8
        }
        ,
        {
          text:'从他人结转',
          isSelect:false,
          id:9
        }
      ],
      //设置一个暂时存放的组数，确定时回传给父组件
      temporaryIDs:[]
    }
  },
  methods: {
    resetFn(){
      this.columnData.map(function (v,k) {
        v.isSelect = false
      })
    },
    submitFn(){
      //先将所有选中过的元素放入一个数组集合，在提交时将当前选中的isSelect＝true过滤出来
      let selectItems=this.temporaryIDs.filter(item => item.isSelect)
      //将选中的元素中id值集合起来
      let selectIds=[]
       selectItems.forEach(function (item,index,arry) {
         selectIds.push(item.id)
      })
      this.$emit('update:selectId', selectIds)
      this.$emit('update:filterShow', false)
    },
    clickFn(item,index){
      //先将所有选中过的元素放入一个数组集合，在提交时将当前选中的过滤出来
      this.temporaryIDs.push(item)
      item.isSelect = !item.isSelect
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
  .select{
    color: #4286ed;
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
