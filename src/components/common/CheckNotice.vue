<template>
<el-container >
  <el-header style="text-align:right ; background-color:#545c64;
    color: #FFF;">
 
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
              
                </el-col>
            </el-row>
            </div>   
        </el-card>
     
       
  </el-main>
  </template>
</el-container>

</template>

<script>
export default {
    data() {
         
      return {
        activeNames: ['1'],
        
          notices: [
              {
                  
                  f1:'八点了，该摸了',
                  f2:' 2021年7月17号',
              },
              {
                 
                  f1:"三点几了",
                  f2:"2021年7月17号"
              },
          
              

          ]
      };
     
    },
    methods: {
       
      handleChange(val) {
        console.log(val);
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
           this.$notify({
          title: '有订单拉',
          message: value,
          type: 'success'
        });
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

</style>