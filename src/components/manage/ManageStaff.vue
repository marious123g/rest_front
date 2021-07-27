<template>
  <div>
    <el-container class="row">
        <el-button round type="success" size="small" icon="el-icon-circle-plus" @click="handleAdd()">新增员工</el-button>
    </el-container>
    <el-table
      ref="mytable"
      :data="table_data"
      style="width: 100%"
      height="450"
      border
    >
      <el-table-column
        align="center"
        v-for="(item,index,key) in table_columns"
        :item="item"
        :key="key"
        :index="index"
        :label="item.label"
      >
        <template slot-scope="scope">
          <el-input
            v-if=" scope.row.edit"
            size="small"
            v-model="scope.row[item.prop]"
            :placeholder="'请输入'+item.label"
          ></el-input>
          <span v-if="  !scope.row.edit">{{scope.row[item.prop]}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <!-- 全局控制的编辑 -->
          <div v-if="is_edit&&scope.row.add==undefined" style="display: inline-block;">
            <!-- 编辑 -->
           <el-button round 
           type="primary" 
           size="small" 
           icon="el-icon-edit" 
           v-if="!scope.row.edit" 
           @click="handleEdit(scope.$index, scope.row)"
           >编辑</el-button>
            <!-- 保存 -->
            <el-button round
              size="small"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row)"
              icon="el-icon-success"
            >保存</el-button>
          </div>
          <!-- 添加控制 -->
          <div v-if="scope.row.add!=undefined&&scope.row.add" style="display: inline-block;">
            <!-- 保存 -->
            <el-button round
              size="small"
              type="success"
              :plain="true"
              v-if="scope.row.edit"
              @click="handleSave(scope.$index, scope.row)"
              icon="el-icon-success"
            >保存</el-button>
          </div>
          <!-- 全局控制删除 -->
          <el-button round
            size="small"
            v-if="is_delete&&scope.row.add==undefined"
            :plain="true"
            type="danger" 
            @click="handleDelete(scope.$index, scope.row)"
            icon="el-icon-delete"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {requestData} from "../../ajax"
export default {
  
  methods: {
    testt()
      {
        var require_data=new FormData();
        requestData("get","managestaff.json",require_data).then((resp)=>{
          var cont_data=resp.data;
          this.dataArray=cont_data["dataarray"];
          this.table_data=cont_data["dataarray"];
        }
        )
        
      },
    
    //编辑
    handleEdit(index, row) {
      console.log(index, row);
      row.edit = true;
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
      row.edit = false;

      delete this.table_data[index].add;

      this.$message({
        message: "保存成功！",
        type: "success"
      });
    },
    handleAdd() {
      var addDataJson = {};
      for (var key in this.new_date_json) {
        if (key === "edit") {
          delete addDataJson[key];
        } else if (key === "add") {
          delete addDataJson[key];
        } else {
          addDataJson[key] = "";
        }
      }
      addDataJson.edit = true;
      addDataJson.add = true;
      this.table_data.push(addDataJson);
    },
    //初始化编辑属性
    initEditAttribute() {
      //var self = this;
      //var edit = self.edit;

      var dataArray = [
        
      ];

      if (dataArray.length > 0) {
        //添加编辑事件
        for (var index in dataArray) {
          dataArray[index]["edit"] = false;
          this.table_data.push(dataArray[index]);
        }

        if (Object.keys(this.new_date_json).length === 0) {
          //新增时，初始化数据结构
          this.initAddDataJson(dataArray[0]);
        }
      }
      console.log("this.tableData:", this.table_data);
    },
    initAddDataJson(dataArray) {
      //新增时，初始化数据结构
      var dataJson = dataArray;
      var newDateJson = {};
      for (var key in dataJson) {
        if (key === "edit") {
          newDateJson[key] = "true";
        } else {
          newDateJson[key] = "";
        }
      }
      newDateJson["add"] = true;
      this.new_date_json = newDateJson;
    }
  },
  mounted: function() {
    this.initEditAttribute();
    //确保方法在页面渲染后调用

    this.$nextTick(function() {
      /////方法
      this.tableRowClassName();
    });
    this.testt();
  },
  watch: {
    space_color: function() {
      //监听数据变化
      this.$nextTick(function() {
        /////方法
        this.tableRowClassName();
      });
    },
    table_data: function() {
      //监听数据变化f
      this.$nextTick(function() {
        /////方法
        this.tableRowClassName();
      });
    }
  },
  data() {
    return {
      new_date_json: {}, //数据结构
      is_edit: true, //是否可编辑
      is_delete: true, //是否可删除
      //表头信息
      table_columns: [
        {
          prop: "name",
          label: "员工姓名",
          width: "200"
        },
        {
          prop: "job",
          label: "职位",
          width: "200"
        },
        {
          prop: "id",
          label: "身份证",
        },
        {
            prop:"account",
            label:"账号",
        },
        {
            prop:"password",
            label:"密码",
        },
      ],
      //表格数据
      table_data: [
       
      ]
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