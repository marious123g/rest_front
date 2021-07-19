<template>
  <div class="customer-order-page">
    <el-row type="flex">
      <div class="customer-order-container">
        <div class="customer-header">
          <el-breadcrumb class="crumbs" separator="/">

            <el-breadcrumb-item :to="{ path: '/login.html' }">首页</el-breadcrumb-item>
            <!--        抽屉实现购物车-->
            <el-button size="mini" style="margin-left: 16px;" type="primary" @click="drawer = true">
              查看购物车
            </el-button>

            <el-drawer
                :visible.sync="drawer"
                title="购物车">
              <!--            use table to record-->
              <span>
            <el-table class="cart-table"
                      :data="this.$store.state.dishData"
                      border>
              <el-table-column label="菜品名" property="name" width="150"></el-table-column>
              <el-table-column label="单价" property="price" width="100"></el-table-column>
              <el-table-column label="数量" property="amount" width="100"></el-table-column>
              <!--              <el-table-column label="数量" width="200">-->
              <!--                <template>-->

              <!--                  <el-input-number  :min="0" class="dish-num-btn" size="mini"-->
              <!--                 @change="handleChange">-->
              <!--                  </el-input-number>-->
              <!--                </template>-->
              <!--              </el-table-column>-->
              <el-table-column label="操作" width="200">
               <template slot-scope="scope">
        <el-button
            @click="deleteCart(scope.$index,scope.row.name)"
            type="text"
            size="small">
          删除
        </el-button>
      </template>
              </el-table-column>
            </el-table>
              <div class="show-totalPrice">
                共计{{this.$store.getters.getTotalPrice}}元
              </div>
            <div class="confirm-order-btn">
              <el-button type="primary">
                确认下单
              </el-button>
            </div>
          </span>

            </el-drawer>
          </el-breadcrumb>
        </div>

        <template>
          <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        </template>

        <!--        遍历菜品数组-->
        <!--        从这里开始不想活了-->
        <div class="main-course-display">
          <el-row type="flex">
            <el-col v-for="(item,index) in this.$store.state.snack_info" :key="item.name" :span="4">
              <!--              内边距10，外边距10-->
              <el-card class="dish-card" :body-style="{ padding: '10px'}">
                <img class="image"
                     src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
                <div style="padding: 14px;">
                  <span>{{ item.name }}     {{ item.price }}元/份</span>
                  <div class="bottom clearfix">
                    <el-input-number v-model="item.num"
                                     :min="0" class="dish-num-btn" size="mini"
                                     @blur="isOperated()"
                                     @change="addSnackToCart(item,index)">
                    </el-input-number>
                  </div>
                </div>
              </el-card>
            </el-col>

          </el-row>

        </div>

      </div>
    </el-row>
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
// import store from "vux/src/vuex/store";

export default {
  name: "DishesSnack",
  data() {
    return {
      drawer: false,
      // 绑定购物车的表格

    };
  },
  computed: {
  },
  methods: {

    isOperated()
    {
      return true;
    },
    // 这个地方怎么这么费劲呢
    // 表格的第几行（index） 也就意味着在dishTable里第几个元素（大概是吧
    // 经测试这个name可以这样传过来，我真要蚌埠住了
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
    },

    // 这里读的item和index是main_course_info的
    addSnackToCart(item,index) {
      // 遍历main-course-info里菜的数量，也就是主面板那个计数器的值
      // 这里读的是store里的dishData
      for (let i = 0; i < this.$store.getters.getDishDataLength; i++)
      {
        // 已经有过记录
        if (this.$store.state.dishData[i].name === this.$store.state.snack_info[index].name)
        {
          // 只改变amount即可
          // call changeAmount(state,name,amount)
          // store里面的changeAmount函数涵盖了数量为0或者不为0的情况
          let dish = {
            name: this.$store.state.snack_info[index].name,
            price: this.$store.state.snack_info[index].price,
            num: this.$store.state.snack_info[index].num,
          }
          // 这样可以把dish的信息传过去
          this.$store.commit('changeAmount',dish);

          // this.$store.commit('changeAmount',this.main_course_info[index].name,this.main_course_info[index].num) // 这样传不过去num，你妈的
          return;
        }
      }
      // 妹有记录还
      // ok
      let dish = {
        name: this.$store.state.snack_info[index].name,
        price: this.$store.state.snack_info[index].price,
        amount: this.$store.state.snack_info[index].num,
      }
      this.$store.commit('addToCart',dish)
      // this.$store.state.dishData.push(t);
    }
  },

}
</script>

<style scoped>
.customer-order-container {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: auto;
  overflow: hidden;
}
/*.customer-header {*/
/*  position: fixed;*/
/*}*/

.dish-card{
  margin: 10px;
}

.dish-num-btn {
  display: flex;
}
.cart-table{
  text-align: center;
  margin: auto;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
/*这一行千万别删球球了 这个未使用就是个烟雾弹*/
.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap
}

.image {
  width: 100%;
  display: flex;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
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

