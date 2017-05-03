
import {
  EVENT_ADDED,
  EVENT_SELECTED,
  GET_MASTER,
  GET_CALENDAR_EVENTS,
  GET_EVENT_BY_ID,
  POST_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  reqAddEvent
} from '../actions/event-actions';

const initialState = {
  events: [],
  selected: null,
  error: null
};


export default function(state=initialState, action) {
  const replace = function(val, index) {
    if (val.id === action.payload.id) {
      return action.payload;
    }
    return val;
  }

  switch(action.type) {
    case EVENT_ADDED:
      this.dispatch(reqAddEvent(action.payload)) // TODO: does < this work?
      break;
    case EVENT_SELECTED:
      return {
        ...state,
        selected: action.payload
      };
      break;
    case GET_MASTER:
      return {
        ...state,
        events: action.payload.events
      };
    case GET_CALENDAR_EVENTS:
      return {
        ...state,
        events: action.payload.events
      };
    case GET_EVENT_BY_ID:
      return {
        ...state,
        selected: action.payload
      };
    case POST_EVENT:
      return {
        ...state,
        events: state.events.concat(action.payload)
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(replace)
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((val) => !(val.id === action.payload.id))
      };
    default:
      return state;
  }
}
