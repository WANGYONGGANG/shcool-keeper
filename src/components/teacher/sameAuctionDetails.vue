<template>
  <div class="same-auction-details" id="sameAuctionDetails" v-show="showSameAuctionDetails">
    <div class="top">
      <div class="total-count"><span>同场拍品</span><span>({{totalCount}})</span></div>
      <div class="close" v-on:click="closeSameAuctionDetails"><span>关闭</span></div>
    </div>
    <div class="search">
      <input  class="lot-input" :placeholder="maxAndMinLot(maxLotNo,minLotNo)"   type="text" v-model="searchValue"  />
      <input type="button" class="search-button"   value="查找" v-on:click="searchSameAuction" />
    </div>
     <div class="no-result" v-if="totalCount==0"><span>抱歉，暂无搜索结果</span></div>
      <div class="goods-content">
          <div  class="list-item" v-for="(similarityGood,index) in similarityGoodsList" :key="index" v-on:click="gotoGoodDetails(similarityGood.itemId)">
             <div  class="item-img">
               <div class="limit-transport"  v-if="similarityGood.sessionStatus==2"><span>已结拍</span></div>
             <img    v-bind:src="similarityGood.itemPic"   class="item-img-inside"> 
              <div class="item-img-bg blur" v-bind:style="{background:'url('+similarityGood.itemPic+')'}"></div>
           </div> 
         <div class="img-sign-no-get" v-if="similarityGood.memTrustStatus==3"><span>未竞得</span></div>
           <dl >
             <dt>
               <span>Lot {{similarityGood.lotName}}</span> 
               <span  v-on:click="getAttention(similarityGood.itemId,$event)"  v-bind:data-isFavo="similarityGood.isFavo"  v-if="similarityGood.isFavo==0">关注</span>
               <span  v-on:click="getAttention(similarityGood.itemId,$event)"   v-bind:data-isFavo="similarityGood.isFavo"  v-if="similarityGood.isFavo==1">已关注</span>
           </dt>
           <dd   class="limit-font"><span  v-bind:title="similarityGood.itemName" >{{similarityGood.itemName}}</span></dd> 
           <dd >
          <span  class="qpj">{{splitItemEstPriceStr(similarityGood.itemEstPriceStr,0)}}&nbsp;</span>
           <span class="unit">{{splitItemEstPriceStr(similarityGood.itemEstPriceStr,1)}}&nbsp;</span>
           <span  class="unit-count">{{splitItemEstPriceStr(similarityGood.itemEstPriceStr,2)}}&nbsp;</span>
           </dd>
           </dl>
        </div>
         <scrollLoading v-if="showLoading"></scrollLoading>
         <div class="all-end" v-if="endPage&&totalCount!=0">
         <div class="end-line-left"></div><span>已经到底啦</span><div class="end-line-right"></div>
      </div>
    </div>
     <attentionSuccess v-if="showAttentionAlert"  v-bind:attentionText="attentionText"  style="z-index:600;"></attentionSuccess>
  </div>
</template>

<script>
import { api } from "../../../static/js/request/request-api.js";
import attentionSuccess from "@/assets/components/pub/attentionSuccess";
import $ from "jquery";
import Router from "vue-router";
// import { scrollLoad } from "../../../static/js/util/scroll-load.js";
import { scrollLoad } from "../../../static/js/util/scroll-load-auction.js";
import scrollLoading from "@/assets/components/pub/scrollLoadingOut";

export default {
  name: "sameAuctionDetails",
  props: ["itemId","sessionId"],
  components: {
    scrollLoading,
    attentionSuccess
  },
  data() {
    return {
      msg: "同场拍品",
      showSameAuctionDetails: true,
      pageNumber: 0,
      endPage:false,
      showAttentionAlert: false,
      lastPageNumber: 1, //总页数
      similarityGoodsList:[],
      totalCount: 0,
      showLoading:false,
      maxLotNo:0,
      minLotNo:0,
      searchValue:"",
      loadDataFinish: true,
    };
  },
  mounted: function() {
        this.initPage();
  },
  methods: {
    initPage:function(){
        this.queryRecommendList();
        this.scrollLoadData("queryRecommendList", this);
    },
    closeSameAuctionDetails:function(){
         $("#goodsDetails").css("overflow-x","visible");
         let sameAuctionDetails = document.getElementById("sameAuctionDetails");
         sameAuctionDetails.style.right = "-632px";
         GlobalVue.$emit("closeBgForGoods", null);
    },
    //页面滚动加载数据
    scrollLoadData: function(loadDataFun, $win) {
      scrollLoad.monitorScroll("sameAuctionDetails",loadDataFun, $win, this.pageNumber);
    },
    //查找同场拍品
    searchSameAuction:function(){
      this.similarityGoodsList=[];
      this.pageNumber=0;
      this.lastPageNumber=1;
      this.endPage=false;
      this.totalCount=0;
      this.showLoading=false;
      this.queryRecommendList();
    },
    splitItemEstPriceStr: function(itemEstPriceStr, index) {
      let strArray = itemEstPriceStr.split(" ");
      return strArray[index];
    },
    //拍品lot号大小描述
    maxAndMinLot:function(maxLot,minLot){
      return "请输入拍品Lot号("+minLot+"~"+maxLot+")";
    },
    //进入拍品详情页
    gotoGoodDetails:function(itemId){
        window.location.href="/goodsDetails?itemId="+itemId;
    },
    //关注功能
    getAttention: function(catId, event) {
      let params = {};
      let _self = this;
      let el = event.currentTarget;
      //阻止事件冒泡
      event.stopPropagation();
      params.favoType = 6;
      params.favoObjId = catId;
      params.cookieUUID = this.$cookies.get("memberuuid") || "";
      let isFavo = $(el).data("isfavo");
      // params.memFavoState=0;
      api
        .getAttention(params)
        .then(res => {
          if (res.status == 200) {
            let resultData = res.data;
            if (resultData.status == "202") {
              window.app.pubLogin.toLogin();
              return false;
            } else {
              if (isFavo == 0) {
                //  _self.showAttention=false;
                _self.attentionText = "关注成功";
                $(el).data("isfavo", 1);
                $(el).text("已关注");
              } else {
                //  _self.showAttention=true;
                _self.attentionText = "取消关注成功";
                $(el).data("isfavo", 0);
                $(el).text("关注");
              }
            }
            _self.showAttentionAlert = true;
            setTimeout(function() {
              _self.showAttentionAlert = false;
            }, 2000);
          } else {
            let params = { msg: "获取关注错误" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取关注错误" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
     //获取同场拍品
    queryRecommendList:function(){
      let params = {};
      let _self = this;
      _self.showLoading = true; //true加载
      params.itemId=_self.itemId;
      params.q=_self.searchValue;
      params.sessionId=_self.sessionId;
      // params.sessionId=28708;
      
      params.itemId=_self.itemId;
      _self.pageNumber = _self.pageNumber + 1;
      params.pageNumber=_self.pageNumber;
       if (_self.pageNumber > _self.lastPageNumber) {
        _self.pageNumber = _self.pageNumber - 1;
        _self.showLoading = false;
        return;
      }
      if (!_self.loadDataFinish) {
        _self.pageNumber = _self.pageNumber - 1;
        return;
      }
      _self.loadDataFinish = false; //加载完成状态
      params.pageSize=5;
      params.channel=4;
      params.cookieUUID = this.$cookies.get("memberuuid") || "";
       api.queryRecommendList(params)
        .then(res => {
          if (res.status == 200) {
            _self.showLoading = false; //隐藏loading图标
            _self.loadDataFinish = true;
            let result=res.data.data;
             let similarityGoodsList=[];
             _self.maxLotNo=result.maxLotNo;
             _self.minLotNo=result.minLotNo;
            if(result.catalogueList){
               similarityGoodsList=result.catalogueList;
             }
             _self.totalCount=result.totalCount;
             _self.lastPageNumber=Math.ceil(_self.totalCount/5);
            if (similarityGoodsList.length <= 0) {
              _self.pageNumber = _self.pageNumber - 1;
            }
             for (let i = 0; i < similarityGoodsList.length; i++) {
              _self.similarityGoodsList.push(similarityGoodsList[i]);
            }
              if (_self.pageNumber >= _self.lastPageNumber) {
              _self.endPage = true;
            }
          } else {
            let params = { msg: "获取相似拍品推荐错误" };
            GlobalVue.$emit("alert", params);
            GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取相似拍品推荐" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.same-auction-details{width: 632px;padding-left: 30px;padding-right: 30px;position: fixed;top: 0px;bottom: 0px;background-color: #fff;z-index: 600;right: -632px; transition: right 1s;overflow: scroll;}
.same-auction-details  .goods-content{position: relative;}
.same-auction-details .top{width: 100%;height: 112px;justify-content: space-between;align-items: center;display: flex;}
.same-auction-details .top .total-count{height: 32px;line-height: 24px;}
.same-auction-details .top .total-count span:first-child{color: #111;font-size: 32px;}
.same-auction-details .top .total-count span:nth-child(2){color:#3F3F3F;font-size: 32px;}
.same-auction-details .top .close{width: 72px;height: 32px;color: #999;font-size: 26px;line-height: 32px;}

.same-auction-details .search .lot-input{width: 444px;height: 90px;outline:none;border-radius: 10px 0 0 10px;border: 2px solid #979797;text-indent: 15px;  -webkit-user-select: auto!important;
  -khtml-user-select: auto!important;
  -moz-user-select: auto!important;
  -ms-user-select: auto!important;
  -o-user-select: auto!important;
  user-select: auto!important;}

.same-auction-details .search input::-webkit-input-placeholder{padding-left: 48px;font-size: 26px;color: #999;} 
.same-auction-details .search .search-button{width: 128px;color: #fff;font-size: 26px;background-color: #C8161E;height: 90px;outline:none;border: 0px;border-radius: 0px 10px 10px 0px;}
.same-auction-details .search{display: flex;}
.clear{clear: both;}
.same-auction-details .list-item {
  display: flex;
  height: 240px;
  /* padding-left: 30px; */
  /* padding-right: 30px; */
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  position: relative;
}
.same-auction-details .list-item .item-img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}
.same-auction-details  .list-item .item-img-bg {
  width: 200px;
  height: 200px;
  position: absolute;
  z-index: 0;
  left: 0px;
  top: 0px;
}
.same-auction-details .swiper-img{
  width: 100%;
  height: 200px;
}
.same-auction-details  .list-item .item-img-inside {
  object-fit: contain;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.same-auction-details  .list-item dl {
  width: 339px;
  font-size: 26px;
  margin-left: 20px;
  height: 200px;
}
.same-auction-details  .list-item dl dt {
  color: #666;
}
.same-auction-details  .list-item dl dt span:nth-child(2) {
  color: #c8161e;
  display: inline-block;
  border: 2px solid #c8161e;
  padding-left: 23px;
  padding-right: 23px;
  border-radius: 30px;
  font-size: 22px;
  float: right;
}
.same-auction-details .list-item dl dd:nth-child(2) {
  color: #333;
  margin-top: 20px;
  font-size: 26px;
  /* height: 84px; */
  overflow:hidden;
 display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
}
.same-auction-details .list-item dl dd:nth-child(3) {
  position: absolute;
  bottom: 20px;
}
.same-auction-details  .list-item dl dd .unit {
  font-size: 22px;
  color: #c8161e;
  margin-left: 10px;
}
.same-auction-details .list-item dl dd .unit-count {
  font-size: 26px;
  color: #c8161e;
  margin-left: 10px;
}
.same-auction-details .list-item dl dd .qpj {
  font-size: 26px;
  color: #666;
}
.same-auction-details .list-item .img-sign {
  color: #fff;
  font-size: 26px;
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: #000;
  line-height: 50px;
  text-align: center;
  bottom: 20px;
  /* background-color: rgba(3, 2, 2, 0.4); */
  border-radius: 10px;
  opacity: 0.4;
  z-index: 800;
}
.same-auction-details  .list-item .img-sign-get {
  color: #fff;
  font-size: 26px;
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: #000;
  line-height: 50px;
  text-align: center;
  bottom: 29px;
  background-color: rgba(238, 31, 31, 0.781);
  border-radius: 10px;
  z-index: 800;
}
.same-auction-details .list-item .img-sign-no-get {
  color: #fff;
  font-size: 26px;
  position: absolute;
  width: 200px;
  height: 50px;
  background-color: #000;
  line-height: 50px;
  text-align: center;
  bottom: 29px;
  border-radius: 10px;
  opacity: 0.4;
  z-index: 800;
}
.same-auction-details .limit-transport {
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 0;
  background: #999;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 134px;
  height: 35px;
  position: absolute;
  top: 20px;
  z-index: 200;
  /* top: 10px;
  left: 10px; */
  text-align: center;
  line-height: 35px;
}
.same-auction-details .all-end{width: 100%;height: 180px;background: #eee;line-height: 180px;font-size: 30px;color: #999;text-align: center;display: flex;align-items: center;}
.same-auction-details .all-end  .end-line-left{width: 150px;height: 2px;background-color: #ccc;margin-left: 30px;margin-right: 30px;}
.same-auction-details .all-end   .end-line-right{width: 150px;height: 2px;background-color: #ccc;margin-left: 30px;}
.same-auction-details .no-result{width: 100%;height: 45px;font-size: 32px;color: #999;line-height: 45px;text-align: center;margin-top: 379px;}

</style>
