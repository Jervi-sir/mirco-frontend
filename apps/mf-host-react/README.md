# `mf-host-react`

React host application for the Module Federation part of the lab.

## Runs On

- Dev server: `http://localhost:4100`
- Script: `pnpm --filter mf-host-react dev`

## What This App Exposes

- This app does not expose remote modules to other apps.
- It exposes browser routes inside its own SPA:
  - `/`
  - `/products`
  - `/cart`
  - `/admin`

## How Other Apps Are Called

- Loads the `products` remote from `http://localhost:4101/remoteEntry.js`
- Loads the `cart` remote from `http://localhost:4102/remoteEntry.js`
- Loads the `admin` remote from `http://localhost:4103/remoteEntry.js`

## Runtime Imports

- `products/ProductList` is loaded with `React.lazy()` on the products page.
- `admin/AdminStats` is loaded with `React.lazy()` on the admin page.
- `cart/CartWidget` is loaded dynamically and mounted into a React slot on the cart page.

## Integration Notes

- This host demonstrates cross-framework composition by mounting a Vue remote inside a React app.
- It performs remote health checks against each remote's `health.json` and wraps remote rendering with retry and error-boundary handling.
- It also consumes the shared workspace package `@dropjdid/ui` locally.
