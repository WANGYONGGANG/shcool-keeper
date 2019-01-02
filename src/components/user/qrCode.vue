<template>
    <div class="inner">
        <img :src='url' alt="">
    </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      url:'',
    }
  },
  mounted(){
    this.getSellerQRCode()
  },
  methods: {
    getSellerQRCode(){
      let params = new URLSearchParams();
      api.getSellerQRCode()
        .then(res=>{
            console.log(res)
            this.url=res.data.data
      },()=>{

      })
      ;
    },
   
  }
}
</script>
<style lang="less">
.inner{
    width: 100%;
    height: 100%;
    position: relative;
img{
    width: 400px;
    height: 400px;
    background-color: #fff;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 200px;
    // margin-left: -200px;
    transform: translate(-50%)
}
}
</style>