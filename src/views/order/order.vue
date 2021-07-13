<template>
  <div class="btn">
    <el-button @click="run"
               size="default"
               type="primary"
               class="button-login">
      {{msg}}
    </el-button>
  </div>
</template>
<script type="text/javascript">

export default {
  name:"oder",
  components:{},
  data(){
    return{msg:'老公骂我',
    }
  },
  methods:{
    run:function(){
      alert('wdnmd');
    }
  }
}

</script>

<style scoped>

</style>