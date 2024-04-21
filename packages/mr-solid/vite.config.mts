import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { resolve } from "path";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin(),
    cssInjectedByJsPlugin(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 7300,
    open: true,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: resolve(__dirname, "src/App.tsx"),
      preserveEntrySignatures: "exports-only",
      external: ["solid-js"],
      output: {
          entryFileNames: "bundle.js",
          format: "esm",
      },
    },
  }

});
