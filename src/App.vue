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

const open = ref(null)

const onEdit = (row)=>{
  open.value.open(row)
}


// pinia 状态管理

import {useCounterStore} from '@/stores/counter.js'

// 实例化对象

const CounterStore = useCounterStore()
console.log(CounterStore);

</script>

<template>
  <div class="app">
    <el-table :data="list">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="{row}">
          <el-button type="primary" @click="onEdit(row)" link >编辑</el-button>
          <el-button type="danger" @click="onDelete(row.id)" link>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit ref="open" @getList="getList"/>

  <el-button @click="CounterStore.increment">{{ CounterStore.count }}</el-button>
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
