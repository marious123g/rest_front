<template>
<el-container >
  <el-header style="text-align:right ; background-color:#545c64;
    color: #FFF;">
  <el-button type="primary" @click="addNotice">发布公告</el-button>
  </el-header>
  <template>
  <el-main v-for="(item,index) in notices" :key="item.f1">
          <el-card class="box-card" >
           
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item  name=2>
                    <span>{{item.content}}</span>
                </el-collapse-item>      
            </el-collapse>

             <div >
            <el-row>
                <el-col :span="20">
                <span>{{ item.time }}</span>
                </el-col>
                <el-col :span="4" style="text-align:right;">
                <el-button type="text" @click="del(index)">删除</el-button>
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
        
          notices: [],
          systemTime:""
      };
     
    },
     mounted()
    {
     this.getAllNotice()
    },
    methods: {
  addDate () {
    let nowDate = new Date()
   let date = {
            year: nowDate.getFullYear(),
            month: nowDate.getMonth() + 1,
            day:nowDate.getDay(),
            date: nowDate.getDate()
            }
          this.systemTime = date.year + '-' + 0 +date.month +'-'+date.day
         
        },

       getAllNotice()
      {
        var require_data=new FormData();
        requestData("get","getmanagenotice",require_data).then((resp)=>{
          var cont_data=resp.data;
          this.notices=cont_data;
          for (let i=0;i<this.notices.length;i++)
          {
            var date= new Date(this.notices[i].time)
            this.notices[i].time=date.toLocaleString()
          }
        }
        )
        
      },
      handleChange(val) {
        console.log(val);
      },
      del(index)
      {
        let data={
          noticeId:this.notices[index].noticeId
        }
        requestData("post","deleteNotice",data).then((resp)=>{
          console.log(resp.data);
          // flush
          location.reload();
        })

      },
      addNotice() {
         this.addDate()
        let data={
           content:'',
        }
        this.$prompt('请输入公告内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          data.content=value
          requestData("post","addNotice",data).then((res)=>{
            console.log(res.data)
            this.getAllNotice()
          })
 

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