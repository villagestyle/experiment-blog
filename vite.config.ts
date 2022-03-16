import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from 'path';

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: []
    }),
    Components({
      resolvers: []
    })
  ],
  resolve: {
    alias: {
      src: resolve("src"),
      assets: resolve("src/assets")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        /*
          引入var.scss全局预定义变量，
          如果引入多个文件，
          可以使用
          '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
          这种格式
         */
        additionalData: `
          @import "src/styles/var.scss";
          @import "src/styles/custom.scss";
        `
      }
    }
  }
});
