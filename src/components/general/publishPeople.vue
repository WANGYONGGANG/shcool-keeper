<template>
  <div class="publish-people">
    <div class="title">
      {{studentList[0].className}}
    </div>
    <div class="people-list" v-show="showPeopleData">
    <div class="class-list"  v-for="(item,index) in studentList" v-bind:key="index">
      <van-cell>
          <input type="checkbox"  v-bind:value="item.id" v-model="studentCheckIds"   name="category1" >
          <img src="../../assets/images/user/test.jpg" class="img-auto"/>
                 {{item.studentCode}}&nbsp;  {{item.studentName}}
      </van-cell>
    </div>
    </div>
    <div class="all-choose fn-clear">
     <div class="fn-left"><input type="checkbox"  v-on:click="selectedAll"  class="all-selected"/> 全选</div>
      <div class="fn-right"  v-on:click="addStudents"><span>确定({{studentCheckIds.length}})</span></div>
    </div>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import $ from "jquery";
export default {
   data() {
    return {
      studentList:[{className:""}],
      showPeopleData:true,
      studentCheckIds:[]
      }
    },
  props: ["classId","index"],
  mounted () {
     this.findAllClassStudentInfo();
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    },
    addStudents(){
         let classObj={};
         classObj.classID=this.classId;
         let  index=this.index;
         classObj.studentIDs=this.studentCheckIds;
         this.$emit('addStudents',classObj,index);
         
    },
    //全选
    selectedAll:function(){
      let _self=this;
     let allChecked=$(".all-selected").is(':checked');
     console.log("^^^^^^^^^^^^^^^"+allChecked);
     if(allChecked){
        var items = document.getElementsByName("category1");
        _self.studentCheckIds=[];
        for(let j=0;j<_self.studentList.length;j++){
            _self.studentCheckIds.push(_self.studentList[j].id);
        }
         for (let i = 0; i < items.length; i++) {
          if (!items[i].checked) {
            items[i].checked = true;
          }
        }
     }else{
        var items = document.getElementsByName("category1");
        _self.studentCheckIds=[];
        for (let i = 0; i < items.length; i++) {
          if (items[i].checked) {
            items[i].checked = false;
          }
        }
     }
    },
    //获取所有班级花名册
      findAllClassStudentInfo(){
      let _self = this;
      let params={};
      params.class_id=this.classId;
      api.findAllClassStudentInfo(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code==1){
                  this.studentList=res.data.data;
                }
          } else {
            let params = { msg: "获取班级花名册" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取班级花名册" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
 .publish-people{
.people-list{
  height: 1080px;
  overflow: auto;
}
 .title{
  font-size: 28px;
   text-align: center;
   line-height: 100px;
 }
 .all-choose{
   width: 100%;
   height: 80px;
   line-height: 80px;
   background: #fff;
   position: fixed;
   font-size: 26px;
   bottom: 0;

.fn-left{
  input{
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px #eef1f6 solid;
    margin:0 1px 0 15px;
    position: relative;
    top: 3px;
  }
}
 .fn-right{
 padding-right:30px;
   span{
     display: inline-block;
     background: #4286ed;
     color: #fff;
     height: 50px;
     line-height: 50px;
     padding: 0px 60px;
     margin-top: 10px;
     border-radius: 40px;

   }
 }
 }
.class-list{
.van-cell{
  padding: 17px 30px;
}
 input{
   display: inline-block;
   width: 25px;
   height: 25px;
   border: 1px #eef1f6 solid;
   position: relative;
   top: 3px;
   margin: 0 15px;
 }
  .img-auto{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
}
 }

</style>
