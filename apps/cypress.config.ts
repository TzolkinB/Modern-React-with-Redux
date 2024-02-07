// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3030",
    setupNodeEvents(on, config) {
      // eslint-disable-next-line import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires
      require("@cypress/code-coverage/task")(on, config)

      return config
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
})
