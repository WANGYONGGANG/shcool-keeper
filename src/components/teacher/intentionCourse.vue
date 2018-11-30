<template>
  <div class="course">
     <van-cell title="课程(1)" @click="clickFn('item01')">
    </van-cell>
      <van-cell title="校区" is-link   @click="clickFn('item04')">
       <!-- {{rightPopDates.item01.selectItem}} -->
    </van-cell>
     <van-cell title="意向课程" is-link   @click="clickFn('item01')">
       <!-- {{rightPopDates.item01.selectItem}} -->
    </van-cell>
     <van-cell title="意向班级" is-link   @click="clickFn('item01')">
       <!-- {{rightPopDates.item01.selectItem}} -->
    </van-cell>
      <div class="button">
        <div><span>添加课程</span></div><div><span>确认</span></div>
      </div>
      <right-pop :filterShow.sync="rightPopDates.item04.isShow" :selectItem.sync="rightPopDates.item04.selectItem" :allDatas="rightPopDates.item04.data"  :selectID.sync="rightPopDates.item04.selectID"></right-pop>
      </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import RightPop from '../general/rightPop';
import CalendarPacking from '../general/calendarPacking'
export default {
  components: {
    RightPop,
    CalendarPacking
  },
  data () {
    return {
          rightPopDates:{
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
        this.$toast(newval)
      },
      "rightPopDates.item04.selectID":function(newval, oldval) {
       this.rightPopDates.item04.selectID=newval;
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
