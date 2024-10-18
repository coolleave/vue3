<script setup>

import {getCategory} from '@/apis/apiTest'
// 测试api能否通过
getCategory().then(
  res=>{
    console.log(res);
    
  }
)

</script>

<template>
   
  <el-row>
    <el-col :sm="12" :lg="6">
      <el-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
      </el-result>

      <el-button type="primary">按钮</el-button>
    </el-col>
  </el-row>


</template>

<style scoped>


</style>
