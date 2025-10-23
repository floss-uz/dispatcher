import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import "@/shared/config"
import { RouterProvider } from "react-router"
import { router } from "@/shared/constants"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
