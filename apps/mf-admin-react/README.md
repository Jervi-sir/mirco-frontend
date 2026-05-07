# `mf-admin-react`

React remote for admin and operations widgets.

## Runs On

- Dev server: `http://localhost:4103`
- Script: `pnpm --filter mf-admin-react dev`

## What This App Exposes

- Module Federation remote entry: `http://localhost:4103/remoteEntry.js`
- Exposed modules:
  - `admin/AdminStats`
  - `admin/LatestOrders`

## How This App Is Called

- `mf-host-react` registers this app as the `admin` remote and currently imports `admin/AdminStats` on the host's `/admin` route.

## How Other Apps Are Called

- Calls shared workspace packages:
  - `@dropjdid/api-client`
  - `@dropjdid/types`
  - `@dropjdid/ui`

## Integration Notes

- This app is consumed only through Module Federation, not shell route rewrites.
- Shared React dependencies are declared in federation config so the host and remote can cooperate at runtime.
