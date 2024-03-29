import * as React from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { BookContextProvider } from "./BookList/src/bookContext.tsx"
import theme from "./theme.tsx"
import App from "./App.tsx"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
