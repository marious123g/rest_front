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
    </h2>
  </div>
</template>

<script>
  export default {
    inject:['reload'], 
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
        sessionStorage.setItem('aside','orderList');
        this.reload();
      },
    }
  }
</script>


<style scoped>

</style>
