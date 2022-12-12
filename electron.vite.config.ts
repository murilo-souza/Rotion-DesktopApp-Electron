import path from "path";
import {defineConfig, externalizeDepsPlugin} from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import tsconfigPathsPlugin from "vite-tsconfig-paths";

const tsconfigPaths = tsconfigPathsPlugin({
  projects: [path.resolve("tsconfig.json")],
});

export default defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
    publicDir: path.resolve("resources"),
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
  },
  renderer: {
    define: {
      "process.platform": JSON.stringify(process.platform),
    },
    css: {
      postcss: {
        plugins: [
          tailwind({
            config: "./src/renderer/tailwind.config.js",
          }),
        ],
      },
    },
    resolve: {
      alias: {
        "@renderer": path.resolve("src/renderer/src"),
      },
    },
    plugins: [tsconfigPaths, react()],
  },
});
