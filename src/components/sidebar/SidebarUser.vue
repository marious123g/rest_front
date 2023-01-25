<template>
  <div>
    <!--    <div class="isClossTab" @click="isClossTabFun">-->
    <!--      <i :class="isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" ></i>-->
    <!--    </div>-->
    <el-image
        style="width: 100%; height:200px; margin:4px 5px 2px 5px;"
        :src="require('../../assets/img/seulogo.png')">
    </el-image>
    <div style=" text-align: center;">桌号：{{this.$store.state.table_id}}</div>
    <div style=" text-align: center;">人数：{{ this.$store.state.person_num }}</div>
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
          index: "/frame/orderList",
          title: "查看订单"
        }
      ]
    }
  },
  inject: ['reload'],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickDianCan() {
      sessionStorage.setItem('aside', 'dishesMainCourse');
      this.reload();
    },
    clickChaKan() {
      sessionStorage.setItem('aside', 'orderList');
      this.reload();
    },
    deleteCart(index, name)
    {
      console.log("即将删除：" + name)
      // call $store.deleteCartDish
      this.$store.commit('deleteCartDish', name);
      for (let i = 0; i < this.$store.getters.getDrinkLength; i++) {
        if (this.$store.state.drink_info[i].name === name) {
          console.log("找到面板记录，菜名：" + this.$store.state.drink_info[i].name)

          let dish = {
            name: this.$store.state.drink_info[i].name,
            price: this.$store.state.drink_info[i].price,
            amount: this.$store.state.drink_info[i].num,
          }
          this.$store.commit('changeDishToZero', dish);
          console.log("现在，菜名：" + this.$store.state.drink_info[i].name + "的数量" + this.$store.state.drink_info[i].num)
          break
        }
        for (let i = 0; i < this.$store.getters.getMainCourseLength; i++) {
          if (this.$store.state.main_course_info[i].name === name) {
            console.log("找到面板记录，菜名：" + this.$store.state.main_course_info[i].name)

            let dish = {
              name: this.$store.state.main_course_info[i].name,
              price: this.$store.state.main_course_info[i].price,
              amount: this.$store.state.main_course_info[i].num,
            }
            this.$store.commit('changeDishToZero', dish);
            console.log("现在，菜名：" + this.$store.state.main_course_info[i].name + "的数量" + this.$store.state.main_course_info[i].num)
            break
          }
        }
        for (let i = 0; i < this.$store.getters.getSnackLength; i++) {
          if (this.$store.state.snack_info[i].name === name) {
            console.log("找到面板记录，菜名：" + this.$store.state.snack_info[i].name)

            let dish = {
              name: this.$store.state.snack_info[i].name,
              price: this.$store.state.snack_info[i].price,
              amount: this.$store.state.snack_info[i].num,
            }
            this.$store.commit('changeDishToZero', dish);
            console.log("现在，菜名：" + this.$store.state.snack_info[i].name + "的数量" + this.$store.state.snack_info[i].num)
            break
          }
        }
      }
    }
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
.see-cart{
  margin: 50px;
}
.confirm-order-btn{
  margin: 50px;
  text-align: right;
}
.show-totalPrice{
  text-align: center;

  margin: 25px;
}

</style>