import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore('countStore',()=>{

    // 数据
    const count = ref(0)

    // 方法

    const increment = ()=>{
        count.value ++
    }

    // 返回
    return {
        count,
        increment
    }
})