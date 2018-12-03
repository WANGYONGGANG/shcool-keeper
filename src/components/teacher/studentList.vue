<template>
  <div class="student-list">
    <van-cell-group>
      <van-cell title="上课时间：" v-bind:value="classTimeReturn(beginTime,endTime)"/>
      <van-cell title="上课内容">{{courseName}}</van-cell>
    </van-cell-group>
    <div class="list-search">
      <div class="list-search-l">
        <van-search placeholder="输入学生姓名" background="#fff" show-action v-model="studentName">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="operation">排序</div>
      <div class="operation" v-on:click="addStu">添加学员</div>
    </div>
    <div class="list-table">
      <!-- <div class="checked-item">
        <ul>
          <li>
            <input type="checkbox" id="categoryAll" class="item-selected" v-on:click="allChecked">
          </li>
          <li v-for="(item,index) in allDatas" v-bind:key="index">
            <input
              type="checkbox"
              name="category"
              class="item-selected"
              v-model="cusSelectedIds"
              v-bind:value="JSONTOstringify(item)"
            >
          </li>
        </ul>
      </div>-->
      <div
        class="v-table-views v-table-class"
        style="width: 750px; overflow: visible; background-color: rgb(255, 255, 255);"
      >
        <!---->
        <div class="v-table-rightview" style="width: 750px;">
          <div
            class="v-table-header v-table-title-class"
            style="width: 749px; background-color: rgb(255, 255, 255);"
          >
            <div class="v-table-header-inner" style="display: block;">
              <table border="0" cellspacing="0" cellpadding="0" class="v-table-htable">
                <tbody>
                  <tr class="v-table-header-row">
                    <td class>
                      <div
                        class="v-table-title-cell horizontal-border"
                        style="width: 160px; height: 100px; text-align: center;"
                      >
                        <span class="table-title">
                          <span>姓名</span>
                          <!---->
                          <!---->
                        </span>
                      </div>
                    </td>
                    <td class>
                      <div
                        class="v-table-title-cell horizontal-border"
                        style="width: 130px; height: 100px; text-align: center;"
                      >
                        <span class="table-title">
                          <span>出勤</span>
                          <input type="checkbox" id="categoryAll1" class="item-selected" v-on:click="allCheckedChuqin">
                          <!---->
                          <!---->
                        </span>
                      </div>
                    </td>
                    <td class>
                      <div
                        class="v-table-title-cell horizontal-border"
                        style="width: 200px; height: 100px; text-align: center;"
                      >
                        <span class="table-title">
                          <span>计费（小时）</span>
                           <input type="checkbox" id="categoryAll2" class="item-selected" v-on:click="allCheckedJifei">
                          <!---->
                          <!---->
                        </span>
                      </div>
                    </td>
                    <td class>
                      <div
                        class="v-table-title-cell horizontal-border"
                        style="width: 130px; height: 100px; text-align: center;"
                      >
                        <span class="table-title">
                          <span>试听</span>
                          <input type="checkbox" id="categoryAll3" class="item-selected" v-on:click="allCheckedShiting">
                          <!---->
                          <!---->
                        </span>
                      </div>
                    </td>
                    <td class>
                      <div
                        class="v-table-title-cell horizontal-border"
                        style="width: 130px; height: 100px; text-align: center;"
                      >
                        <span class="table-title">
                          <span>缺勤原因</span>
                          <!---->
                          <!---->
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="v-table-body v-table-body-class v-table-rightview-special-border v-scrollbar-wrap" v-for="(item,index) in tableData" v-bind:key="index"
            style="width: 750px;">
            <div class="v-checkbox-group">
              <table cellspacing="0" cellpadding="0" border="0" class="v-table-btable">
                <tbody>
                  <tr class="v-table-row">
                    <td colspan rowspan class>
                      <div v-on:click="openStuItem($event)"
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 160px; height: 100px; line-height: 100px; text-align: center;"
                      >
                        <span>{{item.name}}</span>
                      </div>
                    </td>
                    <td colspan rowspan class>
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 130px; height: 100px; line-height: 100px; text-align: center;">
                          <input  type="checkbox" name="category1" class="item-selected" v-model="chuqinIds" v-bind:value="item.id">
                      </div>
                    </td>
                    <td colspan rowspan class>
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 200px; height: 100px; line-height: 100px; text-align: center;"
                      >
                        <span>{{item.jifei}}</span>
                          <input  type="checkbox" name="category2" class="item-selected" v-model="jifeiIds" v-bind:value="item.id">
                      </div>
                    </td>
                    <td colspan rowspan class>
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 130px; height: 100px; line-height: 100px; text-align: left;"
                      >
                         <input  type="checkbox" name="category3" class="item-selected" v-model="shitingIds" v-bind:value="item.id">
                      </div>
                    </td>
                    <td colspan rowspan class style="position:relative;">
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 130px; height: 100px; line-height: 100px; text-align: left;" @click="selectCustomerStatePop($event)"
                      >
                        <span>.....</span>
                      </div>
                      <div class="yuanyin-list"  v-show="false">
                        <ul>
                          <li v-for="(item,index) in customerDataList" v-bind:key="index" @click="selectedQueqin(item.id,item.name,$event)">{{item.name}}</li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr style="text-align:right;" v-show="false"><td style="width: 130px; height: 100px;"></td><td style="width: 130px; height: 100px;"></td><td  style="width: 130px; height: 100px;"></td><td class="seleced-yuanyin"></td></tr>
                   <tr class="v-table-row v-table-row1" v-show="false">
                    <td colspan rowspan class>
                      <div   v-on:click="deleteStu(item.id,$event)"
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 160px; height: 100px; line-height: 100px; text-align: center;"
                      >
                        <span>移除学员</span>
                      </div>
                    </td>
                    <td colspan rowspan class>
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 130px; height: 100px; line-height: 100px; text-align: center;">
                          <!-- <input  type="checkbox" name="category1" class="item-selected" v-model="chuqinIds" v-bind:value="item.id"> -->
                      </div>
                    </td>
                    <td colspan rowspan class>
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 200px; height: 100px; line-height: 100px; text-align: center;"
                      >
                        <span>{{item.queqin}}0次缺勤</span>
                          <!-- <input  type="checkbox" name="category2" class="item-selected" v-model="jifeiIds" v-bind:value="item.id"> -->
                      </div>
                    </td>
      
                    <td colspan rowspan class>
                      <div
                        title
                        class="v-table-body-cell horizontal-border"
                        style="width: 230px; height: 100px; line-height: 100px; text-align: left;"
                      >
                        <span>电话：{{item.studentMobile}}</span>
                      </div>
                    </td>
                  </tr>                 
                </tbody>
              </table>
            </div>
          </div>
          <!---->
        </div>
        <!---->
        <!---->
        <div class="v-table-drag-line" style="display: none;"></div>
      </div>
      <!-- <v-table
        :width="720"
        :title-row-height="100"
        :row-height="100"
        :columns="columns"
        :table-data="tableData"
        :show-vertical-border="false"
      ></v-table>-->
    </div>
    <ul class="bottom-btn fn-clear">
      <li class="bottom-btn-item01">共{{allDatas.length}}人
        <br>计费：{{jifeiIds.length}}
      </li>
      <li class="bottom-btn-item01">出勤：{{chuqinIds.length}}
        <br>试听：{{shitingIds.length}}
      </li>
      <li class="bottom-btn-item03">
        <span @click="classBeginAndNaming">点名上课</span>
      </li>
    </ul>
    <attention v-if="showAttentionAlert" v-bind:attentionText="attentionText" style="z-index:600;"></attention>
    <!-- <select-pop :lists="customerData.lists" :isShow.sync="customerData.isShow" :selectItem.sync="customerData.selectItem"></select-pop> -->
  </div>
</template>
<script>
import { api } from "../../../static/js/request-api/request-api.js";
import SelectPop from '../popup/bottomSelectPop'
import attention from "../teacher/attention";
import Router from "vue-router";
export default {
  components: {
    attention,
    SelectPop,
  },
  data() {
    return {
      value: "",
      courseName: "",
      beginTime: "",
      attentionText: "提交成功",
      showAttentionAlert: false,
      endTime: "",
      studentName: "",
      cusSelectedIds: [],
      chuqinIds:[],
      stringDeleteStudent:[],
      jifeiIds:[],
      shitingIds:[],
      customerDataList:[],
      allDatas: [],
      tableData: [
        //  {"name":"赵伟","chuqin":"156*****1987","jifei":"钢琴、书法、唱歌","shiting":"上海市黄浦区金陵东路569号17楼","queqin":""}
      ],
      columns: [
        {
          field: "name",
          title: "姓名",
          width: 160,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "chuqin",
          title: "出勤",
          width: 130,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "jifei",
          title: "计费（小时）",
          width: 200,
          titleAlign: "center",
          columnAlign: "center"
        },
        {
          field: "shiting",
          title: "试听",
          width: 130,
          titleAlign: "center",
          columnAlign: "left"
        },
        {
          field: "queqin",
          title: "缺勤原因",
          width: 130,
          titleAlign: "center",
          columnAlign: "left"
        }
      ]
    };
  },
  mounted() {
    this.getMyClassRoster();
 
    this.initData();
       this.findAllValidReasonsForLeave();
  },
  methods: {
    onSearch() {
      this.tableData = [];
      this.getMyClassRoster();
    },
      selectCustomerStatePop (event) {
      let el = event.currentTarget;
      //阻止事件冒泡
      event.stopPropagation()
      $(el).parent().parent().next("tr").show();
      $(el).next(".yuanyin-list").show();
      // this.customerData.isShow=true;
    },
    //全部选中
    allCheckedChuqin() {
      let categoryChecked = document.getElementById("categoryAll1");
      if (categoryChecked.checked) {
        var items = document.getElementsByName("category1");
        for (let i = 0; i < items.length; i++) {
          if (!items[i].checked) {
            items[i].checked = true;
          }
        }
      } else {
        var items = document.getElementsByName("category1");
        for (let i = 0; i < items.length; i++) {
          if (items[i].checked) {
            items[i].checked = false;
          }
        }
      }
    },
     //全部选中
    allCheckedJifei() {
      let categoryChecked = document.getElementById("categoryAll2");
      if (categoryChecked.checked) {
        var items = document.getElementsByName("category2");
        for (let i = 0; i < items.length; i++) {
          if (!items[i].checked) {
            items[i].checked = true;
          }
        }
      } else {
        var items = document.getElementsByName("category2");
        for (let i = 0; i < items.length; i++) {
          if (items[i].checked) {
            items[i].checked = false;
          }
        }
      }
    },
    selectedQueqin(id,name,event){
       let el = event.currentTarget;
      //阻止事件冒泡
      event.stopPropagation();
      $(el).parent().parent().parent().parent().next("tr").find(".seleced-yuanyin").text(name);
       $(el).parent().parent().hide();

        
    },
     //全部选中
    allCheckedShiting() {
      let categoryChecked = document.getElementById("categoryAll3");
      if (categoryChecked.checked) {
        var items = document.getElementsByName("category3");
        for (let i = 0; i < items.length; i++) {
          if (!items[i].checked) {
            items[i].checked = true;
          }
        }
      } else {
        var items = document.getElementsByName("category3");
        for (let i = 0; i < items.length; i++) {
          if (items[i].checked) {
            items[i].checked = false;
          }
        }
      }
    },
    //弹出层提示
    alertMessage: function(alertMessage) {
      let _self = this;
      _self.attentionText = alertMessage;
      _self.showAttentionAlert = true;
      setTimeout(function() {
        _self.showAttentionAlert = false;
        // window.location.href = "/teacher/customerManagement?type=0";
      }, 2000);
    },
    addStu() {
      let timeable_id = this.$route.query["timeable_id"];
      this.$router.push({
        path: "/teacher/addStu",
        query: { timeable_id: timeable_id }
      });
    },
    initData: function() {
      this.beginTime = this.$route.query["beginTime"];
      this.endTime = this.$route.query["endTime"];
      this.courseName = this.$route.query["courseName"];
    },
    classTimeReturn: function(beginTime, endTime) {
      let date3 = new Date(beginTime).getTime() - new Date(endTime).getTime();
      //计算出相差天数
      var days = Math.floor(date3 / (24 * 3600 * 1000));

      //计算出小时数

      var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
      var hours = Math.floor(leave1 / (3600 * 1000));
      //计算相差分钟数
      var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
      var minutes = Math.floor(leave2 / (60 * 1000));

      //计算相差秒数
      var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
      var seconds = Math.round(leave3 / 1000);
      return beginTime + "~" + endTime + " ,时长" + hours + ":" + minutes + "0";
    },
    //上课点名
    classBeginAndNaming: function() {
      let _self = this;
      // let params = {};
      // let stringDeleteStudent = [];
      let studentinfosArray = [];
      studentinfosArray = this.cusSelectedIds;
      studentinfosArray=JSON.stringify(this.allDatas);
      // for (let i = 0; i < studentinfosArray.length; i++) {
      //   stringDeleteStudent.push(JSON.parse(studentinfosArray[i]).id);
      // }
      // params.stringDeleteStudent=stringDeleteStudent;
      // params.studentinfos=studentinfosArray;
      // params.timeable_id=_self.$route.query.timeable_id;
      let params = new URLSearchParams();
      params.append("stringDeleteStudent",null);
      params.append("studentinfos",  studentinfosArray );
      params.append("timeable_id", _self.$route.query.timeable_id);
      api
        .classBeginAndNaming(params)
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            let code = res.data.code;
            _self.alertMessage("操作成功");
            // if (code === 1) {
            //   console.log(res.data.data);

              // let responsibleList = res.data.data;
              // let newResponsibleList = [];
              // for (let i = 0; i < responsibleList.length; i++) {
              //   let newObj = {};
              //   newObj.itemName = responsibleList[i].name;
              //   newResponsibleList.push(newObj);
              // }
              // this.rightPopDates.item03.data = newResponsibleList;
              // this.rightPopDates.item03.selectItem = responsibleList[0].name;
            // }
          } else {
            let params = { msg: "上课点名" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          _self.alertMessage("学员信息不匹配");
        });
    },
    //json对象转字符串
    JSONTOstringify(jsonObj) {
      return JSON.stringify(jsonObj);
    },
      //获取缺勤原因
    findAllValidReasonsForLeave() {
      let _self = this;
      api.findAllValidReasonsForLeave(null)
        .then(res => {
          if (res.status == 200) {
                let code=res.data.code;
                if(code===1){
                  console.log(res.data.data);

                  let responsibleList=res.data.data;
                  _self.customerDataList=responsibleList;
                  // let newResponsibleList=[];
                  // for(let i=0;i<responsibleList.length;i++){
                  //   let newObj={};
                  //   newObj.itemName=responsibleList[i].name;
                  //   newObj.id=responsibleList[i].id;
                  //   newResponsibleList.push(responsibleList[i].name);
                  // }
                  // this.customerData.lists=newResponsibleList;
                  // this.customerData.selectItem=responsibleList[0].name;
                }
          } else {
            let params = { msg: "获取招生来源" };
            // GlobalVue.$emit("alert", params);
            // GlobalVue.$emit("blackBg", null);
          }
        })
        .catch(error => {
          let params = { msg: "获取招生来源" };
          // GlobalVue.$emit("alert", params);
          // GlobalVue.$emit("blackBg", null);
        });
    },
    //打开学员详细
    openStuItem(event){
      let el = event.currentTarget;
      //阻止事件冒泡
      event.stopPropagation();
      $(el).parent().parent().parent().find(".v-table-row1").toggle();
    },
    //移除学员
    deleteStu(id,event){
      this.stringDeleteStudent.push(id);
      let el = event.currentTarget;
      //阻止事件冒泡
      event.stopPropagation();
      $(el).parent().parent().hide();
      $(el).parent().parent().prev(".v-table-row").hide();
    },
    getMyClassRoster() {
      let _self = this;
      let params = {};
      params.order = null;
      params.sort = null;
      params.student_name = null;
      params.timeable_id = this.$route.query["timeable_id"];
      params.student_name = this.studentName;
      api.getMyClassRoster(params).then(res => {
        if (res.data.code == 1) {
          let allDatas = [];
          allDatas = res.data.data;
          _self.allDatas = allDatas;
          if (allDatas) {
            for (let i = 0; i < allDatas.length; i++) {
              let stu = {};
              stu.name = allDatas[i].studentName;
              let isAttendance = "是";
              if (allDatas[i].isAttendance) {
                isAttendance = "是";
              } else {
                isAttendance = "否";
              }
              stu.chuqin = isAttendance;
              stu.jifei = allDatas[i].realPeriodCount;
              let isTry = "是";
              if (allDatas[i].isTry) {
                isTry = "是";
              } else {
                isTry = "否";
              }
              stu.shiting = isTry;
              stu.queqin = allDatas[i].absentId;
              stu.studentMobile=allDatas[i].studentMobile;
              stu.id= allDatas[i].id;
              _self.tableData.push(stu);
            }
          }
        }
      });
    },
    goTo() {}
  }
};
 
</script>
<style lang="less">
.student-list {
   .item-selected {
        width: 26px;
        height: 26px;
      }
      .yuanyin-list{
        width: 200px;
        background: #fff;
        color: #333;
        position: absolute;
        top:100px;
        text-align: center;
        left: -160px;
        ul li{
          border-bottom: 1px solid #838383;
        }
        ul li:hover{
          background: #4286ed;
        }
      }
  .list-table {
    display: flex;
    .checked-item {
      width: 30px;
      ul {
        li {
          background: #fff;
          height: 100px;
          text-align: center;
          line-height: 100px;
          border-bottom: 1px solid rgba(221, 221, 221, 1);
        }
      }
    }
  }
  .list-search {
    background: #fff;
    height: 105px;
    margin-top: 20px;
    padding: 10px 20px;
    .list-search-l {
      float: left;
      width: 452px;
    }
    .van-cell {
      font-size: 26px;
    }
    .van-cell__left-icon {
      font-size: 26px;
      top: 15px;
      margin-right: 10px;
    }
    .van-search__action {
      font-size: 26px;
      background: #eff1f6;
      position: relative;
      left: -32px;
      border-radius: 35px;
      padding: 16px 23px;
    }
    .van-search {
      width: 462px;
    }
    .van-search .van-cell {
      border: 1px #eff1f6 solid;
      border-right: none;
      border-top-left-radius: 35px;
      border-bottom-left-radius: 35px;
      padding: 0px 10px;
      line-height: 54px;
    }
    .operation {
      float: right;
      padding: 16px 23px;
      font-size: 26px;
      background: #eff1f6;
      border-radius: 35px;
      margin: 6px 5px 0 0;
    }
  }
  .bottom-btn {
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    color: #838383;
    .bottom-btn-item01 {
      line-height: 40px;
      float: left;
      padding: 10px 0 0 20px;
      margin-left: 20px;
      font-size: 24px;
    }
    .bottom-btn-item03 {
      float: right;
      span {
        display: inline-block;
        background: #4286ed;
        color: #fff;
        line-height: 35px;
        padding: 10px 40px;
        border-radius: 40px;
        margin: 15px 15px 0;
      }
    }
  }
}
</style>
