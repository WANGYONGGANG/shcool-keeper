<template>
  <div class="introducer">
    <div class="list-search">
        <van-search placeholder="输入介绍人姓名/学号/手机号" background="#fff" v-model="value"  show-action >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>
      <table cellpadding="0" cellspacing="0" border="0" class="introducer-list">
        <tr class="title">
         <th class="txt-left">姓名</th>
          <th>学号</th>
          <th  class="txt-right">手机号</th>
      </tr>
        <tr>
        <td  class="txt-left">000</td>
        <td>s12599</td>
        <td class="txt-right">152****0474</td>
        </tr>
        <tr>
          <td  class="txt-left">000</td>
          <td>s12599</td>
          <td  class="txt-right">152****0474</td>
        </tr>
      </table>

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
