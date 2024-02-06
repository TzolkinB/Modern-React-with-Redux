// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3030",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
})
