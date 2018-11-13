<template>
  <div class="taskDetial">
    <dl>
      <dt class="title">基础舞蹈</dt>
      <dd class="subtltle"><span><van-icon name="contact" />测试员</span><span><van-icon name="clock" />2018-07-04 11:28</span></dd>
      <dd class="text">就这样吧，我不不写了</dd>
    </dl>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  props: ['allDatas'],
  data () {
    return {
      data:[]
    }
  },
  mounted () {
    console.log(this.allDatas)
    //this.findReleaseHomework();
  },
  methods: {
    findReleaseHomework : function () {
      let _self = this;
      let param = new URLSearchParams();

      param.append('begin_date' , '2018-11-01');
      param.append('end_date' , '2018-11-31');
      param.append('pag ' , 1);
      param.append('rows' , 10);

      api.findReleaseHomework(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            _self.allDatas = res.data.data.rows;
          }
        });
    }
  }  
}
</script>
<style lang="less">
.taskDetial{
  width: 696px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  .title{
    font-size: 28px;
    line-height: 45px;
  }
  .subtltle{
    font-size: 24px;
    color: #bbb;
    line-height: 72px;
    .van-icon{
      position: relative;
      top: 4px;
      margin-right: 6px;
    }
    .van-icon-clock{
      margin-left: 15px;
    }
  }
  .text{
    font-size: 26px;
    line-height: 35px;
    color: #999;
  }
}
</style>
