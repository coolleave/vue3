<script setup>
// TODO: 编辑
import { getChildState } from 'element-plus/es/components/tree/src/model/node';
import { ref } from 'vue'
import axios from 'axios'
// 弹框开关
const dialogVisible = ref(false)


// 准备列表数据
const list = ref({
  name:'',
  place:''
})

// 接收信号父组件更新列表信号
const emit = defineEmits(['getList'])


// 展示弹框,并传入行函数
const open = (row)=>{
  
  dialogVisible.value = true

  // 传入数据,在模板中使用v-model
  list.value.id = row.id
  list.value.name = row.name
  list.value.place = row.place
  console.log(list.value);
}


// 更新数据

const update = async()=>{
  // 1、调用接口
  await axios.patch(`/edit/${list.value.id}`, {
  name: list.value.name,
  place: list.value.place,
})

  // 2、关闭窗口
  dialogVisible.value = false

  // 3、通知父组件
  emit('getList')
}
// 暴露函数
defineExpose({
  open
})


</script>

<template>
  <el-dialog v-model="dialogVisible" title="编辑" width="400px">
    <el-form label-width="50px">
      <el-form-item label="姓名">
        <el-input placeholder="请输入姓名" v-model="list.name"/>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input  v-model="list.place" placeholder="请输入籍贯" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="update">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.el-input {
  width: 290px;
}
</style>
