import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteMockServe } from "vite-plugin-mock"

// element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: true,
    }),

    // element-plus配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1.在element-plus配置中导入sass文件类型
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      // 导入scss预编译程序
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
