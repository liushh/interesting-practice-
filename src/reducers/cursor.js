import { REPORTS_LOAD_SUCCESS } from '../actions/reports';

function cursorReducer(state = '', action) {
  switch (action.type) {
    case REPORTS_LOAD_SUCCESS:
      const reports = action.payload.reports;
      const lastestReport = reports[reports.length - 1];
      return lastestReport.createdAt;
    default:
      return state;
  }
}

export default cursorReducer;
