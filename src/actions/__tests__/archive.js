import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { BACKEND_SERVER_PORT } from '../../constants';

import {
  archiveReportFail,
  archiveReportSuccess,
  archiveReport
} from '../index';

console.log('archiveReport = ', archiveReport);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const API_URL = `http://localhost:${BACKEND_SERVER_PORT}/api`

describe('archive report', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates ARCHIVE_REPORT_LOAD_SUCCESS when reports are loaded', () => {
    nock(API_URL)
      .get('/requests/archive')
      .reply(201, { reports: ['reports data'] });
    const expectedActions = [{
      type: 'ARCHIVE_REPORT_LOAD_SUCCESS',
      payload: { reports: ['reports data'] }
    }];

    const store = mockStore({});
    return store.dispatch(archiveReport({}))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('creates ARCHIVE_REPORT_LOAD_FAIL when reports are failed to load', () => {
    nock(API_URL)
      .get('/requests/archive')
      .reply(500, 'Internal Server Error');
    const expectedActions = [{
      type: 'ARCHIVE_REPORT_LOAD_FAIL',
      payload: 'Internal Server Error'
    }];

    const store = mockStore({});
    return store.dispatch(archiveReport())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
