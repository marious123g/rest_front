<template>
    <el-container>
  <el-aside width="375px" style="text-align: center;font-size:25px;line-height: 150px;">
      <div>
          欢迎你，xxx  
      </div>
     
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
       
         <el-button type="primary" icon="el-icon-edit" @click="clickxiugaimima">修改密码</el-button>
      </el-aside>
        <el-main style="text-align:left;line-width: 150px;">
         <div style=" font-size:40px;">
            <span>备注信息</span>
            <el-divider></el-divider>
        </div>
        <div  style=" font-size:25px;">
            <span>邮箱：{{email}}</span>
            
        </div>
        <div  style=" font-size:25px;">
        <span>地址：{{address}}</span>
        </div>
        <div>
            <span>备注信息</span>
            <el-divider></el-divider>
        </div>
        <div style=" font-size:40px;">
            <span>主要信息</span>
            <el-divider></el-divider>
        </div>
        <div  style=" font-size:25px;">
         <span>名字：{{name}}</span>
        </div>
        <div  style=" font-size:25px;">
         <span>电话号码：{{phonenum}}</span>   
        </div>
        <div  style=" font-size:25px;">
         <span>身份证号：{{id}}</span>   
        </div>
         <div  style=" font-size:25px;">
         <span>地址：{{address}}</span>   
        </div>
         <div  style=" font-size:25px;">
         <span>注册日期：{{registerdate}}</span>   
        </div>   
            
            
            
        </el-main>
     
  
</el-container>
</template>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>>
<script>
import {requestData} from "../../ajax"
export default {
    data() {
      return {
        imageUrl:"",
        email:"",
        address:"",
        name:"",
        phonenum:"",
        id:"",
        registerdate:""


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
        requestData("get","personinfo.json",require_data).then((resp)=>{
          var cont_data=resp.data;
          this.imageUrl=cont_data["imageUrl"];
          this.email=cont_data["email"];
          this.address=cont_data["address"];
          this.name=cont_data["name"];
          this.phonenum=cont_data["phonenum"];
          this.id=cont_data["id"];
          this.registerdate=cont_data["registerdate"];
        }
        )
        
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      clickxiugaimima() {
      this.$router.push({path: '/frame/changePassword'});
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
>