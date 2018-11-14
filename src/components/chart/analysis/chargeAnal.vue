<template>
  <div class="charge-anal">
    <dl class="charge-anal-title"><dt>收费分析</dt><dd>日期：2018-10-15<span>单位：元</span></dd></dl>
    <table class="charge-anal-tab" border="1" cellspacing="0">
      <tr>
        <td :class="[index==0 ? 'active' : '']" @click="change(0)">日报</td>
        <td :class="[index==1 ? 'active' : '']" @click="change(1)">月报</td>
        <td :class="[index==2 ? 'active' : '']" @click="change(2)">年报</td>
      </tr>
    </table>
    <component :is="currentView"></component>
  </div>
</template>
<script>
  import day from './components/anal/day'
  import month from './components/anal/month'
  import year from './components/anal/year'
export default {
  components: {
    day,
    month,
    year
  },
  data () {
    return {
      index:2,
      arr:['day','month','year']
    }
  },
  mounted () {
  },
  methods: {
    change (index) {
      this.index=index
    }
  },
  computed:{
    currentView(){
      return this.arr[this.index];
    }
  }
}
</script>
<style lang="less">
.charge-anal{
  width: 100%;
  background: #fff;
.charge-anal-title{
  text-align: center;
  border-bottom: 1px #eef1f6 solid;
  padding: 20px 0;
  line-height: 45px;
dt{
  font-size: 28px;
  color: #141414;
  font-weight: bold;
}
dd{
  font-size: 24px;
span{
  margin-left: 80px;
}
}
}
.charge-anal-tab{
  margin: 20px auto 0;
   width:660px;
 border:1px #4286ed solid;
  td{
  width:220px;
  height: 60px;
    text-align: center;
  }
  .active{
    background: #4286ed;
    color: #fff;
  }
}
}
</style>
