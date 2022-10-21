/** @format */

import { Country } from '@/types';
import * as React from 'react';

interface CountryListProps {
  countries: Country[];
  isLoading?: boolean;
}

const CountryList: React.FC<CountryListProps> = ({ countries, isLoading }) => {
  return <h1>countries</h1>;
};

export default CountryList;
