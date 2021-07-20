<template>
<el-button @click="myfunc">
  json test
</el-button>
</template>

<script>
import {requestData} from "@/ajax";

export default {
  name: "test",
  data:function ()
  {
    return{
      username:""
    }
  },
  methods:{
    myfunc:function ()
    {
      var data=new FormData();
      data.append("user","lg");
      data.append("pswd","114514");
      requestData("get","user.json",data).then((response)=>{
        console.log(response);
        var result=response.data;
        if(result["username"]==="marious")
        {
          this.$message.success("login succeedded");
          this.$router.push("/user")
        }
    })
    }
  }
}
</script>

<style scoped>

</style>