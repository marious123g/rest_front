<template>
  <div class="login-wrap">
    <el-form label-width="100px" class="demo-ruleForm reg-container">
      <h3 style="text-align: center;">尊敬的顾客，请注册</h3>

      <el-form-item label="用户名" class="input-item">
<!--        不写v-model会不能输入文字，不过写了又得在script定义，就很烦-->
        <el-input placeholder="请输入用户名"
                  suffix-icon="el-icon-s-custom">
        </el-input>
      </el-form-item>

      <el-form-item label="密码" class="input-item">
        <el-input type="password" placeholder="请输入密码"
        suffix-icon="el-icon-unlock">

        </el-input>
      </el-form-item>

      <el-form-item label="确认密码" class="input-item">
        <el-input type="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" icon="el-icon-check" style="width:100% ;">确认注册</el-button>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple-dark">
              <el-link type="success">用户登录</el-link>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple-dark">
              <el-link type="success">忘记密码</el-link>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: "register"
}
</script>
<!--我把scoped去掉了，因为要改label颜色-->
<style>
h3{
  color: #114450;
}
.login-wrap {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 10%;
  /*opacity: 0.3;*/
  /*background-color: #FF929A;*/
  /*'/' means root*/
  /*这里我强烈建议图片放在同一个目录下*/
  background-image: url("./login-bg.jpg") ;
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 100%;
}

.reg-container {
  /*圆角*/
  border-radius: 10px;
  /*外边距*/
  margin: 20px auto;
  width: 350px;
  /*内边距*/
  padding: 40px 35px 15px 30px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: left;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  /*opacity: 1;*/
}
/*这里有个空格！！！！！！*/
.input-item .el-form-item__label{
  color:#114450;
}

</style>