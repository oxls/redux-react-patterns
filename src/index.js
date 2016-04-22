import React from 'react';
import createLogger from 'redux-logger';
import { render } from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware
  )
);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
