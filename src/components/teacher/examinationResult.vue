<template>
  <div class="examination-result">
    <template>
      <v-table
        :width="750"
        :columns="columns"
        :table-data="tableData"
        title-row-height="80"
        row-height="80"
        :column-cell-class-name="columnCellClass"
        :show-vertical-border="false"
      ></v-table>
    </template>
  </div>
</template>
<script>
export default{
  data () {
    return {
      tableData: [
        {name: '未知', num: '4', highest: '300', lowest: '300', average: '300'}
      ],
      columns: [
        {field: 'name', title: '班级名称', width: 230, titleAlign: 'center', columnAlign: 'center'},
        {field: 'num', title: '考试人数', width: 220, titleAlign: 'center', columnAlign: 'center'},
        {field: 'highest', title: '最高分', width: 100, titleAlign: 'center', columnAlign: 'center'},
        {field: 'lowest', title: '最低分', width: 100, titleAlign: 'center', columnAlign: 'left'},
        {field: 'average', title: '平均分', width: 100, titleAlign: 'center', columnAlign: 'left'}
      ]
    }
  },
  methods :{
    columnCellClass (rowIndex, columnName, rowData) {
      if (columnName === 'highest') {
        return 'column-cell-class-name-color1'
      }
      if (columnName === 'lowest') {
        return 'column-cell-class-name-color2'
      }
      if (columnName === 'average') {
        return 'column-cell-class-name-color3'
      }
    }
  }

}
</script>
<style lang="less">
.examination-result{
.v-table-header-row{
.table-title{
  color: #838383;
}
}

.column-cell-class-name-color1{
  color: #3774ff;
}
.column-cell-class-name-color2{
  color: #7f5c40;
}
.column-cell-class-name-color3{
  color: #f88907;
}
}
</style>
