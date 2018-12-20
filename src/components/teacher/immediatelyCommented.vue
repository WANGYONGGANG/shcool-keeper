<template>
<!--上课点评模块3  立即点评页面 -->
  <div class="immediately">
    <div class="class-detial">
      <div class="immediately-title" v-if="!studentNameStatue">
        <van-icon name="pending-payment" />
        正在对
        <span v-for="stuName in studentNameArr">{{stuName}},</span>
        {{studentNameArr.length}}人进行
        评价
      </div>
      <div class="immediately-title"><van-icon name="pending-payment" />上课详情</div>
      <van-cell-group  v-if="studentNameStatue">
        <van-cell title="学生" :value="stuMessage.studentName" />
        <van-cell title="班级" :value="stuMessage.className" />
        <van-cell title="老师" :value="stuMessage.classTeacherName" />
      </van-cell-group>
      <van-cell-group  v-else>
        <van-cell title="班级" :value="getstuMessage[0].className" />
        <van-cell title="老师" :value="getstuMessage[0].classTeacherName" />
      </van-cell-group>
    </div>
    <div class="class-comment">
      <div class="immediately-title"><van-icon name="records" />上课评价</div>
      <dl class="detial-list">
        <dt>随堂作业表现能力</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate @change="changeStart" v-model="value1" :size="50" color="#f8d304" /></dd>
      </dl>
      <dl class="detial-list">
        <dt>口语表达</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate @change="changeStart" v-model="value2" :size="50" color="#f8d304" /></dd>
      </dl>
      <dl class="detial-list">
        <dt>课堂表现</dt>
        <dd class="word"><span>人均：0 </span><span>班评：0</span> <span>星：0/1</span></dd>
        <dd class="start"><van-rate @change="changeStart" v-model="value3" :size="50" color="#f8d304" /></dd>
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
      <span class="blue-font" @click="addTeacherStudentClassEvaluation(false)">存为草稿</span>
      <span class="blue-bg" @click="addTeacherStudentClassEvaluation(true)">提交</span>
    </div>
  </div>
</template>
<script>
import {api} from  '../../../static/js/request-api/request-api.js';
import { throws } from 'assert';
export default {
  data () {
    return {
      value1: 3,
      value2: 1,
      value3: 2,
      message: '',
      //返回的是多个数组
      getstuMessage: [],
      studentNameStatue:true,
      studentNameArr: ['学生'],
    }
  },
  mounted () {
    this.getstuMessage = this.$store.state.teacherComment.immediatelyCommenteds;
    if(this.getstuMessage.length > 1){
      this.studentNameStatue = false;
      this.studentNameArr = [];
      this.getstuMessage.forEach(element => {
        this.studentNameArr.push(element.studentName);
      });
    }
  },
  methods: {
    //增加评价addTeacherStudentClassEvaluation
    
    //*evaluation_dimension  string   评价维度 dimension_id：维度主键，score：维度平分 最多5分
    //[{"dimension_id":1,"score":1},{"dimension_id":3,"score":3},{"dimension_id":2,"score":5}]

    //image_path string  图片文件地址列表
    //["/fielupload/teacher/20181027/cc496fd1-1a83-45a9-b6e4-f4e7749fb0da.pdf","/fielupload/teacher/20181027/efb7e7b6-1d28-4377-84a2-8e59d1df5724.pdf"]
    
    //*releaseState  boolean  发布状态：false：保存草稿，true：正式发布
    
    //*student_id  string 学生主键  98
    
    //teacher_remark   string 老师评论  这个是老师的评价
    
    //*timeable_id  string 排课主键  371
    
    //video_paths  string 视频文件地址列表 
    //["/fielupload/teacher/20181027/cc496fd1-1a83-45a9-b6e4-f4e7749fb0da.pdf","/fielupload/teacher/20181027/efb7e7b6-1d28-4377-84a2-8e59d1df5724.pdf"]
    
    //voice_paths string 语音文件地址列表
    //["/fielupload/teacher/20181027/cc496fd1-1a83-45a9-b6e4-f4e7749fb0da.pdf","/fielupload/teacher/20181027/efb7e7b6-1d28-4377-84a2-8e59d1df5724.pdf"]
    
    addTeacherStudentClassEvaluation : function (releaseState) {
      let _self = this;
      let param = new URLSearchParams();

      let stuMes = this.$store.state.teacherComment.immediatelyCommented;
      let stusMes = this.$store.state.teacherComment.immediatelyCommenteds;

      if(stuMes.length == 1){
        param.append('student_id',stuMes.studentId);
        param.append('timeable_id',stuMes.timeableId);
      }
      if(stusMes.length > 1){
        param.append('student_id',stusMes[0].studentId);
        param.append('timeable_id',stusMes[0].timeableId);
      }
      param.append('evaluation_dimension' , 
      '[{"dimension_id":1,"score":'+_self.value1+'},{"dimension_id":3,"score":'+_self.value3+'},{"dimension_id":2,"score":'+_self.value2+'}]');
      param.append('image_path','');
      param.append('releaseState',releaseState);
      param.append('teacher_remark','123');
      param.append('video_paths','');
      param.append('voice_paths','');

      //接口返回500，有问题
      //参数student_id定义存在问题，这个页面有可能会有1个以上的学生，但是后台定义的student_id是一个字符串
      //无法传入多个学生的student_id
      api.addTeacherStudentClassEvaluation(param)
        .then( res => {
          if( res.data.code == 1 ){
            console.log(res.data.data);
          }
        });
    },
    //点击星星时获取最新的评价数据值
    changeStart: function () {
      console.log(this.value1);
      console.log(this.value2)
      console.log(this.value3)
    }
  },
  computed : {
    stuMessage () {
      //返回的数据是一个数组
      //console.log(this.$store.state.teacherComment.immediatelyCommented);
      return this.$store.state.teacherComment.immediatelyCommented;
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
