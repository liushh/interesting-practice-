import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './App';
import allReducers from './reducers';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);

ReactDOM.render(<App />, document.getElementById('root'));
