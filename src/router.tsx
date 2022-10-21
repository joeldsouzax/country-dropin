/** @format */
import React from 'react';
import Root from './routes/root';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Countries from './routes/countries';
import VisitedCountries from './routes/visited-countries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Countries /> },
      { path: 'visited', element: <VisitedCountries /> },
    ],
  },
]);

export default router;
