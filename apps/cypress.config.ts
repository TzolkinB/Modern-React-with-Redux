// import path from "path"
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress"
// eslint-disable-next-line import/no-extraneous-dependencies
// import vitePreprocessor from "cypress-vite"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3030",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('file:preprocessor', vitePreprocessor())

      // on(
      //   "file:preprocessor",
      //   vitePreprocessor({
      //     configFile: path.resolve(__dirname, "./vite.config.js"),
      //     mode: "development",
      //   }),
      // )
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
})
