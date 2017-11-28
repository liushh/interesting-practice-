import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import allReducers from './reducers';
import App from './App';


it('renders without crashing', () => {
  const store = createStore(
    allReducers,
    applyMiddleware(thunk)
  );
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});
