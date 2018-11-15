<template>
  <div class="publish-people">
    <div class="title">
      2018冬季班初一拓展班集体班 2班
    </div>
    <van-cell-group class="class-list">
      <van-cell>
        <template slot="title">
          <input type="checkbox" />
          <img src="../../assets/images/user/test.jpg" class="img-auto"/>
          000李八
        </template>
      </van-cell>
      <van-cell>
        <template slot="title">
          <input type="checkbox" />
          <img src="../../assets/images/user/test.jpg" class="img-auto"/>
          王紫潼
        </template>
      </van-cell>
    </van-cell-group>
    <div class="all-choose fn-clear">
     <div class="fn-left"><input type="checkbox" /> 全选</div>
      <div class="fn-right"><span>确定(0)</span></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
 .publish-people{
 .title{
  font-size: 28px;
   text-align: center;
   line-height: 100px;
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
.van-cell{
  padding: 17px 30px;
}
 input{
   display: inline-block;
   width: 25px;
   height: 25px;
   border: 1px #eef1f6 solid;
   position: relative;
   top: 3px;
   margin: 0 15px;
 }
  .img-auto{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
}
 }

</style>
