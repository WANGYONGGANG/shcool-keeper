<template>
  <div class="tab1">
    <div class="card-tit">
      <calendar-packing></calendar-packing>
      <span class="fuzeren"><input type="checkbox" />主负责人</span>
    </div>
    <van-cell-group class="card-list-item">
      <van-cell title="选择校区" value="潮人部落" is-link class="line65"/>
      <van-cell title="潮人部落e2140" value="完成率：0.00%" class="line65 tuition" />
      <van-cell title="意向客户：1人" value="新增客户：0人" />
      <van-cell title="拟沟通：0人" value="已经沟通：0人" />
      <van-cell title="有效沟通：0次" value="无效沟通：0次" />
    </van-cell-group>
  </div>
</template>
<script>
import CalendarPacking from '../../general/calendarPacking'
export default {
  components: {
    CalendarPacking
  },
  data () {
    return {
    }
  },
  methods: {
    goTo (param) {
      this.$router.push({path: param})
    }
  }
}
</script>
<style lang="less">
  .tab1{


  }
</style>
