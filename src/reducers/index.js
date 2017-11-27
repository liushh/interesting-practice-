import { combineReducers } from 'redux';
import reportsReducer from './reports';
import cursorReducer from './cursor';

const allReducers = combineReducers({
  reports: reportsReducer,
  cursor: cursorReducer
});

export default allReducers;
