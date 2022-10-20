/** @format */
import React from 'react';
import Root from './routes/root';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

export default router;
