import {createBrowserRouter, Link} from "react-router";
import {NotFoundPage} from "@/app/NotFoundPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={"/salom"}>salom</Link>
  },
  {
    path: "/*",
    element: <NotFoundPage/>
  },
  {
    path: "/salom",
    element: "hello karl"
  }
])