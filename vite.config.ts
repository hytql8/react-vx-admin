import react from "@vitejs/plugin-react";
import { resolve } from "path";
// import { loadEnv } from "vite";
import type { UserConfig, ConfigEnv } from "vite";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(root, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
};

export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    base: "/",
    root,
    plugins: [react()],
    // 解决路径
    resolve: {
      alias,
    },
    // css配置
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/var.scss" as *;`,
        },
      },
    },
    // 打包
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告 默认500kb 这里改为4000kb
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve("index.html"),
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
    // 服务
    server: {
      port: 4000,
      proxy: {},
      hmr: {
        overlay: false,
      },
      host: "0.0.0.0",
    },
    // 预构建 include构建 exclude排除
    optimizeDeps: {},
  };
};
