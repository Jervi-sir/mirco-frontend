# `mf-cart-vue`

Vue remote for the cross-framework cart demo.

## Runs On

- Dev server: `http://localhost:4102`
- Script: `pnpm --filter mf-cart-vue dev`

## What This App Exposes

- Module Federation remote entry: `http://localhost:4102/remoteEntry.js`
- Exposed modules:
  - `cart/CartWidget`
  - `cart/CartSummary`

## How This App Is Called

- `mf-host-react` registers this app as the `cart` remote.
- The host dynamically imports `cart/CartWidget` and mounts it into a DOM node on the host's `/cart` route.

## How Other Apps Are Called

- Calls shared workspace packages:
  - `@dropjdid/api-client`
  - `@dropjdid/types`

## Integration Notes

- This is the cross-framework example in the repo: Vue code exposed through Module Federation and consumed by a React host.
- Shared dependency configuration uses `vue` in the federation setup.
