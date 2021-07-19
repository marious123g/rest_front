<!--cest 主页，打开就是哦（毕竟path就一个/）-->
<template>
  <div class="hi">
    <el-row>
      <!--      @click也可以-->
      <el-button v-on:click="func5">默认按钮</el-button>
      <el-button @click="speech" type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-input placeholder="请输入内容"> </el-input>
    <!--    第一种数据使用方式-->
    {{data1}}
    <!--    第二种数据使用方式，用v-bind或者v-model好像都行-->
    <el-input v-bind:value="data1" placeholder="请输入内容"> </el-input>
    {{data2.user}}
    <!--    -->

  </div>
</template>

<script>
// 其实这是个匿名的Vue对象
export default {
  name: "index",
//  属性数据区，静态的
//  不能直接data:{}，ES6里必须有个函数
  data:function ()
  {
    return {
      data1:"靓仔",
      //  data2是个字典
      data2:{
        user:"田所浩二",
        password:"114514",
      },
      data3:["Obama","Bush"],
    }
  },
//  计算属性，静态的
  computed:{
    data4:function ()
    {
      var a=30;
      // 进行动态数据计算，好像是因为直接{{}}里面做不了计算
      return a+40;
    }
  },
//  函数
  methods:{
    func5:function ()
    {
      // 可以请求AJAX:axios请求远程数据
      alert("哼啊啊啊啊啊");
    },
    speech:function ()
    {
      alert("deep dark fantasies")
    }
  },
//  钩子函数（Vue对象的声明周期）
  mounted() {
    // 一开始是初始化器，挂载完毕会自动调用这个，靓仔就变了
    this.data1="习习蛤蛤"
  }
}
</script>

<style scoped>

</style>