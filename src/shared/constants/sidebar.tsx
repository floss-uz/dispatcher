import type { Branding, Navigation } from "@toolpad/core"
import {
  PAGE_ADMINS,
  PAGE_BANNED_USERS,
  PAGE_COMMUNITIES,
  PAGE_MAIN,
  rmSlash,
} from "@/shared/constants/pageRoutes.ts"
import { TbBan, TbHome, TbUsersGroup, TbUserShield } from "react-icons/tb"

export const sidebarBranding: Branding = {
  title: "FLOSS Dispatcher",
  homeUrl: PAGE_MAIN,
  logo: false,
}

export const sidebarMenus: Navigation = [
  {
    kind: "header",
    title: "Bo'limlar",
  },
  {
    segment: rmSlash(PAGE_MAIN),
    title: "Bosh sahifa",
    icon: <TbHome />,
  },
  {
    segment: rmSlash(PAGE_COMMUNITIES),
    title: "Jamiyatlar",
    icon: <TbUsersGroup />,
  },
  {
    segment: rmSlash(PAGE_ADMINS),
    title: "Ma'muriyat",
    icon: <TbUserShield />,
  },
  {
    segment: rmSlash(PAGE_BANNED_USERS),
    title: "Quvilganlar",
    icon: <TbBan />,
  },
]
