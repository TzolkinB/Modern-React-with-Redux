// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"

// https://vitejs.dev/config/
export default defineConfig(() => ({
  build: {
    outDir: "build",
  },
  plugins: [react(), eslint()],
  server: {
    port: 3030,
    open: true,
  },
}))
