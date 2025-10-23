import { RouterProvider } from "react-router"
import { router } from "@/shared/constants"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { muiTheme } from "@/shared/config"

const App = () => {
  return (
    <ThemeProvider theme={muiTheme} noSsr>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
export default App
