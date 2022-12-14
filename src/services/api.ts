import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'
import { Config } from '@config/index'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { printHttpError } from 'utils/intercept';
import { RootState } from 'stores/store';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).login.token
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    headers.set('Authorization', token ? `Bearer ${token}` : '');
    return headers;
  },
})

const baseQueryWithInterceptor: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> = await baseQuery(args, api, extraOptions)
  const { error, meta } = result;
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