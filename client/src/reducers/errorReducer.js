import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CLEAR_ERRORS:
      return {};
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
