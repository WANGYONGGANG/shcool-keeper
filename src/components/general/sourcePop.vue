<template>
  <van-popup v-model="isShow" position="right" class="source-filter">
    <div class="filter-box">
      <ul class="box-l">
        <li @click="showBig" :class="{select:isBig}">大类<icon></icon></li>
        <li @click="showSmall" :class="{select:!isBig}">小类</li>
      </ul>
      <section class="box-r">
        <div v-if="isBig"><van-checkbox-group v-model="result">
          <van-checkbox
            v-for="(item, index) in list"
            :key="index"
            :name="item"
          >
            {{ item }}
          </van-checkbox>
        </van-checkbox-group></div>
        <div v-else>
          <div class="group02" v-for="(item,index) in allDatas.group02">
            <dl class="group-tit fn-clear"><dt class="fn-left"><input type="checkbox" @click="allChoose(index)">{{item.title}}</dt><dd class="fn-right"></dd></dl>
            <ul class="group-list fn-clear">
              <li v-for="(v,k) in item.list" class="list-item" :class="{ select: v.isSelect }" @click="clickFn(v,k,index)">
                {{v.text}}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div class="filter-btn">
      <span class="btn-reset" @click="resetFn()">取消</span>
      <span class="btn-submit" @click="submitFn()">确定</span>
    </div>
  </van-popup>
</template>
<script>
  export default {
    props: ['isShow'],
    data () {
      return {
        isBig:true,
        result:[],
        list:['市场推广','默认'],
        allDatas:{
          group02:[
            {
              title:'市场推广',
              list:[{
                text:'预约试听',
                id:1,
                isSelect:false

              },
                {
                  text:'在线报名',
                  id:2,
                  isSelect:false
                }
                ,
                {
                  text:'学生秀分享',
                  id:3,
                  isSelect:false
                }
                ,
                {
                  text:'课堂评价分享',
                  id:4,
                  isSelect:false
                }
                ,
                {
                  text:'扫码录入',
                  id:5,
                  isSelect:false
                }
              ]
            },
            {
              title:'默认',
              list:[{
                text:'退学转入',
                id:1,
                isSelect:false
              }]
            }
          ]
        },
      }
    },
    methods: {
      showBig(){
        this.isBig=true
      },
      showSmall(){
        this.isBig=false
      },
      clickFn(v,k,faterIndex){
        //先将所有选中过的元素放入一个数组集合，在提交时将当前选中的过滤出来
        v.isSelect = !v.isSelect
      },
      allChoose(index){
        this.allDatas.group02[index].list.forEach(function (v,k) {
          v.isSelect=!v.isSelect
        })
      },
      resetFn(){
        this.$emit('update:isShow', false);
      },
      submitFn(){
        this.$emit('update:isShow', false);
      }
    },
    watch:{
      isShow(newVal){
        this.isShow= newVal;
        this.$emit('update:isShow', newVal);
      }
    }
  }
</script>
<style lang="less">
  .source-filter{
    width:100%;
    height:100%;
  .filter-box{
    display: -webkit-flex; /* Safari */
    display: flex;
    height:100%;
  .box-l{
    flex: 1;
    height:100%;
    border-right:1px #DADCE3 solid ;
  li{
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 25px;
    background: #e8eaf1;
    border-bottom: 1px #DADCE3 solid;
  }
  .select{
    color: #4286ed;
  }
  }
  .box-r{
    flex: 4;
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

  .group02{
    padding: 20px 0;
    border-bottom:1px #DADCE3 solid ;
  .group-tit{
    line-height: 60px;
  dt{
    padding-left: 30px;
  input{
    width: 25px;
    height: 25px;
    margin-right: 10px;
    position: relative;
    top: 3px;
  }
  }
  }
  .group-list{
    padding-bottom:20px;
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
    background: #4286ed;
    color: #fff;
  }
  }
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
