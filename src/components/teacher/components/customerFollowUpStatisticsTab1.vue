<template>
  <div class="tab1">
    <div class="card-tit">
      <calendar-packing></calendar-packing>
      <span class="fuzeren"><input type="checkbox" />主负责人</span>
    </div>
    <van-cell-group class="card-list-item">
      <van-cell title="选择校区" value="潮人部落" is-link class="line65"  @click="sortPopShow">
          {{sortData.selectItem}}
      </van-cell>
      <van-cell title="潮人部落e2140" value="完成率：0.00%" class="line65 tuition" />
      <van-cell title="意向客户：1人" value="新增客户：0人" />
      <van-cell title="拟沟通：0人" value="已经沟通：0人" />
      <van-cell title="有效沟通：0次" value="无效沟通：0次" />
    </van-cell-group>
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
  props: ["schoolPartList"],
  data () {
    return {
  sortData:{
        title:'排序方式',
        lists:['按姓名排序'],
        isShow:false,
        selectItem:'按录入时间排序'
      },
    }
  },
  mounted:function(){
    this.reportTransformationStatistics(); 
    this.initDate();
  },
  methods: {
    initDate(){
      let schoolPartList=this.schoolPartList;
       for(let i=0;i<schoolPartList.length;i++){
         this.sortData.lists.push(schoolPartList[i].name);
       }
    },
    goTo (param) {
      this.$router.push({path: param})
    },
    sortPopShow(param){
         this.sortData.isShow=true;
    },
     //沟通统计
    reportTransformationStatistics: function() {
      let params ={};
      params.begin_date =null;
      params.campus_id=9;
      params.end_date=null;
      
      let _self = this;
      api.reportTransformationStatistics(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                   console.log(res.data.data);
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
      this.$toast(n.item)
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
