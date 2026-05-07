import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'products',
      dts: false,
      filename: 'remoteEntry.js',
      exposes: {
        './ProductCard': './src/exposes/ProductCard.tsx',
        './ProductFilters': './src/exposes/ProductFilters.tsx',
        './ProductList': './src/exposes/ProductList.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  preview: {
    port: 14101,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: ['mfe.react.products.jervi.dev'],
  },
})
