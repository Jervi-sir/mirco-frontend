import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      dts: false,
      remotes: {
        products: {
          type: 'module',
          name: 'products',
          entry: 'http://localhost:4101/remoteEntry.js',
          shareScope: 'default',
        },
        cart: {
          type: 'module',
          name: 'cart',
          entry: 'http://localhost:4102/remoteEntry.js',
          shareScope: 'default',
        },
        admin: {
          type: 'module',
          name: 'admin',
          entry: 'http://localhost:4103/remoteEntry.js',
          shareScope: 'default',
        },
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
