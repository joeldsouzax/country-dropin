/** @format */

import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.BASE_URL,
  paramsSerializer: (params) => 'hello',
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const api = createApi({
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Countries'],
  endpoints: () => ({}),
});
