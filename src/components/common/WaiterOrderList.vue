<template>
  <div>
    <h2 style="margin:0px auto 20px">
      未结账订单
    </h2>
    <el-table
        :data="orderList"
        style="width: 100%"
        max-height="450px"
        @row-click="clickRow"
    >
      <el-table-column
          prop="orderId"
          label="订单号"
          min-width="100px"
      />
      <el-table-column
          prop="tableNum"
          label="桌号"
          min-width="100px"
      />
      <el-table-column
          prop="personNum"
          label="人数"
          min-width="100px"
      />
      <el-table-column
          prop="createTime"
          label="创建时间"
          min-width="100px"
      />
      <el-table-column
          prop="cost"
          label="总金额"
          min-width="100px"
      />
    </el-table>
<!--    <div class="check-btn">-->
<!--      <el-button type="primary"-->
<!--                 @click="check">-->
<!--        结账-->
<!--      </el-button>-->
<!--    </div>-->

  </div>
</template>

<script>

import {requestData} from "../../ajax"
export default {
  name:"WaiterOrderList",
  data() {
    return {
      orderList:[],
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
  },
  mounted()
  {
    this.getOrder();
  },
  methods: {

    getOrder()
    {
      console.log("准备读取桌号"+this.$store.state.table_id)
      // 一定要json格式
      // 不能tableId=xxx
      let data = {
        tableId: this.$store.state.table_id,
      }
      requestData("post","waiterFindOrder",data).then((resp)=>
      {
        this.orderList=resp.data;
        for(let i=0;i<this.orderList.length;i++)
        {
          var date= new Date(this.orderList[i].createTime)
          this.orderList[i].createTime=date.toLocaleString()
        }
      })
    },
    check()
    {
      // 把每一条order都给结账了
      for(let i=0;i<this.orderList.length;i++)
      {
        let data={
          orderId:this.orderList[i].orderId
        }
        requestData("post","custmCheck",data).then((resp)=>{
          console.log(resp.data);
        })
      }
      this.$alert("结账成功")
      // 清空显示，不知道行不行 还没试
      // 好像行
      this.orderList=[];
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    clickRow(val) {
      sessionStorage.setItem('orderID',val.orderId);
      sessionStorage.setItem('status',val.status);
      sessionStorage.setItem('tableNum',val.tableNum);
      sessionStorage.setItem('cost',val.cost);
      sessionStorage.setItem('personNum',val.personNum);
      this.$router.push({path: '/frame/waiterOrderDetail'});
    },
  },

}
</script>

<style scoped>

</style>