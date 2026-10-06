import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the repo at /<repo>/ until a custom domain is set. The
// deploy workflow passes the right base path in; local dev uses "/".
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()]
});
