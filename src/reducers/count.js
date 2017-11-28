import { REPORTS_LOAD_SUCCESS } from '../actions/reports';

function countReducer(state = 0, action) {
  switch (action.type) {
    case REPORTS_LOAD_SUCCESS:
      return action.payload.count;
    default:
      return state;
  }
}

export default countReducer;
