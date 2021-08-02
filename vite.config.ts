import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'vue-reactive-clipboard'
    },
    rollupOptions: {
      external: ['vue-demi'],
      output: {
        globals: {
          'vue-demi': 'VueDemi'
        }
      }
    }
  }
})
