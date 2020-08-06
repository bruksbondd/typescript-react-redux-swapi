// Core
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Components
import { Header } from './elements/header';
import { store } from './init/store';

export const App: FC = () => (
  <Provider store={store}>
    <Header title="Welcome" />
  </Provider>
);
