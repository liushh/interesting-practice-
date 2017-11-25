import reducer from '../reports';
import { REPORTS_LOAD_SUCCESS, REPORTS_LOAD_FAIL } from '../../actions/reports'


describe('Test reports reducer', () => {
  it('should return the initial empty state with empty action', () => {
    const action = {};
    const state = undefined;
    const expectedState = [];

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the given report data when REPORTS_LOAD_SUCCESS', () => {
    const action = {
      type: REPORTS_LOAD_SUCCESS,
      payload: 'report data'
    };
    const state = undefined;
    const expectedState = 'report data';

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the initial empty state when REPORTS_LOAD_FAIL', () => {
    const action = {
      type: REPORTS_LOAD_FAIL,
      payload: 'error'
    };
    const state = undefined;
    const expectedState = [];

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
