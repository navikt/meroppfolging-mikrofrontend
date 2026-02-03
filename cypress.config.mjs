import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    chromeWebSecurity: false,
    video: false,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
