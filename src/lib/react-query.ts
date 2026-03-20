// prettier-ignore
import { type UseMutationOptions, type DefaultOptions, QueryClient, type QueryKey, type UseQueryOptions, type QueryFunctionContext, type DefaultError, } from '@tanstack/react-query';
import { AxiosError } from 'axios';
// prettier-ignore

export const defaultOptions = {
  queries: {
    throwOnError: true,
    refetchOnWindowFocus: true,
    refetchOnMount: false,
    retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export const queryClient = new QueryClient({ defaultOptions });

// Define a generic query function type
export type QueryFn<TQueryFnData = unknown> = (
  context: QueryFunctionContext,
) => Promise<TQueryFnData>;

// Define a generic mutation function type
export type MutationFn<TData, TVariables> = (
  variables: TVariables,
) => Promise<TData>;

export type InfinityQueryFn<TData, PageParam = number> = (context: {
  pageParam?: PageParam;
}) => Promise<TData>;

// 強化錯誤類型 (結合 Axios)
export type QueryError<TError = DefaultError> = AxiosError | TError;

// --- useQuery related configuration ---
export interface QueryConfig<
  TData = unknown,
  TQueryFnData = TData,
  TError = DefaultError,
  TQueryKey extends QueryKey = QueryKey,
> extends Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
> {
  cacheTime?: number;
}

// --- useMutation related configuration ---
export interface MutationConfig<
  TData = unknown,
  TError = DefaultError,
  TVariables = unknown,
  TContext = unknown,
> extends Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationFn'
> {
  onSuccess?: (
    data: TData,
    variables: TVariables,
    context: TContext | undefined,
  ) => void;
  onError?: (
    error: TError,
    variables: TVariables,
    context: TContext | undefined,
  ) => void;
}

// Global default configuration
export const defaultQueryConfig: Partial<QueryConfig> = {
  retry: 3,
  staleTime: 5 * 60 * 1000, // 5 minutes
  cacheTime: 10 * 60 * 1000, // 10 minutes
};

export const defaultMutationConfig: Partial<MutationConfig> = {
  retry: 0, // Default no retry
};

// Example: Generic base options type
export interface BaseQueryOptions<TData> {
  config?: QueryConfig<TData>;
}

export interface BaseMutationOptions<TData, TVariables> {
  config?: MutationConfig<TData, DefaultError, TVariables>;
}
