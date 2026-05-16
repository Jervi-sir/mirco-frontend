import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

/**
 * --------------------------------------------------------------------------
 * Expose Fragment
 * --------------------------------------------------------------------------
 */
import { ModalFormFragment } from "./src/fragments/ModalFormFragment";

function fragmentPlugin() {
  return {
    name: "admin-fragment-endpoint",
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url?.startsWith("/fragments/modal-form")) {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-store");
          res.end(
            [
              "<!doctype html>",
              renderToStaticMarkup(createElement(ModalFormFragment)),
            ].join(""),
          );
          return;
        }
        next();
      });
    },
    configurePreviewServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        if (req.url?.startsWith("/fragments/modal-form")) {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.setHeader("Cache-Control", "no-store");
          res.end(
            [
              "<!doctype html>",
              renderToStaticMarkup(createElement(ModalFormFragment)),
            ].join(""),
          );
          return;
        }
        next();
      });
    },
  };
}

/** ------- End Expose Fragments ------- */

export default defineConfig({
  plugins: [
    react(),
    fragmentPlugin(),
    federation({
      name: "admin",
      dts: false,
      filename: "remoteEntry.js",
      exposes: {
        "./AdminStats": "./src/exposes/AdminStats.tsx",
        "./LatestOrders": "./src/exposes/LatestOrders.tsx",
        "./ModalForm": "./src/exposes/ModalForm.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  preview: {
    port: 14103,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: ["mfe.react.admin.jervi.dev"],
  },
});
