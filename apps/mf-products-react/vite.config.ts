import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { HeaderFragment } from './src/fragments/HeaderFragment'
import { HeaderFragmentReact } from './src/fragments/HeaderFragmentReact'
import { ModalFormFragment } from './src/fragments/ModalFormFragment'

function renderHeaderFragment(url: string) {
  const requestUrl = new URL(url, 'http://localhost:14101')
  const title = requestUrl.searchParams.get('title') ?? 'React header fragment'
  const subtitle =
    requestUrl.searchParams.get('subtitle') ??
    'Rendered in the React app, fetched over HTTP, and inserted by a Next.js edge route.'
  const source = requestUrl.searchParams.get('source') ?? 'mf-products-react'

  return ['<!doctype html>', HeaderFragment({ title, subtitle, source })].join('')
}

function renderHeaderReactFragment(url: string) {
  const requestUrl = new URL(url, 'http://localhost:14101')
  const title = requestUrl.searchParams.get('title') ?? 'React createElement header fragment'
  const subtitle =
    requestUrl.searchParams.get('subtitle') ??
    'Rendered in the React app with createElement, fetched over HTTP, and parsed into React nodes in Next.js.'
  const source = requestUrl.searchParams.get('source') ?? 'mf-products-react'

  return [
    '<!doctype html>',
    renderToStaticMarkup(
      createElement(HeaderFragmentReact, { title, subtitle, source }),
    ),
  ].join('')
}

function renderModalFormFragment(url: string) {
  const requestUrl = new URL(url, 'http://localhost:14101')
  const buttonText = requestUrl.searchParams.get('buttonText') ?? 'Open Modal'
  const title = requestUrl.searchParams.get('title') ?? 'Modal Form'
  const description = requestUrl.searchParams.get('description') ?? 'Enter details below to continue.'
  const source = requestUrl.searchParams.get('source') ?? 'mf-products-react'

  return [
    '<!doctype html>',
    renderToStaticMarkup(
      createElement(ModalFormFragment, { buttonText, title, description, source }),
    ),
  ].join('')
}

function headerFragmentPlugin() {
  const handleRequest = (requestUrl: string, response: { setHeader: (name: string, value: string) => void; end: (body: string) => void }) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.setHeader('Cache-Control', 'no-store')
    response.end(renderHeaderFragment(requestUrl))
  }

  return {
    name: 'header-fragment-endpoint',
    configureServer(server: { middlewares: { use: (handler: (req: { url?: string }, res: { setHeader: (name: string, value: string) => void; end: (body: string) => void }, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/fragments/header')) {
          handleRequest(req.url, res)
          return
        }

        if (req.url?.startsWith('/fragments/header-react')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(renderHeaderReactFragment(req.url))
          return
        }

        if (req.url?.startsWith('/fragments/modal-form')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(renderModalFormFragment(req.url))
          return
        }

        next()
      })
    },
    configurePreviewServer(server: { middlewares: { use: (handler: (req: { url?: string }, res: { setHeader: (name: string, value: string) => void; end: (body: string) => void }, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith('/fragments/header')) {
          handleRequest(req.url, res)
          return
        }

        if (req.url?.startsWith('/fragments/header-react')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(renderHeaderReactFragment(req.url))
          return
        }

        if (req.url?.startsWith('/fragments/modal-form')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          res.end(renderModalFormFragment(req.url))
          return
        }

        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    headerFragmentPlugin(),
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
