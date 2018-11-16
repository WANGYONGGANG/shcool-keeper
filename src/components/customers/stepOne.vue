<template>
  <div class="customers-step-one">
    <van-cell-group>
      <van-cell title="姓名" required>
        <span><input type="text" class="no-border" /></span>
     </van-cell>
      <van-cell title="手机号码" required>
        <span><input type="number" class="no-border" /></span>
      </van-cell>
      <van-cell title="招生来源" is-link required />
      <van-cell title="所属校区" is-link value="潮人部落" required />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="性别" is-link />
      <van-cell title="出生日期">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="公立学校" is-link />
      <van-cell title="年级" is-link />
      <van-cell title="班级">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="英文姓名">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell title="英文名称">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="销售归属人">
      <span><input type="text" class="no-border" /></span>
    </van-cell>
      <van-cell title="教室">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
      <van-cell title="采集人">
        <span><input type="text" class="no-border" /></span>
      </van-cell>
    </van-cell-group>

  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
export default {
  name: 'stepOne',
  data () {
      return {
      show: true,
       radio: '1'
    }
  },
  mounted () {
    this.refreshDepartment();
    this.refreshSource();
  },
  methods: {
    goTo (url) {
      this.$router.push({path: url})
    },
     //获取招生来源
    refreshSource: function() {
      let params ={};
      let _self = this;
      api.refreshSource(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);
                }
          } else {
            let params = { msg: "招生来源" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "招生来源" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //获取所有校区
    refreshDepartment: function() {
      let params ={};
      let _self = this;
      api.refreshDepartment(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);
                }
          } else {
            let params = { msg: "获取所属校区" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取所属校区" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
}
</script>
<style lang="less">
.customers-step-one{
.van-cell-group{
  border-bottom:20px #eef1f6 solid;
}
.group-selected{
  height: 100%;
  width: 750px;
  top:0px;
  bottom: 0px;
  background: #fff;
}
.van-cell__value{
    .no-border{
      border: none;
      width: 100%;
    }
  }
}
</style>
