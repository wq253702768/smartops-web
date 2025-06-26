import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
<<<<<<< k86f3k-codex/一键生成前端业务模块
  server: {
    hmr: {
      overlay: false,
    },
=======
<<<<<<< pyagwk-codex/一键生成前端业务模块
  server: {
>>>>>>> main
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
<<<<<<< k86f3k-codex/一键生成前端业务模块
        rewrite: (p) => p.replace(/^\/api/, '/api'),
      },
    },
  },
=======
        rewrite: path => path.replace(/^\/api/, '/api'),
      },
    },
  },
=======
>>>>>>> main
>>>>>>> main
})
