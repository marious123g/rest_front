<template>
<el-container >
  <el-header style="text-align:right ; background-color:#545c64;
    color: #FFF;">
  <el-button type="primary" @click="fresh">刷新</el-button>
  </el-header>
  <template>
  <el-main >
      <el-row>
      <div v-for="item in notices" :key="item.f1">
      
          <el-col :span="6">
              <div>
          <el-card class="box-card" >
           
           
                    <span>{{item.f1}}</span>
              
                    <el-row>
              <span>数量：{{item.f2}}</span></el-row>

             <div >
            <el-row>
                <el-col :span="12">
                <span>桌号：{{ item.f3 }}</span>
                </el-col>
                <el-col :span="12" style="text-align:right;">
             
                <el-button type="text" @click="del(item.f1,item.f4)">完成订单</el-button>
                </el-col>
            </el-row>
            </div>   
        </el-card>
              </div>
      </el-col>  
      
      </div>
      </el-row>
  </el-main>
  </template>
</el-container>

</template>

<script>
import {requestData} from "../../ajax"
 export default {
   inject:['reload'],
    data() {
         
      return {
        activeNames: ['1'],
        
          notices: [
          
          
              

          ]
      };
     
    },
    mounted()
    {
     this.testt()
    },
    methods: {
      testt()
      {
        var require_data=new FormData();
        requestData("get","getReserveDishes",require_data).then((resp)=>{
          var cont_data=resp.data;
          
          this.notices=cont_data;

        });
        
      },
      handleChange(val) {
        console.log(val);
      },
      
      del(f1,f4)
      {
        let data = {
          orderID: f4,
          name: f1,
        }
        requestData("post","changeReserveDishes",data).then(()=>{});
        this.reload();
      },
      fresh()
      {
        this.testt();
      },
    }
  }
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
  }
</style>