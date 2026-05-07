import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'admin',
      dts: false,
      filename: 'remoteEntry.js',
      exposes: {
        './AdminStats': './src/exposes/AdminStats.tsx',
        './LatestOrders': './src/exposes/LatestOrders.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  preview: {
    port: 14103,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['mfe.react.admin.jervi.dev'],
  },
})
