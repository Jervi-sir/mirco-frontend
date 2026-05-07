# `auth-next`

Independent Next.js authentication zone.

## Runs On

- Dev server: `http://localhost:3003`
- Script: `pnpm --filter auth-next dev`

## What This App Exposes

- Owns the auth routes:
  - `/login`
  - `/register`
  - `/me`
  - `/logout`
- Also includes a local shared UI demo route:
  - `/ui-lab`
- Uses `assetPrefix` for port `3003` in development.

## How This App Is Called

- `shell-next` exposes these public auth routes through rewrites:
  - `/login`
  - `/register`
  - `/me`
  - `/logout`
- `/ui-lab` currently exists only inside `auth-next`; it is not rewritten by `shell-next`.

## How Other Apps Are Called

- Calls the shared workspace package `@dropjdid/ui` for shared UI primitives on `/ui-lab`.
- Current shared components used from the package:
  - `Surface`
  - `StatusPill`
  - `LabButton`

## Integration Notes

- `next.config.ts` transpiles `@dropjdid/ui` because the package exports source from `packages/ui/src/index.tsx`.
- Authentication state in this app is handled locally by the auth zone; other zones reach it through browser navigation and shell rewrites, not direct module imports.
