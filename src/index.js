import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import allReducers from './reducers';

import {
  getReports
} from './actions'; 

import './index.css';
import App from './App';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

store.dispatch(getReports());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
