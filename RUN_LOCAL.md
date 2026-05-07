# Run Locally

```bash
pnpm install
```

## One command for everything

From the repo root:

```bash
pnpm dev:all
```

This starts all apps together:

- `shell-next`
- `shop-next-zone`
- `dashboard-next-zone`
- `auth-next`
- `mf-host-react`
- `mf-products-react`
- `mf-cart-vue`
- `mf-admin-react`

Then open:

```txt
http://localhost:3000
http://localhost:4100
```

## Project Parts

This repo contains 2 separate micro-frontend approaches:

1. Module Federation with Vite
2. Next.js Multi-Zones

## Ports

### Module Federation apps

- `mf-host-react`: `4100`
- `mf-products-react`: `4101`
- `mf-cart-vue`: `4102`
- `mf-admin-react`: `4103`

### Next.js zone apps

- `shell-next`: `3000`
- `shop-next-zone`: `3001`
- `dashboard-next-zone`: `3002`
- `auth-next`: `3003`

## Run Module Federation locally

Open 4 terminals from the repo root.

Terminal 1:

```bash
pnpm dev:mf-host
```

Terminal 2:

```bash
pnpm dev:mf-products
```

Terminal 3:

```bash
pnpm dev:mf-cart
```

Terminal 4:

```bash
pnpm dev:mf-admin
```

Open:

```txt
http://localhost:4100
```

### What to test

- `/products` loads the React products remote
- `/cart` mounts the Vue cart remote inside the React host
- `/admin` loads the React admin remote
- retry buttons and fallback UI render correctly

### Failure tests

To simulate remote failures:

1. Stop one remote dev server and refresh the host
2. Open `/products` and enable `Simulate remote render failure`
3. Verify fallback and retry behavior

## Run Next.js Multi-Zones locally

If you do not want to use `pnpm dev:all`, run only the Next.js zone apps manually.

Open 4 terminals from the repo root.

Terminal 1:

```bash
pnpm dev:shell
```

Terminal 2:

```bash
pnpm dev:shop
```

Terminal 3:

```bash
pnpm dev:dashboard
```

Terminal 4:

```bash
pnpm dev:auth
```

Open:

```txt
http://localhost:3000
```

### What to test

- `/` is served by `shell-next`
- `/about` is served by `shell-next`
- `/pricing` is served by `shell-next`
- `/shop` is rewritten to `shop-next-zone`
- `/shop/products` and `/shop/drops` work
- `/dashboard` is rewritten to `dashboard-next-zone`
- `/dashboard/orders` and `/dashboard/settings` work
- `/login` is rewritten to `auth-next`
- `/register` is rewritten to `auth-next`
- `/me` is rewritten to `auth-next`
- `/logout` is rewritten to `auth-next`

## Build everything

From the repo root:

```bash
pnpm build
```

## Optional nginx test

An example config exists at:

```txt
docker/nginx.conf
```

It can be used later to proxy the Next zones behind one local entrypoint.

## Quick checklist

- `pnpm install` completes successfully
- `pnpm build` completes successfully
- `http://localhost:4100` loads the Module Federation host
- `http://localhost:3000` loads the Next shell
- `/shop/*` routes resolve through the shell
- `/dashboard/*` routes resolve through the shell
- `/login`, `/register`, `/me`, and `/logout` resolve through the shell
