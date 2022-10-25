/** @format */

import { CountryList } from '@/components';
import { useGetCountriesQuery } from '@/services';
import * as React from 'react';

const Countries: React.FC = () => {
  const { data, isLoading, isFetching } = useGetCountriesQuery();

  return (
    <React.Fragment>
      <CountryList countries={data ?? []} isLoading={isLoading || isFetching} />
    </React.Fragment>
  );
};

export default Countries;
