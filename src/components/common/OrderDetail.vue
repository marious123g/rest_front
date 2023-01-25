<template>
  <div>
    <div class="go-back-btn">
      <el-button type="text" icon="el-icon-d-arrow-left" @click="backToList">>
        <font size="4">返回 &nbsp;</font>
      </el-button>
    </div>
    <div class="order-detail">
      <h2>订单详情</h2>
      <div class="order-detail">
      桌号：{{this.$store.state.table_id}}
      人数：{{this.$store.state.person_num}}
      菜品数量：{{this.orderDishList.length}}
      订单ID：{{orderId}}
        </div>
    </div>
    <el-table
      :data="orderDishList"
      style="width: 100%"
      max-height="450px"
      >
      <el-table-column
        prop="name"
        label="菜名"
        min-width="75px"
      />
      <el-table-column
        prop="amount"
        label="数量"
        min-width="75px"
      />
      <el-table-column
        prop="price"
        label="单价"
        min-width="75px"
      />
      <el-table-column
        prop="status"
        label="状态"
        min-width="75px"
      />
    </el-table>
  </div>
</template>

<script>
import {requestData} from "@/ajax"
  export default {
    data() {
      return {
        totalCost: 0,
        orderId:0,
        orderDishList: []
      }
    },
    created() {
      this.orderId = sessionStorage.getItem('orderID');
      this.totalCost = sessionStorage.getItem('cost');
    },
      mounted()
    {
     this.getOrderDish()
    },
    methods: {
      getOrderDish()
      {
        let data = {
          orderId: this.orderId,
        }
        requestData("post","findOrderDish",data).then((resp)=>{
              var cont_data=resp.data;
              this.orderDishList=cont_data;
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
.order-detail{
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
