import React, { ReactNode } from "react"
import QueryProvider from "@/shared/providers/QueryProvider.tsx"

function Providers({ children }: { children?: ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>
}

export default Providers
