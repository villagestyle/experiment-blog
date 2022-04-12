import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
      dirs: ["src/components"],
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts"
    }),
    // AutoImport({
    //   resolvers: [AntDesignVueResolver()]
    // })
  ],
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
          @import "src/styles/scss/var.scss";
          @import "src/styles/scss/custom.scss";
        `
      }
    }
  }
});
