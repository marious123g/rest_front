<template>
<div>
    <el-container class="row" style="text-right">
        <el-button round type="success" size="small" icon="el-icon-circle-plus">新增菜品</el-button>
    </el-container>
    <el-container>
  <el-table
    :data="tableData"
    height="450"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="菜品名称"
      width="width: 50%">
    </el-table-column>
    <el-table-column
      prop="price"
      label="单价"
      width="width: 50%">
    </el-table-column>
    <el-table-column
      prop="operation"
      label="操作"
      width="270"
      fixed="right">
      <template slot-scope="scope">
        <el-button round @click="handleClick(scope.row)" type="primary" size="small" icon="el-icon-search" >查看</el-button>
        <el-button round type="info" size="small" icon="el-icon-edit">编辑</el-button>
        <el-button round type="danger" size="small" icon="el-icon-delete">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </el-container>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },{
          name: '我想吃小龙虾',
          price: '9.9'
        },]
      }
    }
  }
</script>

<style scoped>
.row{
     height: 70px;
     padding: 15px;
  min-width: 100px;
}
</style>