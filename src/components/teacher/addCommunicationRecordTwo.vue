<template>
  <div class="add-com-rec">
    <div class="recipient">
      <van-cell-group>
        <van-cell title="沟通方式" is-link required  @click="clickFn('item01')" >
               {{rightPopDates.item01.selectItem}}
      </van-cell>
       <van-cell title="客户状态" is-link required  @click="clickFn('item02')" >
               {{rightPopDates.item02.selectItem}}
      </van-cell>
        <!-- <van-cell title="客户状态" value="转化成功" /> -->
        <van-cell title="意向级别" is-link   @click="clickFn('item05')">
          <van-rate :count="rightPopDates.item05.selectID" v-model="rightPopDates.item05.selectID" />
        </van-cell>
        <!-- <van-cell title="沟通结果" required is-link /> -->
         <van-cell title="沟通结果" is-link required  @click="clickFn('item03')" >
               {{rightPopDates.item03.selectItem}}
      </van-cell>
        <van-cell title="承诺到访">
          <input type="checkbox" class="promise"   value="1" v-model="isVisit">
        </van-cell>
        <div class="promise-button"><div class="promise-button-in"    @click="showVsitDate">{{nextVisitDate}}</div><div class="promise-button-in"  @click="clickFn('item06')">{{rightPopDates.item06.selectItem}}</div></div>
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="沟通内容" required value="选择模版" to="/teacher/communicationTemplate" is-link />
        <van-field
          v-model="talkContent"
          type="textarea"
          placeholder="请输入沟通内容（必填，限300字）"
          rows="1"
        />
      </van-cell-group>
    </div>
    <van-cell-group class="next">
      <van-cell title="下次沟通类型" value="请选择" is-link  @click="clickFn('item04')"> {{rightPopDates.item04.selectItem}}</van-cell>
        <van-cell title="下次沟通时间"  @click="showCalendar" >{{nextTalkDate}}
           <!-- <van-field
          v-model="message2"
          type="textarea"
          placeholder="输入下次沟通时间"
          rows="1"
        /> -->
        </van-cell>
       
      <!-- <van-cell title="下次沟通时间" required>
        <van-radio-group v-model="radio" class="next-time">
          <van-radio name="1">选择时间</van-radio>
          <van-radio name="2">时间待定</van-radio>
        </van-radio-group>
      </van-cell> -->
    </van-cell-group>
  <!-- <bottom-btn :buttonData="buttonData"  v-on:click="addRecord"></bottom-btn> -->
  <div class="bottom-btn" @click="addRecord">{{buttonData.text}}</div>
 <right-pop  class="add-height"  :filterShow.sync="rightPopDates.item01.isShow" :allDatas="rightPopDates.item01.data" :selectItem.sync="rightPopDates.item01.selectItem" :selectID.sync="rightPopDates.item01.selectID"></right-pop>
 <right-pop  class="add-height"  :filterShow.sync="rightPopDates.item02.isShow" :allDatas="rightPopDates.item02.data" :selectItem.sync="rightPopDates.item02.selectItem"  :selectID.sync="rightPopDates.item02.selectID"></right-pop>
 <right-pop class="add-height"  :filterShow.sync="rightPopDates.item03.isShow" :allDatas="rightPopDates.item03.data" :selectItem.sync="rightPopDates.item03.selectItem"  :selectID.sync="rightPopDates.item03.selectID"></right-pop>
 <right-pop  class="add-height"  :filterShow.sync="rightPopDates.item04.isShow" :allDatas="rightPopDates.item04.data" :selectItem.sync="rightPopDates.item04.selectItem"  :selectID.sync="rightPopDates.item04.selectID"></right-pop>
<right-pop class="add-height"   :filterShow.sync="rightPopDates.item05.isShow" :allDatas="rightPopDates.item05.data" :selectItem.sync="rightPopDates.item05.selectItem"  :selectID.sync="rightPopDates.item05.selectID"></right-pop>
<right-pop  class="add-height"  :filterShow.sync="rightPopDates.item06.isShow" :allDatas="rightPopDates.item06.data" :selectItem.sync="rightPopDates.item06.selectItem"  :selectID.sync="rightPopDates.item06.selectID"></right-pop>
 <calendar :date.sync="calendar.date" :isVisible.sync="calendar.isVisible"></calendar>
<calendar :date.sync="visitDate.date" :isVisible.sync="visitDate.isVisible"></calendar>
<attention v-if="showAttentionAlert" v-bind:attentionText="attentionText" style="z-index:600;"></attention>
  </div>
</template>
<script>
import RightPop from "../general/rightPop";
import { api } from "../../../static/js/request-api/request-api.js";
import Router from "vue-router";
import Calendar from '../general/calendar'
import BottomBtn from "../general/bottomBtn";
import attention from '../teacher/attention'
export default {
  components: {
    BottomBtn,
    Calendar,
    attention,
    RightPop
  },
  data() {
    return {
      calendar:{
        isVisible:false,
        date:'2018-10-30'
      },
      visitDate:{
        isVisible:false,
        date:'2018-10-30'
      },
      showAttentionAlert:false,
      attentionText:"提交成功",
      nextTalkDate:new Date().format("yyyy-MM-dd"),
      nextVisitDate:"选择到访日期",
      nextVisitType:"选择到访类型",
      star: 4,
      isVisit:true,
      talkContent: "",
      message2: "",
      rightPopDates: {
        item01: {
          isShow: false,
          selectItem: "",
          selectID: 0,
          data: [
            {
              itemName: "潮人部落"
            },
            {
              itemName: "欢乐大人"
            }
          ]
        },
          item06: {
          isShow: false,
          selectItem: "试听",
          selectID: true,
          data: [
            {
              itemName: "试听",
              id:false
            }
          ]
        },
        item04: {
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
        item05: {
          isShow: false,
          selectItem: "",
          selectID: 3,
          data: [
            {
              itemName: "0",
              id:0
            },
             {
              itemName: "1",
              id:1
            },
            {
              itemName: "2",
              id:2
            },
             {
              itemName: "3",
              id:3
            },
             {
              itemName: "4",
              id:4
            },
              {
              itemName: "5",
              id:5
            },
          ]
        },
        item02: {
          isShow: false,
          selectItem: "",
          selectID: 0,
          data: [
            {
              itemName: "潮人部落"
            },
            {
              itemName: "欢乐大人"
            }
          ]
        },
        item03: {
          isShow: false,
          selectItem: "有效沟通",
          selectID: 0,
          data: [
            {
              itemName: "有效沟通",
              id:1
            },
            {
              itemName: "无效沟通",
              id:0
            }
          ]
        }
      },
      buttonData: {
        text: "提交",
        url: ""
      }
    };
  },
  mounted: function() {
    this.refreshAdmissionsTalkType();
    this.refreshAdmissionsClientState();
    //查询承诺到访类型
    this.refreshAdmissionsVisitType();
  },
  methods: {
    clickFn(n) {
      this.rightPopDates[n].isShow = true;
    },
    showCalendar () {
      //根据参数显示对应日历弹层
      this.calendar.isVisible = true
    },
    //到访日期选择
    showVsitDate(){
      this.visitDate.isVisible=true;
    },
    addRecord: function() {
      this.addCommunicatingCustomers();
    },
    //获取客户状态
    refreshAdmissionsClientState: function() {
      let _self = this;
      api
        .refreshAdmissionsClientState(null)
        .then(res => {
          if (res.status == 200) {
            let code = res.data.code;
            if (code === 1) {
              // _self.recordList=res.data.data;
              let responsibleList = res.data.data;
              let newResponsibleList = [];
              for (let i = 0; i < responsibleList.length; i++) {
                let newObj = {};
                newObj.itemName = responsibleList[i].name;
                newResponsibleList.push(newObj);
              }
              this.rightPopDates.item02.data = newResponsibleList;
              this.rightPopDates.item02.selectItem = responsibleList[0].name;
              this.rightPopDates.item02.selectID = responsibleList[0].id;
            }
          } else {
            let params = { msg: "获取沟通方式" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取沟通方式" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //选择承诺到访类型
    refreshAdmissionsVisitType: function() {
      let _self = this;
      api.refreshAdmissionsVisitType(null)
        .then(res => {
          if (res.status == 200) {
            let code = res.data.code;
            if (code === 1) {
              let responsibleList = res.data.data;   
              let newResponsibleList = [];
              for (let i = 0; i < responsibleList.length; i++) {
                let newObj = {};
                newObj.itemName = responsibleList[i].name;
                newObj.id = responsibleList[i].id;
                newResponsibleList.push(newObj);
              }
              this.rightPopDates.item06.data = newResponsibleList;
              this.rightPopDates.item06.selectItem = responsibleList[0].name;
              this.rightPopDates.item06.selectID = responsibleList[0].id;
            }
          } else {
            let params = { msg: "获取承诺到访类型" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取承诺到访类型" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //增加客户沟通记录 
    addCommunicatingCustomers: function() {
      let _self = this;
       let data = new URLSearchParams();
       let callLog={};
       callLog.nextTalkTypeId=this.rightPopDates.item01.selectID;
       callLog.clientStateId=this.rightPopDates.item02.selectID;
       callLog.intentionLevel=this.rightPopDates.item05.selectID;
       callLog.talkResultStateId=this.rightPopDates.item03.selectID;
       callLog.isVisit=this.isVisit;
       callLog.talkContent=this.talkContent;
       callLog.nextMode=this.rightPopDates.item04.selectID;
       callLog.nextTalkDate=this.nextTalkDate;
       callLog.intentionClientId=_self.$route.query.id;
       callLog.nextVisitDate=this.nextVisitDate;
       callLog.visitTypeId=this.rightPopDates.item06.selectID;
       callLog.visited=false;
       if(callLog.nextVisitDate=="选择到访日期"){
            _self.alertMessage("请选择到访日期");
            return;
       };
      if(callLog.nextVisitDate=="选择到访日期"){
            _self.alertMessage("请选择到访日期");
            return;
       };
        if(callLog.talkContent==""){
            _self.alertMessage("沟通内容为空");
            return;
       };
      api.addCommunicatingCustomers(callLog)
        .then(res => {
          if (res.code == 1) {
             _self.showAttentionAlert=true;
               setTimeout(function(){
              _self.showAttentionAlert=false;
              // _self.$router.push({
              //  path: "/teacher/customerCommunicationRecord",
              //  query: { studentId: _self.$route.query.id}
              // });
          },2000)
          } else {
            let params = { msg: "增加客户沟通记录" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "增加客户沟通记录" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
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
    //获取沟通方式
    refreshAdmissionsTalkType: function() {
      let _self = this;
      api
        .refreshAdmissionsTalkType(null)
        .then(res => {
          if (res.status == 200) {
            let code = res.data.code;
            if (code === 1) {
              // _self.recordList=res.data.data;
              let responsibleList = res.data.data;
              let newResponsibleList = [];
              for (let i = 0; i < responsibleList.length; i++) {
                let newObj = {};
                newObj.itemName = responsibleList[i].name;
                newObj.id = responsibleList[i].id;
                newResponsibleList.push(newObj);
              }
              this.rightPopDates.item01.data = newResponsibleList;
              this.rightPopDates.item01.selectItem = responsibleList[0].name;
              this.rightPopDates.item01.selectID = responsibleList[0].id;
            }
          } else {
            let params = { msg: "获取沟通方式" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取沟通方式" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    }
  },
  watch: {
    "rightPopDates.item01.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    'calendar.date' :function (n,o) {
      this.nextTalkDate=n;
      this.$toast(n)
    },
      'visitDate.date' :function (n,o) {
      this.nextVisitDate=n;
      this.$toast(n)
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
    "rightPopDates.item04.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    "rightPopDates.item04.selectID":function(newval, oldval) {
      this.rightPopDates.item04.selectID=newval;
    },
    "rightPopDates.item05.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
     "rightPopDates.item05.selectID":function(newval, oldval) {
      this.rightPopDates.item05.selectID=newval;
    },
       "rightPopDates.item06.selectItem": function(newval, oldval) {
      this.$toast(newval);
    },
    "rightPopDates.item06.selectID":function(newval, oldval) {
      this.rightPopDates.item06.selectID=newval;
    }
  }
};
</script>
<style lang="less">
.add-height{
  height: 100%;
}
.promise-button{
  width: 750px;
  display: flex;
  height: 60px;
  line-height: 60px;
  .promise-button-in{
    width: 300px;
    text-align: center;
    border: 1px solid #333;
    margin-left: 50px;

  }
}
.bottom-btn{
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
.add-com-rec {
  .recipient {
    width: 100%;
    background: #fff;
    margin: 0 auto;
    .van-cell__right-icon {
      position: relative;
      top: 3px;
    }
    .van-cell__value {
      color: #ccc;
        .promise{
        width: 30px;
        height: 30px;
      }
    }
  }
  .ass-title {
    width: 100%;
    background: #fff;
    margin: 20px auto;
    .van-field__control {
      text-align: right;
    }
  }
  .class-evaluation {
    width: 100%;
    background: #fff;
    padding-bottom: 20px;
    margin: 20px auto 0;
    .van-cell__value {
      color: #ccc;
    }
    .van-field {
      line-height: 40px;
      height: 300px;
      width: 95%;
      margin: 0 auto;
      border: 1px #e0e5ed solid;
    }
    .van-field--min-height .van-field__control {
      min-height: 300px;
    }
  }
  .next {
    margin-top: 20px;
    .van-cell__value {
      color: #ccc;
    }
    .next-time {
      .van-radio {
        float: right;
        margin-left: 20px;
        .van-radio__input {
          top: -14px;
        }
      }
    }
  }
}
</style>
