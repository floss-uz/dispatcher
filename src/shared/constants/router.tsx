import { createBrowserRouter } from "react-router"
import App from "@/app/App.tsx"
import Layout from "@/shared/layouts/DashboardLayout.tsx"
import { DashboardPage } from "@/app/DashboardPage.tsx"
import { NotFoundPage } from "@/app/NotFoundPage.tsx"
import { CommunitiesPage } from "@/app/communities/CommunitiesPage.tsx"
import { CommunityDetailsPage } from "@/app/communities/CommunityDetailsPage.tsx"
import { BannedUsersPage } from "@/app/banned-users/BannedUsersPage.tsx"
import { BannedUserDetailsPage } from "@/app/banned-users/BannedUserDetailsPage.tsx"
import { AdminsPage } from "@/app/admins/AdminsPage.tsx"
import { AdminDetailsPage } from "@/app/admins/AdminDetailsPage.tsx"
import {
  PAGE_ADMINS,
  PAGE_BANNED_USERS,
  PAGE_COMMUNITIES,
  PAGE_MAIN,
} from "@/shared/constants/pageRoutes.ts"

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: PAGE_MAIN,
        Component: Layout,
        children: [
          {
            path: "",
            Component: DashboardPage,
          },
          {
            path: PAGE_COMMUNITIES,
            Component: CommunitiesPage,
          },
          {
            path: `${PAGE_COMMUNITIES}/:communityId`,
            Component: CommunityDetailsPage,
          },
          {
            path: PAGE_BANNED_USERS,
            Component: BannedUsersPage,
          },
          {
            path: `${PAGE_BANNED_USERS}/:bannedUserId`,
            Component: BannedUserDetailsPage,
          },
          {
            path: PAGE_ADMINS,
            Component: AdminsPage,
          },
          {
            path: `${PAGE_ADMINS}/:adminId`,
            Component: AdminDetailsPage,
          },
          {
            path: "/*",
            Component: NotFoundPage,
          },
        ],
      },
    ],
  },
])
