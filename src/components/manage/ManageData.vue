<template>

  <div>
    <div id="background"></div>
    <el-row class="select-date">
      <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd hh:mm:ss">
      </el-date-picker>
      至
      <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd hh:mm:ss">
      </el-date-picker>

      <el-button
          @click="getTotalIncomeAndOrder">
        查询
      </el-button>

    </el-row>
    <div type="primary" class="button1" style="height:40px;width:200px;font-size:20px">期间总收入：{{totalIncome}}</div>
    <div type="primary" class="button2" style="height:50px;width:200px;font-size:20px">期间订单量：{{orderNum}}</div>
    <el-container>
      <div class="button100" style="left:5px;height:1000px;width:600px;font-size:20px">
        <el-table
            :data="sales_data">
          <el-table-column
              prop="name"
              label="菜品名"
              width="300"
              height="100">
          </el-table-column>
          <el-table-column
              prop="amount"
              label="销量"
              width="300"
              height="100">
          </el-table-column>
        </el-table>
      </div>
    </el-container>
    <div class="user-avator">
      <img src="http://p0.meituan.net/xianfu/35f41c0badc69352b886cc34080f1f9a232448.png" />
    </div>

  </div>
</template>

<script>
import {requestData} from "../../ajax"
export default {
  data() {
    return {
      totalIncome:0,
      orderNum:0,
      sales_data:[],

      startDate:'',
      endDate:'',
      orderList:[],
    }
  },
  mounted()
  {
    // this.getTotalIncome();
  },
  methods: {
    // 名字真他娘的长
    getTotalIncomeAndOrder()
    {
      console.log(this.startDate)

      let data={
        startDate:this.startDate,
        endDate:this.endDate
      }
      console.log(data);
      requestData("get","getTotalIncome",data).then((resp)=>{
        console.log(resp.data);
        this.totalIncome=resp.data;
      })
      requestData("get","getOrderNum",data).then((resp)=>{
        this.orderNum=resp.data
      })
      requestData("get","getDishSales",data).then((resp)=>{
        this.sales_data=resp.data
      })
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
.select-date{
  text-align: right;
  margin: 20px;
}
.button1{
  position: relative;
  float: middle;
  size: 30px;
  width: 100px;
  height:5px;
  top :2px;
  left: 100px;
  color:rgb(7, 6, 4);
  background-color: rgb(254, 254, 255);
}
.button2{
  position: relative;
  float: left;
  size: 10px;
  width: 30px;
  height:5px;
  top :10px;
  left: 100px;
  color:rgb(7, 6, 4);
  background-color: rgb(254, 254, 255);
}
.button100{
  position: relative;
  float: left;
  size: 10px;
  width: 800px;
  height:500px;
  top:50px;
  left: 10px;

}
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
.user-avator
{
  position: absolute;
  width: 50px;
  height:100px;
  top :130px;
  left: 1000px;
  max-height: 500%;
}
.background
{
  background: url("http://p0.meituan.net/xianfu/35f41c0badc69352b886cc34080f1f9a232448.png") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>
