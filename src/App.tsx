/** @format */

import * as React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from './store';
import router from './router';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={'loading..'} persistor={persistStore(store)}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
