/** @format */

import { CountryList } from '@/components';
import { countrySelector, useAppSelector } from '@/store';
import * as React from 'react';

const VisitedCountries: React.FC = () => {
  const countries = useAppSelector(countrySelector.selectAll);
  return <CountryList countries={countries} isLoading={false} />;
};

export default VisitedCountries;
