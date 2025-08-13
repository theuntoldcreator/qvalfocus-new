import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import dyadComponentTagger from '@dyad-sh/react-vite-component-tagger';

// Required in ESM to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "client", "src"),
      "@shared": resolve(__dirname, "shared"),
      "@assets": resolve(__dirname, "attached_assets"),
    },
  },
  root: resolve(__dirname, "client"),
  build: {
    outDir: resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});