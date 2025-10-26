import { useQuery, UseQueryOptions } from "@tanstack/react-query"

export default function useApiQuery<
  TApiResponse,
  TError,
  TTransformedData,
  TQueryKey extends readonly unknown[],
>(options: UseQueryOptions<TApiResponse, TError, TTransformedData, TQueryKey>) {
  return useQuery<TApiResponse, TError, TTransformedData, TQueryKey>({
    retry: 3,
    retryDelay: 1000,
    ...options,
  })
}
