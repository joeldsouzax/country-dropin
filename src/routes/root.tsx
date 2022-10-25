/** @format */

import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

const Root: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            to="visited"
            LinkComponent={NavLink}
          >
            Visted List
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 10 }}>
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default Root;
