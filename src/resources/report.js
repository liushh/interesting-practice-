import fetch from 'isomorphic-fetch';
import {
  BACKEND_SERVER_PORT,
  MIN_CURSOR,
  REPORT_COUNT_PER_PAGE
} from '../constants';

class ReportAPI {
  getReports(cursor) {
    const mainURL = `http://localhost:${BACKEND_SERVER_PORT}/api/requests`;
    const params = `count=${REPORT_COUNT_PER_PAGE}&cursor=${cursor || MIN_CURSOR}`
    return fetch(`${mainURL}?${params}`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(res => res.json())
  }
}

export default ReportAPI;
