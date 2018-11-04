<template>
  <div class="immediately">
    <div class="class-detial">
      <div class="immediately-title"><van-icon name="pending-payment" />上课详情</div>
      <van-cell-group>
        <van-cell title="学生" :value="stuMessage.studentName" />
        <van-cell title="班级" :value="stuMessage.courseName" />
        <van-cell title="老师" :value="stuMessage.classTeacherName" />
      </van-cell-group>
    </div>
    <div class="class-comment">
      <div class="immediately-title"><van-icon name="records" />上课评价</div>
      <dl class="detial-list">
        <dt>随堂作业表现能力</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate v-model="value" size="50" color="#f8d304" /></dd>
      </dl>
      <dl class="detial-list">
        <dt>口语表达</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate v-model="value" size="50" color="#f8d304" /></dd>
      </dl>
      <dl class="detial-list">
        <dt>课堂表现</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate v-model="value" size="50" color="#f8d304" /></dd>
      </dl>
    </div>
    <div class="class-evaluation">
      <van-cell-group>
        <van-cell title="选择评价模版" is-link />
        <van-field
          v-model="message"
          type="textarea"
          placeholder="写点评价吧，您的评价对这位学生会有更大的帮助呦！（1000字以内）"
          rows="1"
        />
      </van-cell-group>
      <div class="add-voice">点击录制语音</div>
      <div class="add-img">添加图片</div>
      <div class="add-img">添加视频</div>
    </div>
    <div class="immediately-bottom">
      <span class="blue-font">存为草稿</span>
      <span class="blue-bg">提交</span>
    </div>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
export default {
  data () {
    return {
      value: 3,
      message: '',
      stuMessage : null,
    }
  },
  mounted () {
    this.findAllClassAndCommentsInTheClass();
  },
  methods: {
    //findAllClassAndCommentsInTheClass获取上课的学员信息，包含评论信息
    findAllClassAndCommentsInTheClass : function () {
      let _self = this;
      let param = new URLSearchParams();
      param.append('timeable_id' , 371);
      api.findAllClassAndCommentsInTheClass(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
            let data = res.data.data;
            console.log(_self.$route.query.id)
            data.forEach(element => {
              if(element.id == _self.$route.query.id ){
                _self.stuMessage = element;
                console.log(_self.stuMessage);
              }
            });
          }
        });
    },
  }
}
</script>
<style lang="less">
.immediately{
padding-bottom:200px;
.immediately-title{
  height: 78px;
  line-height: 78px;
  font-size: 26px;
  color: #5f5f5f;
  padding-left: 30px;
.van-icon{
  position: relative;
  top: 3px;
  margin-right: 8px;
}
}
.class-detial{
.van-icon{
  color: #4bc76f;

}
.van-cell-group{
  width: 692px;
  margin: 0 auto;
.van-cell__title{
  width: 150px;
}
.van-cell{
  font-size: 28px;
  line-height: 78px;
  height: 78px;
.van-cell__value{
  color: #38f;
}
}

}
}
.class-comment{
.van-icon{
  color: #eaa945;

}
.detial-list{
  padding: 30px 0;
  width: 691px;
  margin: 0 auto 15px;
  background: #fff;
  text-align: center;
dt{
  color: #444;
  font-size: 30px;
  line-height: 40px;
}
dd{
  padding:20px 0 0;

}
.word{
span{
  padding: 0 15px;
}
}
}
}
.immediately-bottom{
  height: 100px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0px;
  text-align: right;
  border-top:1px #e3e3e3 solid;
  span{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    border-radius:50px;
    padding: 0px 30px;
    border: 1px #38f solid;
    margin: 18px 30px 0 0;
  }
.blue-font{
  color: #38f;
  background: #fff;

}
.blue-bg{
  color: #fff;
  background: #38f;
}
}
.class-evaluation{
  width: 692px;
  background: #fff;
  padding-bottom: 100px;
  margin: 0 auto;
  .van-cell{
    font-size: 24px;
    line-height: 24px;
    padding: 35px 15px;
  }
  .van-field{
    line-height: 40px;
    height: 300px;
    width:95%;
    margin: 0 auto;
    border: 1px #e0e5ed solid;
  }
.van-field--min-height .van-field__control{
  min-height: 300px;
}
.add-voice{
  width: 95%;
  height: 85px;
  line-height: 85px;
  font-size: 28px;
  color: #1395f1;
  text-align: center;
  border-radius: 10px;
  border: 1px #e0e5ed solid;
  background: #f7fbff;
  margin: 30px auto 0;
}
.add-img{
  width: 195px;
  height: 195px;
  line-height: 195px;
  margin-top: 30px;
  margin-left: 20px;
  text-align: center;
  border: 1px #e0e5ed solid;
}
}
}
</style>
