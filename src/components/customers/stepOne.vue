<template>
  <div class="customers-step-one">
    <van-cell-group>
      <van-cell title="姓名" required>
        <span><input type="text" class="no-border" v-model="name" /></span>
      </van-cell>
      <van-cell title="手机号码" required>
        <span><input type="number" class="no-border" v-model="mobile" /></span>
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
      <van-cell title="出生日期"  @click="showCalendar">
        {{birthday}}
        <!-- <span><input type="text" class="no-border" /></span> -->
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
        <span><input type="text" class="no-border"   v-model="className" /></span>
      </van-cell>
      <van-cell title="英文姓名">
        <span><input type="text" class="no-border"  v-model="englishName"  /></span>
      </van-cell>
    </van-cell-group>

    <van-cell-group v-if="false">
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
    <right-pop :filterShow.sync="rightPopDates.item01.isShow" :allDatas="rightPopDates.item01.data" :selectItem.sync="rightPopDates.item01.selectItem" :selectID.sync="rightPopDates.item01.selectID"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item02.isShow" :selectItem.sync="rightPopDates.item02.selectItem" :allDatas="rightPopDates.item02.data"  :selectID.sync="rightPopDates.item02.selectID"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item03.isShow" :selectItem.sync="rightPopDates.item03.selectItem" :allDatas="rightPopDates.item03.data"  :selectID.sync="rightPopDates.item03.selectID"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item04.isShow" :selectItem.sync="rightPopDates.item04.selectItem" :allDatas="rightPopDates.item04.data"  :selectID.sync="rightPopDates.item04.selectID"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item05.isShow" :selectItem.sync="rightPopDates.item05.selectItem" :allDatas="rightPopDates.item05.data"  :selectID.sync="rightPopDates.item05.selectID"></right-pop>
    <calendar :date.sync="calendar.date" :isVisible.sync="calendar.isVisible"></calendar>
    <attention v-if="showAttentionAlert" v-bind:attentionText="attentionText" style="z-index:600;"></attention>
     <div class="add-customers-bottom-btn">
      <span v-on:click="lastStep">上一步</span>
      <span class="next"  v-on:click="nextStep">下一步</span>
    </div>
  </div>
</template>
<script>
  import RightPop from '../general/rightPop';
  import Calendar from '../general/calendar'
  import { api } from "../../../static/js/request-api/request-api.js";
  import attention from '../teacher/attention'
  export default {
    components: {
      RightPop,
      attention,
      Calendar
    },
    name: 'stepOne',
    props: ["cusObj"],
    data () {
      return {
       calendar:{
        isVisible:false,
        date:'2018-10-30'
      },
        // admissionsIntentionClientEntity:{},
        showAttentionAlert:false,
        attentionText:"提交成功",
        birthday:null,
        name:"",
        mobile:"",
        className:"",
        englishName:"",
        rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            selectID: null,
            data:[
              {
                itemName:'欢乐大人'
              }]
          },
          item02:{
            isShow:false,
            selectItem:'',
            selectID: null,
            data:[
              {
                itemName:'欢乐大人'
              }]
          },
          item03:{
            isShow:false,
            selectItem:'',
            selectID: null,
            data:[
              {
              itemName:'男',
              id:'1'
            },
              {
                itemName:'女',
                id:"2"
              }
              ]
          },
          item04:{
            isShow:false,
            selectItem:'',
            selectID: null,
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
            selectID: null,
            data:[{
              itemName:'一小'
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
    activated(){
    
    },
    deactivated(){
    
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
    //上一步
    lastStep(){
        this.$emit('lastStep',this.cusObj);
    },
    nextStep(){
       let isRight=this.setCustomerInfo();
       if(isRight){
         this.$emit('nextStep',this.cusObj);
       }

    },
    //设置用户信息第一步
    setCustomerInfo(){
    let _self=this;
     let admissionsIntentionClientEntity={};
     admissionsIntentionClientEntity.name=this.name;
     admissionsIntentionClientEntity.mobile=this.mobile;
     admissionsIntentionClientEntity.sourceWayId=this.rightPopDates.item01.selectID;
    //  admissionsIntentionClientEntity.fullTimeSchoolId=this.rightPopDates.item02.selectID;
     admissionsIntentionClientEntity.sex=this.rightPopDates.item03.selectID;
     admissionsIntentionClientEntity.birthday=this.birthday;
     admissionsIntentionClientEntity.fullTimeSchoolId=this.rightPopDates.item04.selectID;
     admissionsIntentionClientEntity.gradeId=this.rightPopDates.item05.selectID;
     admissionsIntentionClientEntity.className=this.className;
     admissionsIntentionClientEntity.englishName=this.englishName;
     _self.cusObj=admissionsIntentionClientEntity;
      if(admissionsIntentionClientEntity.name==""){
            _self.alertMessage("请填写姓名");
            return false;
       };
      if(admissionsIntentionClientEntity.mobile==""){
            _self.alertMessage("填写手机号码");
           return false;
       };
        if(!admissionsIntentionClientEntity.sourceWayId){
            _self.alertMessage("选择招生来源");
            return false;
       };
       return true;

    },
      showCalendar () {
      //根据参数显示对应日历弹层
      this.calendar.isVisible = true
    },
     //弹出层提示 
    alertMessage:function(alertMessage){
          let _self=this;
         _self.attentionText=alertMessage;
          _self.showAttentionAlert=true;
               setTimeout(function(){
              _self.showAttentionAlert=false;
          },2000)
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
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item01.data=newResponsibleList;
                  this.rightPopDates.item01.selectItem=responsibleList[0].name;
                  this.rightPopDates.item01.selectID = responsibleList[0].id;
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
    //获取所有班级 
      findAllClass: function() {
      let params ={};
      let _self = this;
      api.findAllClass(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].name;
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item04.data=newResponsibleList;
                  this.rightPopDates.item04.selectItem=responsibleList[0].name;
                  this.rightPopDates.item04.selectID = responsibleList[0].id;
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
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item04.data=newResponsibleList;
                  this.rightPopDates.item04.selectItem=responsibleList[0].name;
                  this.rightPopDates.item04.selectID = responsibleList[0].id;
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
                    newObj.itemName=responsibleList[i].name;
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item05.data=newResponsibleList;
                  this.rightPopDates.item05.selectItem=responsibleList[0].name;
                  this.rightPopDates.item05.selectID = responsibleList[0].id;
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
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item02.data=newResponsibleList;
                  this.rightPopDates.item02.selectID = responsibleList[0].id;
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
      'rightPopDates.item01.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      'calendar.date' :function (n,o) {
      this.birthday=n;
      this.$toast(n)
    },
      "rightPopDates.item01.selectID":function(newval, oldval) {
        console.log(newval);
       this.rightPopDates.item01.selectID=newval;
       },
      'rightPopDates.item02.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      "rightPopDates.item02.selectID":function(newval, oldval) {
       this.rightPopDates.item02.selectID=newval;
       },
      'rightPopDates.item03.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
       "rightPopDates.item03.selectID":function(newval, oldval) {
       this.rightPopDates.item03.selectID=newval;
       },
      'rightPopDates.item04.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      "rightPopDates.item04.selectID":function(newval, oldval) {
       this.rightPopDates.item04.selectID=newval;
       },
      'rightPopDates.item05.selectItem':function(newval,oldval){
        this.$toast(newval)
      },
      "rightPopDates.item05.selectID":function(newval, oldval) {
       this.rightPopDates.item05.selectID=newval;
       },
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
