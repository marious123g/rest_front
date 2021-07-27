<template>
  <div>
    <h2>
      <el-button type="text" icon="el-icon-d-arrow-left" @click="backToList">
        <font size="4">返回 &nbsp;</font>
      </el-button>
      订单详情：
      桌号：{{this.orderData.table}}；
      人数：{{this.orderData.person}}；
      菜品数量：{{this.orderData.num}}；
      订单ID：{{this.orderData.id}}；
    </h2>
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="450px"
      >
      <el-table-column
        prop="name"
        label="菜名"
        min-width="75px"
      />
      <el-table-column
        prop="num"
        label="数量"
        min-width="75px"
      />
      <el-table-column
        prop="price"
        label="单价"
        min-width="75px"
      />
      <el-table-column
        prop="cost"
        label="总价"
        min-width="75px"
      />
    </el-table>
    <h3 style="margin: 15px">
      总金额：{{this.totalCost}}
    </h3>
    <el-button 
      type="primary" 
      style="width:100px" 
      @click="checkOut" 
      :loading="logining"
      v-if="this.status==false"
      >
      结账
    </el-button>
    <el-button 
      type="primary" 
      style="width:100px" 
      plain
      disabled
      v-if="this.status==true"
      >
      结账
    </el-button>
  </div>
</template>

<script>
import {requestData} from "../../ajax"
  export default {
    data() {
      return {
        totalCost: '￥0.00',
        status: false,
        orderData: {
          table: '',
          status: '',
          num: '',
          cost: '',
          id: '',
        },
        tableData: [
          {
            name: '宫保鸡丁',
            num: '2',
            price: '5.00',
            cost: '10.00',
          },
        ]
      }
    },
    created() {
      this.orderData.id = sessionStorage.getItem('orderID');
      this.orderData.table = sessionStorage.getItem('orderTable');
      this.orderData.status = sessionStorage.getItem('orderStatus');
      this.orderData.num = sessionStorage.getItem('orderNum');
      this.orderData.cost = sessionStorage.getItem('orderCost');
      this.orderData.person = sessionStorage.getItem('orderPerson');
    },
      mounted()
    {
     this.testt()
    },
    methods: {
        testt()
      {
        var require_data=new FormData();
        requestData("get","orderdetaile.json",require_data).then((resp)=>{
          var cont_data=resp.data;
          this.tableData=cont_data["tabledata"];
          

        }
        )
        
      },
  
      backToList() {
        this.$router.push({path: '/frame/orderList'});
      },
      checkOut() {
        this.status = true;
      }
    }
  }
</script>


<style scoped>

</style>
