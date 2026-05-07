# `shop-next-zone`

Independent Next.js commerce zone.

## Runs On

- Dev server: `http://localhost:3001`
- Script: `pnpm --filter shop-next-zone dev`

## What This App Exposes

- Owns the `/shop/*` route family.
- Main zone routes include:
  - `/shop`
  - `/shop/products`
  - `/shop/products/[id]`
  - `/shop/drops`
  - `/shop/drops/[id]`
- Uses `assetPrefix` for port `3001` in development.

## How This App Is Called

- `shell-next` exposes this zone publicly by rewriting `/shop/:path*` to `http://localhost:3001/shop/:path*`.
- In local development it can also be visited directly on port `3001`.

## How Other Apps Are Called

- Calls the shared workspace package `@dropjdid/api-client` for commerce data.
- Current server routes consume:
  - `listProducts()`
  - `getProduct()`
  - `listDrops()`

## Integration Notes

- `next.config.ts` transpiles `@dropjdid/api-client` because the package is consumed directly from the workspace.
- This app does not call the auth or dashboard zones directly; cross-zone navigation happens through shared URLs in the browser.
