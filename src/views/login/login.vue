<template>
  <div class="login-wrap">
    <div class="login-container">
      <el-form :model="loginForm" :rules="rules2"
               status-icon
               ref="loginForm"
               label-position="left"
               label-width="0px"
               class="demo-ruleForm login-page">
        <h2 class="title" style="text-align:center;margin:0px auto 20px">
          餐厅点餐系统登录
        </h2>
        <el-form-item prop="username">
          <el-input type="text"
                    v-model="loginForm.username"
                    placeholder="用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password"
                    v-model="loginForm.password"
                    auto-complete="off"
                    placeholder="密码">
          </el-input>
        </el-form-item>
        <el-checkbox
            v-model="remember"
            class="rememberme">
          记住密码
        </el-checkbox>
        <el-button type="primary" style="width:100%;margin:0px auto 15px" @click="customLogin" :loading="logining">
          顾客登录
        </el-button>
        <el-button type="primary" plain style="width:100%;margin:0px auto 5px" @click="staffLogin" :loading="logining">
          员工登录
        </el-button>
        <el-form-item style="width:100%;text-align:center;">
          <el-link href="./register.html" target="_blank" :underline="false">
            新用户注册
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
      loginForm: {
        username: '',
        password: '',
        remember: false
      },
      rules2: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    customLogin(){
      this.$refs.loginForm.validate((valid) => {
        if(valid){
          this.logining = true;
          if(this.loginForm.username !== '' &&
              this.loginForm.password !== ''){
            this.logining = false;
            sessionStorage.setItem('username', this.loginForm.username);
            sessionStorage.setItem('custom',true);
            sessionStorage.setItem('staff',false);
            this.$router.push({path: '/frame.html'});
          }else{
            this.logining = false;
            this.$alert('用户名或密码错误！', '提示', {
              confirmButtonText: 'ok'
            })
          }
        }else{
          console.log('error submit!');
          return false;
        }
      })
    },
    staffLogin(){
      this.$refs.loginForm.validate((valid) => {
        if(valid){
          this.logining = true;
          if(this.loginForm.username !== '' &&
              this.loginForm.password !== ''){
            this.logining = false;
            sessionStorage.setItem('username', this.loginForm.username);
            sessionStorage.setItem('custom',false);
            sessionStorage.setItem('staff',true);
            this.$router.push({path: '/frame.html'});
          }else{
            this.logining = false;
            this.$alert('用户名或密码错误！', '提示', {
              confirmButtonText: 'ok'
            })
          }
        }else{
          console.log('error submit!');
          return false;
        }
      })
    }
  }
};
</script>

<style scoped>
body{
  margin: 0px;
}
.login-wrap {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  background-image: url("./login-bg.jpg");
  background-size: cover;
}
.login-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
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
  padding: 35px 35px 0px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>