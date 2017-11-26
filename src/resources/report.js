import fetch from 'isomorphic-fetch';
import { BACKEND_SERVER_PORT } from '../constants';

class ReportAPI {
  getReports() {
    return fetch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=100`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(res => res.json())
  }
}

export default ReportAPI;
