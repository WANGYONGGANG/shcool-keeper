<template>
  <div class="chief-owner">
    <div class="list-search">
        <van-search placeholder="输入姓名搜索" background="#fff" v-model="value"  show-action >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>
    <div class="owner-box">
      <div class="box-item01" :class="{expend:isOpen}">实施专用数据库<span v-if="isOpen">&nbsp;|&nbsp;<i>潮人部落</i></span>
        <p v-if="isOpen">其人人员(2人)</p>
      </div>
      <van-cell title="潮人部落" value="2" is-link @click="clickFn" v-if="!isOpen" />
      <ul class="box-list" v-if="isOpen">
        <li><img src="../../assets/images/user/test.jpg"/> 测试员</li>
        <li><img src="../../assets/images/user/test.jpg"/> 潮人部落</li>
      </ul>
    </div>
    <div class="owner-btn">
      <span class="white" v-if="isOpen" @click="goBack">上一页</span>
      <span class="blue">确定</span>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value:'',
        isOpen:false
      }
    },
    mounted () {
    },
    methods: {
      goTo (url) {
        this.$router.push({path: url})
      },
      clickFn(){
        this.isOpen=true
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
  .chief-owner{
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
    i{
      font-style: normal;
      color: #4286ed;
    }
  }
  .box-list{
    background: #fff;
    li{
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

  }
  }
</style>
