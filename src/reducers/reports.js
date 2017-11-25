import { REPORTS_LOAD_SUCCESS, REPORTS_LOAD_FAIL } from '../actions/reports'

function reportsReducer(state = [], action) {
  switch (action.type) {
    case REPORTS_LOAD_SUCCESS:
      return action.payload
    default:
      return [];
  }
}

export default reportsReducer;
