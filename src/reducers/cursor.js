import moment from 'moment';
import { REPORTS_LOAD_SUCCESS } from '../actions/reports';
import { REPORT_COUNT_PER_PAGE } from '../constants';

function hasReachedTheLastPage(payload) {
  return payload.count < REPORT_COUNT_PER_PAGE
}

function cursorReducer(state = '', action) {
  switch (action.type) {
    case REPORTS_LOAD_SUCCESS:
      const reports = action.payload.reports;
      if (reports.length === 0) {
        return state;
      }
      const lastestReport = reports[reports.length - 1];
      return moment(lastestReport.createdAt).add(1, 'second').toISOString();
      
    default:
      return state;
  }
}

export default cursorReducer;
