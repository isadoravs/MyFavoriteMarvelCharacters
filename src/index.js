import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {store, persistedStore} from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <Routes />
    </PersistGate>
  </Provider>
);

export default App;
