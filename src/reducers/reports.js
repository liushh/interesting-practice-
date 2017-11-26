import { REPORTS_LOAD_SUCCESS } from '../actions/reports';
import { ARCHIVE_REPORT_LOAD_SUCCESS } from '../actions/archive';

function _udpateArchivedReport(reports, report) {
  reports.forEach(currentReport => {
    if (currentReport.id === report.id) {
      currentReport.archived = true;
    }
  });
}

function reportsReducer(state = [], action) {
  switch (action.type) {
    case REPORTS_LOAD_SUCCESS:
      return action.payload
    case ARCHIVE_REPORT_LOAD_SUCCESS:
      _udpateArchivedReport(state.reports, action.payload);
      return Object.assign({}, state);
    default:
      return state;
  }
}

export default reportsReducer;
