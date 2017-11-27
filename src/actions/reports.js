import { ReportAPI } from '../resources';

const REPORTS_LOAD_SUCCESS = 'REPORTS_LOAD_SUCCESS';
const REPORTS_LOAD_FAIL = 'REPORTS_LOAD_FAIL';

const getReportsSuccess = reports => {
  return {
    type: REPORTS_LOAD_SUCCESS,
    payload: reports
  };
};

const getReportsFail = errorMessage => {
  return {
    type: REPORTS_LOAD_FAIL,
    payload: errorMessage
  };
};

const getReports = (cursor) => {
  return dispatch => {
    const api = new ReportAPI();
    return api.getReports(cursor)
      .then(reports => dispatch(getReportsSuccess(reports)))
      .catch(error => {
        dispatch(getReportsFail(error.message))
      });
  };
};

export {
  REPORTS_LOAD_SUCCESS,
  REPORTS_LOAD_FAIL,

  getReports,
  getReportsSuccess,
  getReportsFail
};
