<template>
  <div class="course">
      <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="课程名称" background="#fff"  show-action v-model="courseName">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <div class="course-all">
      <div class="course-prop" v-if="showProps">
        <div v-on:click="selectedItem(null,null,$event)"><span  class="selected-item">不限</span></div>
        <div v-for="(item,index) in courseItemList"  v-bind:key="index" v-on:click="selectedItem(item.id,item.type,$event)">
          <span>{{item.value}}</span>
        </div>
      </div>
     <div class="course-list">
       <div  v-on:click="openInitDate(0)"><span>年份</span></div>
       <div v-on:click="openInitDate(1)"><span>期段</span></div>
       <div v-on:click="openInitDate(2)"><span>类型</span></div>
       <div v-on:click="openInitDate(3)"><span>科目</span></div>
      </div>
      <van-cell title="校区"></van-cell>
    </div>
    </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import $ from "jquery";
import CalendarPacking from "../general/calendarPacking";
export default {
  components: {
    CalendarPacking
  },
  data() {
    return {
      courseYear:[
        {id:0,value:"2018",type:0}, {id:0,value:"2017",type:0}, {id:0,value:"2016",type:0}, {id:0,value:"2015",type:0}
      ],
      accounting_id:null,
      campus_id:null,
      class_type_id:null,
      course_name:null,
      period_id:null,
      year_id:null,

      showProps:false,
      courseName:null,
      selectedValue:0,
      courseItemList:[]
    };
  },
   mounted () {
    // this.initDate();
  },
  methods: {
    goTo(url) {
      this.$router.push({ path: url });
    },
    //弹出类型选择
    selectedItem(id,type,event){
          let _self=this;
          let el = event.currentTarget;
          //阻止事件冒泡
         event.stopPropagation();
         $(".course-prop").find("span").removeClass("selected-item");
         $(el).find("span").addClass("selected-item");
         if(type==0){
           _self.year_id=id;
         }else if(type==1){
           _self.period_id=id;
         }else if(type==2){
          _self.class_type_id=id;
         }else if(type==3){
          _self.accounting_id=id;
         }
        this.showProps=false;
        
    },
    openInitDate:function(selectedValue){
      let _self=this;
      switch(selectedValue){
      case 0:
          this.courseItemList=this.courseYear;
          break;
      case 1:
           this.refreshCurriculumPeriod();
           break;
      case 2:
           this.refreshCurriculumClassType();
           break;
      case 3:
         this.refreshCurriculumAccounting();
         break;
      default:
          this.courseItemList=this.courseYear;
      };
      if(selectedValue==this.selectedValue){
      if(!this.showProps){
        this.showProps=true;
      }else{
        this.showProps=false;
        return;
      }
    }else{
      this.showProps=false;
      setTimeout(function(){
      _self.showProps=true;
      },200);
    }
      this.selectedValue=selectedValue;
    },
    onSearch(){
        this.findAllCourse();
    },
     //获取所属期段
      refreshCurriculumPeriod: function() {
      let _self = this;
      api.refreshCurriculumPeriod(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.value=responsibleList[i].name;
                    newObj.id=responsibleList[i].id;
                    newObj.type=1;
                    newResponsibleList.push(newObj);
                  }
                  this.courseItemList=newResponsibleList;
                }
          } else {
            let params = { msg: "获取所属期段" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取所属期段" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      //获取所属班型
      refreshCurriculumClassType: function() {
      let _self = this;
      api.refreshCurriculumClassType(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.value=responsibleList[i].name;
                    newObj.id=responsibleList[i].id;
                    newObj.type=2;
                    newResponsibleList.push(newObj);
                  }
                  this.courseItemList=newResponsibleList;
                }
          } else {
            let params = { msg: "获取所属班型" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取所属班型" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      //获取意向课程
      findAllCourse: function() {
      let _self = this;
      let params = new URLSearchParams();
      params.append("accounting_id", _self.accounting_id);
      params.append("campus_id", _self.campus_id);
      params.append("class_type_id",_self.class_type_id);
      params.append("course_name", _self.course_name);
      params.append("period_id", _self.period_id);
      // params.append("year_id",_self.year_id);
       params.append("year_id",2);
      api.findAllCourse(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  // let responsibleList=res.data.data;
                  // let newResponsibleList=[];
                  // for(let i=0;i<responsibleList.length;i++){
                  //   let newObj={};
                  //   newObj.value=responsibleList[i].name;
                  //   newObj.id=responsibleList[i].id;
                  //   newResponsibleList.push(newObj);
                  // }
                  // this.courseItemList=newResponsibleList;
                }
          } else {
            let params = { msg: "获取意向课程" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取意向课程" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      //获取所属科目
      refreshCurriculumAccounting: function() {
      let _self = this;
      api.refreshCurriculumAccounting(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  let responsibleList=res.data.data;
                  let newResponsibleList=[];
                  for(let i=0;i<responsibleList.length;i++){
                    let newObj={};
                    newObj.value=responsibleList[i].name;
                    newObj.id=responsibleList[i].id;
                    newObj.type=3;
                    newResponsibleList.push(newObj);
                  }
                  this.courseItemList=newResponsibleList;
                }
          } else {
            let params = { msg: "获取所属科目" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取所属科目" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
};
</script>
<style lang="less">
.course {
  width: 750px;
  .van-cell{
    border-bottom:  1px solid #B8B8B8;
  }
.course-all{
  position: relative;
  .course-prop{
    width: 750px;
    height: 300px;
    background: #fff;
    position: absolute;
    top:74px;
    z-index: 600;
    .selected-item{
      background-color: #4286ed;
      border-radius: 30px;
      padding-left: 10px;
      padding-right: 10px;
      display: inline-block;
    }
    div{
      height: 60px;
      text-align: center;
      line-height: 60px
    }
  }
}
  .course-list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #B8B8B8;
    border-bottom: 1px solid #B8B8B8;
    div:nth-child(1){
      border-left: 1px solid #B8B8B8;
    }
    div{
      width: 187px;
      text-align: center;
      height: 70px;
      line-height: 70px;
      background-color: #fff;
      border-right: 1px solid #B8B8B8;
    }
  }
  .list-search {
    background: #fff;
    height: 105px;
    padding: 10px 20px;
    .list-search-l {
      float: left;
    }
    .van-cell {
      font-size: 26px;
    }
    .van-cell__left-icon {
      font-size: 26px;
      top: 15px;
      margin-right: 10px;
    }
    .van-search__action {
      font-size: 26px;
      background: #4286ed;
      color: #fff;
      position: relative;
      // left:-32px;
      // border-radius: 35px;
      // padding: 16px 23px;
      height: 54px;
      width: 100px;
      text-align: center;
      line-height: 54px;
    }
    .van-search {
      width: 700px;
    }
    .van-search .van-field__body {
      background-color: #eff1f6;
    }
    .van-search .van-cell {
      border: 1px #eff1f6 solid;
      border-right: none;
      // border-top-left-radius: 35px;
      // border-bottom-left-radius: 35px;
      padding: 0px 10px;
      line-height: 54px;
    }
    .operation {
      float: right;
      padding: 16px 23px;
      font-size: 26px;
      background: #eff1f6;
      // border-radius: 35px;
      margin: 6px 5px 0 0;
    }
  }
  .button {
    height: 85px;
    width: 750px;
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    div:nth-child(1) {
      color: #4286ed;
      border: 1px solid #4286ed;
      margin-right: 20px;
    }
    div:nth-child(2) {
      background-color: #4286ed;
      color: #fff;
    }
    div {
      width: 200px;
      border-radius: 100px;
      height: 60px;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
