/** @format */

import * as React from 'react';
import { useRouteError } from 'react-router-dom';
import { RouteError } from '@/types';

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  return <div></div>;
};

export default ErrorPage;
