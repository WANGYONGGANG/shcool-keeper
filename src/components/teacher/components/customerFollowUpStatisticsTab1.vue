<template>
  <div class="tab1">
    <div class="card-tit">
      <calendar-packing v-on:updateDate=updateDate></calendar-packing>
      <span class="fuzeren"><input type="checkbox" />主负责人</span>
    </div>
        <van-cell-group class="card-list-item">
      <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
      </van-cell-group>
    <van-cell-group class="card-list-item" v-for="campusObj in campusObjList ">
      <van-cell v-bind:title="campusObj.campusName"  v-bind:value="'完成率'+campusObj.completeness"   class="line65 tuition" />
      <van-cell value="新增客户：0人"   v-bind:title="'意向客户'+campusObj.intentionClientCount+'人'"   />
      <van-cell v-bind:value="'已经沟通'+campusObj.talkedCount+'人'"   v-bind:title="'拟沟通'+campusObj.willTalkCount+'人'"  />
      <van-cell  v-bind:value="'有效沟通'+campusObj.communication+'次'"   v-bind:title="'无效沟通'+campusObj.ineffectiveCommunication+'次'" />
    </van-cell-group>
    <!-- <van-cell-group class="card-list-item">
      <van-cell title="选择校区"  is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem.item}}
      </van-cell>
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
  begin_date:"2018-07-01",
  end_date:"2018-11-30",
  campus_id:null,
  campusObjList:[{completeness:0,intentionClientCount:0,talkedCount:0,willTalkCount:0,communication:0,ineffectiveCommunication:0}],
  sortData:{
        title:'排序方式',
        lists:['选择校区'],
        isShow:false,
        selectItem:''
      },
    }
  },
  mounted:function(){
    this.reportTalkStatistics(); 
    this.refreshDepartment();
  
  },
  methods: {
    initDate(){
      let schoolPartList=this.schoolPartList;
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
       this.sortData.selectItem.item=schoolPartList[0].name;
    },
    goTo (param) {
      this.$router.push({path: param})
    },
    updateDate:function(beginDate,endDate){
      this.begin_date=beginDate;
      this.end_date=endDate;
      this.reportTalkStatistics();
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
     //沟通统计
    reportTalkStatistics: function() {
      let params ={};
      params.begin_date =this.begin_date;
      // params.campus_id=10;
       params.campus_id=this.campus_id;
      params.end_date=this.end_date;
      // params.begin_date ="2018-07-01";
      // params.end_date="2018-11-30";   
      params.primary_owner=false;
      
      let _self = this;
      api.reportTalkStatistics(params)
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
       this.campus_id=this.schoolPartList[n.index-1].id;
       this.reportTalkStatistics();
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
  .tab1{
  }
</style>
