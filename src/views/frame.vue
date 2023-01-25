<template>
  <div>
    <el-container class="main">

      <el-aside  width="270px" v-if="this.asideStatus=='open'">
        <div>
          <el-button
              type="text"
              style="width:100px;margin:0px 0px 0px 20px"
              icon="el-icon-back"
              @click="clickFold"
              v-if="this.asideStatus=='open'"
          >
            收起
          </el-button>
          <SidebarUser v-if="this.asideMode=='custom'"/>
          <SidebarAdmin v-if="this.asideMode=='admin'"/>
          <SidebarCook v-if="this.asideMode=='cook'"/>
          <SidebarWaiter v-if="this.asideMode=='waiter'"/>
        </div>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <el-row>
            <el-col :span="23">
              <el-button
                  type="text"
                  style="width:100px"
                  icon="el-icon-right"
                  @click="clickSpread"
                  v-if="this.asideStatus=='close'"
              >
                展开
              </el-button>
              <h2>
                &nbsp;
              </h2>
            </el-col>
            <el-col :span="1">
              <Head/>
            </el-col>
          </el-row>
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
import SidebarUser from "@/components/sidebar/SidebarUser.vue";
import SidebarAdmin from "@/components/sidebar/SidebarAdmin.vue";
import SidebarWaiter from "@/components/sidebar/SidebarWaiter.vue";
import SidebarCook from "@/components/sidebar/SidebarCook.vue";
import Head from "@/components/common/Head.vue"

export default {
  inject:['reload'],
  components:{
    SidebarUser,
    SidebarAdmin,
    SidebarWaiter,
    SidebarCook,
    Head,
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
      asideMode:'',
      asideStatus: '',
    };
  },
  created() {
    this.userForm.userName = this.$store.state.user_name;
    this.asideStatus = this.$store.state.aside_status;
    this.userForm.userGroup = this.$store.state.user_group;
    if(!this.asideStatus) {
      this.asideStatus = 'open';
    }
    if(!this.userForm.userName) {
      this.$router.push({path: '/login'});
      return;
    }
    this.asideMode = this.$store.state.aside_mode;
    if(!this.asideMode)
    {
      switch(this.userForm.userGroup) {
        case 'custom':
          this.$store.commit('updateAsideMode','custom');
          this.asideMode = 'custom';
          this.$router.push({path: '/frame/mainCourse'});
          break;
        case 'admin':
          this.$store.commit('updateAsideMode','admin');
          this.asideMode = 'admin';
          this.$router.push({path: '/frame/manageNotice'});
          break;
        case 'cook':
          this.$store.commit('updateAsideMode','cook');
          this.asideMode = 'cook';
          this.$router.push({path: '/frame/reserveDishes'});
          break;
        case 'waiter':
        default:
          this.$store.commit('updateAsideMode','waiter');
          this.asideMode = 'waiter';
          this.$router.push({path: '/frame/orderList'});
          break;
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickFold() {
      this.$store.commit('updateAsideStatus','close');
      this.reload();
    },
    clickSpread() {
      this.$store.commit('updateAsideStatus','open');
      this.reload();
    },
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
