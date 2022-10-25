/** @format */

import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const Root: React.FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Root;
