import {
  DefaultError,
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
  WithRequired,
} from "@tanstack/react-query"

export const useQueryWrapper = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: WithRequired<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryFn"
  >,
) => {
  const { queryFn, ...rest } = options

  return useQuery({
    queryFn: async (args) => {
      try {
        const res = await (
          queryFn as QueryFunction<TQueryFnData, TQueryKey, never>
        )(args)

        return res
      } catch (error) {
        throw error
      }
    },
    ...rest,
  })
}
