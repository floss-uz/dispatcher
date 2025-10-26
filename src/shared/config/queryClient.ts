import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 400,
      gcTime: 5 * 60 * 1000,
    },
  },
})

export default queryClient
