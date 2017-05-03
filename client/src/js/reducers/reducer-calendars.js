
import {
  GET_MY_CALENDARS,
  GET_CALENDAR_BY_ID,
  POST_CALENDAR,
  UPDATE_CALENDAR
} from '../actions/calendar-actions';

import {
  GET_MASTER
} from '../actions/event-actions';

const initialState = {
  calendars: [],
  is_master: false,
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
    case GET_MASTER:
      return {
        ...state,
        is_master: true,
        calendars: action.payload.calendars
      };
      break;
    case GET_MY_CALENDARS:
      return {
        ...state,
        is_master: false,
        calendars: action.payload.calendars
      };
    case GET_CALENDAR_BY_ID:
      return {
        ...state,
        is_master: false,
        selected: action.payload
      };
    case POST_CALENDAR:
      return {
        ...state,
        calendars: state.calendars.concat(action.payload.calendars)
      };
    case UPDATE_CALENDAR:
      return {
        ...state,
        calendars: state.calendars.map(replace)
      };
    default:
      return state;
  }
}
