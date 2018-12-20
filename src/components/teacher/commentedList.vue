<template>
<!-- 上课点评模块2 获取上课的学员信息，包含评论信息 -->
<!-- http://web.rexuejiewu.com.cn/teacher/commentedList?id=371    该链接中有已评价的学生 -->
  <div class="commented-list">
    <van-cell-group>
      <!-- <van-cell title="上课内容：" is-link to="/teacher/classContent"/> -->
      <!-- <van-cell title="查看家长回复" value="1" to="/teacher/replyList" is-link /> -->
    </van-cell-group>

    <!--<div class="list-box" v-for="data in allDatas">-->
      <!--<div class="list-box-l">-->
        <!--<span class="box-l"><img src="../../assets/images/user/test.jpg"/></span>-->
        <!--<span class="name">{{data.studentName}}</span>-->
        <!--<span><van-checkbox v-model="checked"></van-checkbox></span>-->
      <!--</div>-->
      <!--<div class="list-box-r" @click="goTo();immediatelyCommented(data);">-->

        <!--<span v-if="data.isEvaluation">已经点评</span>-->
        <!--<span v-else>立即点评</span>-->

      <!--<van-icon name="arrow" /></div>-->
    <!--</div>-->

    <div class="list-box" v-for="data in allDatas">
      
      <div class="list-box-l" v-if="data.isEvaluation">
        <span class="box-l fn-left"><img src="../../assets/images/user/test.jpg"/></span>
        <ul class="box-r fn-left">
          <li class="name">{{data.studentName}}</li>
          <li class="time">{{data.createTime}}</li>
          <li class="detial">{{data.studentEvaluationSummary}}</li>
        </ul>
      </div>

      <div class="list-box-l" v-else>
        <span class="box-l"><img src="../../assets/images/user/test.jpg"/></span>
        <span class="name">{{data.studentName}}</span>
        <span><van-checkbox v-model="checked" v-if="!data.isEvaluation"></van-checkbox></span>
      </div>

      <div class="list-box-r" @click="goTo();immediatelyCommented(data);">
        <span v-if="!data.isEvaluation">立即点评</span>
        <van-icon name="arrow" />
      </div>

    </div>

    <div class="list-bottom"  v-if="allChencked">
      <div class="bottom-l" @click="checkAll">
        <van-checkbox v-model="checked" @click="checkAll">全选</van-checkbox>
      </div>
      <div class="bottom-r"><span @click="goTo();">上课点评（0）</span></div>
    </div>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      checked: false,
      allChencked: false,
      checkedStudens: [],
      allDatas : [
        {
          studentName:'张跃龙'
        },
        {
          isEvaluation:1,
          studentName:'王紫潼'
        }
      ],
    }
  },
  mounted () {
    this.findAllClassAndCommentsInTheClass();
  },
  methods: {
    checkAll: function() {
      this.$store.state.teacherComment.immediatelyCommenteds = this.allDatas;
    },
    immediatelyCommented (data) {
      this.$store.state.teacherComment.immediatelyCommented = data;
    },
    goTo () {
      this.$router.push({path: '/teacher/immediatelyCommented'})
    },
    //findAllClassAndCommentsInTheClass获取上课的学员信息，包含评论信息
    findAllClassAndCommentsInTheClass : function () {
      let _self = this;
      let param = new URLSearchParams();

      param.append('timeable_id' , this.$route.query.id);

      api.findAllClassAndCommentsInTheClass(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            _self.allDatas = res.data.data;
            //判断所有学员数据，如果有为评价的学员，则显示底部全选模块
            _self.allDatas.forEach(function(value,index,array){
              if(value.isEvaluation == false){
                _self.allChencked = true;
              }
　　        });
          }
        });
    },
  },

}
</script>
<style lang="less">
.commented-list{
  color:#444;
.van-checkbox{
  height: 50px;
}
.van-checkbox__icon .van-icon{
  width: 28px;
  height: 28px;
  font-size: 20px;
  background: #38f;

}
.van-checkbox__icon--round .van-icon{
  border-radius: 5px;
}
.van-checkbox__icon, .van-checkbox__label{
  position: relative;
  top: 15px;
  left: 25px;
}

.van-cell{
  font-size: 28px;
  line-height: 80px;
  border-bottom: 1px #eceff4 solid;
  margin-bottom: 10px;
  padding: 0px 15px 0px 38px;
}
.van-cell__right-icon{
  font-size: 24px;
  line-height: 80px;
}
.van-cell__value{
  color: #b6b6b6;
}
.list-box{
  height: 212px;
  padding: 0 30px;
  border-bottom: 1px #eceff4 solid;
  background:#fff;
.list-box-l{
  padding-top:10px;
  float: left;
.box-l{
  width: 78px;
  height: 78px;
  display: inline-block;
  border: 1px #fff solid;
  border-radius: 50%;
  margin:23px 10px 0 0;


img{
  width: 78px;
  height: 78px;
  border-radius: 50%;

}
}
.box-r{
  width: 563px;
  .name{
    font-size: 28px;
  }
  .time{
    font-size: 20px;
    color: #838383;
    padding: 15px 0 5px;
  }
  .detial{
    font-size: 22px;
    line-height: 30px;
  }
}
.name{
  font-size: 26px;
  position: relative;
  top: 10px;
}

}

.list-box-r{
  float: right;
  line-height: 212px;
  color: #b6b6b6;
.van-icon-arrow{
  margin-left: 10px;
  position: relative;
  top: 4px;
}
}
}
.list-bottom{
  height: 95px;
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  background: #fff;
.bottom-l{
  float: left;
  width: 300px;
  padding-top: 10px;
}
.bottom-r{
  float: right;
  padding:24px 20px 0 0;
span{
  background: #38f;
  color: #fff;
  display: inline-block;
  border-radius: 39px;
  padding: 10px 70px;
}
}

}
}
</style>
