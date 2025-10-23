import { createBrowserRouter } from "react-router"
import { NotFoundPage } from "@/app/NotFoundPage.tsx"
import { DashboardPage } from "@/app/DashboardPage.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
  {
    path: "/salom",
    element: "hello karl",
  },
])
