import fetch from 'isomorphic-fetch';
import { BACKEND_SERVER_PORT } from '../constants';

const originCursor = '1900-11-26T00:00:00.409Z'

class ReportAPI {
  getReports(cursor) {
    return fetch(`http://localhost:${BACKEND_SERVER_PORT}/api/requests?count=20&cursor=${cursor || originCursor}`)
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(res => res.json())
  }
}

export default ReportAPI;
