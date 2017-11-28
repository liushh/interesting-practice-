import reducer from '../cursor';
import { REPORTS_LOAD_SUCCESS, REPORTS_LOAD_FAIL } from '../../actions/reports'

describe('Test cursor reducer', () => {
  it('should return the initial empty state with empty action', () => {
    const action = {};
    const state = undefined;
    const expectedState = '';

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the lastest report createdAt with one more second when REPORTS_LOAD_SUCCESS', () => {
    const action = {
      type: REPORTS_LOAD_SUCCESS,
      payload: {
        reports: [
          {createdAt: '1900-11-26T00:00:00.409Z'},
          {createdAt: '2000-11-26T00:00:00.409Z'}]}
    };
    const state = undefined;
    const expectedState = '2000-11-26T00:00:01.409Z';

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should not update cursor when REPORTS_LOAD_FAIL', () => {
    const action = {
      type: REPORTS_LOAD_FAIL,
      payload: 'error'
    };
    const state = '2000-11-26T00:00:00.409Z';
    const expectedState = '2000-11-26T00:00:00.409Z';

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
