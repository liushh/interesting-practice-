import fetch from 'isomorphic-fetch';
import { BACKEND_SERVER_PORT } from '../constants';

class ArchiveReportAPI {
  archiveReport(report) {
    return fetch(
      `http://localhost:${BACKEND_SERVER_PORT}/api/requests/archive`,
      { 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify( { id: report.id } ) 
      })
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(res => res.json())
  }
}

export default ArchiveReportAPI;
