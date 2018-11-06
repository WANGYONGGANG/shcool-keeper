<template>
  <div class="bulletin">
    <van-cell-group>
      <van-cell title="放暑假" label="2018-09-19" is-link to="/teacher/bulletinDetial" />
      <van-cell title="放暑假" label="2018-09-19" is-link to="/teacher/bulletinDetial" />
      <van-cell title="放暑假" label="2018-09-19" is-link to="/teacher/bulletinDetial" />
    </van-cell-group>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  data () {
    return {
    }
  },
  methods: {
    goTo () {
      this.$router.push({path: '/teacher/bulletinDetial'})
    },
    refreshShoppingCartList: function() {
      let params ={};
      let _self = this;
      api.refreshShoppingCartList(null)
        .then(res => {
          console.log(res);
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  _self.list=res.data.data;
                }
          } else {
            let params = { msg: "获取购物车列表错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取购物车列表错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
.bulletin{
.van-cell-group{
  padding: 10px 20px;
  background: none;
.van-cell{
  padding: 25px 20px;
  margin: 20px auto 0;
  font-size: 28px;
  line-height: 56px;
  background: #fff;
}
.van-cell__label{
  font-size: 24px;
  line-height: 2;
}
.van-cell__right-icon{
  font-size: 26px;
  position: relative;
  top: 41px;
}
}
}

</style>
