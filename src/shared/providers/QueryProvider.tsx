import React, { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import queryClient from "@/shared/config/queryClient.ts"

function QueryProvider({ children }: { children?: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default QueryProvider
