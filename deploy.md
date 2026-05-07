# Deployment Guide for Production

This guide outlines the steps to deploy the micro-frontend ecosystem to production using PM2 and Nginx.

## Domains and Ports Mapping

| Application | Domain | Port |
|-------------|--------|------|
| Shell (Next.js) | `mfe.jervi.dev` | 13000 |
| Auth (Next.js) | `mfe.auth.jervi.dev` | 13003 |
| Shop (Next.js) | `mfe.shop.jervi.dev` | 13001 |
| Dashboard (Next.js) | `mfe.dashboard.jervi.dev` | 13002 |
| Host (React) | `mfe.react.jervi.dev` | 14100 |
| Products (React) | `mfe.react.products.jervi.dev` | 14101 |
| Cart (Vue) | `mfe.react.cart.jervi.dev` | 14102 |
| Admin (React) | `mfe.react.admin.jervi.dev` | 14103 |

---

## 1. Application Configuration

Before building for production, ensure your configurations point to the correct production domains.

### Next.js Shell Rewrites (`apps/shell-next/next.config.ts`)

Update the destinations to use the production subdomains:

```typescript
const nextConfig: NextConfig = {
  async rewrites() {
    const isProd = process.env.NODE_ENV === "production";
    return [
      {
        source: "/shop/:path*",
        destination: isProd ? "https://mfe.shop.jervi.dev/shop/:path*" : "http://localhost:13001/shop/:path*",
      },
      {
        source: "/dashboard/:path*",
        destination: isProd ? "https://mfe.dashboard.jervi.dev/dashboard/:path*" : "http://localhost:13002/dashboard/:path*",
      },
      {
        source: "/login",
        destination: isProd ? "https://mfe.auth.jervi.dev/login" : "http://localhost:13003/login",
      },
      // ... update others (register, me, logout, ui-lab) similarly
    ];
  },
};
```

### React Host Remotes (`apps/mf-host-react/vite.config.ts`)

Update the remote entries for production:

```typescript
const isProd = process.env.NODE_ENV === 'production';

// ... inside federation()
remotes: {
  products: {
    entry: isProd ? 'https://mfe.react.products.jervi.dev/remoteEntry.js' : 'http://localhost:4101/remoteEntry.js',
    // ...
  },
  cart: {
    entry: isProd ? 'https://mfe.react.cart.jervi.dev/remoteEntry.js' : 'http://localhost:4102/remoteEntry.js',
    // ...
  },
  admin: {
    entry: isProd ? 'https://mfe.react.admin.jervi.dev/remoteEntry.js' : 'http://localhost:4103/remoteEntry.js',
    // ...
  },
}
```

---

## 2. Build the Applications

From the root of the project:

```bash
pnpm build
```

## 3. Start Applications with PM2

Run these commands from the repository root:

```bash
# Next.js Apps
pm2 start "pnpm --filter shell-next start" --name mfe-shell-next
pm2 start "pnpm --filter auth-next start" --name mfe-auth-next
pm2 start "pnpm --filter shop-next-zone start" --name mfe-shop-next-zone
pm2 start "pnpm --filter dashboard-next-zone start" --name mfe-dashboard-next-zone

# React/Vue Apps (Vite Preview)
pm2 start "pnpm --filter mf-host-react preview -- --host 0.0.0.0 --port 14100" --name mf-host-react
pm2 start "pnpm --filter mf-products-react preview -- --host 0.0.0.0 --port 14101" --name mf-products-react
pm2 start "pnpm --filter mf-cart-vue preview -- --host 0.0.0.0 --port 14102" --name mf-cart-vue
pm2 start "pnpm --filter mf-admin-react preview -- --host 0.0.0.0 --port 14103" --name mf-admin-react

# Save PM2 process list
pm2 save
pm2 startup
```

---

## 4. Nginx Configuration

Create separate configuration files for each domain in `/etc/nginx/sites-available/`.

> [!NOTE]
> These examples are for HTTP (Port 80). Certbot will automatically upgrade these to HTTPS (Port 443).

### Next.js Apps

#### `/etc/nginx/sites-available/mfe-shell`
```nginx
server {
    listen 80;
    server_name mfe.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:13000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### `/etc/nginx/sites-available/mfe-auth`
```nginx
server {
    listen 80;
    server_name mfe.auth.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:13003;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

#### `/etc/nginx/sites-available/mfe-shop`
```nginx
server {
    listen 80;
    server_name mfe.shop.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:13001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

#### `/etc/nginx/sites-available/mfe-dashboard`
```nginx
server {
    listen 80;
    server_name mfe.dashboard.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:13002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }
}
```

### React/Vue (Module Federation) Apps

#### `/etc/nginx/sites-available/mfe-react-host`
```nginx
server {
    listen 80;
    server_name mfe.react.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:14100;
        proxy_set_header Host $host;
    }
}
```

#### `/etc/nginx/sites-available/mfe-react-products`
```nginx
server {
    listen 80;
    server_name mfe.react.products.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:14101;
        proxy_set_header Host $host;
        add_header 'Access-Control-Allow-Origin' '*';
    }
}
```

#### `/etc/nginx/sites-available/mfe-react-cart`
```nginx
server {
    listen 80;
    server_name mfe.react.cart.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:14102;
        proxy_set_header Host $host;
        add_header 'Access-Control-Allow-Origin' '*';
    }
}
```

#### `/etc/nginx/sites-available/mfe-react-admin`
```nginx
server {
    listen 80;
    server_name mfe.react.admin.jervi.dev;
    location / {
        proxy_pass http://127.0.0.1:14103;
        proxy_set_header Host $host;
        add_header 'Access-Control-Allow-Origin' '*';
    }
}
```

### Enabling Configurations

Link each file to `sites-enabled` and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/mfe-* /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. Enable SSL with Certbot

Once Nginx is configured and DNS records are pointed to your server:

dig mfe.auth.jervi.dev A @dns1.registrar-servers.com
dig mfe.auth.jervi.dev A @dns2.registrar-servers.com

```bash
sudo certbot --nginx -d mfe.jervi.dev -d mfe.auth.jervi.dev -d mfe.shop.jervi.dev -d mfe.dashboard.jervi.dev -d mfe.react.jervi.dev -d mfe.react.admin.jervi.dev -d mfe.react.cart.jervi.dev -d mfe.react.products.jervi.dev
```
