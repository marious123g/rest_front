
<template>
  <div>

    <!-- 添加按钮 -->
    <el-container class="row">
        <el-button round type="success" size="small" icon="el-icon-circle-plus" @click="handleAdd()">新增菜品</el-button>
    </el-container>

    <!-- 表格部分 -->
    <el-table
      ref="mytable"
      :data="table_data"
      style="width: 100%"
      height="450"
      border>

      <!-- 菜品图片 -->
      <el-table-column label="菜品图片" align="center">
        <template slot-scope="scope">
           <el-input
            v-if=" scope.row.edit"
            size="small"
            clearable
            v-model="scope.row.image"
            :placeholder="'请输入图片链接'"
          ></el-input>
           <el-image
           v-if="!scope.row.edit"
           style="width: 60px; height: 60px" 
           :src="scope.row.image">
          </el-image>
        </template>
      </el-table-column>

      <!-- 菜品名称和价格 -->
      <el-table-column
        align="center"
        v-for="(item,index,key) in table_columns"
        :item="item"
        :key="key"
        :index="index"
        :label="item.label">
        <template slot-scope="scope">
          <el-input
            v-if=" scope.row.edit"
            size="small"
            clearable
            v-model="scope.row[item.prop]"
            :placeholder="'请输入'+item.label"
          ></el-input>
          <span v-if="!scope.row.edit">{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>

      <!-- 操作 -->
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">

          <!-- 全局控制的编辑-->
          <!--可编辑，且未定义add，则显示此栏 -->
          <div v-if="is_edit&&scope.row.add==undefined" style="display: inline-block;">
            <!-- 编辑 -->
           <el-button round
           style="margin:5px;"
           type="primary" 
           size="small" 
           icon="el-icon-edit" 
           v-if="!scope.row.edit" 
           @click="handleEdit(scope.$index, scope.row)"
           >编辑</el-button>
            <!-- 保存 -->
            <el-button round
              style="margin:5px;"
              size="small"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row),updateData(scope.$index)"
              icon="el-icon-success"
            >保存</el-button>
          </div>

          <!-- 添加控制 -->
          <!-- add已定义，且add=true，则显示 -->
          <div v-if="scope.row.add!=undefined&&scope.row.add" style="display: inline-block;">
            <!-- 保存 -->
            <el-button round
              style="margin:5px;"
              size="small"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row),addData(scope.$index)"
              icon="el-icon-success"
            >保存</el-button>
          </div>
          
          <!-- 全局控制删除 -->
          <!-- 可删除，且add未定义，则显示 -->
          <el-button round
           style="margin:5px;"
            size="small"
            v-if="is_delete&&scope.row.add==undefined"
            :plain="true"
            type="danger" 
            @click="handleDelete(scope.$index, scope.row),deleteData(scope.row.name)"
            icon="el-icon-delete"
          >删除</el-button>

        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
// import axios from 'axios';
import {requestData} from "../../ajax"
export default {
  // inject:['reload'],
  mounted: function(){
    this.downloadData();
  },
  methods: {
    //下载数据
    downloadData()
      { 
        var require_data=new FormData();
            requestData("get","getAllDish",require_data).then((resp)=>{
              var cont_data=resp.data;
              this.table_data=cont_data;
              }
            )
      },
    //更新数据
    updateData(index)
      {
        var data={
          name:this.table_data[index].name,
          image:this.table_data[index].image,
          price:this.table_data[index].price,
          category:this.table_data[index].price,
        }
        requestData("post","/updateDish",data).then((resp)=>{
          console.log(resp.data);
        })
      },
    //新增数据
    addData(index)
      {
        console.log("ready to add dish")
        var data={
          name:this.table_data[index].name,
          image:this.table_data[index].image,
          price:this.table_data[index].price,
          category:this.table_data[index].price,
        }
        requestData("post","/addDish",data).then((resp)=>{
          console.log(resp.data);
        })
      },
    //删除数据
    deleteData(data)
      {
        let dat={
          name:data
        }
        requestData("post","/deleteDish",dat).then((resp)=>{
          console.log(resp.data);
        })
      },
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
      this.table_data[index].edit = true;
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row);
      this.table_data.splice(index, 1);
      this.$message({
        message: "删除成功！",
        type: "success"
      });
    },
    //保存
    handleSave(index, row) {
      console.log(index, row);
      this.table_data[index].edit = false;
      delete this.table_data[index].add;
      this.$message({
        message: "保存成功！",
        type: "success"
      });
    },
    //添加
    handleAdd() {
      var addDataJson = {};
      addDataJson.edit = true;
      addDataJson.add = true;
      this.table_data.push(addDataJson);
    },
  },
  data() {
    return {
      is_edit: true, //是否可编辑
      is_delete: true, //是否可删除
      //表头信息
      table_columns: [ 
        {
          prop: "name",
          label: "菜品名称",
        },
        {
          prop: "price",
          label: "单价",
        },
        {
          prop:"category",
          label:"菜品类别",
          //1代表主食，2代表小食，3代表饮料
        },
      ],
      //表格数据
      table_data: [
        {
          image: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "小龙虾",
          price: "98",
          category:"1",
        },
       {
          name: "薯条",
          price: "25",
          image:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          category:"2",
        },
         {
          image:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
          name: "可乐",
          price: "5",
          category:"3",
        },
      ],
    };
  }
};
</script>

<style scoped>
.row{
     height: 70px;
     padding: 15px;
  min-width: 100px;
}

</style>