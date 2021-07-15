<template>
<div class="customer-order-container">
  <el-breadcrumb separator="/" class="crumbs">
    <el-breadcrumb-item :to="{ path: '/login.html' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>主食</el-breadcrumb-item>
    <el-breadcrumb-item>凉菜</el-breadcrumb-item>
    <el-breadcrumb-item>酒水</el-breadcrumb-item>
  </el-breadcrumb>

  <el-row type="flex" :gutter="20"  class="el-row">
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
<!--                <el-button type="text" class="button">加入购物车</el-button>-->
                <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" class="dish-num-btn"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row type="flex" :gutter="20"  class="el-row">
    <el-col :span="4" >
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" :max="10" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="4">
      <el-card :body-style="{ padding: '10px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <!--                <el-button type="text" class="button">加入购物车</el-button>-->
            <el-input-number size="mini" v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>

          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "customer",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
}
</script>

<style scoped>
.customer-order-container{
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: auto;
  overflow: hidden;
}
.dish-sheet{
  margin: 6px;
}

.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap
}

.el-card {
  min-width: 100%;
  height: 100%;
margin-right: 20px;
  transition: all .5s;
}
.dish-num-btn
{
  display: flex;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.dish-num-btn
{
  display: flex;
}
.button {
  padding: 0;
  float: right;
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
</style>

