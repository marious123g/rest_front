<template>
  <div>
    <el-container class="main">
      <!--          -->
      <el-aside  width="calc(50% - 500px)" >
        <SidebarUser/>
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

          <router-view></router-view>
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
// 顾客点餐组件
// import DishesMainCourse from "@/components/dishes/DishesMainCourse";
// import DishesDrink from "@/components/dishes/DishesDrink";
// import DishesSnack from "@/components/dishes/DishesSnack";

export default {
  name: "user",

  components:{
    SidebarUser,

    // DishesMainCourse,
    // DishesDrink,
    // DishesSnack,

  },
}
</script>

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