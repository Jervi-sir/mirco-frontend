import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'

const isProd = process.env.NODE_ENV === 'production';

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
          entry: isProd ? 'https://mfe.react.products.jervi.dev/remoteEntry.js' : 'http://localhost:14101/remoteEntry.js',
          shareScope: 'default',
        },
        cart: {
          type: 'module',
          name: 'cart',
          entry: isProd ? 'https://mfe.react.cart.jervi.dev/remoteEntry.js' : 'http://localhost:14102/remoteEntry.js',
          shareScope: 'default',
        },
        admin: {
          type: 'module',
          name: 'admin',
          entry: isProd ? 'https://mfe.react.admin.jervi.dev/remoteEntry.js' : 'http://localhost:14103/remoteEntry.js',
          shareScope: 'default',
        },
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  preview: {
    port: 14100,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['mfe.react.jervi.dev'],
  },
})
