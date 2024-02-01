import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
      light: "#6573C3",
      dark: "#2C387E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057",
      light: "#F73378",
      dark: "#AB003C",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffab40",
    },
  },
})

export default theme
