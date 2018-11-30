<template>
  <div class="course">
     <van-cell title="课程(1)">
    </van-cell>
    <div class="course-item">
      <van-cell title="校区" is-link   @click="clickFn('item04')">
       {{rightPopDates.item04.selectItem}}
    </van-cell>
     <van-cell title="意向课程" is-link   @click="clickFn('item02')">
       {{selectedCourseName}}
    </van-cell>
     <van-cell title="意向班级" is-link   @click="clickFn('item03')">
       {{rightPopDates.item03.selectItem}}
    </van-cell>
        </div>
      <div class="button">
        <div v-on:click="addNewCourse"><span>添加课程</span></div><div v-on:click="submitNewCourse"><span>确认</span></div>
      </div>
      <right-pop :filterShow.sync="rightPopDates.item04.isShow" :selectItem.sync="rightPopDates.item04.selectItem" :allDatas="rightPopDates.item04.data"  :selectID.sync="rightPopDates.item04.selectID"></right-pop>
      <van-popup v-model="rightPopDates.item02.isShow"  position="right" style="height:100%;">
        <intentionCourseStepTwo  v-bind:selectID="rightPopDates.item04.selectID"  v-on:addCourse="addCourse"></intentionCourseStepTwo>
    </van-popup>
      </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import RightPop from '../general/rightPop';
import $ from "jquery";
import Router from "vue-router";
import intentionCourseStepTwo from "./intentionCourseStepTwo";
import CalendarPacking from '../general/calendarPacking';
export default {
  components: {
    RightPop,
    intentionCourseStepTwo,
    CalendarPacking
  },
  data () {
    return {
          selectedCourseName:null,
          rightPopDates:{
          item02:{
            isShow:false,
            selectItem:'',
            selectID:null,
            data:[
              {
                itemName:'测试'
              }]
          },
            item03:{
            isShow:false,
            selectItem:'',
            selectID:null,
            data:[
              {
                itemName:'测试'
              }]
          },
            item01:{
            isShow:false,
            selectItem:'',
            selectID:null,
            data:[
              {
                itemName:'测试'
              }]
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
      }
    }
  },
  mounted () {
     this.refreshStudentsPublicSchool();
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url});
    },
    clickFn (n){
        console.log(this.rightPopDates[n]);
        this.rightPopDates[n].isShow = true;
      },
    //添加课程id
    addCourse(courseObj){
         this.selectedCourseName=courseObj.courseName;
         this.rightPopDates.item02.isShow=false;
    },
    //添加课程
    addNewCourse(){
         $(".course-item").clone().insertAfter(".course-item");
     
    },
    //确认意向课程
    submitNewCourse(){

    },
    //获取班级
      intentionClientAPIFindAllClass: function(course_id) {
      let params = new URLSearchParams();
      params.append("course_id",course_id);
      let _self = this;
      api.intentionClientAPIFindAllClass(params)
        .then(res => {
            console.log(res);
          if (res.code==1) {
                // let code=res.data.code;
                // if(code===1){
                  let responsibleList=res.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.itemName=responsibleList[i].className;
                    newObj.id = responsibleList[i].id;
                    newResponsibleList.push(newObj);
                  }
                  this.rightPopDates.item03.data=newResponsibleList;
                  this.rightPopDates.item03.selectItem=responsibleList[0].className;
                  this.rightPopDates.item03.selectID = responsibleList[0].id;
                // }
          } else {
            let params = { msg: "获取班级" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取班级" };
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
        },
  watch:{
        'rightPopDates.item04.selectItem':function(newval,oldval){
        this.$toast(newval)|""
      },
      "rightPopDates.item04.selectID":function(newval, oldval) {
       this.rightPopDates.item04.selectID=newval;
       this.intentionClientAPIFindAllClass(newval);
       },

      }
}
</script>
<style lang="less">
  .course{
    width: 750px;
    .button{
      height: 85px;
      width: 750px;
      background-color: #fff;
      position: fixed;
      bottom: 0px;;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      div:nth-child(1){
        color: #4286ed;
        border: 1px solid #4286ed;
        margin-right: 20px;
      }
      div:nth-child(2){
        background-color: #4286ed;
        color: #fff;
      }
      div{
        width: 200px;
        border-radius: 100px;
        height: 60px;
        text-align: center;
        line-height: 60px;
      }
    }
  }
</style>
