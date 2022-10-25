/** @format */

import { Country } from '@/types';
import { Typography } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColumns } from '@mui/x-data-grid';
import { NoRowsOverlays } from '.';
import * as React from 'react';
import { countryAdded, useAppDisptach } from '@/store';
import { LocationOn } from '@mui/icons-material';
interface CountryListProps {
  countries: Country[];
  isLoading?: boolean;
}

const CountryList: React.FC<CountryListProps> = ({ countries, isLoading }) => {
  const dispatch = useAppDisptach();

  const markVisitedHandler = React.useCallback(
    (country: { numericCode: string; name: string }) => () => {
      dispatch(countryAdded(country));
    },
    [],
  );

  const columns = React.useMemo<GridColumns<Country>>(
    () => [
      {
        field: 'numericCode',
        headerName: 'ID',
        flex: 0.5,
        minWidth: 50,
      },
      {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        minWidth: 100,
      },
      {
        field: 'actions',
        type: 'actions',
        flex: 1,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<LocationOn />}
            key={params.id}
            label="Visted"
            onClick={markVisitedHandler({
              numericCode: params.row.numericCode,
              name: params.row.name,
            })}
            showInMenu
          />,
        ],
      },
    ],
    [countries],
  );

  return (
    <DataGrid
      hideFooter
      rowSpacingType="margin"
      rows={countries}
      components={{
        NoRowsOverlay: () => {
          return (
            <NoRowsOverlays>
              <Typography gutterBottom variant="subtitle1">
                No Country Data
              </Typography>
            </NoRowsOverlays>
          );
        },
      }}
      getRowId={(row) => row.numericCode}
      autoHeight
      columns={columns}
    />
  );
};

export default CountryList;
