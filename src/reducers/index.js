import { combineReducers } from 'redux';
import reportsReducer from './reports';
import cursorReducer from './cursor';
import countReducer from './count';

const allReducers = combineReducers({
  reports: reportsReducer,
  cursor: cursorReducer,
  count: countReducer
});

export default allReducers;
