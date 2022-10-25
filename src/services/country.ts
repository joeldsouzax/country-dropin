/** @format */

import { countries } from '@/constants';
import { GetCountriesResponse } from '@/types';
import { api } from './api';

const countryApi = api.injectEndpoints({
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    getCountries: build.query<GetCountriesResponse, void>({
      query: () => countries,
      providesTags: (result) => {
        return result != null
          ? [
              ...result.map(({ id }) => ({ type: 'Countries', id } as const)),
              { type: 'Countries', id: 'LIST' },
            ]
          : [{ type: 'Countries', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetCountriesQuery } = countryApi;
