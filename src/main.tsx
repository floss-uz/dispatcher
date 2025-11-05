import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./global.css"
import "@/shared/config"
import { RouterProvider } from "react-router"
import { router } from "@/shared/constants"
import { StyledEngineProvider } from "@mui/material"
import GlobalStyles from "@mui/material/GlobalStyles"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>
)
