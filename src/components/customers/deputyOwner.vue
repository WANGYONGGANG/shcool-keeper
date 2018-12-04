<template>
  <div class="deputy-owner">
    <div class="list-search">
      <van-search placeholder="输入姓名搜索" background="#fff" v-model="name"  show-action >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="owner-box">
      <div class="box-item01" :class="{expend:isOpen}">实施专用数据库<span v-if="isOpen">&nbsp;|&nbsp;<i>潮人部落</i></span>
        <p v-if="isOpen">其人人员(2人) <span class="all-check">全选</span></p>
      </div>
      <van-cell title="潮人部落" value="2" is-link @click="clickFn" v-if="!isOpen" />
      <ul class="box-list" v-if="isOpen">
         <li  v-for="(item,index) in responsibleList" v-bind:key="index" v-on:click="selectedItem(item.id,item.name)">
          <img src="../../assets/images/user/test.jpg"/>{{item.name}}</li>
        <!-- <li><img src="../../assets/images/user/test.jpg"/> 潮人部落</li> -->
      </ul>
    </div>
    <div class="owner-btn">
      <div class="all-check">已选:</div>
      <span class="white" v-if="isOpen" click="goBack">上一页</span>
      <span class="blue">确定</span>
    </div>
  </div>
</template>
<script>
  import { api } from "../../../static/js/request-api/request-api.js";
  export default {
    data () {
      return {
        value:'',
        isOpen:false,
        responsibleList:[],
        name:""
      }
    },
    mounted () {
       this.refreshSalePerson();
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
      onSearch(){
       this.refreshSalePerson();
      },
      selectedItem(id,name){
        console.log("^^^^^^^^^^^^^^^"+id+"&&&&&&&&&&&&"+name);
        this.$emit("selectedDeputyOwner",id,name);
      },
      clickFn(){
        this.isOpen=true
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
            let params = { msg: "获取主要责任人" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取主要责任人" };
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
  .deputy-owner{
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
  .owner-box{
  .box-item01{
    color: #4286ed;
    line-height: 53px;
    text-indent: 20px;
    background:#eef1f6;

  }
  .box-item01.expend{
    color: #333333;
    position: relative;
  i{
    font-style: normal;
    color: #4286ed;
  }
  .all-check{
    position: absolute;
    right: 30px;
    top: 50px;
    color: #4286ed;

  }
  }
  .box-list{
    background: #fff;
  li{
    height: 120px;
    line-height:120px;
  img{
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    margin:0 30px;
    position: relative;
    top: 20px;

  }
  input{
    float: right;
    width: 30px;
    height: 30px;
    margin-right: 30px;
    margin-top: 45px;
  }
  }
  }
  }
  .owner-btn{
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: right;
    height: 100px;
  span{
    display: inline-block;
    padding: 10px 30px;
    text-align: center;
    border-radius: 40px;
    border: 1px #4286ed solid;
    margin: 20px 30px 0 0;
  }
  .white{
    color: #4286ed;
  }
  .blue{
    color: #fff;
    background: #4286ed;
  }
  .all-check{
    float: left;
    margin-top: 37px;
    border: none;
    color: #4286ed;
    padding-left: 30px;

  }

  }
  }
</style>
