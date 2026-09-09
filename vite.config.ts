import { defineConfig } from "vite";
import path from "path";
import { copyFileSync, existsSync } from "fs";
import react from "@vitejs/plugin-react";

function spa404Fallback() {
  return {
    name: "spa-404-fallback",
    closeBundle() {
      const indexPath = path.resolve(__dirname, "dist/index.html");
      const fallbackPath = path.resolve(__dirname, "dist/404.html");
      if (existsSync(indexPath)) {
        copyFileSync(indexPath, fallbackPath);
      }
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), spa404Fallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
