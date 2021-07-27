<template>
  <div>
    <h2 style="margin:0px auto 20px">
      订单管理。
      <font v-if="this.userForm.userGroup=='custom'">
        （顾客页面）
      </font>
      <font v-if="this.userForm.userGroup!='custom'">
        （员工页面）
      </font>
    </h2>
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="450px"
      @row-click="clickRow"
      >
      <el-table-column v-if="this.userForm.userGroup!='custom'"
        prop="table"
        label="桌号"
        min-width="100px"
      />
      <el-table-column v-if="this.userForm.userGroup!='custom'"
        prop="person"
        label="人数"
        min-width="100px"
      />
      <el-table-column
        prop="status"
        label="状态"
        min-width="100px"
      />
      <el-table-column
        prop="num"
        label="菜品数量"
        min-width="100px"
      />
      <el-table-column
        prop="cost"
        label="总金额"
        min-width="100px"
      />
    </el-table>
  </div>
</template>

<script>
import {requestData} from "../../ajax"
  export default {
    data() {
      return {
        userForm: {
          staff: false,
          custom : false,
        },
        tableData: [
        
        ]
      }
    },
    created() {
      this.userForm.userName = sessionStorage.getItem('userName');
      this.userForm.userGroup = sessionStorage.getItem('userGroup');
      this.userForm.staff = sessionStorage.getItem('staff');
      this.testt();
    },
     
    
    methods: {
      testt()
      {
        
        var require_data=new FormData();
        requestData("get","orderdetail.json",require_data).then((resp)=>{
          var cont_data=resp.data;
          this.tableData=cont_data["tabledata"];
          

        }
        )
        
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      clickRow(val) {
        sessionStorage.setItem('orderID',val.id);
        sessionStorage.setItem('orderStatus',val.status);
        sessionStorage.setItem('orderNum',val.num);
        sessionStorage.setItem('orderTable',val.table);
        sessionStorage.setItem('orderCost',val.cost);
        sessionStorage.setItem('orderPerson',val.person);
        this.$router.push({path: '/frame/orderDetail'});
      },
    },
    
  }
</script>

<style scoped>

</style>
