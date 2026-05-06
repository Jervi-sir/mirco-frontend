import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'cart',
      dts: false,
      filename: 'remoteEntry.js',
      exposes: {
        './CartWidget': './src/exposes/cartWidget.ts',
        './CartSummary': './src/exposes/cartSummary.ts',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
