<script src="../../router/index.js"></script>
<template>
  <div class="teacherIndex">
    <div class="banner">
      <img src="../../assets/images/teacherbanner.jpg" class="img-auto" />
    </div>
    <div class="teacher-ip">当前身份：<span class="yellow" @click="showIpDia">{{ipName}}<i class="van-icon van-icon-arrow van-cell__right-icon"></i></span></div>
    <ul class="teacher-nav">
      <li class="teacher-nav-item" @click="goTo(urls.myTimetable)">
        <i class="item-img"><icon name="home" scale="4"></icon></i>
        <span>我的课表</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.Naming)">
        <i class="item-img"><icon name="book" scale="4"></icon></i>
        <span>上课点名</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.commented)">
        <i class="item-img"><icon name="server" scale="4"></icon></i>
        <span>上课点评</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.resleaseTask)">
        <i class="item-img"><icon name="server" scale="4"></icon></i>
        <span>作业</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.studentCommunication)">
        <i class="item-img"><icon name="book" scale="4"></icon></i>
        <span>学员沟通管理</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.notice)">
        <i class="item-img"><icon name="server" scale="4"></icon></i>
        <span>通知</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.schoolBulletin)">
        <i class="item-img"><icon name="book" scale="4"></icon></i>
        <span>学校公告</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.intentionalCustomers)">
        <i class="item-img"><icon name="server" scale="4"></icon></i>
        <span>意向客户</span>
      </li>
      <li class="teacher-nav-item">
        <i class="item-img"><icon name="book" scale="4"></icon></i>
        <span>补课管理</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.resultInquiry)">
        <i class="item-img"><icon name="server" scale="4"></icon></i>
        <span>成绩录入</span>
      </li>
      <li class="teacher-nav-item" @click="goTo(urls.Roster)">
        <i class="item-img"><icon name="book" scale="4"></icon></i>
        <span>班级花名册</span>
      </li>
    </ul>
    <btm-tobbar></btm-tobbar>
    <ip-pop></ip-pop>
  </div>
</template>
<script>
  import IpPop from '../popup/ipPop'
  import BtmTobbar from '../general/tabbar'
  export default {
    name: 'index',
    components: {
      IpPop,
      BtmTobbar
    },
    data () {
      return {
        ipName:'',
        ipData:{
          studytube :'学管师',
          teacher :'老师',
          headmaster :'班主任'
        },
        urls:{
          myTimetable:'/teacher/myTimetable',
          Naming:'/teacher/Naming',
          commented:'/teacher/commented',
          resleaseTask:'/teacher/resleaseTask',
          studentCommunication:'/teacher/studentCommunication',
          notice:'/teacher/notice',
          schoolBulletin:'/teacher/schoolBulletin',
          intentionalCustomers:'/teacher/intentionalCustomers',
          Roster:'/teacher/Roster',
          resultInquiry:'/teacher/resultInquiry'
        }
      }
    },
    mounted () {
      this.ipName = this.ipData[ this.getStatus(this.$route.path)]
    },
    methods: {
      showIpDia () {
        this.$store.state.ipPopup.ipShow = true
      },
      goTo (param) {
        this.$router.push({path: param})
      },
      getStatus (urlStr) {
        var urlStrArr = urlStr.split('/')
        return urlStrArr[urlStrArr.length - 1]
      }
    },
    computed: {
      ipShow:{
        get:function () {
          return this.$store.state.ipPopup.ipShow
        },
        set:function(){
        }
      }
    },
    watch: {
      '$route' (to, from) {
        //切换身份
        this.ipName = this.ipData[ this.getStatus(this.$route.path)]
      }
    }
  }
</script>
<style lang="less">
  .teacherIndex {
  .banner{
    width: 100%;
    background: #ee8434;
  }
  .img-auto{
    display: inline-block;
    width: 100%;
  }
  .teacher-ip{
    background: #fff;
    height: 100px;
    line-height: 100px;
    font-size: 28px;
    padding-left: 40px;
    margin-bottom:10px;
  .yellow{
    color: #ee8434;
  }
  }
  .teacher-nav {
    display: -webkit-flex; /* Safari */
    display: flex;
    background: #fff;
    width: 100%;
    flex-wrap: wrap;
    padding-top:20px;

  .teacher-nav-item {
    width: 227px;
    height: 227px;
    text-align: center;
    margin: 0 0 20px 20px;
    background: #fff;
    border:1px #f2f2f2 solid;
    border-radius: 5px;
    color:#444;
  .item-img{
    display: block;
    margin: 20px auto;
    width: 112px;
    height: 112px;
    border: 1px #ee8434 solid;
    border-radius:50%;
    line-height:112px;
  }
  .fa-icon {
    display: block;
    margin:30px auto;
    color: #ee8434;
  }

  }
  }

  }

</style>
