<template>
<div class="fullclass-rate">
  <div class="tip">注：分组之间的数字范围要相连，且必须完整的表示0到最大值之间的整个范围</div>
  <ul class="fullclass-rate-input">
    <li><input type="text" value="0%" /><span class="interval">-</span><input type="text" value="50%" /><van-icon name="delete" color="#9d9b9b" size="30px" /></li>
    <li><input type="text" value="51%" /><span class="interval">-</span><input type="text" value="80%" /><van-icon name="delete" color="#9d9b9b" size="30px" /></li>
    <li><input type="text" value="81%" /><span class="interval">-</span><input type="text" value="90%" /><van-icon name="delete" color="#9d9b9b" size="30px" /></li>
    <li><input type="text" value="91%" /><span class="interval">-</span><input type="text" value="100%" /><van-icon name="delete" color="#9d9b9b" size="30px" /></li>
  </ul>
  <div class="fullclass-add"><van-icon name="add-o" />新建分组</div>
  <div class="fullclass-set-sumit">确定</div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less">
.fullclass-rate{
 .tip{
   font-size: 24px;
   line-height: 40px;
   padding: 32px 40px;
 }
.fullclass-rate-input{
  li{
    margin-bottom: 35px;
    padding-left: 35px;
  }
  input{
    font-size: 24px;
    border: 1px #333333 solid;
    line-height: 45px;
    padding: 15px;
    background: #eef1f6;
    text-align: right;
  }
 .interval{
   padding: 0 20px;
 }
 .van-icon{
   margin-left: 20px;
   color: #838383;
 }
}
.fullclass-add{
  padding-right: 40px;
  text-align: right;
.van-icon{
  margin-right: 9px;
  position: relative;
  top: 4px;
  color: #4286ed;
}

}
.fullclass-set-sumit{
  width: 90%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  font-size: 32px;
  color: #fff;
  background: #4286ed;
  border-radius: 10px;
  margin: 90px auto 0;
}
}
</style>
