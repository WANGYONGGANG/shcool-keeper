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
        <van-cell title="意向级别" is-link >
          <van-rate :count="star" v-model="star" />
        </van-cell>
        <!-- <van-cell title="沟通结果" required is-link /> -->
         <van-cell title="沟通结果" is-link required  @click="clickFn('item03')" >
               {{rightPopDates.item03.selectItem}}
      </van-cell>
        <van-cell title="承诺到访">
          <input type="checkbox">
        </van-cell>
      </van-cell-group>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="沟通内容" required value="选择模版" to="/teacher/communicationTemplate" is-link />
        <van-field
          v-model="message1"
          type="textarea"
          placeholder="请输入沟通内容（必填，限300字）"
          rows="1"
        />
      </van-cell-group>
    </div>
    <van-cell-group class="next">
      <van-cell title="下次沟通类型" value="请选择" is-link  @click="clickFn('item04')"> {{rightPopDates.item04.selectItem}}</van-cell>
        <van-cell title="下次沟通时间" > <van-field
          v-model="message2"
          type="textarea"
          placeholder="输入下次沟通时间"
          rows="1"
        /></van-cell>
       
      <!-- <van-cell title="下次沟通时间" required>
        <van-radio-group v-model="radio" class="next-time">
          <van-radio name="1">选择时间</van-radio>
          <van-radio name="2">时间待定</van-radio>
        </van-radio-group>
      </van-cell> -->
    </van-cell-group>
    <bottom-btn :buttonData="buttonData"  v-on:click="addRecord"></bottom-btn>
 <right-pop :filterShow.sync="rightPopDates.item01.isShow" :allDatas="rightPopDates.item01.data" :selectItem.sync="rightPopDates.item01.selectItem" :selectID.sync="rightPopDates.item01.selectID"></right-pop>
<right-pop :filterShow.sync="rightPopDates.item02.isShow" :allDatas="rightPopDates.item02.data" :selectItem.sync="rightPopDates.item02.selectItem"></right-pop>
 <right-pop :filterShow.sync="rightPopDates.item03.isShow" :allDatas="rightPopDates.item03.data" :selectItem.sync="rightPopDates.item03.selectItem"></right-pop>
  <right-pop :filterShow.sync="rightPopDates.item04.isShow" :allDatas="rightPopDates.item04.data" :selectItem.sync="rightPopDates.item04.selectItem"></right-pop>
  </div>
</template>
<script>
import RightPop from '../general/rightPop'
import { api } from "../../../static/js/request-api/request-api.js";
import BottomBtn from '../general/bottomBtn'
export default {
  components: {
    BottomBtn,
    RightPop
  },
  data () {
    return {
      star: 4,
      message1:'sdfsdf',
      message2:'',
        rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            selectID: 1,
            data:[{
              itemName:'潮人部落',
            },
              {
                itemName:'金色阳光'
              },
              {
                itemName:'欢乐大人'
              }]
          },
            item04:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'准确时间'
            },
              {
                itemName:'待定'
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
              itemName:'有效沟通'
            },
              {
                itemName:'无效沟通'
              }]
          }
        },
      buttonData: {
        text: '提交',
        url: ''
      }
    }
  },
  mounted:function(){
    this.refreshAdmissionsTalkType();
    this.refreshAdmissionsClientState();
    alert('111')
  },
   methods: {
      clickFn (n){
        this.rightPopDates[n].isShow = true
      },
    addRecord:function(){

    },
       //获取客户状态
    refreshAdmissionsClientState: function() {
      let _self = this;
      api.refreshAdmissionsClientState(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  // _self.recordList=res.data.data;
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
                console.log(this.rightPopDates)
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
    //获取沟通方式
    refreshAdmissionsTalkType: function() {
      let _self = this;
      api.refreshAdmissionsTalkType(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  // _self.recordList=res.data.data;
                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].name;
                    newObj.id=responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item01.data=newResponsibleList;
                  this.rightPopDates.item01.selectItem=responsibleList[0].name;
                   this.rightPopDates.item01.selectID=responsibleList[0].id;
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

    },
     watch:{
      'this.rightPopDates.item01.selectItem':function(newval,oldval){
        alert('111')
        console.log("**********");
        
        this.$toast(newval)
      },
       'this.rightPopDates.item01.selectID':{
         handler(n,o){
           alert('222')
           this.$toast(n)
         },
         deep:true
       },
      'this.rightPopDates.item02.selectItem':function(newval,oldval){
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
</style>
