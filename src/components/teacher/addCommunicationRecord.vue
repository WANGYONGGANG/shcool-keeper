<template>
  <div class="add-com-rec">
    <div class="recipient">
      <van-cell-group>
        <van-cell title="沟通类型" required  v-model="talkType" required  @click="clickFn('item01')" is-link>
          {{rightPopDates.item01.selectItem}}
        </van-cell>
        <van-cell title="沟通结果" required v-model="talkResult" required @click="clickFn('item02')" is-link>
          {{rightPopDates.item02.selectItem}}
        </van-cell>
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="沟通内容" required value="请选择" @click="clickFn('item03')">
        {{rightPopDates.item03.selectItem}}
      </van-cell>
        <van-field
          v-model="talkContent"
          type="textarea"
          placeholder="请输入沟通内容（必填，限300字）"
          rows="1"
        />
      </van-cell-group>
    </div>
    <van-cell-group class="next">
      <van-cell title="下次跟进类型" v-model="followType"   @click="clickFn('item04')" is-link>
        {{rightPopDates.item04.selectItem}}
      </van-cell>
      <van-cell title="下次沟通类型" value="请选择" is-link  @click="clickFn('item05')"> {{rightPopDates.item05.selectItem}}</van-cell>
      <van-cell title="下次沟通时间"  @click="showCalendar" >{{nextTalkDate}}
           <!-- <van-field
          v-model="message2"
          type="textarea"
          placeholder="输入下次沟通时间"
          rows="1"
        /> -->
        </van-cell>
      <!-- <van-cell title="下次跟进时间">
        <van-radio-group v-model="radio" class="next-time">
          <van-radio name="1">选择时间</van-radio>
          <van-radio name="2">时间待定</van-radio>
        </van-radio-group>
      </van-cell> -->
    </van-cell-group>
    <!-- <bottom-btn :buttonData="buttonData" @click='addStudentCommunication'></bottom-btn> -->
    <div class="bottom-btn" @click='addStudentCommunication'>提交</div>
    <right-pop :filterShow.sync="rightPopDates.item01.isShow" :allDatas="rightPopDates.item01.data" :selectItem.sync="rightPopDates.item01.selectItem" :selectID.sync="rightPopDates.item01.selectID"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item02.isShow" :selectItem.sync="rightPopDates.item02.selectItem" :allDatas="rightPopDates.item02.data"  :selectID.sync="rightPopDates.item02.selectID"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item03.isShow" :selectItem.sync="rightPopDates.item03.selectItem" :allDatas="rightPopDates.item03.data"  :selectID.sync="rightPopDates.item03.selectID" :selectCon.sync="rightPopDates.item04.selectCon"></right-pop>
    <right-pop :filterShow.sync="rightPopDates.item04.isShow" :allDatas="rightPopDates.item04.data" :selectItem.sync="rightPopDates.item04.selectItem" :selectID.sync="rightPopDates.item04.selectID"></right-pop>
    <right-pop  class="add-height"  :filterShow.sync="rightPopDates.item05.isShow" :allDatas="rightPopDates.item05.data" :selectItem.sync="rightPopDates.item05.selectItem"  :selectID.sync="rightPopDates.item05.selectID"></right-pop>
    <calendar :date.sync="calendar.date" :isVisible.sync="calendar.isVisible"></calendar>
    <attention v-if="showAttentionAlert" v-bind:attentionText="attentionText" style="z-index:600;"></attention>
  </div>
</template>
<script>
import RightPop from '../general/rightPop';
import RightPopCon from '../general/rightPopCon';
// import BottomBtn from '../general/bottomBtn';
import Calendar from '../general/calendar'
import CommunicationTemplate from './communicationTemplate';
import attention from '../teacher/attention';
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  components: {
    RightPop,
    RightPopCon,
    Calendar,
    // BottomBtn,
    CommunicationTemplate,
    attention
  },
  data () {
    return {
      buttonData: {
        text: '提交',
        url: ''
      },
      radio:'',
      talkType:'请选择',
      talkResult:'请选择',
      talkContent:'',
      followType:'请选择',
      rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            selectID: 0,
            data:[
              {
                itemName:'欢乐大人'
              }]
          },
           item02:{
            isShow:false,
            selectItem:'',
            selectID: true,
            data:[
              {
                itemName:'有效沟通',
                id:'true'
              },
              {
                itemName:'无效沟通',
                 id:'false'
              }]
          },
          item03:{
            isShow:false,
            selectItem:'',
            selectID: 0,
            selectCon:'',
            data:[
              {
              itemName:'不爱沟通',
              content:''
            },
              {
                itemName:'不爱沟通',
                content:''
              }
              ]
          },
           item04:{
            isShow:false,
            selectItem:'',
            selectID: null,
            data:[
              {
                itemName:'欢乐大人'
              }]
          },
          item05: {
          isShow: false,
          selectItem: "待定",
          selectID: true,
          data: [
            {
              itemName: "准确时间",
              id:false
            },
            {
              itemName: "待定",
              id:true
            }
          ]
        },
      },
      nextTalkDate:new Date().format("yyyy-MM-dd"),
      calendar:{
        isVisible:false,
        date:'2018-10-30'
      },
      showAttentionAlert:false,
    }
  },
  mounted(){
//      window.history.back(function () {
//        console.log('back')
//      });
//    this.message = this.$route.query.con;

    if(this.$route.params.type){
        if(this.$route.params.type == 1){
          console.log(this.$route.params.con[0].content);
            this.talkType = this.$route.params.con[0].content;
        }else if(this.$route.params.type == 2){

        }else if(this.$route.params.type == 3){
          this.talkContent = this.$route.params.con[0].content;
        }else if(this.$route.params.type == 4){
          // this.talkContent = this.$route.params.con[0].content;
        }
    }
    this.rightPopDates.item02.selectItem=this.rightPopDates.item02.data[0].itemName;
    this.rightPopDates.item02.selectID = true;
    this.findTalkType();
    this.findTalkTypeNext();
    this.findTalkContentTemplate();
//    this.message = this.$route.params.con;

  },
  methods:{
    //增加沟通内容
    addStudentCommunication:function(){
       let _self = this;
      //  let data = new URLSearchParams();
      //  let callLog={};
      let callLog = new URLSearchParams();
      callLog.append('studentID',_self.$route.query.id)
      callLog.append('talkTypeId',this.rightPopDates.item01.selectID)
      callLog.append('nextTalkTypeId',this.rightPopDates.item04.selectID)
      callLog.append('talkResultStateId',this.rightPopDates.item02.selectID)
      callLog.append('nextMode',this.rightPopDates.item05.selectID)
      callLog.append('talkContent',this.talkContent)
      callLog.append('nextTalkDate',this.nextTalkDate)

      //  callLog.studentID =_self.$route.query.id;
      //  callLog.talkTypeId =this.rightPopDates.item01.selectID;
      //  callLog.nextTalkTypeId =this.rightPopDates.item04.selectID;
      //  callLog.talkResultStateId =this.rightPopDates.item02.selectID;
      //  callLog.nextMode =this.rightPopDates.item05.selectID;
      //  callLog.talkContent=this.talkContent;
      //  callLog.nextTalkDate=this.nextTalkDate;
     
      if(callLog.talkContent==""){
            _self.alertMessage("沟通内容为空");
            return;
      };
      api.addStudentCommunication(callLog)
        .then(res => {
          if(res.code===1){
              setTimeout(function(){
                _self.showAttentionAlert=false;
                _self.$router.push({
                  path: "/teacher/communicationRecord",
                  query: { id: _self.$route.query.id}
                });
            },2000)
          }
        })
        .catch(error => {
          
        });
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
     // 接受参数
    getMes: function(p){
      // console.log(this.$route.query.con);
    },
    //获取沟通类型
    findTalkType: function() {
      let params ={};
      let _self = this;
      api.findTalkType(null)
        .then(res => {
          console.log(res);
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
                  this.rightPopDates.item01.data=newResponsibleList;
                  this.rightPopDates.item01.selectItem=responsibleList[0].name;
                  this.rightPopDates.item01.selectID = responsibleList[0].id;
                }
          } else {
            let params = { msg: "获取沟通类型" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取沟通类型" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    // 获取跟进类型
    findTalkTypeNext: function() {
      let params ={};
      let _self = this;
      api.findTalkType(null)
        .then(res => {
          console.log(res);
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
            let params = { msg: "获取沟通类型" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取沟通类型" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    // 获取沟通内容
    findTalkContentTemplate: function() {
      let params ={};
      let _self = this;
        api.findTalkContentTemplate(null).then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  let responsibleList=res.data.data;
                  console.log(responsibleList);
                  let newResponsibleList=[];                  
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].name;
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item03.data=newResponsibleList;
                  this.rightPopDates.item03.selectItem=responsibleList[0].name;
                  this.rightPopDates.item03.selectID = responsibleList[0].id;
                }
          } else {
            let params = { msg: "获取沟通内容" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取沟通内容" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    
    
    clickFn (n){
        this.rightPopDates[n].isShow = true
      },
      showCalendar () {
      //根据参数显示对应日历弹层
      this.calendar.isVisible = true
    },
  },
   watch: {
     'calendar.date' :function (n,o) {
      this.nextTalkDate=n;
      this.$toast(n)
    },
    "rightPopDates.item01.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    "rightPopDates.item01.selectID":function(newval, oldval) {
      this.rightPopDates.item01.selectID=newval;
    },
    "rightPopDates.item02.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    "rightPopDates.item02.selectID":function(newval, oldval) {
      this.rightPopDates.item02.selectID=newval;
    },
    "rightPopDates.item03.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    "rightPopDates.item03.selectID":function(newval, oldval) {
      this.rightPopDates.item03.selectID=newval;
    },
    "rightPopDates.item05.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    "rightPopDates.item05.selectID":function(newval, oldval) {
      this.rightPopDates.item05.selectID=newval;
    },
   }
}
</script>
<style lang="less" rel="stylesheet/less">
.van-popup {
  // height: 100%;
}
  .add-com-rec{
  .recipient{
    width: 100%;
    background: #fff;
    margin: 0 auto;
  .van-cell__right-icon{
    position: relative;
    top: 3px;
  }
  .van-cell__value{
    color:#ccc;

  }
  }
  .ass-title{
    width: 100%;
    background: #fff;
    margin: 20px auto;
  .van-field__control{
    text-align: right;
  }
  }
  .class-evaluation{
    width: 100%;
    background: #fff;
    padding-bottom: 20px;
    margin: 20px auto 0;
  .van-cell__value{
    color:#ccc;
  }
  .van-field{
    line-height: 40px;
    height: 300px;
    width:95%;
    margin: 0 auto;
    border: 1px #e0e5ed solid;
  }
  .van-field--min-height .van-field__control{
    min-height: 300px;
  }

  }
  .next{
    margin-top: 20px;
  .van-cell__value{
    color:#ccc;
  }
  .next-time{
    .van-radio{
      float: right;
    margin-left:20px;
    .van-radio__input{
      top:-14px;
    }
    }
  }
  }

  }
  .bottom-btn {
    height: 99px;
    line-height: 99px;
    font-size: 32px;
    color: #fff;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: 0px;
    background: #4286ed;
    z-index: 100;
  }
  .add-com-rec .filter {
    width: 78%;
    height: 100%;
}
</style>
