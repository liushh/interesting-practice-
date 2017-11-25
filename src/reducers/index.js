import { combineReducers } from 'redux';
import reportsReducer from './reports';

const allReducers = combineReducers({
  reports: reportsReducer
});

export default allReducers;
