<template>
  <div class="publish-class">
    <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="班级名称" background="#fff" show-action  v-model="class_name">
          <div slot="action" @click="searchAll">搜索</div>
        </van-search>
      </div>
      <div class="operation" @click="showSortDia">排序</div>
    </div>
    <van-cell-group class="class-list">
      <!-- <van-cell is-link to="/general/publishPeople" v-for="(item,index) in classList" v-bind:key="index"> -->
       <van-cell  v-for="(item,index) in classList" v-bind:key="index" is-link >
        <template slot="title">
          <input type="checkbox"  v-bind:value="item.id" v-model="classCheckIds"  name="category1"  v-on:click="selectedClass(item.id,$event,index)" />
          <span class="list-item01"   v-on:click="openStudent(item.id,index)">{{item.className}}（{{item.selectedCurrentStudentCount}}/{{item.currentStudentCount}}）</span>
          <span class="list-item02"   v-on:click="openStudent(item.id,index)">{{item.campusName}}</span>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="all-choose fn-clear">
     <div class="fn-left"><input type="checkbox"  v-on:click="selectedAll"   class="all-selected-class"/> 全选</div>
      <div class="fn-right" v-on:click="addClass"><span>确定</span></div>
    </div>
    <sort-pop></sort-pop>
     <van-popup v-model="rightPopDates.item01.isShow"  position="right" style="height:100%;" >
       <publishPeople   ref="publishP" v-bind:classId="selectedClassId"  v-bind:index="selectedIndex" v-on:addStudents="addStudents" v-if="showPeople"></publishPeople>
    </van-popup>
  </div>
</template>
<script>
  import { api } from "../../../static/js/request-api/request-api.js";
  import publishPeople from "@/components/general/publishPeople"
  import SortPop from '../popup/sortPopClass'
  export default {
    components: {
      SortPop,
      publishPeople
    },
    data() {
    return {
      classList:[],
      class_name:null,
      selectedClassId:null,
      selectedIndex:null,
      showPeople:true,
      classCheckIds:[],
      classObjAllSelcted:[],
      selectedClassObj:null,
      rightPopDates:{
          item01:{
            isShow:false,
            selectItem:'',
            data:[{itemName:'1'}]
          }
         },
    };
  },
  mounted () {
    this.findAllClassInfo();
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    },
    addStudents(classObj,index){
        this.selectedClassObj=classObj;
        let selectedIndex=index;
        this.classList[index].selectedCurrentStudentCount=classObj.studentIDs.length;
        this.rightPopDates.item01.isShow=false;
        this.showPeople=false;
        this.classObjAllSelcted.push(classObj);
    },
    selectedClass(id,event,index){
       let el = event.currentTarget;
       event.stopPropagation();
       let isChecked=$(el).is(':checked');
       this.removeRepetitionOrAdd(id,index);
    
    },
    //去除重复或者重新添加
    removeRepetitionOrAdd(id,index){
      let _self=this;
       let  classObjAllSelcted=this.classObjAllSelcted;
       for(let j=0;j<classObjAllSelcted.length;j++){
            let classObjItem=classObjAllSelcted[j];
            let selectedItemIndex;
            if(classObjItem.classID==id){
                    selectedItemIndex=classObjAllSelcted.indexOf(classObjItem);
                    classObjAllSelcted.splice(selectedItemIndex,1);
            }
       }
       _self.findAllClassStudentInfo(id,index);
    },
     //获取所有班级花名册
      findAllClassStudentInfo(classId,index){
      let _self = this;
      let params={};
      params.class_id=classId;
      api.findAllClassStudentInfo(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code==1){
                  let  studentList=res.data.data;
                  let classObj={};
                  classObj.classID=classId;
                  let studentCheckIds=[];
                  for(let k=0;k<studentList.length;k++){
                    studentCheckIds.push(studentList[k].id);
                  }
                  //设置选中标签
                  _self.classList[index].selectedCurrentStudentCount=studentList.length;
                  classObj.studentIDs=studentCheckIds;
                 _self.classObjAllSelcted.push(classObj);

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
    //添加班级
    addClass(){
      // let classCheckIds=this.classCheckIds;
      
      this.$emit('addClass', this.classObjAllSelcted);
    },
    selectedAll:function(){
      let _self=this;
     let allChecked=$(".all-selected-class").is(':checked');
     if(allChecked){
        var items = document.getElementsByName("category1");
        // _self.studentCheckIds=[];
        // for(let j=0;j<_self.studentList.length;j++){
        //     _self.studentCheckIds.push(_self.studentList[j].id);
        // }
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
    searchAll(){
     this.findAllClassInfo();
    },
    //打开班级花名册
    openStudent(itemId,index){
       this.selectedClassId=itemId;
       this.selectedIndex=index;
       this.rightPopDates.item01.isShow=true;
       this.showPeople=false;
       this.showPeople=true;
    },
    showSortDia(){

    },
    findAllClassInfo(){
      let _self = this;
      let params={};
      params.class_name=this.class_name;
      api.findAllClassInfo(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                   let item;
                  for(let i=0;i<res.data.data.length;i++){
                    item=(res.data.data)[i];
                    item.selectedCurrentStudentCount=0;
                    this.classList.push(item);
                  }
                  // this.classList=item;

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
    showSortDia () {
      //排序弹出层显示
      this.$store.state.sortPopup.isShow = true
    }
  }
}
</script>
<style lang="less">
 .publish-class{
 .list-search{
   background: #fff;
   height: 105px;
   padding:10px 20px;
 .list-search-l{
   float: left;
 }
 .van-cell{
   font-size: 26px;
 }
 .van-cell__left-icon{
   font-size: 26px;
   top:15px;
   margin-right: 10px;
 }
 .van-search__action{
   font-size: 26px;
   background: #eff1f6;
   position: relative;
   left:-32px;
   border-radius: 35px;
   padding: 16px 23px;
 }
 .van-search{
   width: 500px;
 }
 .van-search .van-cell{
   border: 1px #eff1f6 solid;
   border-right:none;
   border-top-left-radius: 35px;
   border-bottom-left-radius: 35px;
   padding: 0px 10px;
   line-height: 54px;
 }
 .operation{
   float: right;
   padding: 16px 23px;
   font-size: 26px;
   background: #eff1f6;
   border-radius: 35px;
   margin: 6px 5px 0 0;
 }
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
 font-size:24px;
 .van-cell{
   padding: 5px 30px;
 }
   input{
     display: inline-block;
     width: 25px;
     height: 25px;
     border: 1px #eef1f6 solid;
     position: relative;
     top: 3px;
   }
  .van-cell__title{
    font-size: 24px;
    color: #333333;
  }
   span.list-item02{
     font-size: 20px;
     color: #500707;
   }
 }
 }

</style>
