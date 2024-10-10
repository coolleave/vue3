<script setup>
import axios from 'axios';
import {onMounted} from 'vue'
import {ref} from 'vue'
import Edit from './components/Edit.vue'

// TODO: 列表渲染

const list = ref([])

// 定义查询列表函数
const getList = async()=>{
 
  const res = await axios.get('/list')
  list.value = res.data
  
  
}


// 使用挂载函数
onMounted (()=>getList())


// TODO: 删除功能

const  onDelete = async(id) =>{
  await axios.delete(`/del/${id}`)
  console.log(id)
  getList()
}

// TODO: 编辑功能

</script>

<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{row}">
          <el-button type="primary" link>编辑</el-button>
          <el-button type="danger" @click="onDelete(row.id)" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit />
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
