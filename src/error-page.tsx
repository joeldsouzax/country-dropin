/** @format */

import * as React from 'react';
import { useRouteError } from 'react-router-dom';
import { RouteError } from '@/types';

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  return (
    <div id="country-dropin-error-page">
      <h1>Welp!</h1>
      <h2>Something went wrong</h2>
      <h4>{error.message != null || error.statusText}</h4>
    </div>
  );
};

export default ErrorPage;
