import { CssBaseline, ThemeProvider } from "@mui/material"
import { muiTheme } from "@/shared/config"
import { ReactRouterAppProvider } from "@toolpad/core/react-router"
import { Outlet } from "react-router"
import { sidebarBranding, sidebarMenus } from "@/shared/constants"
import { IconContext } from "react-icons"
import { Session } from "@toolpad/core"
import * as React from "react"
import Providers from "@/shared/providers/Providers.tsx"

const demoSession = {
  user: {
    name: "nnolan",
    email: "javohirtech@gmail.com",
    image: "https://avatars.githubusercontent.com/u/73842170",
  },
}

const App = () => {
  const [session, setSession] = React.useState<Session | null>(demoSession)
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession)
      },
      signOut: () => {
        setSession(null)
      },
    }
  }, [])

  return (
    <Providers>
      <ThemeProvider theme={muiTheme} noSsr>
        <IconContext.Provider value={{ size: "20px" }}>
          <CssBaseline />
          <ReactRouterAppProvider
            session={demoSession}
            authentication={authentication}
            theme={muiTheme}
            navigation={sidebarMenus}
            branding={sidebarBranding}
          >
            <Outlet />
          </ReactRouterAppProvider>
        </IconContext.Provider>
      </ThemeProvider>
    </Providers>
  )
}
export default App
