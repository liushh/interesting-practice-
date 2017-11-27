import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { BACKEND_SERVER_PORT } from '../../constants';

import {
  getReportsSuccess,
  getReportsFail,
  getReports
} from '../index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const API_URL = `http://localhost:${BACKEND_SERVER_PORT}/api/requests`

describe('getReports', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates REPORTS_LOAD_SUCCESS when reports are loaded', () => {
    nock(API_URL)
      .get('?count=20&cursor=1900-11-26T00:00:00.409Z')
      .reply(201, { reports: ['reports data'] });
    const expectedActions = [{
      type: 'REPORTS_LOAD_SUCCESS',
      payload: { reports: ['reports data'] }
    }];

    const store = mockStore({});
    return store.dispatch(getReports())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('creates REPORTS_LOAD_FAIL when reports are failed to load', () => {
    nock(API_URL)
      .get('?count=20&cursor=1900-11-26T00:00:00.409Z')
      .reply(500, 'Internal Server Error');
    const expectedActions = [{
      type: 'REPORTS_LOAD_FAIL',
      payload: 'Internal Server Error'
    }];

    const store = mockStore({});
    return store.dispatch(getReports())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
