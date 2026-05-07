# `mf-products-react`

React remote for product-focused Module Federation demos.

## Runs On

- Dev server: `http://localhost:4101`
- Script: `pnpm --filter mf-products-react dev`

## What This App Exposes

- Module Federation remote entry: `http://localhost:4101/remoteEntry.js`
- Exposed modules:
  - `products/ProductCard`
  - `products/ProductFilters`
  - `products/ProductList`

## How This App Is Called

- `mf-host-react` registers this app as the `products` remote and imports its exposed modules at runtime.
- The main visible integration today is `products/ProductList` on the host's `/products` route.

## How Other Apps Are Called

- Calls `@dropjdid/api-client` for product data.
- Consumes shared workspace packages:
  - `@dropjdid/api-client`
  - `@dropjdid/types`
  - `@dropjdid/ui`

## Integration Notes

- This app is not routed through `shell-next`; it participates in the lab through Module Federation only.
- Shared React dependencies are declared in federation config so the host and remote can cooperate at runtime.
