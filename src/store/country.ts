/** @format */
import { Country } from '@/types';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const countryAdapter = createEntityAdapter<Country>({
  selectId: (country) => country.numericCode,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const countrySlice = createSlice({
  name: 'country',
  initialState: countryAdapter.getInitialState(),
  reducers: {
    countryAdded: countryAdapter.addOne,
    countryRemoved: countryAdapter.removeOne,
  },
});

export default countrySlice.reducer;

export const { countryAdded, countryRemoved } = countrySlice.actions;

export const countrySelector = countryAdapter.getSelectors(
  (state: RootState) => state.country,
);
