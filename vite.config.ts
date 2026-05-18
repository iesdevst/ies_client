import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

Object.defineProperty(globalThis, "__dirname", {
  value: path.dirname(fileURLToPath(import.meta.url)),
  writable: false,
  enumerable: true,
  configurable: false,
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "stats.html",
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          antd: ["antd"],
          query: ["@tanstack/react-query"],
        },
      },
    },
  },
  server: {
    port: 3089,
    proxy: {
      "/api": {
        target: "https://develop-ies-client-api.net",
        changeOrigin: true,
      },

      "/hubs": {
        target: "https://develop-ies-client-api.net",
        changeOrigin: true,
        ws: true,
      },
    },
  },
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
});
