<template>
  <div>
    <el-container class="main">
      <!--          -->
      <el-aside  width="calc(50% - 500px)" >
        <SidebarUser v-if="this.userForm.userGroup=='custom'"/>
        <SidebarAdmin v-if="this.userForm.userGroup=='admin'"/>
        <SidebarCook v-if="this.userForm.userGroup=='cook'"/>
        <SidebarWaiter v-if="this.userForm.userGroup=='waiter'"/>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <el-dropdown>
            <span class="el-dropdown-link">
                <img src="" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer class="main-footer" height="50px">
          <p>页脚</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SidebarUser from "@/components/sidebar/SidebarUser";
import SidebarAdmin from "@/components/sidebar/SidebarAdmin";
import SidebarWaiter from "@/components/sidebar/SidebarWaiter";
import SidebarCook from "@/components/sidebar/SidebarCook";

export default {
  inject:['reload'],
  components:{
    SidebarUser,
    SidebarAdmin,
    SidebarWaiter,
    SidebarCook,
  },
  data() {
    return {
      userForm: {
        userName: '',
        userGroup: '',
      },
      isCollapse: false,
      tabWidth: 200,
      test1: 1,
      intelval: null,
    };
  },
  created() {
    this.userForm.userName = sessionStorage.getItem('userName');
    if(!this.userForm.userName) {
      this.$router.push({path: '/login'});
      return;
    }
    if(sessionStorage.getItem('custom') == 'true') {
        this.userForm.userGroup = 'custom';
        sessionStorage.setItem('userGroup','custom');
        this.$router.push({path: '/frame/dishesMainCourse'});
    }
    else switch(this.userForm.userName){
      case 'admin':
        this.userForm.userGroup = 'admin';
        sessionStorage.setItem('userGroup','admin');
        this.$router.push({path: '/frame/manageNotice'});
        break;
      case 'cook':
        this.userForm.userGroup = 'cook';
        sessionStorage.setItem('userGroup','cook');
        this.$router.push({path: '/frame/reserveDishes'});
        break;
      case 'waiter':
      default:
        this.userForm.userGroup = 'waiter';
        sessionStorage.setItem('userGroup','waiter');
        this.$router.push({path: '/frame/orderList'});
        break;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    isClossTabFun(){
      clearInterval(this.intelval);
      if(!this.isCollapse){
        this.intelval = setInterval(()=>{
          if(this.tabWidth<= 64)
            clearInterval(this.intelval);
          this.tabWidth -= 1;
        }, 1);
      }else{
        this.tabWidth = 200;
      }
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>


<!--</style>-->
<style scoped lang="scss">

$header-height:60px;
$background-color: #545c64;
$color: #FFF;

.main{
  height: 100vh;
  min-width: 100%;
  min-height: 600px;
  overflow: hidden;

  aside{

    overflow: visible;
    height: 100%;
    background-color: $background-color;
    color: $color;

    .isClossTab{
      width: 100%;
      height: $header-height;
      cursor: pointer;
      font-size: 25px;
      text-align: center;
      line-height: $header-height;
      font-weight: bold;
      border-right: 1px solid #807c7c;
      box-sizing: border-box;
    }
    .menu {
      width: 100%;
      border-right:0;


    }

  }

  .main-header {

    background-color: $background-color;
    color: $color;

    .el-dropdown{
      cursor: pointer;
      float: right;
    }
    .el-dropdown-link{

      img{
        $imgMargin: (($header-height - 50)/2);
        display:inline-block;
        width:50px;
        height: 50px;
        border-radius: 25px;
        background-color: #FFF;
        margin-top: $imgMargin;
      }
    }
  }

  .crumbs {
    margin-bottom: 20px;
  }

  .main-footer{
    text-align: center;
    background-color: $background-color;
    color: $color;
    line-height: 50px;
  }

}

</style>
