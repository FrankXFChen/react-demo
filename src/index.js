import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import Root from './Root'
import { Provider } from 'react-redux';
import { store, persistor } from './Store';
import { PersistGate } from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
