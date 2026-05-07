From repo root:
pm2 start "pnpm --filter shell-next start" --name shell-next
pm2 start "pnpm --filter shop-next-zone start" --name shop-next-zone
pm2 start "pnpm --filter dashboard-next-zone start" --name dashboard-next-zone
pm2 start "pnpm --filter auth-next start" --name auth-next
pm2 start "pnpm --filter mf-host-react preview -- --host 0.0.0.0 --port 14100" --name mf-host-react
pm2 start "pnpm --filter mf-products-react preview -- --host 0.0.0.0 --port 14101" --name mf-products-react
pm2 start "pnpm --filter mf-cart-vue preview -- --host 0.0.0.0 --port 14102" --name mf-cart-vue
pm2 start "pnpm --filter mf-admin-react preview -- --host 0.0.0.0 --port 14103" --name mf-admin-react
pm2 save
pm2 startup

Nginx
Example for the Next shell:

```
server {
    server_name example.com;
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Example for federation host:

```
server {
    server_name mfe.example.com;
    location / {
        proxy_pass http://127.0.0.1:4100;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Example for remotes:

```
server {
    server_name products.mfe.example.com;
    location / {
        proxy_pass http://127.0.0.1:4101;
        proxy_set_header Host $host;
    }
}
server {
    server_name cart.mfe.example.com;
    location / {
        proxy_pass http://127.0.0.1:4102;
        proxy_set_header Host $host;
    }
}
server {
    server_name admin.mfe.example.com;
    location / {
        proxy_pass http://127.0.0.1:4103;
        proxy_set_header Host $host;
    }
}
```
