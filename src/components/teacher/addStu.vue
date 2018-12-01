<template>
  <div class="choose-class">
    <div class="class-tab">
      <div class="list-search-l">
        <van-search placeholder="输入学生姓名，学号，电话" background="#fff"  show-action v-model="studentName">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <van-radio-group v-model="radio">
    <div class="class-list"  @click="radio = index" v-for="(data,index) in allDatas" :key="index">
    <div class="class-list-l">
        <van-radio v-bind:name=data.id />
    </div>
    <div class="class-list-r">
      <dl>
        <dt>学员姓名：{{subStrClassName(data.name)}}<span class="num">学员编号：{{data.code}}</span></dt>
         <dt>学员电话：{{subStrClassName(data.mobile)}}<span class="num">登录名：{{data.userName}}</span></dt>
      </dl>
    </div>
  </div>
    <!-- <div class="class-list"  @click="radio = '2'">
      <div class="class-list-l">
          <van-radio name="2" />
      </div>
      <div class="class-list-r">
        <dl>
          <dt>2018暑假初二英语同步班0523<span class="num">1/1</span></dt>
          <dd><van-icon name="location" />潮人部落</dd>
          <dd class="last-item"><van-icon name="contact" />潮人部落<span><van-icon name="idcard" />2018寒假五年...</span></dd>
        </dl>
      </div>
    </div> -->
    <!-- <div class="class-list"  @click="radio = '3'">
      <div class="class-list-l">
          <van-radio name="3" />
      </div>
      <div class="class-list-r">
        <dl>
          <dt>2018暑假初二英语同步班0523<span class="num">1/1</span></dt>
          <dd><van-icon name="location" />潮人部落</dd>
          <dd class="last-item"><van-icon name="contact" />潮人部落<span><van-icon name="idcard" />2018寒假五年...</span></dd>
        </dl>
      </div>
    </div> -->
    </van-radio-group>
    <div class="bottom-btn">
      <span @click="goTo">仅上这节课</span><span @click="goTo">加入此班</span>
    </div>
    <!--选择班级-->
    <select-pop :lists="filterData.lists" :isShow.sync="filterData.isShow" :selectItem.sync="filterData.selectItem"></select-pop>
    <!--选择校区-->
    <select-pop :title="schoolData.title" :lists="schoolData.lists" :isShow.sync="schoolData.isShow" :selectItem.sync="schoolData.selectItem"></select-pop>
  <attention v-if="showAttentionAlert" v-bind:attentionText="attentionText"
                          style="z-index:600;"></attention>
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import SelectPop from '../popup/bottomSelectPop';
import attention from '../teacher/attention'
export default {
  components: {
    SelectPop,
    attention
  },
  data () {
    return {
      value: '',
      radio: '1',
      attentionText: "加入成功",
      allDatas:[],
      studentName:"",
      showAttentionAlert:false,
      selectedId:null,
      className:"",
      filterData:{
        lists:['查看所有班级','只看一对一','只看一对多','只看集体班'],
        isShow:false,
        selectItem:'查看所有班级'
      },
      schoolData:{
        title:'选择校区',
        lists:[],
        isShow:false,
        selectItem:{item:""}
      }
    }
  },
  mounted () {
    this.findAllStudent();

  },
  methods: {
    onSearch () {
      this.findAllStudent();
    },
    showFilterPop () {
      this.filterData.isShow=true
    },
    showShoolZoneDia () {
      this.schoolData.isShow=true
    },
     subStrClassName(name) {
       if(name){
              return name.substring(0, 8) + "...";
       }
    
    },
    findAllStudent() {
      let _self = this;
      let params ={};
      params.page=1;
      params.rows=10;
      params.student_info=_self.studentName;
      // params.append("timeable_id",this.$route.query["timeable_id"]);
      api.findAllStudent(params).then(res => {
        // console.log(res);
        if (res.data.code == 1) {
          var allDatas = res.data.data.rows;
          _self.allDatas = allDatas;
        }
      });
    },
      addStudentForClassPlean() {
      let _self = this;
      let params =new URLSearchParams();

      params.append("timeable_id",this.$route.query["timeable_id"]);
      params.append('studentIDs',"["+this.radio+"]");
      api.addStudentForClassPlean(params).then(res => {
        console.log(res);
        if (res.code == 1) {
          // var allDatas = res.data.data.rows;
          // _self.allDatas = allDatas;
          _self.showAttentionAlert=true;
          setTimeout(function(){
            _self.showAttentionAlert=false;
          },2000)
        }else{
           _self.attentionText=res.message;
           _self.showAttentionAlert=true;
          setTimeout(function(){
            _self.showAttentionAlert=false;
          },2000)
        }
      })
       .catch(error => {
          _self.attentionText="已存在或者错误";
           _self.showAttentionAlert=true;
          setTimeout(function(){
            _self.showAttentionAlert=false;
          },2000)
        });
    },
    goTo () {
      this.addStudentForClassPlean();
      // this.$router.push({path: '/teacher/setClassInformation'})
    }
  },
  watch:{
    'filterData.selectItem':function (n,o) {
      this.$toast(n.item)
    },
    'schoolData.selectItem':function (n,o) {
      this.findAllClassInfo();
      this.$toast(n.item)
    },
  }
}
</script>
<style lang="less">
.choose-class{
  .class-tab{
    background: #fff;
    height: 83px;
    border-top:1px #000 solid ;
    padding:10px 20px;
  .list-search-l{
    float: left;
  }
  .van-cell{
    font-size: 26px;
  }
  .van-cell__left-icon{
    font-size: 26px;
    top:15px;
    margin-right: 10px;
  }
  .van-search__action{
    font-size: 26px;
    background: #eff1f6;
    position: relative;
    left:-32px;
    border-radius: 35px;
    padding: 16px 23px;
  }
  .van-search{
    width: 606px;
  }
  .van-search .van-cell{
    border: 1px #eff1f6 solid;
    border-right:none;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    padding: 0px 10px;
    line-height: 54px;
  }
  .operation{
    float: right;
    padding: 16px 23px;
    font-size: 26px;
    background: #eff1f6;
    border-radius: 35px;
    margin: 6px 5px 0 0;
  }
  }
  .choose-school-zone{
  .van-cell{
    font-size: 28px;
    line-height: 45px;
    padding: 15px 35px;
  }
  .van-cell__right-icon{
    font-size: 24px;
    line-height: 45px;
    margin-left: 10px;
  }
  }
.class-list{
  padding: 10px 35px;
  background:#fff;
  margin-bottom: 20px;
  height:170px;
.class-list-l{
  float: left;
  width: 60px;
  .van-radio__input{
    height: 5em;
    top:72px;
    font-size: 30px;
  }
.van-radio .van-icon-checked{
  color: #4286ed;
}
}
.class-list-r{
  float: left;
width:600px;
dt{
  font-size: 24px;
  line-height: 64px;
span{
  float: right;
  color: #838383;
}
}
dd{
  color: #838383;
  line-height: 43px;
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 10px;
}
}
.last-item{
span{
  float: right;
}
.van-icon{
  position: relative;
  top: 4px;
  margin-right: 10px;
  color: #dc951a;
}
}
}
}
.bottom-btn{
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background:#fff;
  line-height: 100px;
  text-align: right;
  color: #838383;
  span{
    display: inline-block;
    background: #4286ed;
    color: #fff;
    line-height: 35px;
    padding: 10px 40px;
    border-radius: 40px;
    margin: 0 15px;
  }
}
.van-popup{
  width: 100%;
}
.ip-list{
  background:#fff ;
  text-align: left;
dt{
  text-align: center;
  font-size: 30px;
  line-height: 100px;
  color: #838383;
}
dd{
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  text-indent: 15px;
  border-bottom:1px #eef1f6 solid ;
}

}

}

</style>
