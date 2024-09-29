/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
