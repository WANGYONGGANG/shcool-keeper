<template>
  <div class="all">
  <van-popup v-model="filterShow1" position="right" class="filter">
    <div class="filter-main">
    <van-cell class="group01" @click="goTo(urls.deputyOwner)">
      <van-cell is-link />
      <template slot="title">
        <span class="custom-text">{{allDatas.group01.title}}</span>
      </template>
      </van-cell>
    </van-cell-group>
    <div class="group02" v-for="(item,index) in allDatas.group02">
      <dl class="group-tit fn-clear"><dt class="fn-left">{{item.title}}</dt><dd class="fn-right"></dd></dl>
      <ul class="group-list fn-clear">
        <li v-for="(v,k) in item.list" class="list-item" :class="{ select: v.isSelect }" @click="clickFn(v,k,index)">
          {{v.text}}
        </li>
      </ul>
    </div>
      <ul class="group02-checkbox"><li><input type="checkbox"/>包含已结业班级</li>
        <li><input type="checkbox"/>包含试听及补课班级</li></ul>
    </div>
    <div class="filter-btn">
      <span class="btn-reset" @click="resetFn1()">重置</span>
      <span class="btn-submit" @click="submitFn1()">确定</span>
    </div>
  </van-popup>
  </div>
</template>
<script>
  export default {
    props: ['filterShow1'],
    data () {
      return {
        allDatas:{
          group01:{
            title:'讲师'
          },
          group02:[
            {
              title:'年份',
              list:[{
                text:'2018',
                id:1,
                isSelect:false

                 },
                {
                  text:'2017',
                  id:2,
                  isSelect:false
                }
                ,
                {
                  text:'2016',
                  id:3,
                  isSelect:false
                }
                ,
                {
                  text:'2015',
                  id:4,
                  isSelect:false
                }
                ,
                {
                  text:'2014',
                  id:5,
                  isSelect:false
                }
                ,
                {
                  text:'2013',
                  id:6,
                  isSelect:false
                }]
            },
            {
              title:'期段',
              list:[{
                text:'春季班',
                id:1,
                isSelect:false
              },
                {
                  text:'寒假班',
                  id:2,
                  isSelect:false
                }
                ,
                {
                  text:'暑假班',
                  id:3,
                  isSelect:false
                }
                ,
                {
                  text:'秋季班',
                  id:4,
                  isSelect:false
                }
                ,
                {
                  text:'周末班',
                  id:5,
                  isSelect:false
                }
                ,
                {
                  text:'全年班',
                  id:6,
                  isSelect:false
                }
                ,
                {
                  text:'临时段',
                  id:7,
                  isSelect:false
                },
                {
                  text:'01寒暑假',
                  id:8,
                  isSelect:false
                },
                {
                  text:'冬季版',
                  id:9,
                  isSelect:false
                },
                {
                  text:'电吉他',
                  id:10,
                  isSelect:false
                },
                {
                  text:'36课时',
                  id:11,
                  isSelect:false
                },
                {
                  text:'全天',
                  id:12,
                  isSelect:false
                }
              ]
            },
            {
              title:'年级',
              list:[{
                text:'初一',
                id:1,
                isSelect:false
              },
                {
                  text:'初二',
                  id:2,
                  isSelect:false
                }
                ,
                {
                  text:'初三',
                  id:3,
                  isSelect:false
                }
                ,
                {
                  text:'一年级',
                  id:4,
                  isSelect:false
                }
                ,
                {
                  text:'二年级',
                  id:5,
                  isSelect:false
                }
                ,
                {
                  text:'三年级',
                  id:6,
                  isSelect:false
                }
                ,
                {
                  text:'四年级',
                  id:7,
                  isSelect:false
                }
                ,
                {
                  text:'五年级',
                  id:8,
                  isSelect:false
                }]
            },
            {
              title:'科目',
              list:[{
                text:'奥数',
                id:1,
                isSelect:false
              },
                {
                  text:'数学',
                  id:2,
                  isSelect:false
                }
                ,
                {
                  text:'英语',
                  id:3,
                  isSelect:false
                }
                ,
                {
                  text:'化学',
                  id:4,
                  isSelect:false
                }
                ,
                {
                  text:'阅读作文',
                  id:5,
                  isSelect:false
                }
                ,
                {
                  text:'书法',
                  id:6,
                  isSelect:false
                }
                ,
                {
                  text:'拉丁舞',
                  id:7,
                  isSelect:false
                }
                ,
                {
                  text:'钢琴',
                  id:8,
                  isSelect:false
                }]
            },
            {
              title:'类型',
              list:[{
                text:'一对一',
                id:1,
                isSelect:false
              },
                {
                  text:'小组课',
                  id:2,
                  isSelect:false
                }
                ,
                {
                  text:'四级班级',
                  id:3,
                  isSelect:false
                }
                ,
                {
                  text:'冲刺班',
                  id:4,
                  isSelect:false
                }
                ,
                {
                  text:'拓展班',
                  id:5,
                  isSelect:false
                }
                ,
                {
                  text:'集体班',
                  id:6,
                  isSelect:false
                }
                ,
                {
                  text:'给优班',
                  id:7,
                  isSelect:false
                }
                ,
                {
                  text:'提高班',
                  id:8,
                  isSelect:false
                }]
            },
          ]
        },
        urls:{
          deputyOwner:'/teacher/deputyOwner',
        }
      }
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
      resetFn1(){
      },
      submitFn1(){
        this.$emit('update:filterShow1', false)
      },

      clickFn(v,k,faterIndex){
        //先将所有选中过的元素放入一个数组集合，在提交时将当前选中的过滤出来
        v.isSelect = !v.isSelect
      },
      showCurriculum(){

      }
    },
    mounted () {
    }
  }
</script>
<style lang="less">
  .filter{
    height: 100%;
  .filter-main{
    height: 100%;
    padding-bottom: 85px;
    overflow-y: auto;
  }
  .group01{
  .van-cell__title{
    -webkit-box-flex:8;
    flex:8
  }
  .van-cell__right-icon{
        position: relative;
        top: -5px;

      }
  }
  .group02{
    .group-tit{
     line-height: 60px;
      dt{
        padding-left: 30px;
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
  .group02-checkbox{
  li{
    font-size: 26px;
    border-top:1px #f1f1f1 solid ;
    line-height: 60px;
    input{
      width: 25px;
      height: 25px;
      position: relative;
      top: 4px;
      margin: 0 15px 0 30px;
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
