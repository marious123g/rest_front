<template>
  <div>
    <el-container class="main">
      <!--          -->
      <el-aside  width="calc(50% - 500px)" >
        <SidebarUser v-if="this.userForm.userGroup==='custom'"/>
        <SidebarAdmin v-if="this.userForm.userGroup==='admin'"/>
        <SidebarCook v-if="this.userForm.userGroup==='cook'"/>
        <SidebarWaiter v-if="this.userForm.userGroup==='waiter'"/>
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
          <OrderDetail v-if="this.componentsForm.aside==='orderDetail'" />
          <OrderList v-if="this.componentsForm.aside==='orderList'" />
          <CheckNotice v-if="this.componentsForm.aside==='checkNotice'" />

          <DishesMainCourse v-if="this.componentsForm.aside==='dishesMainCourse'" />
          <ServeDishes v-if="this.componentsForm.aside==='serveDishes'" />
          <ReserveDishes v-if="this.componentsForm.aside==='reserveDishes'" />

          <ManageNotice v-if="this.componentsForm.aside==='manageNotice'" />
          <ManageDishes v-if="this.componentsForm.aside==='manageDishes'" />
          <ManageStaff v-if="this.componentsForm.aside==='manageStaff'" />
          <ManageData v-if="this.componentsForm.aside==='manageData'" />
          <ManageCheckOut v-if="this.componentsForm.aside==='manageCheckOut'" />

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

import OrderList from "@/components/common/OrderList";
import OrderDetail from "@/components/common/OrderDetail";
import CheckNotice from "@/components/common/CheckNotice";

import DishesMainCourse from "@/components/dishes/DishesMainCourse";
import ServeDishes from "@/components/dishes/ServeDishes";
import ReserveDishes from "@/components/dishes/ReserveDishes";

import ManageNotice from "@/components/manage/ManageNotice";
import ManageDishes from "@/components/manage/ManageDishes";
import ManageData from "@/components/manage/ManageData";
import ManageStaff from "@/components/manage/ManageStaff";
import ManageCheckOut from "@/components/manage/ManageCheckOut";

export default {
  inject:['reload'],
  components:{
    SidebarUser,
    SidebarAdmin,
    SidebarWaiter,
    SidebarCook,

    OrderList,
    OrderDetail,
    CheckNotice,

    DishesMainCourse,
    ServeDishes,
    ReserveDishes,

    ManageNotice,
    ManageDishes,
    ManageData,
    ManageStaff,
    ManageCheckOut,
  },
  data() {
    return {
      userForm: {
        userName: '',
        userGroup: '',
      },
      componentsForm: {
        aside: '',
      },
      isCollapse: false,
      tabWidth: 200,
      test1: 1,
      intelval: null,
    };
  },
  created() {
    this.userForm.userName = sessionStorage.getItem('userName');
    this.componentsForm.aside = sessionStorage.getItem('aside');
    if(sessionStorage.getItem('custom') === 'true') {
      this.userForm.userGroup = 'custom';
      sessionStorage.setItem('userGroup','custom');
      if(!this.componentsForm.aside) this.componentsForm.aside = 'dishesMainCourse';
    }
    else switch(this.userForm.userName){
      case 'admin':
        this.userForm.userGroup = 'admin';
        sessionStorage.setItem('userGroup','admin');
        if(!this.componentsForm.aside) this.componentsForm.aside = 'manageNotice';
        break;
      case 'cook':
        this.userForm.userGroup = 'cook';
        sessionStorage.setItem('userGroup','cook');
        if(!this.componentsForm.aside) this.componentsForm.aside = 'reserveDishes';
        break;
      case 'waiter':
      default:
        this.userForm.userGroup = 'waiter';
        sessionStorage.setItem('userGroup','waiter');
        if(!this.componentsForm.aside) this.componentsForm.aside = 'orderList';
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
