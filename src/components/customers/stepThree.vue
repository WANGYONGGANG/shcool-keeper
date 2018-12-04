<template>
  <div class="customers-step-three">
    <van-cell-group>
    <van-cell title="意向级别" is-link   @click="clickFn('item01')">
       {{rightPopDates.item01.selectItem}}
    </van-cell>
    <van-cell title="意向课程" is-link   @click="clickFn('item02')" >
        {{rightPopDates.item02.selectItem}}
    </van-cell>
  </van-cell-group>
    <van-cell-group>
      <van-cell title="试听预约时间" is-link @click="showListen" />
      <van-cell title="主责任人" is-link   @click="clickFn('item03')" >
          {{rightPopDates.item03.selectItem}}
    </van-cell>
      <van-cell title="副责任人" is-link   @click="clickFn('item04')"  >
          {{rightPopDates.item04.selectItem}}
    </van-cell>
      <!-- <van-cell title="介绍人" is-link   @click="goTo(urls.introducer)"> -->
    <van-cell title="介绍人" is-link   @click="clickFn('item05')">
          {{rightPopDates.item05.selectItem}}
    </van-cell>
    </van-cell-group>
    <van-popup v-model="rightPopDates.item02.isShow"  position="right" style="height:100%;">
     <intentionCourse v-on:addNewCourse="addNewCourse"></intentionCourse>
    </van-popup>
     <van-popup v-model="rightPopDates.item05.isShow"  position="right" style="height:100%;left:0px;">
     <introducer v-on:selectedIntroducer="selectedIntroducer"></introducer>
    </van-popup>
    <van-popup v-model="rightPopDates.item04.isShow"  position="right" style="height:100%;left:0px;">
     <chiefOwner v-on:selectedChiefOwner="selectedChiefOwner"></chiefOwner>
    </van-popup>
    <van-popup v-model="rightPopDates.item03.isShow"  position="right" style="height:100%;left:0px;">
     <deputyOwner v-on:selectedDeputyOwner="selectedDeputyOwner"></deputyOwner>
    </van-popup>
    <!-- <van-cell-group>
      <van-cell title="母亲电话">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
        <van-cell title="母亲职业">
        <span><input type="text" class="no-border" /></span>
      </van-cell> -->
      <!-- <van-cell title="母亲职业" is-link /> -->
    <!-- </van-cell-group> -->
    <!-- <van-cell-group>
      <van-cell title="家庭电话">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell class="address">
        <van-cell title="家庭住址" />
        <van-field
          v-model="message"
          type="textarea"
          placeholder="输入家庭住址"
          rows="1"
        />
      </van-cell>
    </van-cell-group> -->
    <right-pop :filterShow.sync="rightPopDates.item01.isShow" :allDatas="rightPopDates.item01.data" :selectItem.sync="rightPopDates.item01.selectItem"></right-pop>
    <!-- <right-pop :filterShow.sync="rightPopDates.item02.isShow" :selectItem.sync="rightPopDates.item02.selectItem" :allDatas="rightPopDates.item02.data"></right-pop> -->
    <!-- <right-pop :filterShow.sync="rightPopDates.item03.isShow" :selectItem.sync="rightPopDates.item03.selectItem" :allDatas="rightPopDates.item03.data"></right-pop> -->
    <!-- <right-pop :filterShow.sync="rightPopDates.item04.isShow" :selectItem.sync="rightPopDates.item04.selectItem" :allDatas="rightPopDates.item04.data"></right-pop> -->
    <!-- <right-pop :filterShow.sync="rightPopDates.item05.isShow" :selectItem.sync="rightPopDates.item05.selectItem" :allDatas="rightPopDates.item05.data"></right-pop> -->
     <div class="add-customers-bottom-btn">
      <span v-on:click="lastStep">上一步</span>
      <span class="next"  v-on:click="submitCus">提交</span>
    </div>
    <van-popup v-model="listenShow" position="bottom" class="listen">
      <div class="listen-tit">试听预约时间</div>
      <dl class="listen-list">
        <dt>星期</dt>
        <dd>
          <table cellpadding="0" cellspacing="0" border="0"><tr>
            <td class="select">一</td>
            <td>二</td>
            <td>三</td>
            <td>四</td>
            <td>五</td>
            <td>六</td>
            <td>日</td></tr></table>
        </dd>
      </dl>
      <dl class="listen-list">
        <dt>时间</dt>
        <dd>
          <table cellpadding="0" cellspacing="0" border="0"><tr>
            <td>上午</td>
            <td>下午</td>
            <td>晚上</td>
          </tr></table>
        </dd>
      </dl>
      <div class="listen-btn">确定</div>
    </van-popup>
  </div>
</template>
<script>
  import RightPop from '../general/rightPop'
  import { api } from "../../../static/js/request-api/request-api.js";
  import intentionCourse from '@/components/teacher/intentionCourse'
  import introducer from '@/components/customers/introducer'
  import chiefOwner from '@/components/customers/chiefOwner'
  import deputyOwner from '@/components/customers/deputyOwner'
  export default {
   components: {
      RightPop,
      introducer,
      chiefOwner,
      deputyOwner,
      intentionCourse
    },
  props: ["cusObj"],
  data () {
    return{
          //视听预约弹窗
         listenShow:false,
         course:{isShow:false},
         classId:null,
         courseId:null,
         rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            data:[{
              itemName:'1'
            },
              {
                itemName:'2'
              },
                {
                itemName:'3'
              },
                {
                itemName:'4'
              },
              {
                itemName:'5'
              }
              ]
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
            selectedId:null,
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
            selectedId:null,
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
         },
      urls:{
        chiefOwner: '/teacher/chiefOwner',
        deputyOwner:'/teacher/deputyOwner',
        introducer:'/teacher/introducer'
      }
    }
  },
  mounted () {
    // this.findAllIntroducer();
    // this.findAllCourse();
    this.refreshSalePerson();
    this.refreshSalePersonAssistant();
  },
  methods: {
    showListen(){
      this.listenShow=true
    },
    goTo (url) {
      this.$router.push({path: url})
    },
    //添加意向课程
    addNewCourse(classId,courseId,selectedCourseName){
      console.log(classId+"^^^^^^^^^^^^^^^^^^"+courseId);
      this.rightPopDates.item02.isShow=false;
      this.rightPopDates.item02.selectItem=selectedCourseName;
      this.classId=classId;
      this.courseId=courseId;
    },
    //选择介绍人
    selectedIntroducer(id,code){
        this.rightPopDates.item05.selectItem=code;
        //待定
        this.rightPopDates.item05.isShow = false;
    },
    selectedDeputyOwner(id,code){
        this.rightPopDates.item03.selectItem=code;
        this.rightPopDates.item03.selectedId=id;
        //待定
        this.rightPopDates.item03.isShow = false;
    },
     selectedChiefOwner(id,code){
        this.rightPopDates.item04.selectItem=code;
        this.rightPopDates.item04.selectedId=id;
        //待定
        this.rightPopDates.item04.isShow = false;
    },
    //上一步
    lastStep(){
         this.$emit('lastStep',null);
    },
    submitCus(){
        let clientVice1={};
        let clientVice2={};
        let clientViceArray=[];
        clientVice1.salePersonId=this.rightPopDates.item04.selectedId;
        clientVice1.viceRoleId=2;
        clientVice2.salePersonId=this.rightPopDates.item03.selectedId;
        clientVice2.viceRoleId=2;
        clientViceArray.push(clientVice1);
        clientViceArray.push(clientVice2);
        let clientCoursesArray=[];
        let clientCourses={};
        clientCourses.classId=this.classId;
        clientCourses.courseId=this.courseId;
        clientCoursesArray.push(clientCourses);

        this.addIntentionClient(this.cusObj,clientCoursesArray,clientViceArray);
    },
      //添加意向课程
      addIntentionClient: function(client,clientCourses,clientVice) {
      console.log(JSON.stringify(client));
      console.log(JSON.stringify(clientCourses));
      console.log(JSON.stringify(clientVice));
      // let params = new URLSearchParams();
      // params.append("client",JSON.stringify(client));
      // params.append("clientCourses",JSON.stringify(clientCourses));
      // params.append("clientVice",JSON.stringify(clientVice));
       let params={};
       params.client=JSON.stringify(client);
       params.clientCourses=JSON.stringify(clientCourses);
       params.clientVice=JSON.stringify(clientVice);
      let _self = this;
      api.addIntentionClient(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);
                
                }
          } else {
            let params = { msg: "添加意向客户" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "添加意向客户" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    clickFn (n){
        this.rightPopDates[n].isShow = true
      },
     //获取主要责任人
      refreshSalePerson: function() {
      let _self = this;
      api.refreshSalePerson(null)
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
                  this.rightPopDates.item03.data=newResponsibleList;
                  this.rightPopDates.item03.selectItem=responsibleList[0].name;
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
      //获取副责任人
      refreshSalePersonAssistant: function() {
      let _self = this;
      api.refreshSalePerson(null)
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
                  this.rightPopDates.item04.data=newResponsibleList;
                  this.rightPopDates.item04.selectItem=responsibleList[0].name;
                }
          } else {
            let params = { msg: "获取副责任人" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取副责任人" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取意向课程
      findAllCourse: function() {
       let params = new URLSearchParams();
      params.append("page", 1);
      // params.append("query_content ",1);
       params.append("rows", 20);
      let _self = this;
      api.findAllCourse(params)
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
    //获取所有介绍人
      findAllIntroducer: function() {
      let params = new URLSearchParams();
      params.append("page", 1);
      params.append("query_content ",1);
       params.append("rows", 20);
      let _self = this;
      api.findAllIntroducer(params)
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
  }
}
</script>
<style lang="less">
.customers-step-three{
.van-cell-group{
  border-bottom:20px #eef1f6 solid;
}

.van-cell__value{
.no-border{
  border: none;
  width: 100%;
}
}
.address{
  padding-bottom: 40px;
.van-cell{
  padding-left: 0px;
}
.van-field{
  line-height: 40px;
  height: 120px;
  width:100%;
  padding-left: 20px;
  font-size: 24px;
  border-radius: 10px;
  margin: 0 auto;
  border: 1px #e0e5ed solid;
}
.van-field--min-height .van-field__control{
  min-height: 100px;
}
}
.listen{
  background: #fff;
  width: 100%;
.listen-tit{
    text-align: center;
  line-height: 45px;
  padding-top: 10px;

  }
.listen-list{
width:95%;
margin:20px auto 0;
  dt{
    font-size: 22px;
    color: #7b7474;
    text-align: left;
  }
  dd{
  padding:10px 0;
    table{
      width: 100%;
    }
    td{
      border:1px #bbbaba solid;
      color: #141414;
      text-align: center;
      line-height: 60px;
    }
    td.select{
      background: #4286ed;
      color: #fff;
    }
  }
}
.listen-btn{
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #fff;
  background: #4286ed;
  font-size: 28px;
  margin-top: 20px;
}
}
}
</style>
