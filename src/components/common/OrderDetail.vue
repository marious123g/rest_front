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
  export default {
    data() {
      return {
        orderData: {
          table: '',
          status: '',
          num: '',
          cost: '',
          id: '',
        }
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
    methods: {
      backToList() {
        console.log('what?');
        this.$router.push({path: '/frame/orderList'});
      },
    }
  }
</script>


<style scoped>

</style>
