import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'
import { Config } from '@config/index'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { printHttpError } from 'utils/intercept';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.token
    // headers.set('authorization', `Bearer ${token}`);
    return headers;
  },
})

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> = await baseQuery(args, api, extraOptions)
  const { error, meta } = result;
  console.log("🚀 ~ file: api.ts ~ line 18 ~ constbaseQueryWithInterceptor:BaseQueryFn<string|FetchArgs,unknown,FetchBaseQueryError>= ~ error", error)
  const { request } = meta as FetchBaseQueryMeta;
  const url: string = request.url;
  if (error) {
    const { status } = error as FetchBaseQueryError;
    printHttpError(+status, url);
  }
  return result;
}

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});