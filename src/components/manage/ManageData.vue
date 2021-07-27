<template>
<el-row>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column label="经营情况">
      <el-table-column
        prop="name"
        label="当天管理员"
        width="120">
      </el-table-column>
      <el-table-column label="总收入：666666">
        <el-table-column
          prop="orderquantities"
          label="订单数量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="unusual"
          label="是否异常"
          width="120">
        </el-table-column>
        <el-table-column
          prop="income"
          label="当日收入"
          width="300">
        </el-table-column>
        <el-table-column
          prop="comfirm"
          label="管理员确认"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>


 </el-table>
 <el-button type="text" class="button5" style="height:40px;width:100px;font-size:15px" @click="open">确认</el-button>
 </el-row>
</template>

<script>
import {requestData} from "../../ajax"
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted()
    {
     this.testt()
    },
     methods: {
       testt()
      {
        var require_data=new FormData();
        requestData("get","managedishes.json",require_data).then((resp)=>{
          var cont_data=resp.data;
          
          this.table_data=cont_data["dataarray"];

        }
        )
        
      },
      open() {
        this.$alert('确认经营情况', '经营情况', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
    /*methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }*/
  }
</script>

<style>
.button5{
    position: relative;
    float: middle;
    size: 200px;
 width: 200px;
 height:200px;
 top :50px;
  left: 1000px;

    color:rgba(7, 7, 5, 0.815);
    background-color: rgb(17, 12, 12);
}

</style>
