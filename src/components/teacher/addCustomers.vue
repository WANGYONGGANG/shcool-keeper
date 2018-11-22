<template>
  <div class="add-customers">
    <div class="customers-tit fn-clear">
      <dl @click="handleChangeView('stepOne')" :class="{ noselect: isOpacity1}">
        <dt>
          <span>1</span>
        </dt>
        <dd>基本信息</dd>
      </dl>
      <dl @click="handleChangeView('stepTwo')" :class="{ noselect: isOpacity2}">
        <dt>
          <span>2</span>
        </dt>
        <dd>联系方式</dd>
      </dl>
      <dl @click="handleChangeView('stepThree')" :class="{ noselect: isOpacity3}">
        <dt>
          <span>3</span>
        </dt>
        <dd>招生信息</dd>
      </dl>
    </div>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
    <div class="add-customers-bottom-btn">
      <span v-on:click="lastStep">上一步</span>
      <span class="next"  v-on:click="nextStep">下一步</span>
    </div>
  </div>
</template>
<script>
  import { api } from "../../../static/js/request-api/request-api.js";
  import stepOne from '../customers/stepOne'
  import stepTwo from '../customers/stepTwo'
  import stepThree from '../customers/stepThree'

  export default {
    components: {
      stepOne,
      stepTwo,
      stepThree
    },
    data () {
      return {
        currentTabComponent: 'stepOne',
        isOpacity1: false,
        isOpacity2: true,
        isOpacity3: true
      }
    },
    methods: {
      goTo (param) {
        this.$router.push({path: param})
      },
      //下一步
      nextStep(param){
        if(!this.isOpacity1){
           this.isOpacity1 = true;
           this.isOpacity2 = false;
           this.isOpacity3 = true;
           this.currentTabComponent ="stepTwo";
        }else if(!this.isOpacity2){
          this.isOpacity1 = true;
          this.isOpacity2 = true;
          this.isOpacity3 = false;
          this.currentTabComponent ="stepThree";
        }      
      },
      //上一步 
      lastStep(param){
        if(!this.isOpacity3){
           this.isOpacity1 = true;
           this.isOpacity2 = false;
           this.isOpacity3 = true;
           this.currentTabComponent ="stepTwo";
        }else if(!this.isOpacity2){
          this.isOpacity1 = false;
          this.isOpacity2 = true;
          this.isOpacity3 = true;
           this.currentTabComponent ="stepOne";
        }

      },
      handleChangeView (component) {
        this.currentTabComponent = component
        if (component === 'stepOne') {
          this.isOpacity1 = false
          this.isOpacity2 = true
          this.isOpacity3 = true
        } else if (component === 'stepTwo') {
          this.isOpacity1 = true
          this.isOpacity2 = false
          this.isOpacity3 = true
        } else if (component === 'stepThree') {
          this.isOpacity1 = true
          this.isOpacity2 = true
          this.isOpacity3 = false
        }
      }

    }

  }
</script>
<style lang="less">
  .add-customers{
    padding-bottom: 67px;
    background: #fff;
  .customers-tit{
  dl{
    float: left;
    width: 33%;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    color: #4286ed;
    border-bottom:2px #4286ed solid ;
  dt{
    border-radius: 100%;
    border: 2px #4286ed solid;
    text-align: center;
    margin: 10px auto;
    width: 44px;
    height: 44px;
  span{
    font-size: 28px;
    border-radius: 100%;
    display: inline-block;
    color: #fff;
    background: #4286ed;
    border: 2px #fff solid;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  }
  }
  .noselect{
    opacity: 0.5;
  }
  }
  .add-customers-bottom-btn{
    width: 100%;
    position: fixed;
    height: 80px;
    padding-top: 20px;
    background: #fff;
    bottom: 0;
    text-align: right;
    border-top: 1px #e0e5ed solid;
  span{
    display: inline-block;
    padding: 0 40px;
    line-height: 40px;
    text-align: center;
    font-size: 26px;
    color: #4286ed;
    border-radius: 40px;
    margin-right: 30px;
    border: 1px #4286ed solid;
  }
  .next{
    color: #fff;
    background: #4286ed;

  }
  }
  .filter{
    width: 78%;
    height: 100%;
  }
  }
</style>
