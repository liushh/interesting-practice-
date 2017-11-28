import reducer from '../count';
import { REPORTS_LOAD_SUCCESS, REPORTS_LOAD_FAIL } from '../../actions/reports'

describe('Test count reducer', () => {
  it('should return the initial empty state with empty action', () => {
    const action = {};
    const state = undefined;
    const expectedState = 0;

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should return the current report count when REPORTS_LOAD_SUCCESS', () => {
    const action = {
      type: REPORTS_LOAD_SUCCESS,
      payload: { count: 12 }
    }
    const state = undefined;
    const expectedState = 12;

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should not update cursor when REPORTS_LOAD_FAIL', () => {
    const action = {
      type: REPORTS_LOAD_FAIL,
      payload: 'error'
    };
    const state = 12;
    const expectedState = 12;

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
