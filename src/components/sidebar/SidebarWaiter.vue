<template>
  <div>
    <el-image
    style="width: 100%; height:200px; margin:4px 5px 2px 5px;"
    :src="require('../../assets/img/seulogo.png')">
    </el-image>
    <div style=" text-align: center;">服务员：{{ this.$store.state.user_name }}</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                  {{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>

  </div>
</template>

<script>
export default {
  inject:['reload'], 
  name:"SidebarUser",
  data() {
    return {
      drawer: false,
      items:[
        {
          index:"3",
          title:"点餐",
          subs:[
            {
              index: "/frame/mainCourse",
              title: "主菜",
            },
            {
              index: "/frame/snack",
              title: "小吃",
            },
            {
              index: "/frame/drink",
              title: "饮料",
            },

          ]
        },
        {
          index: "/frame/waiterOrderList",
          title: "查看订单"
        },
        {
          index: "/frame/serveDishes",
          title: "上菜提示"
        },
        {
          index: "/frame/checkNotice",
          title: "查看公告"
        },
        
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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