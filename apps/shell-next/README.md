# `shell-next`

Primary Next.js shell for the multi-zone lab.

## Runs On

- Dev server: `http://localhost:3000`
- Script: `pnpm --filter shell-next dev`

## What This App Exposes

- Owns the shell routes directly:
  - `/`
  - `/about`
  - `/pricing`
- Acts as the public entrypoint for the zone-based Next apps through rewrites in `next.config.ts`.

## How Other Apps Are Called

- Rewrites `/shop/:path*` to `http://localhost:3001/shop/:path*`
- Rewrites `/dashboard/:path*` to `http://localhost:3002/dashboard/:path*`
- Rewrites `/login` to `http://localhost:3003/login`
- Rewrites `/register` to `http://localhost:3003/register`
- Rewrites `/me` to `http://localhost:3003/me`
- Rewrites `/logout` to `http://localhost:3003/logout`

## How This App Is Called

- Browser users should normally enter the lab through this app.
- The zone apps are intended to be reached through this shell's public URLs, even though they also run on their own ports in development.

## Integration Notes

- This app does not use Module Federation.
- Its main integration responsibility is route ownership and proxying requests to the correct Next.js zone.
