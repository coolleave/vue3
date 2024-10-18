import { createApp } from "vue"

import { createPinia } from "pinia"


// 导入 ElementPlus 和 样式文件

import "element-plus/dist/index.css"

import App from "./App.vue"
const app = createApp(App)



const pinia = createPinia()
app.use(createPinia())
app.mount("#app")
