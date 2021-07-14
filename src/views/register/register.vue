<template>
  <div class="login-wrap">
    <div class="login-container">
      <el-form :model="ruleForm2" :rules="rules2"
               status-icon
               ref="ruleForm2"
               label-position="left"
               label-width="0px"
               class="demo-ruleForm login-page">
        <h2 class="title" style="text-align:center;margin:0px auto 20px">欢迎注册</h2>
        <el-form-item prop="username">
          <el-input type="text"
                    v-model="ruleForm2.username"
                    placeholder="用户名"
                    suffix-icon="el-icon-user">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
                    v-model="ruleForm2.password"
                    auto-complete="off"
                    placeholder="密码"
                    suffix-icon="el-icon-unlock">
          </el-input>
        </el-form-item>
        <el-form-item prop="re_password">
          <el-input type="password"
                    v-model="ruleForm2.re_password"
                    auto-complete="off"
                    placeholder="确认密码"
                    suffix-icon="el-icon-unlock">
          </el-input>
        </el-form-item>
        <el-checkbox
            v-model="checked"
            class="rememberme">
          记住密码
        </el-checkbox>
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">
          确认注册
        </el-button>
        <el-form-item style="width:100%;text-align:center;">
          <el-link href="./login.html" target="_blank" :underline="false">
            用户登录
          </el-link>
          &nbsp;|&nbsp;
          <el-link href="./fogetPassword.html" target="_blank" :underline="false">
            忘记密码
          </el-link>

        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      logining: false,
      ruleForm2: {
        username: '',
        password: '',
        re_password:'',
      },
      rules2: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        re_password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods: {

  }
};
</script>

<style scoped>
.login-wrap {
  display: flex;
  flex-direction: column;
  background-image: url("./login-bg.jpg");
  background-repeat: no-repeat;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
}
.login-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 100%;
  /*background-color:rgba(0,0,0,0.4);*/
  background-size: cover;
}
.login-page {
  top: calc(50% - 182.5px);
  position: absolute;
  right: 0px;
  left: 0px;
  margin: auto;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  width: 350px;
  padding: 35px 35px 15px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>