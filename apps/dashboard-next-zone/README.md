# `dashboard-next-zone`

Independent Next.js operations zone.

## Runs On

- Dev server: `http://localhost:3002`
- Script: `pnpm --filter dashboard-next-zone dev`

## What This App Exposes

- Owns the `/dashboard/*` route family.
- Main zone routes include:
  - `/dashboard`
  - `/dashboard/orders`
  - `/dashboard/orders/[id]`
  - `/dashboard/settings`
- Uses `assetPrefix` for port `3002` in development.

## How This App Is Called

- `shell-next` exposes this zone publicly by rewriting `/dashboard/:path*` to `http://localhost:3002/dashboard/:path*`.
- In local development it can also be visited directly on port `3002`.

## How Other Apps Are Called

- Calls the shared workspace package `@dropjdid/api-client` for operational data.
- Current server routes consume:
  - `listAdminMetrics()`
  - `listOrders()`

## Integration Notes

- `next.config.ts` transpiles `@dropjdid/api-client` because the package is consumed directly from the workspace.
- This app is isolated from the shop and auth UIs at runtime; the shell controls cross-zone entry.
