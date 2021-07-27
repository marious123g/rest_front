<template>
<el-container >
  <el-header style="text-align:right ; background-color:#545c64;
    color: #FFF;">
  <el-button type="primary" @click="open">发布公告</el-button>
  </el-header>
  <template>
  <el-main v-for="item in notices" :key="item.f1">
          <el-card class="box-card" >
           
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item  name=2>
                    <span>{{item.f1}}</span>
                </el-collapse-item>      
            </el-collapse>

             <div >
            <el-row>
                <el-col :span="12">
                <span>{{ item.f2 }}</span>
                </el-col>
                <el-col :span="12" style="text-align:right;">
                <el-button type="text">编辑</el-button>
                <el-button type="text" @click="del(item)">删除</el-button>
                </el-col>
            </el-row>
            </div>   
        </el-card>
     
       
  </el-main>
  </template>
</el-container>

</template>

<script>
import {requestData} from "../../ajax"
 export default {
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
        requestData("get","managenotice.json",require_data).then((resp)=>{
          var cont_data=resp.data;
          this.notices=cont_data["notices"];
          

        }
        )
        
      },
      handleChange(val) {
        console.log(val);
      },
      del(item)
      {
          this.notices.splice(item.f1,1);
      },
      open() {
          let newList = {
            
            f1:" ",
            f2:"2021年7月17号"
            }
        this.$prompt('请输入公告内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          newList.f1=value,


           this.notices.push(newList);

        console.log(this.listTable)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
            
       
       }
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
    width: calc(80%-30px);
  }
</style>