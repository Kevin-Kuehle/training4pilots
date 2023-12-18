import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
      "@icons": path.resolve(__dirname, "./src/components/icons/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@scss": path.resolve(__dirname, "./src/assets/scss/style.scss"),
      "@stores": path.resolve(__dirname, "./src/stores"),
      "@configs": path.resolve(__dirname, "./src/assets/configs"),
      "@mocks": path.resolve(__dirname, "./src/tests/mocks"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  server: {
    fs: {
      strict: true,
    },
  },
});
