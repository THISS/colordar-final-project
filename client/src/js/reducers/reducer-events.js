
import { EVENT_ADDED, EVENT_SELECTED, GET_EVENTS } from '../actions/event-actions';

const initialState = {
  fetching: false,
  fetched: false,
  events: [],
  error: null
};

export default function(state=initialState, action) {
  switch(action.type) {
    case EVENT_ADDED:
      return {...state};
      break;
    case EVENT_SELECTED:
      return {...state};
      break;
    case GET_EVENTS:
      return {...state, events: state.events.concat(action.payload)}
    default:
      return state;
  }
}
