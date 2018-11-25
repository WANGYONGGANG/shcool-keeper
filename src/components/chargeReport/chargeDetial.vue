<template>
<div class="charge">
  <div class="charge-top">
    <div class="charge-top-tab">
      <calendar-packing></calendar-packing>
    </div>
    <div class="charge-top-right" @click="showPop">
      选择列<van-icon name="wap-nav" />
    </div>
  </div>
  <div class="charge-table fn-clear">
    <div class="table-l">
      <table class="table-top">
        <tr class="title">
          <th class="w200">校区</th>
        </tr>
        <tr>
          <td class="w200" @click="goTo(urls.ne)">潮人部落<van-icon name="arrow" /></td>
        </tr>
      </table>
      <table class="table-bottom">
        <tr>
          <td class="w200">合计</td>
        </tr>
      </table>
    </div>
    <div class="table-r">
      <div class="scroll">
        <table class="table-top">
          <tr class="title">
            <th class="w150">退费金额</th>
            <th class="w150">转介绍</th>
            <th class="w150">连报</th>
            <th class="w150"></th>
            <th class="w300"></th>
            <th class="w150"></th>
            <th class="w150"></th>
            <th class="w150"></th>
            <th class="w150"></th>
            <th class="w150"></th>
            <th class="w150"></th>
            <th class="w150"></th>

          </tr>
          <tr>
            <td class="w150">0.00</td>
            <td class="w150">0.00</td>
            <td class="w150">0.00</td>
            <td class="w150"></td>
            <td class="w300"></td>
            <td class="w150"></td>
            <td class="w150"></td>
            <td class="w150"></td>
            <td class="w150"></td>
            <td class="w150"></td>
            <td class="w150"></td>
            <td class="w150"></td>
          </tr>
        </table>
        <table class="table-bottom">
          <tr>
            <td class="w150 red">0.00</td>
            <td class="w150 red">0.00</td>
            <td class="w150 red">0.00</td>
            <td class="w150 red"></td>
            <td class="w300 red"></td>
            <td class="w150 red"></td>
            <td class="w150 red"></td>
            <td class="w150 red"></td>
            <td class="w150 red"></td>
            <td class="w150 red"></td>
            <td class="w150 red"></td>
            <td class="w150 red"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
<choose-column :filterShow.sync="popData.filterShow" :selectId.sync="popData.selectId"></choose-column>
</div>
</template>
<script>
import CalendarPacking from '../general/calendarPacking'
import ChooseColumn from '../general/chooseColumn'

export default {
  components: {
    CalendarPacking,
    ChooseColumn

  },
  data () {
    return {
      popData:{
        filterShow:false,
        selectId:[ 0 ] //默认选中的项
      },
      urls:{

      }

    }
  },
  methods: {
    showPop (){
      this.popData.filterShow = true
    },
    goTo (url) {
      this.$router.push({path: url})
    }

  },
  computed : {
    item () {
      return this.$store.state.commentPopup.item
    }
  },
  watch:{
    item :{
      handler(val){
        //日期快速切换值
        this.$toast(val)
      }
    },
    'popData.selectId':function (n,o) {
      //n 为获取到选中的元素id集合
      console.log('选中的列'+n)
      this.$toast('请在console中查看选中的元素id集合 ')
    }
  }
}
</script>
<style lang="less">
.charge{
  .charge-top{
    padding-top: 10px;
    height: 85px;
    background: #fff;
    .charge-top-tab{
      float: left;
      width: 542px;
      margin-bottom: 10px;
.commented-tab{
  padding-top: 0px;
}
    }
   .charge-top-right{
     float: right;
     line-height: 40px;
     padding-top: 15px;
     padding-right: 15px;
     .van-icon{
       margin-left: 10px;
       position: relative;
       top: 5px;
     }
   }
  }

.charge-table{
  width:750px;
  display: -webkit-flex; /* Safari */
  display: flex;
.w200{
  width: 200px;
  padding-left: 10px;
  .van-icon{
   position: relative;
    top: 2px;
    font-size: 20px;
    margin-left: 10px;
  }
}
.w150{
  width: 150px;
  padding-left: 10px;
}
.w300{
  width: 300px;
}
.table-l{
  width: 200px;
.table-top{
th{
 padding-left: 15px;
  border-right:1px #d2d5da solid ;
}
td{
  padding-left: 15px;
  border-right:1px #d2d5da solid ;
}


}
.table-bottom{
td{
  border-right:1px #d2d5da solid ;
}
}
}
.table-r{
  width: 550px;
  overflow-x:auto;
.scroll{
  overflow-x: visible ;
  width: 1950px;
}

}


.table-top{
th{
  border-bottom:2px #d2d5da solid ;
  background: #fff;
  line-height: 80px;
}
td{
  background: #fff;
  line-height: 80px;
}
.fa-icon{
  position: relative;
  top: 6px;
  color: #d4d1d1;

}

}
.table-bottom{
margin-top:300px;


td{
  border-top:2px #d2d5da solid ;
  background: #fff;
  line-height: 80px;
}
.red{
  color: #fb6555;
}
}
}



.filter {
  width: 78%;
  height: 100%;
}

}

</style>
