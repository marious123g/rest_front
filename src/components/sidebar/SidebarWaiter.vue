<template>
    <div>
    <div class="isClossTab" @click="isClossTabFun">
      <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" ></i>
    </div>
    <el-image
    style="width: 100%; height:200px; margin:4px 5px 2px 5px;"
    :src="require('../../assets/img/seulogo.png')">
            </el-image>
       <div style=" text-align: center;">服务员：007</div>     
    <el-menu :class="'menu'"
             default-active="1-4-1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
    >
     <el-menu-item-group>
          <span slot="title"></span>
          <el-menu-item index="1-1" @click="clickDishesMainCourse">点餐</el-menu-item>
          <el-menu-item index="1-2" @click="clickOrderList">查看订单</el-menu-item>
          <el-menu-item index="1-3" @click="clickServeDishes">上菜提示</el-menu-item>
          <el-menu-item index="1-4" @click="clickCheckNotice">查看公告</el-menu-item>
      </el-menu-item-group>
      
    </el-menu>
    <div style="line-height:800px ;line-width:50px">
    <el-button type="primary" icon="el-icon-shopping-cart-2" style="width: 100px; height:100px"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'], 
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickDishesMainCourse() {
      this.$router.push({path: '/frame/dishesMainCourse'});
    },
    clickOrderList() {
      this.$router.push({path: '/frame/orderList'});
    },
    clickServeDishes() {
      this.$router.push({path: '/frame/serveDishes'});
    },
    clickCheckNotice() {
      this.$router.push({path: '/frame/checkNotice'});
    },
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

</style>
<style scoped lang="scss">
$header-height:60px;
$background-color: #545c64;
$color: #FFF;

.main{
  height: 100vh;
  min-width: 800px;
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
        background-color: #F4E5D7;
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