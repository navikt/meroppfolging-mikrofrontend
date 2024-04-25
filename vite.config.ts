import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
// @ts-ignore
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import terser from "@rollup/plugin-terser";
import { resolve } from "path";
import importmap from "./importmap.json";

export default defineConfig({
  plugins: [
    react(),
    terser(),
    cssInjectedByJsPlugin(),
    {
      ...rollupImportMapPlugin([importmap]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve(__dirname, "src/Mikrofrontend.tsx"),
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "meroppfolging-mikrofrontend.[hash].js",
        format: "esm",
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
} as UserConfig);
