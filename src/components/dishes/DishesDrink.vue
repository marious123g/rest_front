<template>
  <div class="customer-order-page">
    <el-row type="flex">
      <div class="customer-order-container">
        <!--        <a-affix :offset-top="top">-->
        
        <!--        </a-affix>-->
        <h1>
          &nbsp;
        </h1>
        <template>
          <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        </template>

        <!--        遍历菜品数组-->
        <!--        从这里开始不想活了-->
        <div class="main-course-display">
          <el-row type="flex" v-if="this.WebSide==true">
            <el-col v-for="(item,index) in this.$store.state.drink_info" :key="item.name" :span="4">
              <!--              内边距10，外边距10-->
              <el-card class="dish-card" :body-style="{ padding: '10px'}">
                <img class="image"
                     :src=item.image>
                <div style="padding: 14px 14px 13px 14px;">
                  <span>{{ item.name }} <br> {{ item.price }}元/份</span>
                </div>
                <div style="padding: 0px 0px 14px 14px;">
                  <el-input-number v-model="item.num"
                                    :min="0" class="dish-num-btn" size="mini"
                                    @change="addDrinkToCart(item,index)">
                  </el-input-number>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row type="flex" v-else>
            <el-col v-for="(item,index) in this.$store.state.drink_info" :key="item.name" :span="12">
              <!--              内边距10，外边距10-->
              <el-card class="dish-card" :body-style="{ padding: '10px'}">
                <img class="image"
                     :src=item.image>
                <div style="padding: 14px 14px 13px 14px;">
                  <span>{{ item.name }} <br> {{ item.price }}元/份</span>
                </div>
                <div style="padding: 0px 0px 14px 0px;">
                  <el-input-number v-model="item.num"
                                    :min="0" class="dish-num-btn" size="mini"
                                    @change="addDrinkToCart(item,index)">
                  </el-input-number>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <!--          <div id="test">-->
          <!--            this is a test module-->
          <!--          </div>-->

        </div>
        <div class>
          <el-breadcrumb class="crumbs" separator="/">

            <!--        抽屉实现购物车-->
            <div class="customer-header">
              <el-button size="mini" style="margin-left: 16px;" type="primary" @click="drawer = true">
                查看购物车
              </el-button>
            </div>
            <!--            <el-button @click="roll">测试锚点</el-button>-->

            <el-drawer
                :visible.sync="drawer"
                title="购物车"
                size="375px">
              <!--            use table to record-->
              <span>
                <el-table class="cart-table"
                      :data="this.$store.state.dishData"
                      border>
                  <el-table-column label="菜品名" property="name" min-width="125"></el-table-column>
                  <el-table-column label="单价" property="price" min-width="75"></el-table-column>
                  <el-table-column label="数量" property="amount" min-width="75"></el-table-column>
                  <el-table-column label="操作" min-width="75">
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
                  <el-button type="primary"
                             @click="confirmOrder">
                    确认下单
                  </el-button>
                </div>
              </span>
            </el-drawer>
          </el-breadcrumb>
        </div>
      </div>
    </el-row>
    <!--    弹窗写桌号和人数-->
    <el-dialog title="请填入用餐信息"
               width="30%"
               center
               :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="用餐人数" :label-width="formLabelWidth">
          <el-input v-model="personNum" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="桌号" :label-width="formLabelWidth">
          <el-input v-model="tableId" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="getBaseInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {requestData} from "@/ajax";

export default {
  name: "DishesDrink",
  data() {
    return {
      tableId:0,
      personNum:0,
      drawer: false,
      fullWidth:document.documentElement.clientWidth,
      WebSide: true,
      // 弹窗
      dialogFormVisible: false,
      formLabelWidth: '100px'
    };
  },
  created() {
    if(this.fullWidth < 500) this.WebSide = false;
  },
  computed: {
  },
  mounted()
  {
    if(this.$store.state.table_id===0)
    {
      this.dialogFormVisible=true;
    }
    if(this.$store.state.drink_info.length===0)
      this.getDrinkList();
  },

  methods: {
    getDrinkList()
    {
      console.log("准备读取饮料");
      var require_data = new FormData();
      requestData("get", "/getDrink", require_data).then((resp) => {
          console.log(resp.data)
          this.$store.commit('updateDrink', resp.data)
          }
      )
    },

    // 这个地方怎么这么费劲呢
    // 表格的第几行（index） 也就意味着在dishTable里第几个元素（大概是吧
    // 经测试这个name可以这样传过来，我真要蚌埠住了
    deleteCart(index, name)
    {
        console.log("即将删除：" + name)
      // call $store.deleteCartDish
      this.$store.commit('deleteCartDish', name);
      for (let i = 0; i < this.$store.getters.getDrinkLength; i++)
      {
        if (this.$store.state.drink_info[i].name === name)
        {
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
        for (let i = 0; i < this.$store.getters.getMainCourseLength; i++)
        {
          if (this.$store.state.main_course_info[i].name === name)
          {
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
        for (let i = 0; i < this.$store.getters.getSnackLength; i++)
        {
          if (this.$store.state.snack_info[i].name === name)
          {
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
    confirmOrder()
    {
      // tmd，放在store里自己用还就不行，贱不贱呐
      this.$store.commit('getTotalPrice');
      this.$store.commit('confirmOrder');
      // 购物车清零

    },
    getBaseInfo()
    {
      // 当妹有填入的桌号的时候 弹窗
      this.$store.commit('updatePersonNum', this.personNum);
      this.$store.commit('updateTableId', this.tableId);
      this.dialogFormVisible=false;

    },
    // 这里读的item和index是main_course_info的
    addDrinkToCart(item,index)
      {
      // 遍历main-course-info里菜的数量，也就是主面板那个计数器的值
      // 这里读的是store里的dishData
      for (let i = 0; i < this.$store.getters.getDishDataLength; i++)
      {
        // 已经有过记录
        if (this.$store.state.dishData[i].name === this.$store.state.drink_info[index].name)
        {
          // 只改变amount即可
          // call changeAmount(state,name,amount)
          // store里面的changeAmount函数涵盖了数量为0或者不为0的情况
          let dish = {
            name: this.$store.state.drink_info[index].name,
            price: this.$store.state.drink_info[index].price,
            num: this.$store.state.drink_info[index].num,
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
        name: this.$store.state.drink_info[index].name,
        price: this.$store.state.drink_info[index].price,
        amount: this.$store.state.drink_info[index].num,
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
.customer-header {
  top: 10%;
  position: fixed;
  left: calc(100%-50px);
}
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

