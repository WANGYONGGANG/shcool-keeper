<template>
  <div class="tab2">
    <div class="card-tit">
      <calendar-packing></calendar-packing>
      <span class="fuzeren"><input type="checkbox" />主负责人</span>
    </div>
    <van-cell-group class="card-list-item"> 
      <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
    </van-cell-group>
    <van-cell-group class="card-list-item" v-for="campusObj in campusObjList ">
      <van-cell v-bind:title="campusObj.campusName"  v-bind:value="'转化率'+campusObj.conversion"   class="line65 tuition" />
      <van-cell value="新增客户：0人"   v-bind:title="'累计客户数量'+campusObj.intentionClientCount+'人'"   />
      <van-cell v-bind:value="'销售人员编号'+campusObj.sellerCode"   v-bind:title="'销售人员姓名'+campusObj.sellerName"  />
      <van-cell  v-bind:value="'转化数量'+campusObj.transformationCount"   v-bind:title="'转化金额'+campusObj.transformationMonery" />
    </van-cell-group>
    <!-- <van-cell-group class="card-list-item">
      <van-cell title="潮人部落e2140" value="完成率：0.00%" class="line65 tuition" />
      <van-cell title="意向客户：1人" value="新增客户：0人" />
      <van-cell title="拟沟通：0人" value="已经沟通：0人" />
      <van-cell title="有效沟通：0次" value="无效沟通：0次" />
    </van-cell-group> -->
     <select-pop :title="sortData.title" :lists="sortData.lists" :isShow.sync="sortData.isShow" :selectItem.sync="sortData.selectItem"></select-pop>
  </div>
</template>
<script>
import { api } from "../../../../static/js/request-api/request-api.js";
import SelectPop from '../../popup/bottomSelectPop'
import CalendarPacking from '../../general/calendarPacking'
export default {
  components: {
    SelectPop,
    CalendarPacking
  },
  // props: ["schoolPartList"],
  data () {
    return {
      schoolPartList:null,
      campusObjList:[{campusName:'',conversion:0,intentionClientCount:0,sellerCode:0,sellerName:'',transformationCount:0,transformationMonery:0}],
      active: 1,
        sortData:{
        title:'排序方式',
        lists:['选择校区'],
        isShow:false,
        selectItem:''
      },
      urls: {
        communicationRecord: '/teacher/communicationRecord',
        purchaseDetails: '/teacher/purchaseDetails'
      }
    }
  },
  mounted:function(){
    // this.reportTalkStatistics(); 
    this.refreshDepartment();
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    },
    initDate(){
      let schoolPartList=this.schoolPartList;
      console.log(schoolPartList);
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
       this.sortData.selectItem.item=schoolPartList[0].name;
    },
    sortPopShow(param){
         this.sortData.isShow=true;
    },
       //查询所有校区
    refreshDepartment: function() {
      let params ={};      
      let _self = this;
      api.refreshDepartment(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.schoolPartList=res.data.data;
                  _self.initDate();
                }
          } else {
            let params = { msg: "查询所有校区" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "查询所有校区" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
      //转化统计
    ReportTransformationStatistics: function(campus_id) {
      let params ={};
      params.begin_date =null;
      params.campus_id=campus_id;
      params.end_date=null;      
      let _self = this;
      api.ReportTransformationStatistics(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  if(res.data.data){
                    this.campusObjList=res.data.data;
                  }
             
                }
          } else {
            let params = { msg: "沟通统计" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "沟通统计错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
     'sortData.selectItem':function (n,o) {
       this.$toast(n.item);
       this.ReportTransformationStatistics(this.schoolPartList[n.index].id);
    },
    item :{
      //日期快速切换值
      handler(val){
        this.$toast(val)
      }
    }
  }
}
</script>
<style lang="less">
  .tab2{

  }
</style>
