<template>
<div class="user-teacher-show">
    <swiper :options="swiperOption">
        <swiper-slide class="slide-01">
            <div class="phome-up flex flex_center">
                <div class="phome-up-content">
                    <div class="phome-title">时光记忆</div>
                    <div class="phome-main flex">
                        <div class="phome-main-left">
                            <div class="portrait" style="background-image: url(&quot;//img.xiaogj.com/580a7fca-b94b-40d7-b029-613ee52e24c7/H/adc3b27f6d6547589a419f2ff0b781e5-68e6bb8e49b5402d910c22d1d1a47f89-00.jpg?x-oss-process=image/resize,w_414/crop,x_0,y_0,w_414,h_414&quot;);"></div>
                        </div>
                        <div class="phome-main-right flex flex_column">
                            <div class="name">测试员</div>
                            <div><span class="date">2018-07-04</span></div>
                            <div class="meet">我们在<span class="where">师生信</span>相遇</div>
                        </div>
                    </div>
                </div>
                <div class="phome-down">
                    <p>这一路走来，感谢有您相伴</p>
                    <p>有些话我想对您说</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-02">
            <div class="ptlr">
                <div class="main">
                    <p class="p1">感谢您在</p>
                    <p class="p1"><span class="school-name">实施专用数据库</span>奋斗了</p>
                    <div class="wrap1">
                        <div id="num1" class="num">184</div>
                        <div class="sy1">天</div>
                    </div>
                </div>
                <div class="des"><p>把一切知识教给一切人</p></div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-03">
            <div class="ptlr">
                <div class="main">
                    <div class="work-start"><span class="work-start-date">2018-07-04</span>开始</div>
                    <p class="p1">共带了</p>
                    <div class="wrap1">
                        <div id="num2" class="num">7</div>
                        <div class="sy1">个班级</div>
                    </div>
                </div>
                <div class="des"><p>一言一行彰显人格魅力</p></div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-04">
            <div class="ptlr">
                <div class="main">
                    <div class="work-start"><span class="work-start-date">2018-07-04</span>开始</div>
                    <p class="p1">共上了</p>
                    <div class="wrap1">
                        <div id="num3" class="num">3</div>
                        <div class="sy1">节课</div>
                    </div>
                </div>
                <div class="des"><p>一举一动体现师者风采</p></div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-05">
            <div class="ptlr">
                <div class="main">
                    <div class="work-start"><span class="work-start-date">2018-07-04</span>开始</div>
                    <p class="p1">付出了</p>
                    <div class="wrap1">
                        <div id="num5" class="num">4</div>
                        <div class="sy1">个小时</div>
                    </div>
                </div>
                <div class="des"><p>一字一句包含谆谆教诲</p></div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-06"><div class="ptlr">
            <div class="main">
                <div class="work-start"><span class="work-start-date">2018-07-04</span>开始</div>
                <p class="p1">培养了</p>
                <div class="wrap1">
                    <div id="num4" class="num">4</div>
                    <div class="sy1">名学生</div>
                </div>
            </div>
            <div class="des"><p>一分一秒无私奉献青春</p></div>
        </div></swiper-slide>
        <swiper-slide class="slide-07"><div class="prate flex flex_column">
            <div class="fly-wrap flex_con">
                <!-- <div class="fly fly1"></div> -->
                <!-- <div class="fly fly2"></div> -->
                <div class="fly fly3 anim" style="height: 100%;"></div>
            </div>
            <div class="cloud-bg "></div>
            <div class="rate-wrap flex flex_center">
                <!-- <div class="rate-item">
                    <div>升班率</div>
                    <div id="rate-val1" class="rate-val">0%</div>
                </div>
                <div class="rate-item">
                    <div>续费率</div>
                    <div id="rate-val2" class="rate-val">0%</div>
                </div> -->
                <div class="rate-item">
                    <div>出勤率</div>
                    <div id="rate-val3" class="rate-val">100%</div>
                </div>
            </div>
        </div></swiper-slide>
        <swiper-slide class="slide-08">
            <div class="star-wrap ptlr">
                <div class="start-bg">
                    <img src="../../assets/images/teacherShow/start-5.png">
                </div>
                <!-- <div id="star-point" class="review-c">0.0</div> -->
                <!-- <div class="p1">平均分</div> -->
                <div class="p3">收到家长评价 <span id="award-comment" class="review-c">1</span> 次</div>
                <div class="p3">平均得分 <span id="star-point" class="review-c">5.0</span></div>
                <div class="star-desc"><div class="p2">桃李满天下</div><div class="p2">春晖遍四方</div></div>

                <!-- <div class="star-ranking">
                    <div>超过全校<span id="star-ranking" class="sp2">0%</span>老师</div>
                </div> -->
            </div>
            <div class="share-div">
                <div class="p4">超越了所有人，位于榜首</div>
            </div>
        </swiper-slide>

    </swiper>
    <div class="hint"></div>
</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'////这里注意具体看使用的版本是否需要引入样式，以及具体位置。

export default {
  components: {
      swiper,
      swiperSlide
  },
  data () {
    return {
        swiperOption: {
            direction : 'vertical',
            speed: 1000
        }
    }
  },
  methods: {

    goTo (url, ip) {
      this.$router.push({path: url, query: {name: ip}})
    }

  }
}
</script>
<style lang="less">
    body{
        color: #fff;
        height: 100%;
        #app{
            height: 100%;
        }
    }

  .user-teacher-show{
      height: 100%;
    .swiper-container{
        height: 100%;
    }
  .swiper-wrapper{
      width: 100%;
      height: 100%;
  }
  .swiper-slide{
      width: 100%;
      height: 100%;

  }
   .slide-01{
    background: url("../../assets/images/teacherShow/bg01.png") 0 0 no-repeat;

    }
  .slide-02{
      background: url("../../assets/images/teacherShow/bg02.png") 0 0 no-repeat;

  }
    .slide-03{
        background: url("../../assets/images/teacherShow/bg03.png") 0 0 no-repeat;

    }
    .slide-04{
        background: url("../../assets/images/teacherShow/bg04.png") 0 0 no-repeat;

    }
    .slide-05{
        background: url("../../assets/images/teacherShow/bg05.png") 0 0 no-repeat;

    }
    .slide-06{
        background: url("../../assets/images/teacherShow/bg06.png") 0 0 no-repeat;

    }
    .slide-07{
        background: url("../../assets/images/teacherShow/bg07.png") 0 0 no-repeat;

    }
    .slide-08{
        background: url("../../assets/images/teacherShow/bg07.png") 0 0 no-repeat;

    }
    /* å¼¹æ€§ç›’å­ç›¸å…³ */
    .flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }
    .flex_wrap {
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    .flex_column {
        -webkit-box-orient: vertical;
        -webkit-flex-direction: column;
        flex-direction: column;
    }
    .flex_reverse {
        -webkit-box-direction: reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
    }
    .flex_con {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .flex_center {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        -webkit-align-items: center;
        -webkit-justify-content: center;
        align-items:center;
        justify-content:center;
    }
    .flex_v_center{
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .flex_h_center{
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
    }
    .flex_between{
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
    }
    .flex_sa {
        justify-content: space-around;
        -webkit-justify-content: space-around;
    }





    /* ç®­å¤´åŠ¨ç”» */
    .hint {
        position: fixed;
        bottom: 10px;
        left: 50%;
        margin-left: -12px;
        width: 24px;
        height: 28px;
        background-image: url(../../assets/images/teacherShow/arrow_up.png);
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: 24px 28px;
        background-size: 24px 28px;
        z-index: 2;
        opacity: 0.1;
        -webkit-animation: arrow_up-anim 1s ease-out infinite;
        animation: arrow_up-anim 1s ease-out infinite;
    }
    .hint.none {
        animation: none;
        display: none;
    }
    @keyframes arrow_up-anim {
        0% {
            opacity: 0.1;
            transform: translate3d(0, 0, 0);
        }
        100% {
            opacity: 0.8;
            transform: translate3d(0, -12px, 0);
        }
    }
    @-webkit-keyframes arrow_up-anim {
        0% {
            opacity: 0.1;
            transform: translate3d(0, 0, 0);
        }
        100% {
            opacity: 0.8;
            transform: translate3d(0, -12px, 0);
        }
    }



    .none {
        display: none;
    }
    .ssx-teacher {
        color:  #FFF;
        font-size: 14px;
    }
    .ptlr {
        padding-top: 10%;
        padding-left: 12%;
        padding-right: 12%;
    }
    .p1 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
        padding-bottom: 28px;
    }
    .p2 {
        font-size: 28px;
        line-height: 32px;
    }
    .p3 {
        font-size: 36px;
        line-height:50px;
    }
    .p4 {
        font-size: 26px;
        height: 60px;
        line-height: 60px;
    }
    .sp1 {
        color: #ffd86a;
        font-weight: 700;
    }
    .sp2 {
        font-size: 18px;
        color: #ffd86a;
    }
    .wrap1 {
        height: 40px;
    }
    .num {
        display: inline-block;
        font-size: 100px;
        height: 76px;
        line-height: 80px;
        vertical-align: bottom;
    }
    .sy1 {
        display: inline-block;
        padding: 0 5px;
        font-size: 40px;
        line-height: 48px;
        background-color: #FFF;
        color: #1e70d4;
        bottom: 0;
        left: 100%;
        vertical-align: bottom;
    }
    .des {
        margin-top: 80px;
    }
    .des p {
        font-size: 32px;
        line-height: 44px;
        font-weight: 500;
    }
    .work-start {
        height: 50px;
        line-height: 48px;
        font-size: 28px;
        color: rgba(255,255,255,.8);
    }
    .work-start-date {
        font-size: 32px;
    }


    .phome-down {
        position: absolute;
        bottom: 100px;
        width: 100%;
        line-height: 1.5em;
        text-align: center;
        font-size: 32px;
    }
    .phome-up {
        display: flex;
        padding-top: 10%;
    }
    .phome-up-content {
        position: relative;
        padding-left: 90px;
    }
    .phome-title {
        position: absolute;
        left: 0;
        top: -8px;
        width: 60px;
        font-size: 60px;
    }

    .phome-main-left {
        padding-top: 50px;
        margin: 0 10px 0 5px;
    }
    .phome-main-left .portrait {
        width: 108px;
        height: 108px;
        border: 4px solid #FFF;
        border-radius: 56px;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
    }

    .phome-main-right {
        padding-top: 50px;
        padding-bottom: 70px;
        padding-right: 28px;
        padding-left: 10px;
        border-top: 3px solid #FFF;
        border-right: 3px solid #FFF;
    }
    .phome-main-right .name {
        font-size: 32px;
        padding-bottom: 10px;
    }
    .phome-main-right .date {
        display: inline-block;
        padding: 0 12px;
        height: 48px;
        line-height: 48px;
        font-size: 32px;
        color: #1e70d4;
        background-color: #FFF;
    }
    .phome-main-right .meet {
        position: absolute;
        bottom: 0;
        right: 14px;
        margin-top: 5px;
        font-size: 32px;
    }
    .phome-main-right .meet .where {
        font-size: 48px;
        font-weight: 700;
        padding: 0 4px;
    }



    /* ç¬¬äºŒé¡µ */
    .school-name {
        display: inline-block;
        margin-right: 5px;
        font-weight: 700;
    }


    /* ç¬¬ä¸ƒé¡µ */
    .prate {
        position: absolute;
        top: 10%;
        bottom: 8%;
        left: 10%;
        right: 10%;
    }
    .cloud-bg {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 0;
        padding-top: 247px;
        background-image: url(../../assets/images/teacherShow/cloud.png);
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
    }
    .rate {
        height: 80px;
    }
    .fly-wrap {
        position: relative;
    }
    .fly-wrap .fly {
        position: absolute;
        bottom: -12%;
        width: 16px;
        height: 1%;
        background-color: rgba(255,255,255,1);
        transform: translate3d(-50%,0,0);
    }
    .fly-wrap .fly.anim {
        transition: all 1s ease-in;
    }
    .fly-wrap .fly:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 42px;
        height: 103px;
        transform: translate3d(-50%,-75%,0);
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        -webkit-background-size: 42px 103px;
        background-size: 42px 103px;
    }
    .fly1 {
        left: 20%;
    }
    .fly2 {
        left: 50%;
    }
    .fly3 {
        /* left: 80%; */
        left: 50%;
    }
    .fly1:before {
        background-image: url(../../assets/images/teacherShow/fly1.png);
    }
    .fly2:before {
        background-image: url(../../assets/images/teacherShow/fly2.png);
    }
    .fly3:before {
        background-image: url(../../assets/images/teacherShow/fly3.png);
    }
    .rate-wrap {
        padding-left: 10%;
        padding-right: 10%;
        padding-top: 15px;
        text-align: center;
    }
    .rate-val {
        line-height: 60px;
        font-size: 40px;
        font-weight: 700;
    }


    /* ç¬¬å…«é¡µ */

    .star-wrap.ptlr {
        text-align: center;
        padding-top: 13%;
    }
    .star-wrap .p2 {
        line-height: 44px;
    }
    .start-bg img {
        width: 360px;
    }
    .star-desc {
        margin-top: 20px;
    }
    .review-c {
        font-size: 1.2em;
        /* line-height: 48px; */
        font-weight: 700;
        color: #ffd86a;
    }
    .star-ranking div {
        display: inline-block;
        line-height: 26px;
        padding: 0 12px;
        margin-top: 10px;
        background-color: #207DE0;
        font-size: 14px;
        border-radius: 26px;
    }
    .support {
        position: absolute;
        width: 100%;
        bottom: 15px;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
    }
    .support sup {
        font-size: 16px;
    }

    .share-div {
        text-align: center;
        position: absolute;
        bottom: 50px;
        width: 100%;
    }
    .share-btn {
        display: inline-block;
        margin-top: 6px;
        padding: 0 12px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        font-size: 16px;
        border-radius: 24px;
        border: 1px solid #FFF;
    }
    .share-dir {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .share-dir img {
        position: absolute;
        right: 10px;
        top: 0;
        width: 83px;
        height: auto;
    }








    }

</style>
