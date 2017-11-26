import { ArchiveReportAPI } from '../resources';

const ARCHIVE_REPORT_LOAD_SUCCESS = 'ARCHIVE_REPORT_LOAD_SUCCESS';
const ARCHIVE_REPORT_LOAD_FAIL = 'ARCHIVE_REPORT_LOAD_FAIL';

const archiveReportSuccess = report => {
  return {
    type: ARCHIVE_REPORT_LOAD_SUCCESS,
    payload: report
  };
};

const archiveReportFail = errorMessage => {
  return {
    type: ARCHIVE_REPORT_LOAD_FAIL,
    payload: errorMessage
  };
};

const archiveReport = () => {
  return dispatch => {
    const api = new ArchiveReportAPI();
    return api.archiveReport()
      .then(reports => dispatch(archiveReportSuccess(reports)))
      .catch(error => {
        dispatch(archiveReportFail(error.message))
      });
  };
};

export {
  ARCHIVE_REPORT_LOAD_SUCCESS,
  ARCHIVE_REPORT_LOAD_FAIL,

  archiveReportFail,
  archiveReportSuccess,
  archiveReport
};
