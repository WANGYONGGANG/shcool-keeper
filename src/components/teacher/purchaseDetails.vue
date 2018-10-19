<template>
  <div class="purchase-details">
    <div class="details-tit">2018寒假班五年级一对一一对一 <span>潮人部落</span></div>
    <table class="details-table">
      <tr>
        <td>购买：</td>
        <td class="txt-right">71小时</td>
        <td class="txt-right">19,000.00</td>
      </tr>
      <tr>
        <td>消费：</td>
        <td class="txt-right">8小时</td>
        <td class="txt-right">2,000.00</td>
      </tr>
      <tr>
        <td>过期:</td>
        <td class="txt-right">0小时</td>
        <td class="txt-right">0.00</td>
      </tr>
      <tr class="table-footer">
        <td>剩余：</td>
        <td class="txt-right">63小时</td>
        <td class="txt-right blue">17,000.00</td>
      </tr>
    </table>
    <div class="details-tit">2018寒假班五年级一对一一对一 <span>潮人部落</span></div>
    <table class="details-table">
      <tr>
        <td>购买：</td>
        <td class="txt-right">71小时</td>
        <td class="txt-right">19,000.00</td>
      </tr>
      <tr>
        <td>消费：</td>
        <td class="txt-right">8小时</td>
        <td class="txt-right">2,000.00</td>
      </tr>
      <tr>
        <td>过期:</td>
        <td class="txt-right">0小时</td>
        <td class="txt-right">0.00</td>
      </tr>
      <tr class="table-footer">
        <td>剩余：</td>
        <td class="txt-right">63小时</td>
        <td class="txt-right blue">17,000.00</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="less">
  .purchase-details{
    background:#fff;
    .details-tit{
      line-height: 85px;
      font-size: 32px;
      padding-left: 20px;
      span{
        font-size: 24px;
        padding-left: 30px;
        color: #6f3f33;
      }
    }
   .details-table{
     width: 100%;
     td{
       height: 70px;
       padding: 10px 0 0 20px;
       color: #989696;
     }
     .txt-right{
       text-align: right;
       padding-right: 20px;
       padding-left: 0px;
     }
   .table-footer{
     td{
       height:100px;
       border-top:1px #f1f1f1 solid ;

     }
     .blue{
       color: #4286ed;
     }
   }
   }

   }
</style>
