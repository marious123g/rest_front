<template>
  <el-image
    style="width: 40px; height:40px; "
    :src="require('../../assets/img/seulogo.png')"  @click=" ClickGeren" />
</template>

<style scoped lang="scss">
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
<script>
export default {
    mode:'history', 
    methods:{
     ClickGeren() {
        
      
        this.$router.push({path: '/frame/personInfo'});
    }
    
    }
}
</script>