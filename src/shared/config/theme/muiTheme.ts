import { createTheme } from "@mui/material"
import { palette } from "./core/palette"

export const muiTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  typography: {
    fontFamily: "Mona Sans, sans-serif",
  },
  colorSchemes: palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
})
