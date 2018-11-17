<template>
  <div class="customers-step-one">
    <van-cell-group>
      <van-cell title="姓名" required>
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="手机号码" required>
        <span><input type="number" class="no-border" /></span>
      </van-cell>
      <van-cell title="招生来源" is-link required  @click="clickFn('item01')" >
        {{rightPopDates.item01.selectItem}}
      </van-cell>
      <van-cell title="所属校区" is-link required @click="clickFn('item02')">
        {{rightPopDates.item02.selectItem}}
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="性别" is-link @click="clickFn('item03')">
        {{rightPopDates.item03.selectItem}}
      </van-cell>
      <van-cell title="出生日期">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="公立学校" is-link @click="clickFn('item04')">
        {{rightPopDates.item04.selectItem}}
      </van-cell>
      <van-cell title="年级" is-link @click="clickFn('item05')">
        {{rightPopDates.item05.selectItem}}
      </van-cell>
      <van-cell title="班级">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="英文姓名">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="英文名称">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="销售归属人">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="教室">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="采集人">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
    </van-cell-group>
    <right-pop :filterShow.sync="rightPopDates.item01.isShow" :allDatas="rightPopDates.item01.data" :selectItem.sync="rightPopDates.item01.selectItem"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item02.isShow" :selectItem.sync="rightPopDates.item02.selectItem" :allDatas="rightPopDates.item02.data"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item03.isShow" :selectItem.sync="rightPopDates.item03.selectItem" :allDatas="rightPopDates.item03.data"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item04.isShow" :selectItem.sync="rightPopDates.item04.selectItem" :allDatas="rightPopDates.item04.data"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item05.isShow" :selectItem.sync="rightPopDates.item05.selectItem" :allDatas="rightPopDates.item05.data"></right-pop>
  </div>
</template>
<script>
  import RightPop from '../general/rightPop'
  import { api } from "../../../static/js/request-api/request-api.js";
  export default {
    components: {
      RightPop
    },
    name: 'stepOne',
    data () {
      return {
        rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'潮人部落'
            },
              {
                itemName:'金色阳光'
              },
              {
                itemName:'欢乐大人'
              }]
          },
          item02:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'潮人部落'
            },
              {
                itemName:'金色阳光'
              },
              {
                itemName:'欢乐大人'
              }]
          },
          item03:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'男'
            },
              {
                itemName:'女'
              }]
          },
          item04:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'一小'
            },
              {
                itemName:'三小'
              }

            ]
          },
          item05:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'一小'
            },
              {
                itemName:'儿小'
              },
              {
                itemName:'三小'
              }

            ]
          },
        }
      }
    },
    mounted () {
      this.refreshSource();
      this.refreshDepartment();
      this.refreshStudentsPublicSchool();
      this.refreshGrade();
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
      clickFn (n){
        this.rightPopDates[n].isShow = true
      },
    //获取招生来源
      refreshSource: function() {
      let params ={};
      let _self = this;
      api.refreshSource(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].name;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item01.data=newResponsibleList;
                  this.rightPopDates.item01.selectItem=responsibleList[0].name;
                }
          } else {
            let params = { msg: "获取招生来源" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取招生来源" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
       //获取公立学校
      refreshStudentsPublicSchool: function() {
      let params ={};
      let _self = this;
      api.refreshStudentsPublicSchool(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].name;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item04.data=newResponsibleList;
                  this.rightPopDates.item04.selectItem=responsibleList[0].name;
                }
          } else {
            let params = { msg: "获取公立学校" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取公立学校" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      //获取所有年级 
      refreshGrade: function() {
      let params ={};
      let _self = this;
      api.refreshGrade(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].text;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item05.data=newResponsibleList;
                  this.rightPopDates.item05.selectItem=responsibleList[0].text;
                }
          } else {
            let params = { msg: "获取年级" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取年级" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
     //获取所属校区
      refreshDepartment: function() {
      let params ={};
      let _self = this;
      api.refreshDepartment(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].name;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item02.data=newResponsibleList;
                  this.rightPopDates.item02.selectItem=responsibleList[0].name;
                }
          } else {
            let params = { msg: "获取所属校区" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取所属校区" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    },
    watch:{
      'this.rightPopDates.item02.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      'this.rightPopDates.item03.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      'this.rightPopDates.item04.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      'this.rightPopDates.item05.selectItem':function(newval,oldval){
        this.$toast(newval)
      }
    }
  }
</script>
<style lang="less">
  .customers-step-one{
  .van-cell-group{
    border-bottom:20px #eef1f6 solid;
  }
  .van-cell__value{
  .no-border{
    border: none;
    width: 100%;
  }
  }

  }
</style>
