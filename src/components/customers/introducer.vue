<template>
  <div class="introducer">
    <div class="list-search">
        <van-search placeholder="输入介绍人姓名/学号/手机号" background="#fff" v-model="query_content"  show-action >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>
      <table cellpadding="0" cellspacing="0" border="0" class="introducer-list">
        <tr class="title">
         <th class="txt-left">姓名</th>
          <th>学号</th>
          <th  class="txt-right">手机号</th>
      </tr>
        <tr v-for="(item,index) in responsibleList" v-bind:key="index"  v-on:click="selectedItem(item.id,item.code)">
        <td  class="txt-left">{{item.name}}</td>
        <td>{{item.code}}</td>
        <td class="txt-right">{{item.mobile}}</td>
        </tr>
        <!-- <tr>
          <td  class="txt-left">000</td>
          <td>s12599</td>
          <td  class="txt-right">152****0474</td>
        </tr> -->
      </table>

  </div>
</template>
<script>
  import { api } from "../../../static/js/request-api/request-api.js";
  export default {
    data () {
      return {
        query_content:'',
        responsibleList:[],
        isOpen:false,
          rightPopDates:{
          item03:{
            isShow:false,
            selectItem:'',
            data:[{itemName:'1'},{itemName:'5'}]
          },
          }
      }
    },
    mounted () {
      this.findAllIntroducer();
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
      clickFn(){
        this.isOpen=true
      },
      onSearch(){
        this.findAllIntroducer();
      },
      //介绍人选择
      selectedItem(id,code){
        console.log("&&&&&&&&&&&&&&&&"+id+"&&&&&&&&&&&&"+code);
        this.$emit('selectedIntroducer',id,code);
      },
      //查询所有介绍人
      findAllIntroducer(){
      let _self = this;
      let params={};
      params.query_content=_self.query_content;
      api.findAllIntroducer(params)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  _self.responsibleList=res.data.data;
                  // let newResponsibleList=[];
                  // for(let i=0;i<responsibleList.length;i++){
                  //   let newObj={};
                  //   newObj.itemName=responsibleList[i].name;
                  //   newResponsibleList.push(newObj);
                  // }
                  // this.rightPopDates.item03.data=newResponsibleList;
                  // this.rightPopDates.item03.selectItem=responsibleList[0].name;
                }
          } else {
            let params = { msg: "获取所有介绍人" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取所有介绍人" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });

      },
      goBack(){
        this.isOpen=false
      }

    },
    watch:{

    }
  }
</script>
<style lang="less">
  .introducer{
  .list-search{
    background: #fff;
    height: 105px;
    padding:10px 20px;
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
    width: 700px;
  }
  .van-search .van-cell{
    border: 1px #eff1f6 solid;
    border-right:none;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    padding: 0px 10px;
    line-height: 54px;
  }

  }
  .introducer-list{
    width: 100%;
    td,th{
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      padding: 20px;
      background: #fff;
      border-bottom: 1px #eef1f6 solid;
    }
    .txt-left{
      text-align: left;
    }
    .txt-right{
      text-align: right;
    }
  }


  }
</style>
