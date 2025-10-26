import { useMutation, UseMutationOptions } from "@tanstack/react-query"

export default function useApiMutation<TApiResponse, TError, TPayload, TContext>(
  options: UseMutationOptions<TApiResponse, TError, TPayload, TContext>
) {
  return useMutation(options)
}
