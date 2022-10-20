/** @format */

import { api } from '@/services';
import { configureStore } from '@reduxjs/toolkit';
import country from './country';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

const persistConfig = {
  key: 'country',
  version: 1,
  storage,
};

const persistedCountry = persistReducer(persistConfig, country);

const store = configureStore({
  reducer: {
    country: persistedCountry,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDisptach: () => AppDispatch = useDispatch;

export default store;
