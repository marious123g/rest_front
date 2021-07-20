<template>
<el-container >
  <el-header style="text-align:right ; background-color:#545c64;
    color: #FFF;">
  <el-button type="primary" @click="open">发布公告</el-button>
  </el-header>
  <template>
  <el-main >
      <el-row>
      <div v-for="item in notices" :key="item.f1">
      
          <el-col :span="6">
              <div>
          <el-card class="box-card" >
           
           
                    <span>{{item.f1}}</span>
              

             <div >
            <el-row>
                <el-col :span="12">
                <span>{{ item.f2 }}</span>
                </el-col>
                <el-col :span="12" style="text-align:right;">
             
                <el-button type="text" @click="del(item.f1)">完成订单</el-button>
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
 export default {
    data() {
         
      return {
        activeNames: ['1'],
        
          notices: [
              {
                  
                  f1:'宫爆鸡丁 水饺 扬州炒饭 紫菜蛋花汤',
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
      del(f1)
      {
           this.notices.some((item,i)=>{
           if(item.f1==f1){
             this.notices.splice(i,1) 
             return true
             }})
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